import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Galaxias de Discursos Presidenciales</h1>
        <h2>Por ahora solo el de Bachelet:</h2>
        <div className='media-list'>
          <Destination description='18K+ frases de Bachelet 2 (2014-2018)'
                      href='#/galaxy/bachelet_2?cx=-2801&cy=7240&cz=8391&lx=-0.3666&ly=-0.0661&lz=0.1207&lw=0.9202&ml=300&s=1.75&l=1&k=1'
                      media=''
                      name='Bachelet_2'/>
        </div>
      </div>
    );
  }
}
