import { document } from "../../../../utils/dynamodbClient"
import { CreateEmployeeUseCase } from "./createEmployeeUseCase";



it('Should be able to create an employee', async () => {
        const createEmployeeUseCase = new CreateEmployeeUseCase();

        await createEmployeeUseCase.execute({
            name: 'John Doe',
            age: '30',
            role: 'Developer' 
        });
      
        const response = await document.scan({TableName: 'employees'}).promise();        

        expect(response.Items[0]).toHaveProperty("id");

        expect(response.Items[0]).toHaveProperty("name", "John");
    });