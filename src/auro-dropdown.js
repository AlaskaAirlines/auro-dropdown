// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-lines, lit-a11y/accessible-name, lit-a11y/no-aria-slot, lit/binding-positions, lit/no-invalid-html */

import { html } from "lit/static-html.js";
import { LitElement } from "lit";
import Popover from "../lib/popover.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

/**
 * @attr { Boolean } bordered - If declared, applies a border around the trigger slot.
 * @attr { Boolean } chevron - If declared, the dropdown displays an display state chevron on the right.
 * @attr { Boolean } disabled - If declared, the dropdown is not interactive.
 * @attr { Boolean } disableEventShow - If declared, the dropdown will only show by calling the API .show() public method.
 * @attr { Boolean } error - If declared in combination with `bordered` property or `helpText` slot content, will apply red color to both.
 * @attr { Boolean } matchWidth - If declared, the popover and trigger will be set to the same width.
 * @attr { Boolean } inset - If declared, will apply padding around trigger slot content.
 * @attr { Boolean } rounded - If declared, will apply border-radius to trigger and default slots.
 * @attr { Boolean } noToggle - If declared, the trigger will only show the the dropdown bib.
 * @attr { Boolean } noHideOnThisFocusLoss - If delclared, the dropdown will not hide when moving focus outside the element.
 * @prop { Boolean } isPopoverVisible - If true, the dropdown bib is displayed.
 * @prop { Boolean } ready - When false the component API should not be called.
 * @slot - Default slot for the popover content.
 * @slot label - Defines the content of the label.
 * @slot helpText - Defines the content of the helpText.
 * @slot trigger - Defines the content of the trigger.
 * @csspart trigger - The trigger content container.
 * @csspart chevron - The collapsed/expanded state icon container.
 * @csspart helpText - The helpText content container.
 * @csspart popover - The bib content container.
 * @event auroDropdown-triggerClick - Notifies that the trigger has been clicked.
 * @event dropdownToggled - (DEPRECATED) Notifies that the visibility of the dropdown bib has changed.
 * @event auroDropdown-ready - Notifies that the component has finished initializing.
 * @event auroDropdown-toggled - Notifies that the visibility of the dropdown bib has changed.
 */
export class AuroDropdown extends LitElement {
  constructor() {
    super();

    this.isPopoverVisible = false;
    this.matchWidth = false;
    this.noHideOnThisFocusLoss = false;

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
    this.noToggle = false;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);
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
      matchWidth: {
        type: Boolean,
        reflect: true
      },
      rounded: {
        type: Boolean,
        reflect: true
      },
      noToggle: {
        type: Boolean,
        reflect: true
      },
      noHideOnThisFocusLoss: {
        type: Boolean,
        reflect: true
      },
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
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-dropdown"] - The name of element that you want to register to.
   *
   * @example
   * AuroDropdown.register("custom-dropdown") // this will register this element to <custom-dropdown/>
   *
   */
  static register(name = "auro-dropdown") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDropdown);
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
    if (this.matchWidth) {
      this.dropdownWidth = this.getBoundingClientRect().width;
    }
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

  /**
   * @private
   * @returns {void} Determines if dropdown bib should be closed on focus change.
   */
  handleFocusLoss() {
    if (!this.noHideOnThisFocusLoss && !this.hasAttribute('noHideOnThisFocusLoss')) {
      document.activeElement.addEventListener('focusout', () => {
        if (document.activeElement !== document.querySelector('body') && !this.contains(document.activeElement)) {
          this.hide();
        }
      });

      document.querySelector('body').addEventListener('click', (evt) => {
        if (!evt.composedPath().includes(this)) {
          this.hide();
        }
      });
    }
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-dropdown');

    this.fixWidth();

    this.trigger = this.shadowRoot.querySelector(`#trigger`);
    this.trigger.setAttribute('aria-expanded', this.isPopoverVisible);

    this.triggerChevron = this.shadowRoot.querySelector(`#showStateIcon`);

    this.auroPopover = this.shadowRoot.querySelector('#popover');
    this.popper = new Popover(this.trigger, this.auroPopover, this.placement);

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
        toggleDropdown();
      }
    };

    const notifyTriggerClicked = () => {
      const event = new CustomEvent('auroDropdown-triggerClick', {
        composed: true
      });

      this.dispatchEvent(event);
    };

    if (!this.hasAttribute('disableEventShow')) {
      this.trigger.addEventListener('click', () => {
        this.trigger.focus();
      });
      if (this.noToggle) {
        this.trigger.addEventListener('click', handleShow);
        this.trigger.addEventListener('keydown', showByKeyboard);
      } else {
        this.trigger.addEventListener('click', toggleDropdown);
        this.trigger.addEventListener('keydown', toggleByKeyboard);
      }
    } else {
      this.trigger.addEventListener('click', notifyTriggerClicked);
      this.trigger.addEventListener('keydown', (evt) => {
        const key = evt.key.toLowerCase();

        if (key === ' ' || key === 'enter') {
          notifyTriggerClicked();
        }
      });
    }

    this.trigger.addEventListener('keydown', hideByKeyboard);
    this.auroPopover.addEventListener('keydown', hideByKeyboard);

    window.addEventListener('blur', () => {
      this.hide();
    });

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

      this.handleFocusLoss();

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

  updated(changedProperties) {
    if (changedProperties.has('isPopoverVisible')) {
      this.trigger.setAttribute('aria-expanded', this.isPopoverVisible);
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
            <${this.iconTag}
              category="interface"
              name="chevron-down"
              customColor
              ?disabled=${this.disabled}
              >
            </${this.iconTag}>
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
