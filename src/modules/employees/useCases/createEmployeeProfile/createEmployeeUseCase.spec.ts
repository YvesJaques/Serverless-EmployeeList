import { AppError } from '../../../../shared/errors/AppError';
import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { CreateEmployeeUseCase } from "./createEmployeeUseCase";

it('Should be able to create an employee', async () => {
        const createEmployeeUseCase = new CreateEmployeeUseCase();

        //clear previous mocks
        await clearMocks();
                        
        await createEmployeeUseCase.execute({
            employeeName: 'John Doe',
            age: 30,
            role: 'Developer' 
        });
      
        const response = await document.scan({TableName: 'employees'}).promise();        

        expect(response.Items[0]).toHaveProperty("id");

        expect(response.Items[0]).toHaveProperty("employeeName", "John Doe");
        expect(response.Items[0]).toHaveProperty("age", 30);
        expect(response.Items[0]).toHaveProperty("role", "Developer");
});

it('Should not be able to create multiple employees with the same name', async () => {
    const createEmployeeUseCase = new CreateEmployeeUseCase();

    //clear previous mocks
    await clearMocks();

    await document.put({
        TableName: "employees",
        Item: {
            id: '1',
            employeeName: 'John Doe',
            age: 30,
            role: 'Developer' 
        }
    }).promise();
        
    await expect( 
        createEmployeeUseCase.execute({
            employeeName: 'John Doe',
            age: 25,
            role: 'Tester' 
        }),
    ).rejects.toEqual(new AppError("An employee with this name already exists!"));
    
});