import { AppError } from "../../../../shared/errors/AppError";
import { document } from "../../../../utils/dynamodbClient";

interface IRequest {
  id: string;
  employeeName: string;
  role: string;
  age: number;
}

class UpdateEmployeeUseCase {
  async execute({ id, age, employeeName, role }: IRequest): Promise<void> {
    let employeeExists = await document
      .scan({
        TableName: "employees",
        FilterExpression: "id = :id",
        ExpressionAttributeValues: {
          ":id": id,
        },
      })
      .promise();

    if (!employeeExists.Items[0]) throw new AppError("Employee doesn't exist!");

    employeeExists = await document
      .scan({
        TableName: "employees",
        FilterExpression: "employeeName = :employeeName",
        ExpressionAttributeValues: {
          ":employeeName": employeeName,
        },
      })
      .promise();

    if (employeeExists.Items[0])
      throw new AppError("An employee with this name already exists!");

    await document
      .put({
        TableName: "employees",
        Item: {
          id,
          age,
          employeeName,
          role,
        },
      })
      .promise();
  }
}

export { UpdateEmployeeUseCase };
