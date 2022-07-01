// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit-a11y/click-events-have-key-events, max-lines */

import { LitElement, html, css } from "lit-element";
import styleCss from "./style-css.js";
import Popover from "../lib/popover";

/**
 * @attr { Boolean } bordered - If declared, applies a border around the trigger slot.
 * @attr { Boolean } chevron - If declared, the dropdown displays an display state chevron on the right.
 * @attr { Boolean } disabled - If declared, the dropdown is not interactive.
 * @attr { Boolean } disableEventShow - If declared, the dropdown will only show by calling the API .show() public method.
 * @attr { Boolean } error - If declared in combination with `bordered` property or `helpText` slot content, will apply red color to both.
 * @attr { Boolean } inset - If declared, will apply padding around trigger slot content.
 * @attr { Boolean } rounded - If declared, will apply border-radius to trigger and default slots.
 * @attr { Boolean } toggle - If declared, the trigger will toggle the show/hide state of the dropdown.
 * @prop { Boolean } isPopoverVisible - If true, the dropdown bib is displayed.
 * @prop {Boolean} ready - When false the component API should not be called.
 * @slot - Default slot for the popover content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @slot trigger - Defines the content of the trigger.
 * @csspart trigger - The trigger content container.
 * @csspart chevron - The collapsed/expanded state icon container.
 * @csspart helpText - The helpText content container.
 * @csspart popover - The bib content container.
 * @fires auroDropdown-triggerClick - Notifies that the trigger has been clicked.
 * @fires dropdownToggled - (DEPRECATED) Notifies that the visibility of the dropdown bib has changed.
 * @fires auroDropdown-ready - Notifies that the component has finished initializing.
 * @fires auroDropdown-toggled - Notifies that the visibility of the dropdown bib has changed.
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
    this.bordered = false;
    this.chevron = false;
    this.disabled = false;
    this.error = false;
    this.inset = false;
    this.placement = 'bottom-start';
    this.rounded = false;
    this.ready = false;
    this.tabIndex = 0;
    this.toggle = false;
  }

  // function to define props used within the scope of this component
  static get properties() {

    return {
      bordered: {
        type: Boolean,
        reflect: true
      },
      chevron: {
        type: Boolean,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      error: {
        type: Boolean,
        reflect: true
      },
      inset: {
        type: Boolean,
        reflect: true
      },
      rounded: {
        type: Boolean,
        reflect: true
      },
      toggle:           { type: Boolean },
      isPopoverVisible: { type: Boolean },
      ready:            { type: Boolean },

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
          this.tabIndex = -1;

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
    this.trigger.setAttribute('aria-expanded', this.isPopoverVisible);

    this.triggerChevron = this.shadowRoot.querySelector(`#showStateIcon`);

    this.popover = this.shadowRoot.querySelector('#popover');
    this.popper = new Popover(this.trigger, this.popover, this.placement);

    const handleShow = () => {
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
        toggleDropdown(); /* eslint-disable-line no-unused-expressions */
      }
    };

    const notifyTriggerClicked = () => {
      const event = new CustomEvent('auroDropdown-triggerClick', {
        composed: true
      });

      this.dispatchEvent(event);
    };

    if (!this.hasAttribute('disableEventShow')) {
      if (this.toggle) {
        this.trigger.addEventListener('click', toggleDropdown);
        this.trigger.addEventListener('keydown', toggleByKeyboard);
      } else {
        this.trigger.addEventListener('click', handleShow);
        this.trigger.addEventListener('keydown', showByKeyboard);
      }
    } else {
      this.trigger.addEventListener('click', notifyTriggerClicked);
      this.trigger.addEventListener('keydown', notifyTriggerClicked);
    }

    this.trigger.addEventListener('keydown', hideByKeyboard);
    this.popover.addEventListener('keydown', hideByKeyboard);

    this.notifyReady();
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroDropdown-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
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
      // Close any dropdown that is already open
      if (document.expandedAuroDropdown) {
        document.expandedAuroDropdown.hide();
      }

      document.expandedAuroDropdown = this;
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
   * @returns {void} Dispatches event with an object showing the state of the dropdown.
   */
  dispatchEventDropdownToggle() {
    const eventDeprecated = new CustomEvent('dropdownToggled', {
      detail: {
        expanded: this.isPopoverVisible,
      },
      composed: true
    });

    this.dispatchEvent(eventDeprecated);

    const event = new CustomEvent('auroDropdown-toggled', {
      detail: {
        expanded: this.isPopoverVisible,
      },
      composed: true
    });

    this.dispatchEvent(event);
  }

  /**
   * @param {Object} event - Event passed in from the document click event listener that this function gets attached to.
   * @returns {void} Method used to close the dropdown bib when clicking in the view outside the dropdown.
   */
  outsideClick(event) {
    // Dropdown content is hidden when a user clicks outside the element.
    const expectedIndex = -1;

    if (event.composedPath().indexOf(document.expandedAuroDropdown) === expectedIndex) {
      document.expandedAuroDropdown.hide();
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('isPopoverVisible')) {
      this.trigger = this.shadowRoot.querySelector(`#trigger`);
      this.trigger.setAttribute('aria-expanded', this.isPopoverVisible);

      if (this.isPopoverVisible) {
        document.addEventListener('click', document.expandedAuroDropdown.outsideClick);
      } else if (document.expandedAuroDropdown) {
        document.removeEventListener('click', document.expandedAuroDropdown.outsideClick);
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div
        id="trigger"
        class="trigger"
        part="trigger"
        role="button"
        aria-labelledby="triggerLabel"
        aria-controls="popover"
        data-trigger-placement="${this.placement}"
        tabindex="${this.tabIndex}">
        <div class="triggerContentWrapper">
          <label class="label" id="triggerLabel">
            <slot name="label"></slot>
          </label>
          <div class="triggerContent" chevron=${this.chevron}>
            <slot
              name="trigger"
              @slotchange="${this.handleTriggerTabIndex()}"></slot>
          </div>
        </div>
        ${this.chevron ? html`
          <div
            id="showStateIcon"
            part="chevron">
            <auro-icon
              category="interface"
              name="chevron-down"
              customColor>
            </auro-icon>
          </div>
        ` : undefined}
      </div>
      <div
        class="helpText"
        part="helpText">
        <slot name="helpText"></slot>
      </div>
      <div
        id="popover"
        class="popover"
        part="popover"
        aria-live="polite"
        style=${`min-width: ${this.dropdownWidth}px;`}>
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
