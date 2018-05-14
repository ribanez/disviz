/**
 * This component shows basic navigation help. The idea is to show it only
 * first time when user opens. All subsequent page opening should not trigger
 * help screen.
 *
 * The only possible way to show help again is by triggerign "show help"
 * action, which is currently bound to mouse wheel event
 */
import React from 'react';
import appEvents from './service/appEvents.js';
import Key from './utils/key.js';

export default require('maco')(help, React);

var helpWasShown = false;

function help(x) {
  var graphDownloaded = false;

  x.render = function() {
    if (window.orientation !== undefined) {
      // no need to show help on orientation enabled devices
      return null;
    }

    if (helpWasShown) {
      // no need to annoy people
      return null;
    }

    if (!graphDownloaded) {
      // Show help only after all is downloaded
      return null;
    }

    return (
        <div className='navigation-help'>
          <h3><center>Manual de operaciones</center></h3>
            <table><tbody>
      <tr>
      <td><code>W</code></td>
      <td>Avanzar</td>
      <td><code>&uarr;</code></td>
      <td>Rotar arriba</td>
      </tr>
      <tr>
      <td><code>S</code></td>
      <td>Retroceder</td>
      <td><code>&darr;</code></td>
      <td>Rotar abajo</td>
      </tr>
      <tr>
      <td><code>A</code></td>
      <td>Izquierda</td>
      <td><code>&larr;</code></td>
      <td>Rotar izquierda</td>
      </tr>
      <tr>
      <td><code>D</code></td>
      <td>Derecha</td>
      <td><code>&rarr;</code></td>
      <td>Rotar derecha</td>
      </tr>
      <tr>
      <td><code>R</code></td>
      <td>Subir</td>
      <td><code>Q</code></td>
      <td>Girar contra-reloj</td>
      </tr>
      <tr>
      <td><code>F</code></td>
      <td>Bajar</td>
      <td><code>E</code></td>
      <td>Girar según reloj</td>
      </tr>
      <tr  className='spacer-row'>
      <td><code></code></td>
      <td></td>
      <td><code>Shift+</code></td>
      <td>Todo más rápido</td>
      </tr>
      <tr>
        <td colSpan='1'><code className='important-key' >L</code></td>
        <td colSpan='3'>muestra/esconde conexiones</td>
      </tr>
      <tr>
        <td colSpan='1'><code className='important-key' >K</code></td>
        <td colSpan='3'>muestra/esconde etiquetas</td>
      </tr>
      <tr>
        <td colSpan="1"><code className='important-key'>H</code></td>
        <td colSpan="3">muestra/esconde esta ayuda</td>
      </tr>
      <tr>
        <td colSpan="1"><code className='important-key'>SPC</code></td>
        <td colSpan="3">muestra/esconde volante</td>
      </tr>
      </tbody></table>
        </div>
        );
    };

  x.componentDidMount = function () {
    if (window.orientation !== undefined) return;
    appEvents.graphDownloaded.on(showHelpIfNeeded);
    appEvents.downloadGraphRequested.on(resetHelp);
    appEvents.toggleHelp.on(toggleHelp);

    listenToKeys();
    listenToWheel();
  }

  x.componentWillUnmount = function () {
    if (window.orientation !== undefined) return;
    appEvents.graphDownloaded.off(showHelpIfNeeded);
    appEvents.downloadGraphRequested.off(resetHelp);
    appEvents.toggleHelp.off(toggleHelp);

    releaseKeyListener();
    releaseWheel();
  }

  function showHelpIfNeeded() {
    if (helpWasShown) return;
    graphDownloaded = true;

    x.forceUpdate();
  }

  function toggleHelp() {
    helpWasShown = !helpWasShown;
    x.forceUpdate();
  }

  function resetHelp() {
    graphDownloaded = false;
    x.forceUpdate();
  }

  function handlekey(e) {
  /* ESTO ESTÁ COMENTADO PARA QUE LA AYUDA NO SE DESACTIVE
    if (Key.isModifier(e)) {
      // ignore modifiers
      return;
    }
    var needsUpdate = !helpWasShown;
    helpWasShown = true;

    if (needsUpdate) {
      x.forceUpdate();
    }
  */
  }

  function handlewheel(e) {
    // only show when used on scene
    if (e.target && e.target.nodeName === 'CANVAS') {
      helpWasShown = false;
      x.forceUpdate();
      appEvents.focusScene.fire();
    }
  }

  function listenToKeys() {
    document.body.addEventListener('keydown', handlekey);
  }

  function listenToWheel() {
    document.body.addEventListener('wheel', handlewheel, true);
  }

  function releaseKeyListener() {
    document.body.removeEventListener('keydown', handlekey, true);
  }

  function releaseWheel() {
    document.body.removeEventListener('wheel', handlewheel, true);
  }
}
