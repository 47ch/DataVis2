var specVis1 = "./broadband_map.json";
var specVis2 = "./internet_line.json";
var specVis3 = "./mobile_subscription_bar_chart.json";
var specVis4 = "./internet_users_pie_chart.json";

vegaEmbed('#vis1', specVis1, { "actions": false });

vegaEmbed('#vis2', specVis2, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis3', specVis3, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#vis4', specVis4, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
