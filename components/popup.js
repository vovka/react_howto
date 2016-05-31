var Popup = React.createClass({
  getInitialState: function() {
    return {
      isOpen: this.props.show
    };
  },

  toggle: function() {
    alert('ok');
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
              className: 'closeButton',
              onClick: this.toggle
            },
            'Close'
          )
        ]),

        closed = React.createElement('div', null,
          React.createElement(
            'div',
            {
              key: 'openButton',
              className: 'openButton',
              onClick: this.toggle
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
