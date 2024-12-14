# Bike Store

### Live Link :

- [Bike Store] (https://bike-shop-assingment.vercel.app/)

### Overview

This is a complete backend project based on typescript, mongoose, express js and mongodb. Alongside CRUD operations , data validations are implemented. Furthermore this project follows modular pattern , to give an overview there are two modules, one is bike module(represents the product) and the other one is order. In the product module CRUD operation is implemented by creating, fetching, updating and deleting the products , while in the order module orders are created while checking stock availability and finally the total revenue from all orders are generated.

### Video Demonstration :

- [Video Demonstration] (URL)

### Installation Steps

- Clone the Repository

  ```bash
  https://github.com/DevMohi/Bike-store-.git
  ```

- Run This Command

  ```bash
  npm install
  ```

- Add These in .env File

  ```bash
  NODE_ENV=development
  PORT = 5000
  DATABASE_URL=<url from mongodb>
  ```

- To run the server use this command
  ```bash
  npm run dev
  ```

### TECHNOLOGY used

- Typescript
- Mongoose
- MongoDB
- Express.js
- Postman
- Vercel (for deployment)

### Important Features

- CRUD Operations - For Bikes
- Order Managing - Create order for bikes and calculate revenue using aggregation.
- Modular Pattern - Improves code organization and reusability.
- Data validation - Ensures error-free database entries with Mongoose schema validation.
- Type Protection: Enforced using TypeScript.
