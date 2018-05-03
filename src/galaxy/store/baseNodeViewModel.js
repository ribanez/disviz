import getGraphSpecificInfo from './graphSepcific/graphSpecificInfo.js';
import scene from './scene.js';
import formatNumber from '../utils/formatNumber.js';

export default getBaseNodeViewModel;

function parseDate(s) {
  var data = s.split('\t');
  var date = data[1];
  return date;
}

function parseText(s) {
  var data = s.split('\t');
  var name = data[0];
  return name;
}

function parseShortText(s) {
  var data = s.split('\t');
  var name = data[0];
  if (name.length > 330)
    name = name.substring(0, 330) + '...'
  return name;
}

function parseDisc(s) {
  var data = s.split('\t');
  var disc = data[2];
  return disc; 
}

function parseLink(s) {
  var data = s.split('\t');
  var link = data[3];
  return link; 
}

function parsePicLink(s) {
  var data = s.split('\t');
  var picLink = data[4];
  return picLink;
}

function getBaseNodeViewModel(nodeId) {
  var graphName = scene.getGraphName();
  var graphSpecificInfo = getGraphSpecificInfo(graphName);
  var nodeInfo = scene.getNodeInfo(nodeId);

  return {
    /* name: nodeInfo.name,  */
    name: parseText(nodeInfo.name),
    shortName: parseShortText(nodeInfo.name),
    id: nodeInfo.id,
    date: parseDate(nodeInfo.name),
    disc: parseDisc(nodeInfo.name),
    link: parseLink(nodeInfo.name),
    picLink: parsePicLink(nodeInfo.name),

    inDegree: formatNumber(nodeInfo.in),
    inDegreeLabel: graphSpecificInfo.getInDegreeLabel(nodeInfo.in),

    outDegree: formatNumber(nodeInfo.out),
    outDegreeLabel: graphSpecificInfo.getOutDegreeLabel(nodeInfo.out)
  };
}
