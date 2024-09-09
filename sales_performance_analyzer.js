// Task 1: Function to Calculate Avg. Sales

function calculateAverageSales(sales)
{
    const totalSales = sales.reduce((totalSale, sales) => totalSale + sales, 0); // Starting at 0 we are adding each sale and storing it in the totalSale variable.
    const averageSales = totalSales / sales.length;// Finding the Avg.
        return averageSales;
}
