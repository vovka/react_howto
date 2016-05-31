var MyComponent = React.createClass({
  render: function() {
    var open = React.createElement('div', null, [
          React.createElement(
            'div',
            {
              key: 'content',
              className: 'content'
            },
            'Hello world'
          ),
          React.createElement(
            'div',
            {
              key: 'closeButton',
              className: 'closeButton'
            },
            'Close'
          )
        ]),

        closed = React.createElement('div', null,
          React.createElement(
            'div',
            {
              key: 'openButton',
              className: 'openButton'
            },
            'Open'
          )
        );

    return open;
  }
});



ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById('popup')
);
