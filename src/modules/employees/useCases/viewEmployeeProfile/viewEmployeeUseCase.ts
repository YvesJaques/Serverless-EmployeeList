import { document } from "../../../../utils/dynamodbClient"

class ViewEmployeeUseCase {
    async execute({ id }) {
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