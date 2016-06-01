import React from 'react';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.show
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
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
        <div key='button' className={buttonClass} onClick={this.toggle.bind(this)}>
          {buttonText}
        </div>
      </div>
    );
  }
}
