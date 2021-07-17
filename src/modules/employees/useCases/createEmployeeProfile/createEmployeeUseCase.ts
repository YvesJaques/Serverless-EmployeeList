import { v4 as uuidv4 } from "uuid";
import { document } from "../../../../utils/dynamodbClient"

class CreateEmployeeUseCase {
    async execute({
        age,
        name,
        role,        
    }): Promise<void>{
        await document
        .put({
            TableName: "employees",
            Item: {                 
                id: uuidv4(),
                age,
                name,
                role,                
            },
        })    
        .promise(); 
    }
};

export { CreateEmployeeUseCase }