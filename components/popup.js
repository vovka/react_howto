var Popup = React.createClass({
  getInitialState: function() {
    return {
      isOpen: this.props.show
    };
  },

  toggle: function() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  },

  render: function() {
    var buttonClass = 'closeButton',
        buttonText = 'Open',
        content = null;

    if (this.state.isOpen) {
      buttonClass = 'openButton';
      buttonText = 'Close';
      content = (
        <div key='content' className='content'>Hello world</div>
      );
    }

    return (
      <div>
        {content}
        <div key='button' className={buttonClass} onClick={this.toggle}>
          {buttonText}
        </div>
      </div>
    );
  }
});

export default Popup;
