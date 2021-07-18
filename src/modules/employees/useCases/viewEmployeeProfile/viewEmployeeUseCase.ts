import { AppError } from "../../../../shared/errors/AppError";
import { document } from "../../../../utils/dynamodbClient"

class ViewEmployeeUseCase {
    async execute({ id }) {
        const employeeExists = await document.scan({
            TableName: "employees",
            FilterExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id
            }
        }).promise();
        
        if(!employeeExists.Items[0]) throw new AppError("Employee doesn't exist!");

        const response = await document.scan({
            TableName: "employees",
            FilterExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id
            }
        }).promise();
        
        const employee = response.Items[0];

        return employee;
    }
};

export { ViewEmployeeUseCase }