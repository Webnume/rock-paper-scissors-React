import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { ReactComponent as Rules } from "../../assets/images/image-rules.svg";
import { ReactComponent as RulesBonus } from "../../assets/images/image-rules-bonus.svg";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";

const Modal = ({ isShowing, toggle, isBonusGame }) =>

  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay"  onClick={toggle}/>
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"  onClick={toggle}
          >
            <div className="modal">
              <div className="modal-header">
                <h2>RULES</h2>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                  <Close />
                </button>
              </div>
              {isBonusGame ? <RulesBonus /> : <Rules />}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
