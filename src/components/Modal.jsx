import React from "react";
import '../assets/styles/components/Modal.scss'
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Add new audiobook</h2>
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button className="create-button">
            Create
          </button>
          <button class="toggle-button" id="cancel-button" onClick={this.onClose}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};