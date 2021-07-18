import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { DeleteEmployeeUseCase } from "./deleteEmployeeUseCase";

it('Should be able to delete an employee profile', async () => {
        const deleteEmployeeUseCase = new DeleteEmployeeUseCase();

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

        await deleteEmployeeUseCase.execute({ id: "1" });
      
        const response = await document.scan({TableName: 'employees'}).promise();        

        expect(response.Items[0]).toBeNull;        
});
