import React from 'react';

export default require('maco').template(template, React);


function template(props) {
  var model = props.model;

  if (model.picLink == 'None')
    model.picLink = '';

  // esto muestra la info para cada nodo 
  return (
    <div className='container-fluid row'>
      <div className='hidden-xs'>
        <div className='col-xs-13'>
          <table>
            <tbody>
              <tr>
                <td><img src={model.picLink} width="200"/></td>
                <td>&nbsp;</td>
                <td>
                <h5 title={model.disc}>
                  <a href={model.link} target='_blank'>
                  {model.date + ' ' + model.disc}</a>
                </h5>
                <h5>
                  "{model.shortName}"
                </h5>
                  </td>
              </tr>
            </tbody>
          </table> 
        </div>
      </div>

      <div className='visible-xs-block'>
        <div className='row info-block'>
          <div className='col-xs-13 no-overflow'>
            <h5 title={model.disc}>
              <a href={model.link} target='_blank'>
              {model.date + ' ' + model.disc}
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
