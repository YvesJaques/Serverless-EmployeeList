import { document } from "../../../../utils/dynamodbClient"

class DeleteEmployeeUseCase {
    async execute({ id }): Promise<void>{
        
        await document.delete({
            TableName: "employees",
            Key: { id: id }
            }
        )    
        .promise();         
    }
};

export { DeleteEmployeeUseCase }