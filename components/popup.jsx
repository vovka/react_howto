let getNextState = (currentState) => {
  if (currentState.isOpen) {
    return { // opened -> closed
      buttonText: 'Open',
      isOpen: false,
      buttonClassNameToRemove: 'closeButton',
      buttonClassNameToAdd: 'openButton',
      buttonText: 'Open',
      contentClassNameToRemove: '',
      contentClassNameToAdd: 'hidden',
    }
  } else { // closed -> opened
    return {
      buttonText: 'Close',
      isOpen: true,
      buttonClassNameToRemove: 'openButton',
      buttonClassNameToAdd: 'closeButton',
      buttonText: 'Close',
      contentClassNameToRemove: 'hidden',
      contentClassNameToAdd: '',
    }
  }
}

const BUTTON_CHILD_INDEX = 1,
      CONTENT_CHILD_INDEX = 0;

export class Popup {
  constructor(props) {
    this.showByDefault = props.show;
    this.el = props.el;
    this.button = this.el.children[BUTTON_CHILD_INDEX];
    this.content = this.el.children[CONTENT_CHILD_INDEX];
    this.isOpen = true;
  }

  bind() {
    this.button.addEventListener('click', this._toggle.bind(this));
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
    this.button.className = this.button.className.replace(new RegExp('\\s*' + state.buttonClassNameToRemove + '\\s*', 'g'), '');
    this.button.className = this.button.className.replace(new RegExp('\\s*' + state.buttonClassNameToAdd + '\\s*', 'g'), '') + ' ' + state.buttonClassNameToAdd;
    this.button.innerHTML = state.buttonText;
    this.content.className = this.content.className.replace(new RegExp('\\s*' + state.contentClassNameToRemove + '\\s*', 'g'), '');
    this.content.className = this.content.className.replace(new RegExp('\\s*' + state.contentClassNameToAdd + '\\s*', 'g'), '') + ' ' + state.contentClassNameToAdd;
  }
}
