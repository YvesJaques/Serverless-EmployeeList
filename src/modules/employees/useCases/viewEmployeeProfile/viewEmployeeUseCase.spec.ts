import { AppError } from "../../../../shared/errors/AppError";
import { clearMocks, document } from "../../../../utils/dynamodbClient";
import { ViewEmployeeUseCase } from "./viewEmployeeUseCase";

let viewEmployeeUseCase: ViewEmployeeUseCase;

describe("Create Employee", () => {
  beforeEach(async () => {
    //clear previous mocks
    await clearMocks();
    viewEmployeeUseCase = new ViewEmployeeUseCase();
  });

  it("Should be able to view an employee profile", async () => {
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

    const response = await viewEmployeeUseCase.execute({ id: "1" });

    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("employeeName", "John Doe");
    expect(response).toHaveProperty("age", 30);
    expect(response).toHaveProperty("role", "Developer");
  });

  it("Should not be able to view an unexistent employee profile", async () => {
    await expect(viewEmployeeUseCase.execute({ id: "1" })).rejects.toEqual(
      new AppError("Employee doesn't exist!")
    );
  });
});
