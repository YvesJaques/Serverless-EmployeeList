import { clearMocks, document } from "../../../../utils/dynamodbClient"
import { ListEmployeesUseCase } from "./listEmployeesUseCase";

let listEmployeesUseCase: ListEmployeesUseCase;

describe("Create Employee", () => {
    beforeEach(async () => {
        //clear previous mocks
        await clearMocks();
        listEmployeesUseCase = new ListEmployeesUseCase();
    });

    it('Should be able to list all employees', async () => {                            
        await document.put({
            TableName: "employees",
            Item: {
                id: '1',
                employeeName: 'John Doe',
                age: 30,
                role: 'Developer' 
            }
        }).promise();

        await document.put({
            TableName: "employees",
            Item: {
                id: '2',
                employeeName: 'Julia Marsh',
                age: 37,
                role: 'Manager' 
            }
        }).promise();
        
        const response = await listEmployeesUseCase.execute();

        expect(response[0]).toHaveProperty("id");        
        expect(response[1]).toHaveProperty("id");        
        expect(response.length).toEqual(2);
    });
})