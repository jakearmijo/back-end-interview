# Nutrien AG Solutions API
## Overview
The Nutrien AG Solutions API is an Express-based RESTful API designed to serve various endpoints for managing agricultural commodities, units, and associated attributes. This project utilizes middleware for logging, rate limiting, and security, providing a robust backend for applications interacting with agricultural data.

## Table of Contents
- Features
- Technologies
- Setup Instructions
- Environment Variables
- API Endpoints
- Running the Project
- Testing
- Logging

### Features
- RESTful API for managing attributes, commodities, commodity types, and units.
- Middleware for request logging and rate limiting to prevent abuse.
- Security features enabled via Helmet.
- CORS support for cross-origin requests.
- OpenAPI documentation route for API documentation.

### Technologies
- Node.js: JavaScript runtime for building the API.
- Express: Web framework for Node.js.
- TypeScript: Superset of JavaScript for type safety.
- Pino: Logger for performance and structured logging.
- dotenv: Module for loading environment variables from a .env file.
- CORS: Middleware for enabling CORS.
- Helmet: Middleware for securing HTTP headers.
- Rate Limiter: Middleware to limit the number of requests from a client.
- OpenAPI: Documentation for the API endpoints.
- Zod to Open Api - [@asteasolutions/zod-to-openapi](https://www.npmjs.com/package/@asteasolutions/zod-to-openapi)

### Setup Instructions

#### Prerequisites
- Node.js: Ensure you have Node.js installed. You can download it from nodejs.org.
- npm: Node package manager (comes with Node.js).
- Clone the Repository
```bash
git clone https://github.com/jakearmijo/back-end-interview.git
cd back-end-interview
```
#### Install Dependencies
```bash
npm install
```
#### Environment Variables
Create a .env file in the root directory of the project and define the necessary environment variables.
- NODE_ENV will be:
  -  ```dev``` for running development
  -  ```test``` for running the test

```plaintext
PORT=3000
NODE_ENV=dev
```
#### Running the Project
To start the server, run:

```bash
npm run start
```
If you want to run the project in development mode with hot-reloading, you can use:

```bash

npm run dev
```
The server will start listening on the port specified in your .env file (default is 3000).
You should see a message in the console indicating that the server is running:

```bash
🚜 🚜 🚜 Hello, 🌿 Nutrien AG Solutions from http://localhost:3000
```

#### Accessing the API
You can access the API at http://localhost:3000/v1/.

#### API Endpoints
- GET /attribute/histogram - Retrieve all attributes.
- GET /commodity/histogram - Retrieve all commodities.
- GET /commodityType/histogram - Retrieve all commodity types.
- GET /units/histogram - Retrieve all units.
- GET /yearType/histogram - Retrieve all year types.
- GET /year/histogram - Retrieve all years.
- GET /docs/histogram - Access the OpenAPI documentation.
  
#### Contracts & API Documentation
- navigating to ```http://localhost:3000/v1/docs``` - will bring you to the OpenApi documentation.

#### Testing
To run tests, use:

```bash
npm run test
```
Ensure you have the appropriate setup in your test environment, especially if using a database or external services.

#### Building and Running Docker
- Building the Docker Image - make sure you are cd'd into the root directory of the project
```shell
docker build -t jake-armijo-interview .
```
- Running the built image
  ```shell 
  docker run -d --name jake-armijo-interview -p 3000:3000 INSERT_IMAGE_ID
  ```
#### Logging
The application uses Pino for logging. Log output is displayed in the console, with colors and timestamps to enhance readability.


#### Jakes Notes
- [x] Using ***TypeScript*** with any framework(s) you enjoy
- [x] Feel free to be creative, but the result NEED NOT BE COMPLEX or excessively time-consuming
- [ ] We will review your work together during the in-person interview
- [ ] Send a link to the source, a repository URL or a zip file of your project the day before your interview day -> 
- [x] Scaffold simple node express application - THAT RUNS
- [x] examine URL paths. Do we need several routes?
- [x] Create route files for 
  - [x] Attribute
  - [x] Commodity
  - [x] CommodityType
  - [x] Units
  - [x] YearType
  - [x] Year
- [x] Create controller files for 
  - [x] Attribute
  - [x] Commodity
  - [x] CommodityType
  - [x] Units
  - [x] YearType
  - [x] Year
- [x] Create a GET request for TABLE LISTED BELOW that rill return JSON with the count of how many times each unique value appears in that column of the data
  - [x] Attribute
  - [x] Commodity
  - [x] CommodityType
  - [x] Units
  - [x] YearType
  - [x] Year
- [x] Testing strategies - API ROUTES
  - [x] Attribute
    - [x] 200
    - [x] 404
  - [x] Commodity
    - [x] 200
    - [x] 404
  - [x] CommodityType
    - [x] 200
    - [x] 404
  - [x] Units
    - [x] 200
    - [x] 404
  - [x] YearType
    - [x] 200
    - [x] 404
  - [x] Year
    - [x] 200
    - [x] 404
- [ ] Testing strategies - Common
  - [x] CSV Utils
    - [x] convertCsvToJson
    - [x] countCommodities
- [ ] Visualizations
- [ ] Persisting data
- [ ] Data modeling / analytics
  - [x] Zod Schemas per models
  - [x] Zod parse method used on return on API calls
- [x] API structure / versioning
- [x] Docker