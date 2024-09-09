// Task 1: Function to Calculate Avg. Sales

function calculateAverageSales(sales)
{
    const totalSales = sales.reduce((totalSale, sales) => totalSale + sales, 0); // Starting at 0 we are adding each sale and storing it in the totalSale variable.
    const averageSales = totalSales / sales.length;// Finding the Avg.
        return averageSales;
}


//Task 2: Function to Determine Performance Rating

function determinePerformanceRating(averageSales)
{
    if (averageSales > 10000) {
        return "Excellent"; // Returns Excellent if Sales are above $10,000
                              }
    else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good"; //Returns Good if Sales btwn $10,000 and $7,000
         }         
    else if (averageSales >= 4000 && averageSales <= 7000) {
        return "Satisfactory"; //Returns Satisfactory if Sales btwn $7,000 and $4,000 
         } 
     else {
        return "Need Improvement"; //Returns Needs Improvement if Sales lower than $4,000 
         }
}

