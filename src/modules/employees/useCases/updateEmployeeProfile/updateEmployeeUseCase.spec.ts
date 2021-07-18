import { AppError } from "../../../../shared/errors/AppError";
import { clearMocks, document } from "../../../../utils/dynamodbClient";
import { UpdateEmployeeUseCase } from "./updateEmployeeUseCase";

let updateEmployeeUseCase: UpdateEmployeeUseCase;

describe("Create Employee", () => {
  beforeEach(async () => {
    //clear previous mocks
    await clearMocks();
    updateEmployeeUseCase = new UpdateEmployeeUseCase();
  });

  it("Should be able to update an employee profile", async () => {
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

    await updateEmployeeUseCase.execute({
      id: "1",
      employeeName: "John Marsh",
      age: 31,
      role: "Tester",
    });

    const response = await document.scan({ TableName: "employees" }).promise();

    expect(response.Items[0]).toHaveProperty("id", "1");
    expect(response.Items[0]).toHaveProperty("employeeName", "John Marsh");
    expect(response.Items.length).toEqual(1);
  });

  it("Should not be able to update an unexistent employee profile", async () => {
    await expect(
      updateEmployeeUseCase.execute({
        id: "1",
        employeeName: "John Marsh",
        age: 31,
        role: "Tester",
      })
    ).rejects.toEqual(new AppError("Employee doesn't exist!"));
  });

  it("Should not be able to update an employee name to an already existing one", async () => {
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

    await document
      .put({
        TableName: "employees",
        Item: {
          id: "2",
          employeeName: "John Marsh",
          age: 40,
          role: "Tester",
        },
      })
      .promise();

    await expect(
      updateEmployeeUseCase.execute({
        id: "1",
        employeeName: "John Marsh",
        age: 39,
        role: "Developer",
      })
    ).rejects.toEqual(
      new AppError("An employee with this name already exists!")
    );
  });
});
