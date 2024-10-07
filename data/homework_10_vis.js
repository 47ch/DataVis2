var specVis1 = "./homework_9.json";
var specVis2 = "./homework_10.json";

vegaEmbed('#vis1', specVis1, { "actions": false });

vegaEmbed('#vis2', specVis2, { "actions": false }).then(function (result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
