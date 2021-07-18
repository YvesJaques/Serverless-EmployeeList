import { CreateEmployeeUseCase } from "./createEmployeeUseCase";

export const handle = async (event) => {    
    const { age, employeeName, role } = JSON.parse(event.body);      

    const createEmployeeUseCase = new CreateEmployeeUseCase();

    await createEmployeeUseCase.execute({
        age,
        employeeName,
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