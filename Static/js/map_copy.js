// call create map when the listener on the slider detects a change createMap(this.value)
// function createMap(month){
  function createMap(){
    states= ["AL","FL","WA"]
    // chosenFile= f`../../Data/covid_${month}.json`
    chosenFile= '../../Data/covid_Jan20.json'
    d3.json(chosenFile).then((data) => {
      console.log(data)
      // var dropdownMenu = d3.select("#selDataset");
  
      // d3.json("../../covid_data.json").then((data) => {
      //     console.log(data)
  
      //   });
  
  
  
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
        panY: "none",
        projection: am5map.geoAlbersUsa(),
        layout: root.horizontalLayout
      }));
  
      // Create polygon series
      var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        valueField: "value",
        calculateAggregates: true
      }));
  
      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}: {value}"
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
    
    
      covidSeries=[];
      states.forEach(state => {
        covidSeries.push({
          id:"US-WA",
          value:data.positive
        })
        console.log(covidSeries)
      });
      polygonSeries.data.setAll(covidSeries);
      // polygonSeries.data.setAll([{id:"US-WA", value:2000}]);
      
      var heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
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
    });
    // Make stuff animate on load ALL THE CODE BELOW IS THE SLIDER
  // chart.appear(1000, 100);
  
  // // Aggregate data
  // var years = {};
  // var firstYear = 99999;
  // var lastYear = 0;
  // for(var i = 0; i < data.length; i++) {
  //   var row = data[i];
  //   var year = row.year;
  //   if (years[year] == undefined) {
  //     years[year] = [];
  //   }
  //   years[year].push(row.country);
    
  //   if (firstYear > year) {
  //     firstYear = year;
  //   }
  //   if (lastYear < year) {
  //     lastYear = year;
  //   }
  // }
  
  // // Create controls 
  // var container = chart.children.push(am5.Container.new(root, {
  //   y: am5.p100,
  //   centerX: am5.p50,
  //   centerY: am5.p100,
  //   x: am5.p50,
  //   width: am5.percent(90),
  //   layout: root.horizontalLayout,
  //   paddingBottom: 10
  // }));
  
  // var playButton = container.children.push(am5.Button.new(root, {
  //   themeTags: ["play"],
  //   centerY: am5.p50,
  //   marginRight: 40,
  //   icon: am5.Graphics.new(root, {
  //     themeTags: ["icon"]
  //   })
  // }));
  
  // playButton.events.on("click", function () {
  //   if (playButton.get("active")) {
  //     slider.set("start", slider.get("start") + 0.0001);
  //   } else {
  //     slider.animate({
  //       key: "start",
  //       to: 1,
  //       duration: 15000 * (1 - slider.get("start"))
  //     });
  //   }
  // });
  
  // var slider = container.children.push(am5.Slider.new(root, {
  //   //width: am5.percent(80),
  //   orientation: "horizontal",
  //   start: 0,
  //   centerY: am5.p50
  // }));
  
  // slider.startGrip.get("icon").set("forceHidden", true);
  // slider.startGrip.set("label", am5.Label.new(root, {
  //   text: firstYear + "",
  //   paddingTop: 0,
  //   paddingRight: 0,
  //   paddingBottom: 0,
  //   paddingLeft: 0
  // }));
  
  
  // updateCountries(firstYear);
  
  // slider.events.on("rangechanged", function () {
  //   var year = firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear));
  //   slider.startGrip.get("label").set("text", year + "");
  //   updateCountries(year);
  //   console.log(year)
  //   // updateSeriesData(
  //   //   firstYear + Math.round(slider.get("start", 0) * (lastYear - firstYear))
  //   // );
  // });
  
  // function updateCountries(year) {
  //   am5.object.each(years, function(joinYear, countries) {
  //     //console.log(countries)
  //     am5.array.each(countries, function(country) {
  //       var dataItem = polygonSeries.getDataItemById(country);
  //       if (dataItem) {
  //         dataItem.get("mapPolygon").set("active", joinYear <= year)
  //       }
  //     })
  //   })
  // }
  
  };
  createMap();