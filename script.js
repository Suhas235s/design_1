document.getElementById('predictForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const actors = document.getElementById('actors').value.split(',');
    const budget = document.getElementById('budget').value;
    const director = document.getElementById('director').value;
    const productionHouse = document.getElementById('productionHouse').value;
    const genre = document.getElementById('genre').value;

    // Mocking the model prediction with a simple logic
    const predictionData = {
        actors: actors.length,
        budget: parseInt(budget, 10),
        director: director.length,
        productionHouse: productionHouse.length,
        genre: genre.length
    };

    // Simulate prediction result (replace this with actual model result)
    const predictedSuccess = (predictionData.budget * 0.5) + (predictionData.actors * 0.3) + (predictionData.director * 0.2);

    // Prepare data for the bar chart
    const chartData = {
        labels: ['Budget Impact', 'Actors Impact', 'Director Impact'],
        datasets: [{
            label: 'Success Factors',
            data: [predictionData.budget, predictionData.actors, predictionData.director],
            backgroundColor: ['#ff6f61', '#ffcc00', '#ff8c42'],
            borderColor: ['#ff6f61', '#ffcc00', '#ff8c42'],
            borderWidth: 1
        }]
    };

    // Create the bar chart
    const ctx = document.getElementById('resultChart').getContext('2d');
    const resultChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Display the predicted success in console (or use alert to show it to the user)
    console.log('Predicted Box Office Success:', predictedSuccess);
});