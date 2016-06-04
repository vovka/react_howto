import { PopupModel, Popup } from './components/popup.jsx';

let target = document.getElementById('popup');

new Popup({
  show: !!target.dataset.show,
  el: target,
  model: new PopupModel
});
