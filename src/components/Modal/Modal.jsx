import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { ReactComponent as Rules } from "../../assets/images/image-rules.svg";

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <h2>RULES</h2>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <Rules />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
