**GET Commodity Histogram**
This API retrieves a histogram of commodity counts, showing how many times each unique commodity appears in a dataset. The endpoint processes a CSV file containing commodity data and returns a JSON object where the keys are commodity names, and the values represent their respective counts.

***Endpoint***
GET /api/commodity-histogram

***Request***
Method: GET
Request Body: This endpoint does not require a request body.
Parameters: None required. The commodity data is sourced from a CSV file on the server (Projection2021.csv).
Headers: No special headers are required.

***Response***
- Status:
    - 200 OK - Successfully processed and returned the commodity histogram.
    - 500 Internal Server Error - Error occurred while processing the CSV file or generating the histogram.
- Content-Type: application/json
- Response Body: A JSON object where the keys represent commodity names and the values are the count of occurrences for each commodity.
    - Example Response:
```json

{
    "Rice": 3,
    "Barley": 2,
    "Corn": 5,
    "Upland Cotton": 1,
    "Oats": 0,
    "Sorghum": 4,
    "Soybeans": 7,
    "Wheat": 2,
    "Egg": 1,
    "Per capita meat consumption, retail weight": 3,
    "Beef": 5,
    "Pork": 4,
    "Dairy": 6,
    "Chicken": 7,
    "Turkey": 2,
    "Soybean oil": 3,
    "Soybean meal": 4
}
```

***Error Handling***
500 Internal Server Error:
This error occurs if there is an issue reading the CSV file or converting the data.
The response will look like:
```json

{
    "message": "Failed to fetch data."
}
```
***Notes***
The CSV file (Projection2021.csv) is expected to contain commodity data in a specific format where each row has a "Commodity" field.
The response will count how often each unique commodity appears in the file. Commodities that are not present will have a count of 0 (or be omitted if not part of the dataset).

***Usage Example***
Request:
GET /api/commodity-histogram
****Response****
```json

{
    "Rice": 3,
    "Barley": 2,
    "Corn": 5,
    ...
}
```
