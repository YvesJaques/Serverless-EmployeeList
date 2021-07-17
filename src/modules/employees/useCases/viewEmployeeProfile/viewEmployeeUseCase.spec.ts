import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { ViewEmployeeUseCase } from "./viewEmployeeUseCase";

it('Should be able to view an employee profile', async () => {
        const viewEmployeeUseCase = new ViewEmployeeUseCase();

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
        
        const response = await viewEmployeeUseCase.execute({ id: "1"});

        expect(response).toHaveProperty("id");        
        expect(response).toHaveProperty("name", "John Doe");
        expect(response).toHaveProperty("age", 30);
        expect(response).toHaveProperty("role", "Developer");
});
