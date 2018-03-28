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
        href="https://github.com/anvaka/pm/tree/master/about#software-galaxies-documentation">Viz? 🤔</a>
    </td></tr>
    <tr><td align='right'>
     <a className='reset-color'
        target='_blank'
        href="https://github.com/jorgeperezrojas/discursos">Data? 🤓</a>
    </td></tr>
    </tbody>
    </table>
  </div>
  );
}
