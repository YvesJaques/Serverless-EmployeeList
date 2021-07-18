# :memo: Sobre

 O Serverless-EmployeeList é uma infraestrutura na AWS que utiliza uma lambda para registrar dados sobre funcionários de uma empresa em um banco de dados DynamoDB.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Serverless-EmployeeList&uri=https%3A%2F%2Fraw.githubusercontent.com%2FYvesJaques%2FServerless-EmployeeList%2Fmain%2FEmployee_list_Insomnia_2021-07-17.json)

# :wrench: Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Serverless](https://www.serverless.com)
- [TypeScript](https://www.typescriptlang.org/)
- [AWS-SDK](https://docs.aws.amazon.com/sdk-for-javascript/index.html)
- [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [Jest](https://jestjs.io)
- Etc

# :construction_worker_man: Arquitetura

Clean Architecture

# :arrow_down: Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 15.4.0)
- [Serverless](https://www.serverless.com) (Preferencialmente a versão 2.44.0)

⚠ Você pode usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br />

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/YvesJaques/Serverless-EmployeeList.git

# Acesse a pasta do projeto
$ cd Serverless-EmployeeList

# Instale todas as dependências do projeto
$ yarn
Ou:
$ npm install

# Inicie DynamoDB
$ yarn dynamo:start

# Rode o projeto
$ yarn dev
Ou:
$ npm run dev
```
<br />

# Rotas locais
## Listar funcionários
* `GET http://localhost:3000/dev/listEmployees`
## Cadastrar funcionários
* `POST http://localhost:3000/dev/createEmployee`

Request body example:
```json
{	
	"age": 30,
	"employeeName": "John Doe",
	"role": "Analista"
}
```
## Remover funcionários
* `DELETE http://localhost:3000/dev/deleteEmployee/{id}`
  
Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"  
```
## Atualizar dados de funcionário
* `PATCH http://localhost:3000/dev/updateEmployee/{id}`

Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```
Request body example:
```json
{	
	"age": 27,
	"employeeName": "John Marsh",
	"role": "Desenvolvedor"
}
```
## Visualizar perfil de funcionário
* `GET http://localhost:3000/dev/viewEmployee/{id}`
  
Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"  
```

# Rotas AWS
## Listar funcionários
* `GET https://19q3d8fc79.execute-api.sa-east-1.amazonaws.com/dev/listEmployees`
## Cadastrar funcionários
* `POST https://19q3d8fc79.execute-api.sa-east-1.amazonaws.com/dev/createEmployee`

Request body example:
```json
{	
	"age": 30,
	"employeeName": "John Doe",
	"role": "Analista"
}
```
## Remover funcionários
* `DELETE https://19q3d8fc79.execute-api.sa-east-1.amazonaws.com/dev/deleteEmployee/{id}`
  
Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"  
```
## Atualizar dados de funcionário
* `PATCH https://19q3d8fc79.execute-api.sa-east-1.amazonaws.com/dev/updateEmployee/{id}`

Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```
Request body example:
```json
{	
	"age": 27,
	"employeeName": "John Marsh",
	"role": "Desenvolvedor"
}
```
## Visualizar perfil de funcionário
* `GET https://19q3d8fc79.execute-api.sa-east-1.amazonaws.com/dev/viewEmployee/{id}`
  
Request url parameters example:
```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"  
```

# Testes
[Jest](https://jestjs.io/) Foi utilizado para os testes, para rodá-los execute:
```
$ yarn
$ yarn dynamo:start
$ yarn test
```
Ou:
```
$ npm install
$ npm run dynamo:start
$ npm run test
```

# Deploy
```
$ npm install
$ npx sls deploy
```
Ou:
``` 
$ yarn
$ yarn deploy
# Realizando seu próprio deploy o sistema irá disponibilizar um Endpoint diferente do utilizado aqui
```

<p align="center">Feito por <a href="https://www.linkedin.com/in/yves-morais-jaques/" target="_blank">Yves Morais Jaques</a></p>