# Frontend - FE-realtime-stats

## Overview
This frontend application is built using React.js. It establishes a Socket.IO connection to the backend to receive real-time trade data for Bitcoin. The data is visualized using charts to display fluctuations in the average price of Bitcoin across three currencies (USD, PKR, EUR).

## Features
- Real-time data visualization of Bitcoin price fluctuations.
- Sparkline chart showing percentage difference in price.
- Stats card for bitcoin statistics.
- Line chart for showing change in price of currency.
  
## Running the Application Locally

### Prerequisites
- Node.js (v20.15.0 or higher)
- NPM (10.7.0 or higher)

### Steps
1. Clone the repository.
2. Copy the environment variables from `.env.example` and save them in a `.env` file.
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run start
    ```

## Dependencies
- @emotion/react
- @emotion/styled
- @mui/material
- @mui/x-charts
- @reduxjs/toolkit
- react
- react-dom
- react-redux
- socket.io-client
