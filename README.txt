A robust backend application for managing a car store, built with Express and TypeScript, and powered by MongoDB using Mongoose. The API provides endpoints for managing cars, placing orders, and calculating total revenue while ensuring data validation and integrity.

Features
Cars Management
Add Cars: Create new car entries with brand, model, year, price, category, and more.
Update Cars: Modify car details such as price, quantity, and stock status.
Delete Cars: Remove cars from the store inventory.
Retrieve Cars: View all cars or search by id.
Orders Management
Place Orders: Allow customers to order cars.
Inventory Management: Automatically reduce car quantity .
Handle Insufficient Stock: Return appropriate error messages when stock is unavailable.
Revenue Calculation
Revenue Aggregation: Use MongoDB aggregation pipelines to calculate total revenue from all orders.
Validation & Error Handling
Data Validation: Enforce schema rules for car and order data using Mongoose and  validate with Zod.
Custom Error Messages: Return descriptive error responses for validating failed, missing data, and other issues.