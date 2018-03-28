// espera nodos y links en formato json, y un directorio de output
// crea archivos labels.json, meta.json, links.bin, y positions.bin para la visualización

// parametros
var nodes_file = process.argv[2]
var links_file = process.argv[3]
var out_dir    = process.argv[4]
var max_iter   = process.argv[5]
var save_each  = process.argv[6]

// carga los nodos
var fs = require('fs');
var nodo = JSON.parse(fs.readFileSync(nodes_file, 'utf8'));
//console.log(nodo.length);

// carga los links
var link = [];
var link = JSON.parse(fs.readFileSync(links_file, 'utf8'));
//console.log(link.length);
//console.log(link[1][1]);

// crea el grafo
var createGraph = require('ngraph.graph');
var graph = createGraph();

// crea los nodos
for (i = 0; i < nodo.length; i++)
    graph.addNode(nodo[i]);

// crea los links
for (e = 0; e < link.length; e++) {
    u = link[e][0];
    v = link[e][1];
    graph.addLink(nodo[u], nodo[v]);
}

// crea el layout
var createLayout = require('ngraph.offline.layout');
var layout = createLayout(graph, {
  iterations: max_iter, 
  saveEach: save_each, 
  outDir: out_dir, 
  layout: require('ngraph.forcelayout3d') 
});

layout.run();

// guarda el grafo (nodos, labels, y links)
var save = require('ngraph.tobinary');
save(graph, {
  outDir: out_dir, 
  labels: 'labels.json', 
  meta:   'meta.json', 
  links:  'links.bin' 
});