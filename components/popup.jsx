import _ from 'underscore';
import Backbone from 'backbone';

export class PopupModel extends Backbone.Model {}

export class Popup extends Backbone.View {
  constructor(props) {
    super(props);
    this.listenTo(this.model, "change", this.render);
    this.model.set({
      isOpen: props.show
    });
  }

  get events() {
    return { "click .button": "toggle" };
  }

  toggle() {
    this.model.set({
      isOpen: !this.model.get('isOpen')
    });
  }

  render() {
    var buttonClass = 'closeButton',
        buttonText = 'Open';

    if (this.model.get('isOpen')) {
      buttonClass = 'openButton';
      buttonText = 'Close';
    }

    var attributes = this.model.attributes;
    attributes.buttonClass = buttonClass;
    attributes.buttonText = buttonText;

    this.el.innerHTML = _.template(`
      <div>
        <% if (isOpen) { %>
          <div key='content' class='content'>Hello world</div>
        <% } %>
        <div key='button' class='<%= buttonClass %> button'>
          <%= buttonText %>
        </div>
      </div>
    `)(attributes);
    return this;
  }
}
