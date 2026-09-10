# API Gateway

API Gateway for the microservices application.

## Responsibilities

The API Gateway provides a single entry point for clients.

It routes requests to:

- User Service
- Order Service
- Payment Service
- Notification Service

## Port

3000

## Routes

GET /health

GET /users

GET /orders

GET /payments

GET /notifications

## Service Mapping

/users

-> user-service:3001

/orders

-> order-service:3002

/payments

-> payment-service:3003

/notifications

-> notification-service:3004

## Run

npm install

npm start

## Test

npm test

## Docker

docker build -t api-gateway .

docker run -p 3000:3000 api-gateway

## Repository

https://github.com/piyushgarg949-commits/api-gateway
