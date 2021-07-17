import { CreateEmployeeUseCase } from "./createEmployeeUseCase";

export const handle = async (event) => {    
    const { age, name, role } = JSON.parse(event.body);      

    const createEmployeeUseCase = new CreateEmployeeUseCase();

    await createEmployeeUseCase.execute({
        age,
        name,
        role, 
    });

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Employee created!",            
        }),
        headers: {
            "Content-type": "application/json",
        },
    };
};