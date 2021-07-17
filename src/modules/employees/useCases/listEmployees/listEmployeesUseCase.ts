import { document } from "../../../../utils/dynamodbClient"

class ListEmployeesUseCase {
    async execute() {
        const response = await document.scan({
            TableName: "employees",              
        }).promise();
        
        const employees = response.Items;

        return employees;
    }
};

export { ListEmployeesUseCase }