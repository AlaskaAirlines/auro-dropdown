// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit-a11y/click-events-have-key-events */

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import Popover from "../lib/popover";

/**
 * @attr {boolean} chevron - If true, the dropdown displays an display state chevron on the right.
 * @attr {boolean} toggle - If true, the trigger will toggle the show/hide state of the dropdown.
 * @slot - Default unnamed slot for the use of popover content.
 * @slot label - Sets the label text for the input.
 * @slot helperText - Sets the helperText text for the input.
 * @slot trigger - Slot for entering the trigger element into the scope of the shadow DOM.
 */
class AuroDropdown extends LitElement {
  constructor() {
    super();

    this.privateDefaults();

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
    this.placement = 'bottom-start';
    this.toggle = false;
    this.chevron = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      chevron:       { type: Boolean },
      toggle:        { type: Boolean },

      /**
       * @private
       */
      dropdownWidth: { type: Number },

      /**
       * @private
       */
      placement:     { type: String }
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
  }

  /**
   * @private
   * @returns {void} Makes dropdown content width match the trigger.
   */
  fixWidth() {
    this.dropdownWidth = this.getBoundingClientRect().width;
  }

  firstUpdated() {
    this.fixWidth();

    this.trigger = this.shadowRoot.querySelector(`#trigger`);
    this.triggerChevron = this.shadowRoot.querySelector(`#show-state-icon`);
    this.popover = this.shadowRoot.querySelector('#popover');
    this.popper = new Popover(this.trigger, this.popover, this.placement);

    const toggleDropdown = () => {
      if (this.isPopoverVisible) {
        this.toggleHide();
      } else {
        this.toggleShow();
      }
    };

    const handleShow = () => {
        this.toggleShow();
      },
      hideByKeyboard = (event) => {
        const key = event.key.toLowerCase();

        if (key === 'escape') {
          this.toggleHide(event);
        }
      },
      showByKeyboard = (event) => {
        const key = event.key.toLowerCase();
        if (key === ' ' || key === 'enter') {
          this.toggleShow();
        }
      },
      toggleByKeyboard = (event) => {
        const key = event.key.toLowerCase();

        if (key === ' ' || key === 'enter') {
          toggleDropdown; /* eslint-disable-line no-unused-expressions */
        }
      };

    if (this.toggle) {
      this.trigger.addEventListener('click', toggleDropdown);
      this.trigger.addEventListener('keydown', toggleByKeyboard);
    } else {
      this.trigger.addEventListener('click', handleShow);
      this.trigger.addEventListener('keydown', showByKeyboard);
    }

    this.trigger.addEventListener('keydown', hideByKeyboard);
  }

  /**
   * @private
   * @returns {void} Hides the popover. Fires an update lifecycle.
   */
  toggleHide() {
    document.removeEventListener('click', this.offClick);
    this.popper.hide();
    this.isPopoverVisible = false;
    this.removeAttribute('data-show');
    if (this.chevron) {
      this.triggerChevron.removeAttribute('data-expanded');
    }
    this.dispatchEventDropdownToggle();
  }

  /**
   * @private
   * @returns {void} Shows the popover. Fires an update lifecycle.
   */
  toggleShow() {
    if (!this.hasAttribute('disabled')) {
      document.addEventListener('click', this.offClick);
      this.fixWidth();
      this.popper.show();
      this.isPopoverVisible = true;
      this.setAttribute('data-show', true);
      if (this.chevron) {
        this.triggerChevron.setAttribute('data-expanded', true);
      }
      this.dispatchEventDropdownToggle();
    }
  }

  /**
   * Hides the dropdown content.
   * @returns {void}
   */
  hide() {
    this.toggleHide();
  }

  /**
   * Shows the dropdown content.
   * @returns {void}
   */
  show() {
    this.toggleShow();
  }

  /**
   * @private
   * @returns {void} Handles clicking outside the dropdown while it's open.
   */
  offClick = (event) => {
    // Hide the dropdown content if we clicked anywhere outside auro-dropdown
    if (event.composedPath().indexOf(this) === -1) {
      this.toggleHide();
    }
  }

  /**
   * @private
   * @returns {void} Dispatches event with an object showing the state of the dropdown.
   */
  dispatchEventDropdownToggle() {
    const event = new CustomEvent('dropdownToggled', {
      detail: {
        expanded: this.isPopoverVisible,
      },
      composed: true
    });

    this.dispatchEvent(event);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div id="popover" class="popover" aria-live="polite" style=${`min-width: ${this.dropdownWidth}px;`}>
        <slot role="tooltip"></slot>
      </div>
      <div id="trigger" class="trigger" data-trigger-placement="${this.placement}">
        <div class="trigger-content-wrapper">
          <div class="label">
            <slot name="label"></slot>
          </div>
          <div class="triggerContent" chevron=${this.chevron}>
            <slot name="trigger"></slot>
          </div>
        </div>
        ${this.chevron ? html`
          <div id="show-state-icon">
            <auro-icon category="interface" name="chevron-down" customColor style="color: inherit;"></auro-icon>
          </div>
        ` : undefined}
      </div>
      <div class="helper-text">
        <slot name="helperText"></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dropdown")) {
  customElements.define("auro-dropdown", AuroDropdown);
}
