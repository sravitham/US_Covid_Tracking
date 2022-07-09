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

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv_team");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Add series
// https://www.amcharts.com/docs/v5/charts/word-cloud/
var series = root.container.children.push(am5wc.WordCloud.new(root, {
  categoryField: "tag",
  valueField: "weight",
  maxFontSize: am5.percent(15)
}));

// Configure labels
series.labels.template.setAll({
  fontFamily: "Courier New"
});


setInterval(function() {  
  am5.array.each(series.dataItems, function(dataItem) {
    var value = Math.random() * 65;
    value = value - Math.random() * value;
    dataItem.set("value", value);
    dataItem.set("valueWorking", value);
  })
}, 5000)


// Data from:
// https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-programming-scripting-and-markup-languages
series.data.setAll([
  { tag: "JavaScript", weight: 64.96 },
  { tag: "HTML/CSS", weight: 56.07 },
  { tag: "Python", weight: 48.24 },
  { tag: "ETL", weight: 47.08 },
  { tag: "Java", weight: 35.35 },
  { tag: "Node.js", weight: 33.91 },
  { tag: "TypeScript", weight: 30.19 },
  { tag: "Data", weight: 27.86 },
  { tag: "COVID-19", weight: 27.13 },
  { tag: "COVID-19", weight: 75.31 },
  { tag: "PHP", weight: 21.98 },
  { tag: "C", weight: 21.01 },
  { tag: "Georgia Tech", weight: 10.75 },
  { tag: "Go", weight: 9.55 },
  { tag: "Data", weight: 8.32 },
  { tag: "Tanisha", weight: 77.03 },
  { tag: "Hannah", weight: 76.02 },
  { tag: "Allen", weight: 5.61 },
  { tag: "Sravitha", weight: 75.1 },
  { tag: "R", weight: 5.07 },
  { tag: "VBA", weight: 4.66 },
  { tag: "Matlapudi", weight: 4.66 },
  { tag: "Jeff", weight: 73.01 },
  { tag: "Frazier", weight: 2.8 },
  { tag: "Scala", weight: 2.6 },
  { tag: "Matplotlib", weight: 2.46 },
  { tag: "Pandas", weight: 52.12 },
  { tag: "Python", weight: 2.1 },
  { tag: "ETL", weight: 1.88 },
  { tag: "Dashboard", weight: 81.74 },
  { tag: "Chloropleth", weight: 1.33 },
  { tag: "Bar Graph", weight: 1.29 },
  { tag: "AmChart", weight: 0.97 },
  { tag: "Pandas", weight: 70.79 },
  { tag: "APL", weight: 0.65 },
  { tag: "Pandas", weight: 0.56 },
  { tag: "Team", weight: 70.53 },
]);