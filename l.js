Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'literacy rate of fifty countries'
    },
    subtitle: {
      text: 'Source: https://worldpopulationreview.com/country-rankings/literacy-rate-by-country'
    },
    xAxis: {
      categories: ['Armenia', 'Turkmenistan', 'Hungary', 'Romania', 'Costa Rica','Turkey','Malta','South Africa','Guinea','Chad','Niger','Iraq','Afghanistan','Mali','Pakistan','Togo','Bhutan','Egypt','Morocco','Myanmar','Tanzania','Algeria','Kenya','Cambodia','Cameroon','Ghana','Laos','Liberia','Benin','Ivory Coast','Uganda','Lesotho','Guatemala','Rwanda','Yemen','Burundi','Haiti','Mozambique','Guinea Bissau','Comoros','Ethiopia','Gambia','Senegal','Argentina','Mongolia','Taiwan','Serbia','Singapore'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Literacy Rate (in percent)',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: 'percent'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Year 2021',
      data: [99.7,99.7,99.1,98.8,97.9,96.2,94.5,87.0,74.4,34.5,30.4,22.3,19.1,50.1,43,35.5,59.1,63,66.6,71.2,73.8,75.6,77.9,81.4,81.5,80.5,77.1,76.6,84.7,48.3,42.4,47.2,76.5,79.4,81.5,73.2,70.1,68.4,61.7,60.7,59.9,58.8,51.8,50.8,51.9,99,98.4,98.5,98.3,97.3]
    }]
         
  });