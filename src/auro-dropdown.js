// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit-a11y/click-events-have-key-events */

import { LitElement, html, css } from "lit-element";
import {ifDefined} from 'lit-html/directives/if-defined';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

import Popover from "../lib/popover";

/**
 * @attr { Boolean } bordered - If declared, applies a border around the trigger slot.
 * @attr { Boolean } chevron - If declared, the dropdown displays an display state chevron on the right.
 * @attr { Boolean } disabled - If declared, the dropdown is not interactive.
 * @attr { Boolean } error - If declared in combination with `bordered` property or `helpText` slot content, will apply red color to both.
 * @attr { Boolean } inset - If declared, will apply padding around trigger slot content.
 * @attr { Boolean } rounded - If declared, will apply border-radius to trigger and default slots.
 * @attr { Boolean } toggle - If declared, the trigger will toggle the show/hide state of the dropdown.
 * @prop { Boolean } isPopoverVisible - If true, the dropdown bib is displayed.
 * @slot - Default slot for the popover content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @slot trigger - Defines the content of the trigger.
 */
class AuroDropdown extends LitElement {
  constructor() {
    super();

    this.isPopoverVisible = false;

    this.privateDefaults();
  }

  /**
   * @private
   * @returns {void} Internal defaults.
   */
  privateDefaults() {
    this.placement = 'bottom-start';
    this.bordered = false;
    this.chevron = false;
    this.disabled = false;
    this.error = false;
    this.inset = false;
    this.rounded = false;
    this.toggle = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      bordered: { type: Boolean },
      chevron:  { type: Boolean },
      disabled: { type: Boolean },
      error:    { type: Boolean },
      inset:    { type: Boolean },
      rounded:  { type: Boolean },
      toggle:   { type: Boolean },

      /**
       * @private
       */
      dropdownWidth: { type: Number },

      /**
       * @private
       */
      placement:     { type: String },

      /**
       * @private
       */
      ariaLabel: { type: String },

      /**
       * @private
       */
      ariaLabelledby: { type: String }
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

  /**
   * @private
   * @returns {void} Updates the trigger `aria-label` or `aria-labelledby`.
   */
  processAriaLabel() {
    this.trigger = this.shadowRoot.querySelector(`#trigger`);

    if (this.getAttribute('aria-label')) {
      // If custom aria-label declared at root apply it to the trigger
      this.ariaLabel = this.getAttribute('aria-label');
    } else if (this.getAttribute('aria-labelledby')) {
      // Else if custom aria-labelledby declared at root apply it to trigger
      this.ariaLabelledby = this.getAttribute('aria-labelledby');
    } else {
      // Else, if the label slot has content use that as `aria-labelledby`
      const labelNodes = this.shadowRoot.querySelector(`#trigger .label slot`).assignedNodes();
      const [labelEl] = labelNodes;

      if (labelEl) {
        this.ariaLabelledby = 'triggerLabel';
      }
    }
  }

  firstUpdated() {
    this.processAriaLabel();
    this.fixWidth();

    this.trigger = this.shadowRoot.querySelector(`#trigger`);
    this.triggerChevron = this.shadowRoot.querySelector(`#showStateIcon`);
    this.popover = this.shadowRoot.querySelector('#popover');
    this.popper = new Popover(this.trigger, this.popover, this.placement);

    const offClick = (event) => {
      // Hide the dropdown content if we clicked anywhere outside auro-dropdown
      const expectedIndex = -1;
      if (event.composedPath().indexOf(this) === expectedIndex) {
        document.removeEventListener('click', offClick);
        this.toggleHide();
      }
    };

    const handleShow = () => {
      document.addEventListener('click', offClick);
      this.toggleShow();
    };

    const toggleDropdown = () => {
      if (this.isPopoverVisible) {
        this.toggleHide();
      } else {
        handleShow();
      }
    };

    const hideByKeyboard = (event) => {
      const key = event.key.toLowerCase();

      if (key === 'escape') {
        this.toggleHide();
      }
    };

    const showByKeyboard = (event) => {
      const key = event.key.toLowerCase();
      if (key === ' ' || key === 'enter') {
        event.preventDefault();
        handleShow();
      }
    };

    const toggleByKeyboard = (event) => {
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
      <div
        id="trigger"
        class="trigger"
        role="button"
        aria-label="${ifDefined(this.ariaLabel)}"
        aria-labelledby="${ifDefined(this.ariaLabelledby)}"
        data-trigger-placement="${this.placement}">
        <div class="triggerContentWrapper">
          <div class="label" id="triggerLabel">
            <slot name="label"></slot>
          </div>
          <div class="triggerContent" chevron=${this.chevron}>
            <slot name="trigger"></slot>
          </div>
        </div>
        ${this.chevron ? html`
          <div id="showStateIcon">
            <auro-icon
              category="interface"
              name="chevron-down"
              customColor>
            </auro-icon>
          </div>
        ` : undefined}
      </div>
      <div class="helpText">
        <slot name="helpText"></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dropdown")) {
  customElements.define("auro-dropdown", AuroDropdown);
}
