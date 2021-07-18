import { AppError } from "../../../../shared/errors/AppError";
import { v4 as uuidv4 } from "uuid";
import { document } from "../../../../utils/dynamodbClient";

interface IRequest {
  employeeName: string;
  role: string;
  age: number;
}

class CreateEmployeeUseCase {
  async execute({ age, employeeName, role }: IRequest): Promise<void> {
    const employeeAlreadyExists = await document
      .scan({
        TableName: "employees",
        FilterExpression: "employeeName = :employeeName",
        ExpressionAttributeValues: {
          ":employeeName": employeeName,
        },
      })
      .promise();

    if (employeeAlreadyExists.Items[0])
      throw new AppError("An employee with this name already exists!");

    await document
      .put({
        TableName: "employees",
        Item: {
          id: uuidv4(),
          age,
          employeeName,
          role,
        },
      })
      .promise();
  }
}

export { CreateEmployeeUseCase };
