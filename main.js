// main.js

import * as irondocks from "./irondocks.js";
// Define the main app
const app = document.getElementsByTagName('html');
// Function to load data from API
async function fetchData(page) {
    try {
        // Define the API URL
        const apiUrl = `${page}.json`;

        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the data as JSON
        const data = await response.text();

        // Return the data
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function loadData() {
    try {
        // Use the apiHandler to fetch data
        const data = await fetchData(document.location);
        console.log(data);
        const iro = irondocks.modala(data, document.getElementById("app"),null,null);
        // Use the pipes to process the data
        // const processedData = pipes.processData(data);

        // Display the processed data in the app
        app.innerHTML = "";
        app.innerHTML = iro.innerHTML;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Load the data when the app is loaded
window.onload = loadData;

// Refresh the data every 2 minutes
setInterval(loadData, 12000);