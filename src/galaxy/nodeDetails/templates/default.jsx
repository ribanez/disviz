import React from 'react';

export default require('maco').template(template, React);


function template(props) {
  var model = props.model;

  // esto muestra la info para cada nodo 
  return (
    <div className='container-fluid row'>
      <div className='hidden-xs'>
        <div className='col-xs-10'>
          <h4 title={model.disc}>
            <a href={model.link}>
            {model.date + ' ' + model.disc}</a></h4>
        </div>
      </div>

      <div className='visible-xs-block'>
        <div className='row info-block'>
          <div className='col-xs-8 no-overflow'>
            <h5 title={model.disc}>
              {model.date + ' ' + model.disc}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
