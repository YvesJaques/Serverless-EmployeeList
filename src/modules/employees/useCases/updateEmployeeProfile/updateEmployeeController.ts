import { UpdateEmployeeUseCase } from "./updateEmployeeUseCase";

export const handle = async (event) => {    
    const { id } = event.pathParameters;
    const { age, name, role } = JSON.parse(event.body);      

    const updateEmployeeUseCase = new UpdateEmployeeUseCase();

    await updateEmployeeUseCase.execute({        
        id,
        age,
        name,
        role, 
    });

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Employee info updated!",            
        }),
        headers: {
            "Content-type": "application/json",
        },
    };
};