import $ from 'jquery';

let getNextState = (currentState) => {
  if (currentState.isOpen) {
    return {
      action: 'hide',
      buttonText: 'Open',
      isOpen: false
    }
  } else {
    return {
      action: 'show',
      buttonText: 'Close',
      isOpen: true
    }
  }
}

export class Popup {
  constructor(props) {
    this.showByDefault = props.show;
    this.$el = $(props.el);
    this.$button = this.$el.find('.button');
    this.$content = this.$el.find('.content');
    this.isOpen = true;
  }

  bind() {
    this.$button.on('click', this._toggle.bind(this));
    if (this.showByDefault) {
      this._toggle();
    }
  }

  _toggle() {
    let nextState = getNextState({ isOpen: this.isOpen });
    this.isOpen = nextState.isOpen;
    this._render(nextState);
  }

  _render(state) {
    this.$button.toggleClass('closeButton openButton');
    this.$button.html(state.buttonText);
    this.$content[state.action]();
  }
}
