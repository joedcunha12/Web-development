anychart.onDocumentReady(function() {

    // set the data
    var data = [
        {x: "java", value:55000 },
        {x: "python", value: 15000},
        {x: "C++", value: 8000},
        {x: "C", value: 12000},
        {x: "Perl", value: 10000},
       
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });