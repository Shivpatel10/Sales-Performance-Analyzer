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


//Task 3: Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(teamSales)
{
    //Start by adding together each team members Sales Numbers
    const salesTotals = teamSales.map(member => {
        const totalSales = member.teamSales.reduce((sum, sale) => sum + sale, 0);
            return {name: member.name, totalSales};
    });

    // Getting the maximum and minimum total sales using Math.max and Math.min
    const maxSales = Math.max(...salesTotals.map(member => member.totalSales));
    const minSales = Math.min(...salesTotals.map(member => member.totalSales));

    // Finding the team members using the max and min total sales
    const topPerformer = salesTotals.find(member => member.totalSales === maxSales);
    const bottomPerformer = salesTotals.find(member => member.totalSales === minSales);

    return { 
        topPerformer, bottomPerformer
     };
}

const result = findTopAndBottomPerformers(salesData)

console.log("Top Performer", result.topPerformer);
console.log("Bottom Performer", result.bottomPerformer);


// Task 4: Combine Functions to Generate a Performance Report
function generatePerformanceReport(salesData)
{
// Making Array to hold Sales Data
const prefReport = salesData.map(member => {
    const averageSales = calculateAverageSales(member.teamSales); //Calculating avg sales per person.
    const performanceRating = determinePerformanceRating(averageSales); // Getting performance rating per person
    
    return { // returning the report for sales person
        name: member.name,
        averageSales: averageSales,
        performanceRating: performanceRating
     };
 });

const {topPerformer,bottomPerformer} = findTopAndBottomPerformers(salesData); //Getting the information for the top and bottom performers
    return { // returing the top and bottom data
        prefReport,
        topPerformer,
        bottomPerformer
    };
}
// Data Provided
const salesData = [
    { name: 'Alice', teamSales: [12000, 15000, 13000] },   
    { name: 'Bob', teamSales: [7000, 6000, 7500] },
    { name: 'Charlie', teamSales: [3000, 4000, 3500] },
    { name: 'Diana', teamSales: [9000, 8500, 9200] },
]

// Creating the Final Report
const performanceReport = generatePerformanceReport(salesData)

console.log(performanceReport.prefReport) // output for each person
console.log(performanceReport.topPerformer); // output for top performer
console.log(performanceReport.bottomPerformer); // output for the bottom performer