import React from 'react';
export default require('maco').template(about, React);

function about() {
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
    </tbody>
    </table>
  </div>
  );
}
