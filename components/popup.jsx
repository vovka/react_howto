import $ from 'jquery';

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
    this.$button.toggleClass('closeButton');
    this.$button.toggleClass('openButton');
    if (this.isOpen) {
      this.$content.hide();
      this.$button.html('Open');
    } else {
      this.$content.show();
      this.$button.html('Close');
    }
    this.isOpen = !this.isOpen;
  }
}
