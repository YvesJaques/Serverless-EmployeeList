import { document } from "../../../../utils/dynamodbClient"

class UpdateEmployeeUseCase {
    async execute({
        id,
        age,
        employeeName,
        role,        
    }): Promise<void>{
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