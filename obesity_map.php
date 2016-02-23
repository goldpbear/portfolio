<!DOCTYPE html>

<html>

<head>
	<title>U.S. obesity map</title>
	<meta charset="utf-8">
	<link href="css/stylesheet.css" rel="stylesheet" />
	<link href="css/map_styles.css" rel="stylesheet" />
	<script src="js/d3.v3.js"></script>
</head>

<body>
	<div id="map_header">
		<span id="2004" onmouseover="this.style.color='#000000';" onmouseout="if (2004 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2004);">2004</span>
		<span id="2005" onmouseover="this.style.color='#000000';" onmouseout="if (2005 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2005);">2005</span>
		<span id="2006" onmouseover="this.style.color='#000000';" onmouseout="if (2006 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2006);">2006</span>
		<span id="2007" onmouseover="this.style.color='#000000';" onmouseout="if (2007 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2007);">2007</span>
		<span id="2008" onmouseover="this.style.color='#000000';" onmouseout="if (2008 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2008);">2008</span>
		<span id="2009" onmouseover="this.style.color='#000000';" onmouseout="if (2009 != theID) { this.style.color='#CCCCCC'; }" onclick="updateMap(2009);">2009</span>
	</div>
	<div id="legend">
		<div class="swatch" id="low"></div>
			<p>0 - 19.4% obesity</p>
		<div class="swatch" id="moderate"></div>
			<p>19.5% - 23.8% obesity</p>
		<div class="swatch" id="high"></div>
			<p>23.9% - 27.0% obesity</p>
		<div class="swatch" id="very-high"></div>
			<p>27.1% - 30.7% obesity</p>
		<div class="swatch" id="severe"></div>
			<p>30.8%+ obesity</p>
	</div>	

	<div id="county_readout_filler">Hover over a county below:</div>
	<div id="county_readout" class="hidden">
		<span id="county">Some County</span> County, <span id="state">State</span>: <span id="obesity_rate">0</span>% obesity rate
	</div>

	<script type="text/javascript">
		var theID = 2004;
		var previousYear = 2004;
		document.getElementById(previousYear).style.color="#000000";
		var w = 860;
		var h = 500;
		var csv_file = "data/2004_obesity_data_abbr.csv";
		var path = d3.geo.path();
		var svg = d3.select("body")
					.append("svg")
					.attr("width", w)
					.attr("height", h)
					.style("stroke", "#EEEEEE")
					.attr("stroke-width", .25);
				
		var color = d3.scale.threshold()
							.domain([19.4,23.8,27,30.7])
							.range(["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"]);

		d3.csv(csv_file, function(data) {

		d3.json("data/us-counties.json", function(json) {
			for (var i = 0; i < data.length; i++) {
				var dataCountyCode = data[i].COMBO_CODE;
				var dataValue = parseFloat(data[i].ADJPERCENT);
				var stateName = data[i].STATE_NAME;

				for (var j = 0; j < json.features.length; j++) {
					var jsonCountyCode = json.features[j].id;

					if (dataCountyCode == jsonCountyCode) {
						json.features[j].properties.value = dataValue;
						json.features[j].properties.state = stateName;
						break;
					}
				}
			}

			svg.selectAll("path")
			   .data(json.features)
			   .enter()
			   .append("path")
			   .attr("d", path)
			   .on("mouseover", function(d) {
			   		d3.select(this)
			   		  .style("stroke", "yellow")
			   		  .attr("stroke-width", 2.5);
			   		d3.select("#county_readout")
			   		  .classed("hidden", false);
			   		d3.select("#county_readout_filler")
			   		  .classed("hidden", true);
			   		d3.select("#county")
			   		  .text(d.properties.name);
			   		d3.select("#state")
			   		  .text(d.properties.state);
			   		d3.select("#obesity_rate")
			   		  .text(d.properties.value);
			   })
			   .on("mouseout", function() {
			   		d3.select(this)
			   		  .style("stroke", "#EEEEEE")
			   		  .attr("stroke-width", .25);
			   		d3.select("#county_readout_filler")
			   		  .classed("hidden", false);
			   		d3.select("#county_readout")
			   		  .classed("hidden", true);
			   })
			   .style("fill", function(d) {
			   		var value = d.properties.value;
			   		if (value) {
			   			return color(value);
			   		} else {
			   			return "#CCCCCC";
			   		}
			   });
			});
		});
		
		function updateMap(year) {
			theID = year;
			document.getElementById(previousYear).style.color="#CCCCCC";
			document.getElementById(year).style.color="#000000";
			previousYear = year;
			var csv_file = "data/" + year + "_obesity_data_abbr.csv";

			d3.csv(csv_file, function(data) {
				d3.json("data/us-counties.json", function(json) {
					for (var i = 0; i < data.length; i++) {
						var dataCountyCode = data[i].COMBO_CODE;
						var dataValue = parseFloat(data[i].ADJPERCENT);
						var stateName = data[i].STATE_NAME;

						for (var j = 0; j < json.features.length; j++) {
							var jsonCountyCode = json.features[j].id;

							if (dataCountyCode == jsonCountyCode) {
								json.features[j].properties.value = dataValue;
								json.features[j].properties.state = stateName;
								break;
							}
						}
					}

					svg.selectAll("path")
					   .data(json.features)
					   .transition()
					   .duration(1500)
					   .attr("d", path)
					   .style("fill", function(d) {
					   		var value = d.properties.value;
					   		if (value) {
					   			return color(value);
					   		} else {
					   			return "#CCCCCC";
					   		}
					   });
					});
				});
		}
	</script>
</div>  

</body>

</html>