google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Languages', 'thousand per person'],
          ['java', 55],
          ['python', 15],
          ['C++',  8],
          ['HTML', 12],
          ['Pearl', 10]
        ]);

        var options = {
          title: 'Programming Languages',
          pieSliceText: 'label',
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }