// espera nodos, links y posiciones en formato json, y un directorio de output
// crea archivos labels.json, meta.json, links.bin, y positions.bin para la visualización
// necesita ngraph.forcelayout3d y ngraph.tobinary (se pueden instalar con npm install)

// parametros
var nodes_file = process.argv[2]
var links_file = process.argv[3]
var poss_file  = process.argv[4]
var mult       = process.argv[5]
var out_dir    = process.argv[6]


// carga los nodos
var fs = require('fs');
var nodo = JSON.parse(fs.readFileSync(nodes_file, 'utf8'));
//console.log(nodo.length);

// carga los links
var link = [];
var link = JSON.parse(fs.readFileSync(links_file, 'utf8'));
//console.log(link.length);
//console.log(link[1][1]);

// carga las posiciones
var pos = [];
var pos = JSON.parse(fs.readFileSync(poss_file, 'utf8'));
//console.log(pos.length);
//console.log(pos[4]);

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

// crea las posiciones
var layout = require('ngraph.forcelayout3d')(graph);
for (i = 0; i < pos.length; i++) {
    nodeId = nodo[i];
    layout.setNodePosition(nodeId, 
      Math.round(pos[i][0]*mult), 
      Math.round(pos[i][1]*mult), 
      Math.round(pos[i][2]*mult)
    );
}

// variables para almacenar el archivo binario
i = 0;
var intSize = 4;
var coordinatesPerRecord = 3;
var nodesLength = graph.getNodesCount();
var buf = new Buffer(nodesLength * intSize * coordinatesPerRecord);

// escribe las posiciones en el buffer
graph.forEachNode(function(node){
    var idx = i * intSize * coordinatesPerRecord;
    var pos = layout.getNodePosition(node.id);
    buf.writeInt32LE(pos.x, idx + intSize * 0);
    buf.writeInt32LE(pos.y, idx + intSize * 1);
    buf.writeInt32LE(pos.z, idx + intSize * 2);
    i++;
});

// guarda el grafo (nodos, labels, y links)
var save = require('ngraph.tobinary');
save(graph, {
  outDir: out_dir, 
  labels: 'labels.json', 
  meta:   'meta.json', 
  links:  'links.bin' 
});

// guarda las posiciones
var path = require('path');
var fname = path.join(out_dir, 'positions.bin');
fs.writeFileSync(fname, buf);
