import { Popup } from './components/popup.jsx';

let target = document.getElementById('popup');

new Popup({
  show: !!target.dataset.show,
  el: target
}).bind();
