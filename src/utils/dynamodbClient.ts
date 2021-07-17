import { DynamoDB } from "aws-sdk";

let options = {};
if (process.env.IS_OFFLINE) {
    options = {
        region: "localhost",
        endpoint: "http://localhost:8000"
    }    
}

if(process.env.JEST_WORKER_ID) {
    options = {
        convertEmptyValues: true,
        ...(process.env.JEST_WORKER_ID && {
            endpoint: 'localhost:8000',
            sslEnabled: false,
            region: 'local-env',
        }),
    };
}

export const document = options
    ? new DynamoDB.DocumentClient(options)
    : new DynamoDB.DocumentClient()