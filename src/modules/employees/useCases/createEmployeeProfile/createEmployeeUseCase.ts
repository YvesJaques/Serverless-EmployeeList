import { v4 as uuidv4 } from "uuid";
import { document } from "../../../../utils/dynamodbClient"

class CreateEmployeeUseCase {
    async execute({
        age,
        employeeName,
        role,        
    }): Promise<void>{
        await document
        .put({
            TableName: "employees",
            Item: {                 
                id: uuidv4(),
                age,
                employeeName,
                role,                
            },
        })    
        .promise(); 
    }
};

export { CreateEmployeeUseCase }