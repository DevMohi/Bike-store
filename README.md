# Bike Store

## Overview

This is a complete backend project based on typescript, mongoose, express js and mongodb. supports CRUD operations with data validation. It follows a modular pattern with two modules: Bike (manages product CRUD operations) and Order (handles order creation, stock checks if there is insufficient, and revenue calculation).

## Video Demonstration :

- [Video Demonstration] (URL)

## Installation Steps

- Clone the Repository and change the directory 

  ```bash
  https://github.com/DevMohi/Bike-store-.git
  cd book-shop-api
  ```

- Run This Command to install all the packages 

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

# API Testing with Postman

As this is a backend-focused project, Postman is utilized for testing and performing API operations efficiently.

###### Live Link : - (https://bike-shop-assingment.vercel.app/)

### CREATE A BIKE

**ENDPOINT URL** : **`/api/products`**
**METHOD** : `POST`

```json
{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

- Enter this URL in postman and input the body data to insert a new bike into database, make sure to input every field as all the fields are required.

```bash
    https://bike-shop-assingment.vercel.app/api/products
```

### GET ALL BIKES

**ENDPOINT URL** : **`/api/products`**
**METHOD** : `GET`

- Enter this API to fetch all the bike data in database.

```bash
    https://bike-shop-assingment.vercel.app/api/products
```

- In terms of searching based on name , brand or category you can query like this, make sure to provide a valid searchTerm, in case of any invalid searchterm the response will include a message indicating that the term does not exist.

```bash
    https://bike-shop-assingment.vercel.app/api/products?searchTerm=Mountain
```

### GET A SPECIFIC BIKE BY ID

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `GET`

- In the URL below , the id given is an example, in order to get a valid response, use a proper productId to get the product data

```bash
    https://bike-shop-assingment.vercel.app/api/products/67559a962fac1233405aeb7c
```

### Update Bike using ID

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `PUT`

```json
{
  "price": 1300,
  "quantity": 30
}
```

- In order to update a product, you need a specific id (here the id given is a demo) , you can use the json data above to update the bike information.

- Hit this link

```bash
    https://bike-shop-assingment.vercel.app/api/products/67559a962fac1233405aeb7c
```

### Delete a Bike using ID

**ENDPOINT URL** : **`/api/products/:productId`**
**METHOD** : `DELETE`

- To completely delete a bike with specific id from database, you can hit the link below with delete method.

```bash
    https://bike-shop-assingment.vercel.app/api/products/675db0fc0d63d5f8e4b308a5
```

### Order a Bike

**ENDPOINT URL** : **`/api/orders`**
**METHOD** : `POST`

- You can order a Bike by using this data

```json
{
  "email": "fahana@gmailss.com",
  "product": "6751b812520798bd9c5be84f",
  "quantity": 3,
  "totalPrice": 3600
}
```

- The totalPrice field is optional. It is calculated by referencing the Bike database, it multiplies the price of a single product with the quantity. Users may choose to provide the totalPrice value manually, or the system will compute it automatically.

```bash
    https://bike-shop-assingment.vercel.app/api/orders
```

### GENERATE REVENUE

**ENDPOINT URL** : **`/api/orders/revenue`**
**METHOD** : `GET`

- Hit this link to get the total revenue based on all orders

```bash
    https://bike-shop-assingment.vercel.app/api/orders/revenue
```


## TECHNOLOGY 

- Typescript
- Mongoose
- MongoDB
- Express.js
- Postman
- Vercel (for deployment)

## Important Features

- CRUD Operations - For Bikes
- Order Managing - Create order for bikes and calculate revenue using aggregation.
- Modular Pattern - Improves code organization and reusability.
- Data validation - Ensures error-free database entries with Mongoose schema validation.
- Type Protection: Enforced using TypeScript.