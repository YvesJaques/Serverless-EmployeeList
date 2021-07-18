import { UpdateEmployeeUseCase } from "./updateEmployeeUseCase";

export const handle = async (event) => {    
    const { id } = event.pathParameters;
    const { age, employeeName, role } = JSON.parse(event.body);      

    const updateEmployeeUseCase = new UpdateEmployeeUseCase();

    await updateEmployeeUseCase.execute({        
        id,
        age,
        employeeName,
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