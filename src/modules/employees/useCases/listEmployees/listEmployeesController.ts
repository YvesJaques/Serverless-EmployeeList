import { ListEmployeesUseCase } from "./listEmployeesUseCase";

export const handle = async () => {
  const listEmployeesUseCase = new ListEmployeesUseCase();

  const employees = await listEmployeesUseCase.execute();

  if (employees[0]) {
    return {
      statusCode: 200,
      body: JSON.stringify(employees),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "No employees found!",
    }),
  };
};
