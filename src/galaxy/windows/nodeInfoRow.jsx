import React from 'react';
import formatNumber from '../utils/formatNumber.js';

module.exports = require('maco').template(windowTitle, React);

/* INFO EN LA BUSQUEDA */

function parseDate(s) {
  var data = s.split('\t');
  var date = data[1]
  return date;
}

function parseText(s) {
  var data = s.split('\t');
  var name = data[0]
  return name;
}

function windowTitle(props) {
  var item = props.viewModel;
  var image = '';
  if (item.icon) {
    image = <img src={item.icon} width='15px' />;
  }

  return (
      <div className='row'>
        <div className='no-oveflow col-md-8 col-xs-8'>
        {image}
         <span id={item.id} className='node-focus'>
            {parseText(item.name)}
          </span>
        </div>
        <div id={item.id} className='in-degree col-md-3 col-xs-3'>
         {parseDate(item.name)}
        </div>
        <div id={item.id} className='out-degree col-md-3 col-xs-3'>
         {/*formatNumber(item.out)*/}
        </div>
      </div>
  );
}
