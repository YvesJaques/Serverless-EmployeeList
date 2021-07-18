import { DeleteEmployeeUseCase } from "./deleteEmployeeUseCase";

export const handle = async (event) => {
  const { id } = event.pathParameters;

  const deleteEmployeeUseCase = new DeleteEmployeeUseCase();

  await deleteEmployeeUseCase.execute({ id });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Employee removed!",
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
};
