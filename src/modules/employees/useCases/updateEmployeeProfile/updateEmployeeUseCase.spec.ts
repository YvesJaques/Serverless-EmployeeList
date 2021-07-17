import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { UpdateEmployeeUseCase } from "./updateEmployeeUseCase";

it('Should be able to update an employee profile', async () => {
        const updateEmployeeUseCase = new UpdateEmployeeUseCase();

        //clear previous mocks
        await clearMocks();
                        
        await document.put({
            TableName: "employees",
            Item: {
                id: '1',
                name: 'John Doe',
                age: 30,
                role: 'Developer' 
            }
        }).promise();
              
        await updateEmployeeUseCase.execute({
            id: '1',
            name: 'John Marsh',
            age: 31,
            role: 'Tester' 
        })
        
        const response = await document.scan({TableName: 'employees'}).promise();        

        expect(response.Items[0]).toHaveProperty("id", "1");
        expect(response.Items[0]).toHaveProperty("name", "John Marsh");
        expect(response.Items.length).toEqual(1);        
});
