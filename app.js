var target = document.getElementById('popup');

ReactDOM.render(
  React.createElement(Popup, {show: !!target.dataset.show}),
  target
);
