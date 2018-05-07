# Galaxias de discursos

Este repositorio contiene visualizaciones de textos de discursos de presidentes chilenos en forma de galaxias.
Es un fork de [https://github.com/anvaka/pm](https://github.com/anvaka/pm) para adaptarlo a texto, en particular, frases de discursos de presidentes chilenos, fechas, y links a discursos originales e imágenes, y agregar etiquetas a clusters. 

Por ahora sólo está el código para correr la visualización. Estoy lejos de ser un experto en javascript así que seguro encontrarán varias barbaridades 🙈. El código para generar los datos de input necesarios para la visualización los subiré en algún momento, cuando lo haya ordenado, pero se basa en [Word Embeddings en Español](https://github.com/uchile-nlp/spanish-word-embeddings) y una [implementación de t-SNE en C++](https://github.com/lvdmaaten/bhtsne). Los datos crudos de textos los pueden encontrar en el repositorio de [Discursos Presidenciales Chilenos](https://github.com/jorgeperezrojas/discursos)

# Desarrollo local

```
git clone https://github.com/jorgeperezrojas/disviz.git
cd disviz
npm i
npm start
```

# Demo

On-line demo en desarrollo... 

Una visualización de frases de discursos de Bachelet (2014-2018) las pueden ver en el siguiente video:

![Energías renovables](https://raw.githubusercontent.com/jorgeperezrojas/disviz/master/demo/demo-01.mp4)

Algunas imágenes de una visualización más antigua:


Energía

![Energías renovables](https://raw.githubusercontent.com/jorgeperezrojas/disviz/master/demo/gifs/bachelet_2_energia.gif)

Salas cuna

![Salas cuna y jardines infantiles](https://raw.githubusercontent.com/jorgeperezrojas/disviz/master/demo/gifs/bachelet_2_sala_cuna.gif)


