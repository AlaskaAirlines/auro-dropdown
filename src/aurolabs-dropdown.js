// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import Popover from "../lib/popover";

/**
 * Popover attaches to an element and displays on hover/blur.
 *
 * @attr {String} placement - Expects top/bottom - position for popover in relation to the element
 * @attr {String} for - Defines an `id` for an element in the DOM to trigger on hover/blur
 * @attr {boolean} addSpace - If true, will add additional top and bottom space around the appearance of the popover in relation to the trigger
 * @attr {boolean} removeSpace - If true, will remove top and bottom space around the appearance of the popover in relation to the trigger
 * @attr {String} trigger - Defines event interaction for show/hide of popper content
 * @slot - Default unnamed slot for the use of popover content
 * @slot trigger - Slot for entering the trigger element into the scope of the shadow DOM
 */
class AuroDropdown extends LitElement {
  constructor() {
    super();

    this.privateDefaults();

    this.placement = 'bottom-start';
    this.triggerEvent = undefined;

    // adds toggle function to root element based on touch
    this.addEventListener('touchstart', function() {
      this.toggle();
      this.setAttribute("isTouch", "true");
    });
  }

  /**
   * @private
   * @returns {void} Internal defaults.
   */
  privateDefaults() {
    this.isPopoverVisible = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      placement:  { type: String },
      for:        { type: String },
      triggerEvent:    { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss},
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.documentClickHandler);
  }

  firstUpdated() {
    this.trigger = document.querySelector(`#${this.for}`);
    // allow placement in shadow roots
    if (this.trigger === null) {
      this.trigger = this.getRootNode().querySelector(`#${this.for}`);
    }

    this.popover = this.shadowRoot.querySelector('#popover');
    this.popper = new Popover(this.trigger, this.popover, this.placement);

    const toggleDropdown = () => {
      if (this.isPopoverVisible) {
        this.toggleHide();
      } else {
        this.toggleShow();
      }
    };

    const handleHide = () => {
        this.toggleHide();
      },
      handleShow = () => {
        this.toggleShow();
      },
      showByKeyboard = (event) => {
        const key = event.key.toLowerCase();
        if (key === ' ' || key === 'enter') {
          this.toggleShow();
        }
      },
      toggleByKeyboard = (event) => {
        const key = event.key.toLowerCase();

        if (this.isPopoverVisible) {
          if (key === 'escape') {
            handleHide; /* eslint-disable-line no-unused-expressions */
          }
        } else if (key === ' ' || key === 'enter') {
          toggleDropdown; /* eslint-disable-line no-unused-expressions */
        }
      };

    if (this.triggerEvent === 'show') {
      this.trigger.addEventListener('click', handleShow);
      this.trigger.addEventListener('keydown', showByKeyboard);
    } else {
      this.trigger.addEventListener('click', toggleDropdown);
      this.trigger.addEventListener('keydown', toggleByKeyboard);
    }

    this.addEventListener('showPopover', handleShow);
    this.addEventListener('hidePopover', handleHide);
  }

  // /**
  //   * @private Toggles the display of the popover content
  //   * @returns {Void} Fires an update lifecycle.
  // */
  // toggle() {
  //   if (this.isPopoverVisible) {
  //     this.toggleHide();
  //   } else {
  //     this.toggleShow();
  //   }
  // }

  /**
   * @private
   * @returns {void} Hides the popover. Fires an update lifecycle.
   */
  toggleHide() {
    this.popper.hide();
    this.isPopoverVisible = false;
    this.removeAttribute('data-show');
  }

  /**
   * @private
   * @returns {void} Shows the popover. Fires an update lifecycle.
   */
  toggleShow() {
    this.popper.show();
    this.isPopoverVisible = true;
    this.setAttribute('data-show', true);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div id="popover" class="popover" aria-live="polite">
        <!-- <div id="arrow" class="arrow" data-popper-arrow></div> -->
        <slot role="tooltip"></slot>
      </div>

      <slot name="trigger" data-trigger-placement="${this.placement}"></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dropdown")) {
  customElements.define("auro-dropdown", AuroDropdown);
}
