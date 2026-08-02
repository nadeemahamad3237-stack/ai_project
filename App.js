```javascript
// Get the context of the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Define the chart data
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'chart',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50]
    }]
};

// Create the chart
var myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        title: {
            display: true,
            text: 'Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
```