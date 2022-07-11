/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root
var root = am5.Root.new("chartdiv"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  panY: "translateY",
  projection: am5map.geoAlbersUsa(),
  layout: root.horizontalLayout
}));

// Create polygon series
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_usaLow,
  valueField: "value",
  calculateAggregates: true,
  exclude: ["AQ"]
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}: {value}",
  toggleKey: "active",
  interactive: true
});

polygonSeries.set("heatRules", [{
  target: polygonSeries.mapPolygons.template,
  dataField: "value",
  min: am5.color(0xff621f),
  max: am5.color(0x661f00),
  key: "fill"
}]);

polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
  heatLegend.showValue(ev.target.dataItem.get("value"));
});

polygonSeries.data.setAll([
  { year: 2004, id: "US-AL", value: 4447100 },
  { year: 2001, id: "US-AK", value: 626932 },
  { year: 1989, id: "US-AZ", value: 5130632 },
  { year: 1976, id: "US-AR", value: 5 },
  { year: 2015, id: "US-AR", value: 2673400 },
  { year: 2017, id: "US-CA", value: 10 },
  { year: 1968, id: "US-CA", value: 40000000 },
  { year: 2010, id: "US-CA", value: 33871648 },
  { year: 1989, id: "US-CO", value: 4301261 },
  { year: 1989, id: "US-CT", value: 3405565 },
  { year: 1997, id: "US-DE", value: 783600 },
  { year: 1975, id: "US-FL", value: 15982378 },
  { year: 1961, id: "US-GA", value: 8186453 },
  { year: 2006, id: "US-HI", value: 1211537 },
  { year: 1992, id: "US-ID", value: 1293953 },
  { year: 1993, id: "US-IL", value: 12419293 },
  { year: 1975, id: "US-IN", value: 6080485 },
  { year: 1987, id: "US-IA", value: 2926324 },
  { year: 2014, id: "US-KS", value: 2688418 },
  { year: 1975, id: "US-KY", value: 4041769 },
  { year: 2006, id: "US-LA", value: 4468976 },
  { year: 1981, id: "US-ME", value: 1274923 },
  { year: 1981, id: "US-MD", value: 5296486 },
  { year: 2014, id: "US-MA", value: 6349097 },
  { year: 2014, id: "US-MI", value: 9938444 },
  { year: 2014, id: "US-MN", value: 4919479 },
  { year: 1975, id: "US-MS", value: 2844658 },
  { year: 1975, id: "US-MO", value: 5595211 },
  { year: 1975, id: "US-MT", value: 902195 },
  { year: 1975, id: "US-NE", value: 1711263 },
  { year: 1975, id: "US-NV", value: 1998257 },
  { year: 2006, id: "US-NH", value: 1235786 },
  { year: 2006, id: "US-NJ", value: 8414350 },
  { year: 2006, id: "US-NM", value: 1819046 },
  { year: 2006, id: "US-NY", value: 18976457 },
  { year: 2006, id: "US-NC", value: 8049313 },
  { year: 2017, id: "US-ND", value: 642200 },
  { year: 2017, id: "US-OH", value: 11353140 },
  { year: 2017, id: "US-OK", value: 3450654 },
  { year: 2017, id: "US-OR", value: 3421399 },
  { year: 2017, id: "US-PA", value: 12281054 },
  { year: 2017, id: "US-RI", value: 1048319 },
  { year: 2017, id: "US-SC", value: 4012012 },
  { year: 2017, id: "US-SD", value: 754844 },
  { year: 2017, id: "US-TN", value: 5689283 },
  { year: 2017, id: "US-TX", value: 20851820 },
  { year: 2017, id: "US-UT", value: 2233169 },
  { year: 2017, id: "US-VT", value: 608827 },
  { year: 2017, id: "US-VA", value: 7078515 },
  { year: 2017, id: "US-WA", value: 5894121 },
  { year: 2017, id: "US-WV", value: 1808344 },
  { year: 2017, id: "US-WI", value: 5363675 },
  { year: 2017, id: "US-WY", value: 493782 }
]);
console.log(polygonSeries.data._values);
console.log(polygonSeries);

var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
  orientation: "vertical",
  position:"left",
  startColor: am5.color(0xff621f),
  endColor: am5.color(0x661f00),
  startText: "Lowest",
  endText: "Highest",
  stepCount: 5
}));

heatLegend.startLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("startColor")
});

heatLegend.endLabel.setAll({
  fontSize: 12,
  fill: heatLegend.get("endColor")
});

// change this to template when possible
polygonSeries.events.on("datavalidated", function () {
  heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
  heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
});

// Make stuff animate on load
chart.appear(1000, 100);

// Aggregate data
var years = {};
var firstYear = 99999;
var lastYear = 0;
for(var i = 0; i < polygonSeries.data._values.length; i++) {
  var row = polygonSeries.data._values[i];
  var year = row.year;
  if (years[year] == undefined) {
    years[year] = [];
  }
  years[year].push(row.id);
  
  if (firstYear > year) {
    firstYear = year;
  }
  if (lastYear < year) {
    lastYear = year;
  }
}

// Create controls
var container = chart.children.push(am5.Container.new(root, {
  y: am5.p100,
  centerX: am5.p50,
  centerY: am5.p100,
  x: am5.p50,
  width: am5.percent(90),
  layout: root.horizontalLayout,
  paddingBottom: 10
}));

var playButton = container.children.push(am5.Button.new(root, {
  themeTags: ["play"],
  centerY: am5.p50,
  marginRight: 40,
  icon: am5.Graphics.new(root, {
    themeTags: ["icon"]
  })
}));

playButton.events.on("click", function () {
  if (playButton.get("active")) {
    slider.set("start", slider.get("start") + 0.0001);
  } else {
    slider.animate({
      key: "start",
      to: 1,
      duration: 15000 * (1 - slider.get("start"))
    });
  }
});

var slider = container.children.push(am5.Slider.new(root, {
  width: am5.percent(80),
  orientation: "horizontal",
  start: 0,
  centerY: am5.p50
}));

slider.startGrip.get("icon").set("forceHidden", true);
slider.startGrip.set("label", am5.Label.new(root, {
  text: firstYear + "",
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}));


updateid(firstYear);

slider.events.on("rangechanged", function () {
  var year = firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear));
  slider.startGrip.get("label").set("text", year + "");
  updateid(year);
//   console.log(year)
//   updateSeriesData(
//     firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear))
//   );
});

function updateid(year) {
  am5.object.each(years, function(joinYear, id) {
    console.log(id)
    am5.array.each(id, function(id) {
      var dataItem = polygonSeries.getDataItemById(id);
      if (dataItem) {
        dataItem.get("mapPolygon").set("active", joinYear <= year)
      }
    })
  })
}