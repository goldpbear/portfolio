
var w = 860;
var h = 500;
var csv_file = "data/2004_obesity_data_abbr.csv";
var path = d3.geo.path();
var svg = d3.select("#map_container")
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

// register menu listeners
var radios = document.forms["map_header"].elements["map_menu"];
for (var i = 0; i < radios.length; i++) {
	radios[i].onclick = function() {
		updateMap(this.id);
	}
}

window.scrollBy(0, 185);


