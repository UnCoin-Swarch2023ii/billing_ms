# Billing MS for UnCoin

## Description

This is a microservice for UnCoin. It is responsible for managing invoices created by users.
Including:

- Manage invoices
- Generating reminders for recurring payments


## Project Structure

```bash
.
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── .env
└── src
    ├── index.js
    ├── config
    │   └── database.js
    └── controllers
    │   └── create.js
    │   └── delete.js
    │   └── getAll.js
    │   └── getById.js
    │   └── getByUser.js
    │   └── update.js
    ├── models
    │   └── Shipment.model.js
    ├── routes
    │   └── shipment.route.js
    ├── services
    │   └── cronJob.js
```

## How to run

1. Clone the repository
2. Create a `.env` file based on `.env.example`
3. Run `docker compose up`
4. The server will be running on port specified by environment variable `PORT` or 4000 by default
5. That's it!

## Endpoints

### `GET /shipments` - Get all shipments

### `GET /get-shipment/:id` - Get a shipment for id

### `GET /userShipments/:id` - Get a list of shipments for user

### `POST /shipments` - Create a new shipment

body:

```
{
    "userId": 1,
    "companyId": 2,
    "shipmentValue": 5000,
    "shipmentDate": "2023-11-09T06:23:11.750+00:00"
}
```

### `PATCH /shipments/update/:id` - Update shipment information

### `DELETE /shipments/:id` - Delete a shipment