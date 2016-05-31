var MyComponent = React.createClass({
  getInitialState: function() {
    return {
      isOpen: this.props.show
    };
  },

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

    if (this.state.isOpen)
      return open;
    else
      return closed;
  }
});



ReactDOM.render(
  React.createElement(MyComponent, {show: false}),
  document.getElementById('popup')
);
