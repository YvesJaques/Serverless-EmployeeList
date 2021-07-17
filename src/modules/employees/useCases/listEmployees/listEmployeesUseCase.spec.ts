import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { ListEmployeesUseCase } from "./listEmployeesUseCase";

it('Should be able to list all employees', async () => {
        const listEmployeesUseCase = new ListEmployeesUseCase();

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

        await document.put({
            TableName: "employees",
            Item: {
                id: '2',
                name: 'Julia Marsh',
                age: 37,
                role: 'Manager' 
            }
        }).promise();
        
        const response = await listEmployeesUseCase.execute();

        expect(response[0]).toHaveProperty("id");        
        expect(response[1]).toHaveProperty("id");        
        expect(response.length).toEqual(2);
});
