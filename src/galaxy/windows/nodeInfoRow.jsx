import React from 'react';
import formatNumber from '../utils/formatNumber.js';

module.exports = require('maco').template(windowTitle, React);

/* INFO EN LA BUSQUEDA */

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
            {item.name.substr(0,30) + '...'}
          </span>
        </div>
        <div id={item.id} className='in-degree col-md-3 col-xs-3'>
         {item.date}
        </div>
      </div>
  );
}
