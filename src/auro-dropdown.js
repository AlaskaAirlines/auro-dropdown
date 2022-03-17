// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit-a11y/click-events-have-key-events, max-lines */

import { LitElement, html, css } from "lit-element";

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
    this.tabIndex = 0;
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
      tabIndex: { type: Number }
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
   * @returns {void} Automatically defines tabindex where needed for trigger content.
   */
  handleTriggerTabIndex() {
    const triggerSlotContentRoot = this.querySelector('[slot="trigger"');

    // Don't overwrite any tabindex coded directly into the slotted trigger content
    if (!triggerSlotContentRoot.getAttribute('tabindex')) {
      const focusableElementSelectors = [
        'a',
        'button',
        'input:not([type="hidden])',
        'select',
        'textarea',
        '[tabindex]:not([tabindex="-1"])',
        'auro-button',
        'auro-input',
        'auro-hyperlink'
      ];

      focusableElementSelectors.forEach((selector) => {
        // check if the trigger root element itself is focusable
        if (triggerSlotContentRoot.matches(selector)) {
          this.tabIndex = 0;

          return;
        }

        // check if any child content is focusable
        if (triggerSlotContentRoot.querySelector(selector)) {
          this.tabIndex = -1;
        }
      });
    }
  }

  firstUpdated() {
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
        event.preventDefault();
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
    this.popover.addEventListener('keydown', hideByKeyboard);
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
      <div
        id="trigger"
        class="trigger"
        role="button"
        data-trigger-placement="${this.placement}"
        tabindex="${this.tabIndex}">
        <div class="triggerContentWrapper">
          <label class="label" id="triggerLabel">
            <slot name="label"></slot>
          </label>
          <div class="triggerContent" chevron=${this.chevron} aria-labelledby="triggerLabel">
            <slot
              name="trigger"
              @slotchange="${this.handleTriggerTabIndex()}"></slot>
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
      <div id="popover" class="popover" aria-live="polite" style=${`min-width: ${this.dropdownWidth}px;`}>
        <slot role="tooltip"></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dropdown")) {
  customElements.define("auro-dropdown", AuroDropdown);
}
