
// COntingency map

// Map function
function createMap(){
  // states= ["AL","FL","WA"]
  chosenFile= '../../Data/allstatesAG_map.json'
  d3.json(chosenFile).then((data) => {
    // const covidData= JSON.parse(data);
    console.log(data);
    covidSeries=[];

    data.forEach(element => {
      states = `US-${element.state}`;
      // console.log(states);
      values=element.positive;
      // console.log(values);
      covidSeries.push({ id:states, 
          value: values });
      
    });
    console.log(covidSeries);
    
    






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
      min: am5.color(0x095256),
      max: am5.color(0xbb9f06),
      key: "fill"
    }]);

    polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
      heatLegend.showValue(ev.target.dataItem.get("value"));
    });
  
  

    polygonSeries.data.setAll([
    {id: 'US-AK',value: 56886},
     {id:  'US-AL', value:  499819},
     {id:  'US-AR', value:  324818},
     {id:  'US-AS', value:  0},
     {id:  'US-AZ', value:  826454},
     {id:  'US-CA', value:  3501394},
     {id:  'US-CO', value:  436602},
     {id:  'US-CT', value:  285330},
     {id:  'US-DC', value:  41419},
     {id:  'US-DE', value:  88354},
     {id:  'US-FL', value:  1909209},
     {id:  'US-GA', value:  1023487},
     {id:  'US-GU', value:  7749},
     {id:  'US-HI', value:  28699},
     {id:  'US-IA', value:  282384},
     {id:  'US-ID', value:  172931},
     {id:  'US-IL', value:  1198335},
     {id:  'US-IN', value:  667262},
     {id:  'US-KS', value:  295861},
     {id:  'US-KY', value:  410709},
     {id:  'US-LA', value:  433785},
     {id:  'US-MA', value:  591356},
     {id:  'US-MD', value:  387319},
     {id:  'US-ME', value:  45794},
     {id:  'US-MI', value:  656072},
     {id:  'US-MN', value:  490011},
     {id:  'US-MO', value:  480643},
     {id:  'US-MP', value:  145},
     {id:  'US-MS', value:  297581},
     {id:  'US-MT', value:  100914},
     {id:  'US-NC', value:  872176},
     {id:  'US-ND', value:  100391},
     {id:  'US-NE', value:  203026},
     {id:  'US-NH', value:  76861},
     {id:  'US-NJ', value:  812609},
     {id:  'US-NM', value:  186922},
     {id:  'US-NV', value:  296190},
     {id:  'US-NY', value:  1681169},
     {id:  'US-OH', value:  978471},
     {id:  'US-OK', value:  428997},
     {id:  'US-OR', value:  157079},
     {id:  'US-PA', value:  948643},
     {id:  'US-PR', value:  101632},
     {id:  'US-RI', value:  128781},
     {id:  'US-SC', value:  525865},
     {id:  'US-SD', value:  113589},
     {id:  'US-TN', value:  782206},
     {id:  'US-TX', value:  2686818},
     {id:  'US-UT', value:  374850},
     {id:  'US-VA', value:  585700},
     {id:  'US-VI', value:  2714},
     {id:  'US-VT', value:  16083},
     {id:  'US-WA', value:  344532},
     {id:  'US-WI', value:  621654},
     {id:  'US-WV', value:  133445},
     {id:  'US-WY', value:  54764},
    ]);
    
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
 
};
createMap();