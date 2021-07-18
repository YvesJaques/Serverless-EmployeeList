import { ViewEmployeeUseCase } from "./viewEmployeeUseCase";

export const handle = async (event) => {
  const { id } = event.pathParameters;

  const viewEmployeeUseCase = new ViewEmployeeUseCase();

  const employee = await viewEmployeeUseCase.execute({ id });

  if (employee) {
    return {
      statusCode: 200,
      body: JSON.stringify(employee),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
      message: "No employee found!",
    }),
  };
};
