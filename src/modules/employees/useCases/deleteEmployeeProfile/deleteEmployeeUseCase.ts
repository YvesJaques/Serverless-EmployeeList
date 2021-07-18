import { AppError } from "../../../../shared/errors/AppError";
import { document } from "../../../../utils/dynamodbClient"

class DeleteEmployeeUseCase {
    async execute({ id }): Promise<void>{
        
        const employeeExists = await document.scan({
            TableName: "employees",
            FilterExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id
            }
        }).promise();
        
        if(!employeeExists.Items[0]) throw new AppError("Employee doesn't exist!");

        await document.delete({
            TableName: "employees",
            Key: { id: id }
            }
        )    
        .promise();         
    }
};

export { DeleteEmployeeUseCase }