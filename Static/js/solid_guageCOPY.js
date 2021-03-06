// Error in pulling the information from the D3

// d3.json('../../Data/covidSummary.json').then((cov) =>{
//   console.log(cov)
//   var toDeaths=cov['Total Deaths'][0]
//   var toRecovered=cov['Total Recovered'][0]
//   var toHosp=cov['Total Hospitalized'][0]
//   var toPos=cov['Total Positives'][0]
//   console.log(toRecovered);
//   console.log(toPos);
//   console.log(toHosp);
//   console.log(toDeaths);
  

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(am5radar.RadarChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  innerRadius: am5.percent(20),
  startAngle: -90,
  endAngle: 180
}));

  /////////////////////////ALL DATA //////////////////////////
  var data = [{
    category: "Positives",
    value: (28756489/28756489)*100,
    full: 100,
    columnSettings: {
      fill: chart.get("colors").getIndex(0)
    }
  }, {
    category: "Hospitalized",
    value: (776361/28756489)*100,
    full: 100,
    columnSettings: {
      fill: chart.get("colors").getIndex(1)
    }
  }, {
    category: "Deaths",
    value: (515151/28756489)*100,
    full: 100,
    columnSettings: {
      fill: chart.get("colors").getIndex(2)
    },
  }, {
      category: "Recovered",
      value: (10933942/28756489)*100,
      full: 100,
      columnSettings: {
        fill: chart.get("colors").getIndex(2)
      },
  }];
  // /////////////////////////ALL DATA //////////////////////////
  // var data = [{
  //   category: "Positives",
  //   value: (toPos/toPos)*100,
  //   full: 100,
  //   columnSettings: {
  //     fill: chart.get("colors").getIndex(0)
  //   }
  // }, {
  //   category: "Hospitalized",
  //   value: (toHosp/toPos)*100,
  //   full: 100,
  //   columnSettings: {
  //     fill: chart.get("colors").getIndex(1)
  //   }
  // }, {
  //   category: "Deaths",
  //   value: (toDeaths/toPos)*100,
  //   full: 100,
  //   columnSettings: {
  //     fill: chart.get("colors").getIndex(2)
  //   },
  // }, {
  //     category: "Recovered",
  //     value: (toRecovered/toPos)*100,
  //     full: 100,
  //     columnSettings: {
  //       fill: chart.get("colors").getIndex(2)
  //     },
  // }];



// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "zoomX"
}));

cursor.lineY.set("visible", false);

// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {
  //minGridDistance: 50
});

xRenderer.labels.template.setAll({
  radius: 10
});

xRenderer.grid.template.setAll({
  forceHidden: true
});

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  renderer: xRenderer,
  min: 0,
  max: 100,
  strictMinMax: true,
  numberFormat: "#'%'",
  tooltip: am5.Tooltip.new(root, {})
}));


var yRenderer = am5radar.AxisRendererRadial.new(root, {
  minGridDistance: 20
});

yRenderer.labels.template.setAll({
  centerX: am5.p100,
  fontWeight: "500",
  fontSize: 18,
  templateField: "columnSettings"
});

yRenderer.grid.template.setAll({
  forceHidden: true
});

var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "category",
  renderer: yRenderer
}));

yAxis.data.setAll(data);


// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "full",
  categoryYField: "category",
  fill: root.interfaceColors.get("alternativeBackground")
}));

series1.columns.template.setAll({
  width: am5.p100,
  fillOpacity: 0.08,
  strokeOpacity: 0,
  cornerRadius: 20
});

series1.data.setAll(data);


var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  clustered: false,
  valueXField: "value",
  categoryYField: "category"
}));

series2.columns.template.setAll({
  width: am5.p100,
  strokeOpacity: 0,
  tooltipText: "{category}: {valueX}%",
  cornerRadius: 20,
  templateField: "columnSettings"
});

series2.data.setAll(data);

// Animate chart and series in
// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
series1.appear(1000);
series2.appear(1000);
chart.appear(1000, 100);


// });
