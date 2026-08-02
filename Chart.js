// Chart.js
const chart1 = document.getElementById('chart1').getContext('2d');
const chart2 = document.getElementById('chart2').getContext('2d');

const chart1Data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Chart 1',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const chart2Data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Chart 2',
        data: [50, 40, 30, 20, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const chart1Options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const chart2Options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

new Chart(chart1, {
    type: 'line',
    data: chart1Data,
    options: chart1Options
});

new Chart(chart2, {
    type: 'bar',
    data: chart2Data,
    options: chart2Options
});

// Toggle sidebar
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Responsive design
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
});