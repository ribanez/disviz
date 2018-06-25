import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>(Intento de) Visualizacion de las putas proteinas</h1>
        <h2>Por ahora solo el TOP500</h2>
        <div className='media-list'>

          <Destination description='top500'
                      href='#/top500'
                      media=''
                      name='top500'/>
        </div>
      </div>
    );
  }
}
