var target = document.getElementById('popup');

ReactDOM.render(
  <Popup show={!!target.dataset.show} />,
  target
);
