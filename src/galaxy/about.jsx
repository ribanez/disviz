import React from 'react';
export default require('maco').template(about, React);

function about() {
  var local = encodeURIComponent(window.location.href);
  var link = 'https://twitter.com/intent/tweet?' + 
    'text=' + encodeURI('Visualizacion de las putas proteinas ') + '&' +
    'url=' + local + '&';
  return (
  <div className='aboutt' align='right'>
    <table>
    <tbody>
    <tr><td align='right'>
     <a className='reset-color' 
        target='_blank'
        href="https://github.com/ribanez/disviz">Viz? 🤔</a>
    </td></tr>
    <tr>
      /*
      <td>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Galaxias de Discursos" data-via="perez" data-show-count="false">Tweet</a>
      </td>
      */
    </tr>
    </tbody>
    </table>
  </div>
  );
}

