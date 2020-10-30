var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
				datasets: [{
					label: 'Pengunjung',
					data: [3, 12, 25, 10, 17, 30, 26],
					backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});


	var ctx = document.getElementById("ChartPie").getContext('2d');
		var ChartPie = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
				datasets: [{
					label: 'Pengunjung',
					data: [3, 12, 25, 10, 17, 30, 26],
					backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(178, 201, 30, 0.2)'
					],
					borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(178, 201, 30, 1)'
					],

				}]
			},

		});