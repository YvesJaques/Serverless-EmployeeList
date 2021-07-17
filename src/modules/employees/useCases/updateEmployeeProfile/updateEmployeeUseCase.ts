import { document } from "../../../../utils/dynamodbClient"

class UpdateEmployeeUseCase {
    async execute({
        id,
        age,
        name,
        role,        
    }): Promise<void>{
        await document
        .put({
            TableName: "employees",
            Item: {                 
                id,
                age,
                name,
                role,                
            },
        })    
        .promise(); 
    }
};

export { UpdateEmployeeUseCase }