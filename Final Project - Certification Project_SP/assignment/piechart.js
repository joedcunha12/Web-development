google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Languages', 'thousand per person'],
          ['java', 55000],
          ['python', 15000],
          ['C++',  8000],
          ['HTML', 12000],
          ['Pearl', 10000]
        ]);

        var options = {
          title: 'Programming Languages per thousand',
          pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }