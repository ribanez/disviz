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
                      href='#/galaxy/bachelet_2?cx=5765&cy=-6577&cz=-6953&lx=0.3169&ly=0.8527&lz=-0.1965&lw=0.3658&ml=300&s=1.75&l=1&k=1'
                      media=''
                      name='Bachelet_2'/>
        </div>
      </div>
    );
  }
}
