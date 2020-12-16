# Warranty Tracker - SERVER SIDE

## Pre-run

**On local**
```
npm install
npm start
```

## Mysql server

- remotemysql.com
- phpadmin (contact)

## Live server

https://warranty-tracker-pecs.herokuapp.com/

**In case you want to use local or your own db server - MODIFY THE config.json**

## Route API

### Users

- http://locahost:4000/users/authenticate 

Post request - Example json file:
```
{
    "username": "user1",
    "password": "user123"
}
```
Received: Bearer token - use this authentication!
- http://locahost:4000/users/register
Post request - Example json file:
```
{
    "email": "user1@gmail.com",
    "username": "user1",
    "password": "user123"
}
```
- http://locahost:4000/users/current
Get request - Authentication required
- http://locahost:4000/users/:id
Put request - Update
Example json: - Same as register json

Delete request - Delete

### Products

- http://locahost:4000/products/

Get request - Authentication required! - Use bearer token!

- http://locahost:4000/products/create
Post request - Example json file:
```
{
 	"name": "laptop ASUS",
    "brand_id": 2,
    "price": 300000,
    "currency_unit": "HUF",
    "purchase_date": "2020-12-01T20:02:45.000Z",
    "expiry_date": "2020-12-01T20:02:45.000Z",
    user_id: 1,
    merchant_id: 1
}
```
- http://locahost:4000/products/:id
Put request - Update
Example json: - Same as create json

Delete request - Delete

### Brands

- http://locahost:4000/brands/

Get request - Authentication required! - Use bearer token!

- http://locahost:4000/brands/create
Post request - Example json file:
```
{
 	"name": "ASUS"
}
```
- http://locahost:4000/brands/:id
Put request - Update
Example json: - Same as create json

Delete request - Delete

### Merchants

- http://locahost:4000/merchants/

Get request - Authentication required! - Use bearer token!

- http://locahost:4000/merchants/create
Post request - Example json file:
```
{
 	"merchant_name": "Viet dreammer",
    "location": "Budapest,HU",
    "website": "hello.com",
    "phone_number": "123456"
}
```
- http://locahost:4000/merchants/:id
Put request - Update
Example json: - Same as create json

Delete request - Delete