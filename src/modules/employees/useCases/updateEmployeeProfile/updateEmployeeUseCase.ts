import { AppError } from "../../../../shared/errors/AppError";
import { document } from "../../../../utils/dynamodbClient"

class UpdateEmployeeUseCase {
    async execute({
        id,
        age,
        employeeName,
        role,        
    }): Promise<void>{
        const employeeExists = await document.scan({
            TableName: "employees",
            FilterExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id
            }
        }).promise();
        
        if(!employeeExists.Items[0]) throw new AppError("Employee doesn't exist!");

        await document
        .put({
            TableName: "employees",
            Item: {                 
                id,
                age,
                employeeName,
                role,                
            },
        })    
        .promise(); 
    }
};

export { UpdateEmployeeUseCase }