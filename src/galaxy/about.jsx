import React from 'react';
export default require('maco').template(about, React);

function about() {
  var local = encodeURIComponent(window.location.href);
  var link = 'https://twitter.com/intent/tweet?' + 
    'text=' + encodeURI('Galaxias de discursos de ') + '&' + 
    'url=' + local + '&';
  return (
  <div  className='label about' align='right'>
    <table>
    <tbody>
    <tr><td align='right'>
     <a className='reset-color' 
        target='_blank'
        href="https://github.com/jorgeperezrojas/disviz#galaxias-de-discursos">Viz? 🤔</a>
    </td></tr>
    <tr><td align='right'>
     <a className='reset-color'
        target='_blank'
        href="https://github.com/jorgeperezrojas/discursos#discursos-presidenciales-chilenos">Data? 🤓</a>
    </td></tr>
    <tr>
      <td>
        <a href={link} target='_blank'>
        Tweet! 🐤
        </a>
      </td>
    </tr>
    </tbody>
    </table>
  </div>
  );
}
