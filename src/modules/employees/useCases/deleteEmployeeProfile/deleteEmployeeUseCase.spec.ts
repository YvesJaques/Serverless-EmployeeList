import { AppError } from "./../../../../shared/errors/AppError";
import { clearMocks, document } from "../../../../utils/dynamodbClient";
import { DeleteEmployeeUseCase } from "./deleteEmployeeUseCase";

let deleteEmployeeUseCase: DeleteEmployeeUseCase;

describe("Create Employee", () => {
  beforeEach(async () => {
    //clear previous mocks
    await clearMocks();
    deleteEmployeeUseCase = new DeleteEmployeeUseCase();
  });

  it("Should be able to delete an employee profile", async () => {
    await document
      .put({
        TableName: "employees",
        Item: {
          id: "1",
          employeeName: "John Doe",
          age: 30,
          role: "Developer",
        },
      })
      .promise();

    await deleteEmployeeUseCase.execute({ id: "1" });

    const response = await document.scan({ TableName: "employees" }).promise();

    expect(response.Items[0]).toBeNull;
  });

  it("Should not be able to delete an unexistent employee profile", async () => {
    await expect(deleteEmployeeUseCase.execute({ id: "1" })).rejects.toEqual(
      new AppError("Employee doesn't exist!")
    );
  });
});
