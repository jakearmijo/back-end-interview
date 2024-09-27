# Back-end Developer Interview

## Expectations:

1. Using Python (preferred) or Javascript with any framework(s) you enjoy
2. Feel free to be creative, but the result NEED NOT BE COMPLEX or excessively time-consuming
3. We will review your work together during the in-person interview
4. Send a link to the source, a repository URL or a zip file of your project the day before your interview day

## Exercise:

Start with the included `Projection2021.csv` file. Ignore `FeedGrains.csv` for now.

Create an API service that provides a GET histogram route for each column in the table. For example, the following URLs should be successfully resolved by the service:

* http://localhost/commodity/histogram
* http://localhost/commodityType/histogram
* http://localhost/units/histogram
* Etc.

A GET request on any of these URLs should return HTML with the count of how many times each unique value appears in that column of the data. For example in the Commodity column, “Rice” appears 216 times, “Corn” 240, etc.

This service should be runnable using one of:
* (preferred) In Docker using `docker-compose up` or `docker run` command you provide
* A simple readme describing how to start the service
* http://repl.it or similar

Be prepared to talk about one aspect of this exercise you found interesting, or feel free to add (or not) any optimization or feature you find interesting and would like to talk about. For example:
* Visualizations
* Testing strategies
* Persisting data
* Data modeling / analytics
* API structure / versioning
* ???

## Data source notes
1. `Projection2021.csv` - sourced from the "USDA Agricultural Baseline Database" for the current year projections https://www.ers.usda.gov/media/u55iwexw/projection2021.zip
2. `FeedGrains.csv` - sourced from the “USDA Feed Grains: Yearbook Tables” available at https://www.ers.usda.gov/data-products/feed-grains-database/feed-grains-yearbook-tables/

- [x] Using ***TypeSCript*** with any framework(s) you enjoy
- [ ] Feel free to be creative, but the result NEED NOT BE COMPLEX or excessively time-consuming
- [ ] We will review your work together during the in-person interview
- [ ] Send a link to the source, a repository URL or a zip file of your project the day before your interview day -> 
- [x] Scaffold simple node express application - THAT RUNS
- [ ] examine URL paths. Do we need several routes?
- [ ] Create route files for 
  - [ ] Attribute
  - [x] Commodity
  - [x] CommodityType
  - [ ] Units
  - [ ] YearType
  - [ ] Year
  - [ ] Value
- [ ] Create a GET request for TABLE LISTED BELOW that rill return JSON with the count of how many times each unique value appears in that column of the data
  - [ ] Attribute
  - [ ] Commodity
  - [ ] CommodityType
  - [ ] Units
  - [ ] YearType
  - [ ] Year
  - [ ] Value
- [ ] logic for looping
- [ ] Visualizations
- [ ] Testing strategies
- [ ] Persisting data
- [ ] Data modeling / analytics
  - [ ] Zod Schemas per models
- [ ] API structure / versioning
- [ ] Docker



- complete project get routes and data returning
- any documentation create
  - routes
  - controller
  - models
  - zod
- make sure readme instructions work

# Back-end Developer Interview

![TypeScript](https://img.shields.io/badge/TypeScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node20-blue)
![Docker](https://img.shields.io/badge/Docker-enabled-brightgreen)

## Table of Contents
- [Back-end Developer Interview](#back-end-developer-interview)
  - [Expectations:](#expectations)
  - [Exercise:](#exercise)
  - [Data source notes](#data-source-notes)
- [Back-end Developer Interview](#back-end-developer-interview-1)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Expectations:](#expectations-1)
  - [Exercise:](#exercise-1)
    - [Create an API service that provides a GET histogram route for each column in the table:](#create-an-api-service-that-provides-a-get-histogram-route-for-each-column-in-the-table)
    - [Requirements:](#requirements)
  - [Data Source Notes:](#data-source-notes-1)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Endpoints](#api-endpoints)
  - [License](#license)
  - [Badges and Extras](#badges-and-extras)

## Project Overview
This project aims to create a simple API service that analyzes the provided dataset (`Projection2021.csv`) and returns histograms for various columns.

## Expectations:
1. Using **Python** (preferred) or **JavaScript** with any framework(s) you enjoy.
2. Feel free to be creative, but the result **NEED NOT BE COMPLEX** or excessively time-consuming.
3. We will review your work together during the in-person interview.
4. Send a link to the source, a repository URL, or a zip file of your project the day before your interview day.

## Exercise:
Start with the included `Projection2021.csv` file. Ignore `FeedGrains.csv` for now.

### Create an API service that provides a GET histogram route for each column in the table:
For example, the following URLs should be successfully resolved by the service:
- `http://localhost/commodity/histogram`
- `http://localhost/commodityType/histogram`
- `http://localhost/units/histogram`
- Etc.

A GET request on any of these URLs should return HTML with the count of how many times each unique value appears in that column of the data. For example, in the **Commodity** column, “Rice” appears 216 times, “Corn” 240, etc.

### Requirements:
- This service should be runnable using one of:
  - (preferred) In **Docker** using `docker-compose up` or `docker run` command you provide.
  - A simple README describing how to start the service.
  - [Repl.it](https://replit.com/) or similar.

Be prepared to talk about one aspect of this exercise you found interesting, or feel free to add (or not) any optimization or feature you find interesting and would like to talk about. For example:
- Visualizations
- Testing strategies
- Persisting data
- Data modeling / analytics
- API structure / versioning

## Data Source Notes:
1. `Projection2021.csv` - sourced from the "USDA Agricultural Baseline Database" for the current year projections [USDA Link](https://www.ers.usda.gov/media/u55iwexw/projection2021.zip).
2. `FeedGrains.csv` - sourced from the “USDA Feed Grains: Yearbook Tables” available at [USDA Link](https://www.ers.usda.gov/data-products/feed-grains-database/feed-grains-yearbook-tables/).

## Getting Started

### Prerequisites
- Python 3.x or Node.js
- Docker (if running in a container)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
2. Install dependencies:
  - For Python:
    ```shell
    pip install -r requirements.txt
    ```
  - For Node.js:
    ```shell
    npm install
    ```
3. Running the Service
  - Using Docker:
    - ```docker-compose up```
  - Without Docker:
    - For Python:
      - ```python app.py
    - For Node.js:
      - ```node index.js```
      - 
## API Endpoints

| Method | Endpoint                     | Description                                  |
|--------|------------------------------|----------------------------------------------|
| GET    | `/attribute/histogram`           | Returns histogram for the Attribute column.      |
| GET    | `/commodity/histogram`       | Returns histogram for the Commodity column.  |
| GET    | `/commodityType/histogram`   | Returns histogram for the Commodity Type column. |
| GET    | `/units/histogram`           | Returns histogram for the Units column.      |
| GET    | `/year/histogram`           | Returns histogram for the Year column.      |
| GET    | `/yearType/histogram`           | Returns histogram for the YearType column.      |

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Badges and Extras
- **Badges**: Use [shields.io](https://shields.io/) to create custom badges for your project's tech stack, license, or build status.
- **Visuals**: Add screenshots or GIFs demonstrating the functionality.
- **Contribution Guidelines**: If applicable, include a section on how others can contribute to the project.
