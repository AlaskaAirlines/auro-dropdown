<!--
The index.md file is a compiled document. No edits should be made directly to this file.

index.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Dropdown

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `auro-dropdown` component is a trigger and dropdown element combination intended to be used with dropdown content that is interactive. `auro-dropdown` is content agnostic and any valid HTML can be placed in either the trigger or the dropdown.

_Note: if the dropdown content in your implementation is not interactive (e.g. a tooltip) [auro-popover](http://auro.alaskaair.com/components/auro/popover) may better serve your needs._
<!-- AURO-GENERATED-CONTENT:END -->

## Dropdown use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `auro-dropdown` element should be used in situations where users may:

* interact with an element to get clarification on content offering
* provide definition to iconic imagery
* when interactive help is required
<!-- AURO-GENERATED-CONTENT:END -->

## Accessibility support

To meet our accessibility requirement, all uses of `auro-dropdown` should have a valid label. See the following options.

1. Use the `label` content slot
1. Use `aria-label` to insert label content that will only be read by screen readers
1. Use `aria-labeledby` to append a description from another element on the page

Not including one of the above options will result in your UI being non-compliant with Alaska's accessibility policies.

## Common use with auro-label

This first common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `aria-label` attribute is used to define a string value that labels an interactive element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/common.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/common.html -->
  <auro-dropdown id="common" common aria-label="Label content for screen reader">
    <div style="padding: var(--ds-size-150);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#common').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Help text
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/common.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/common.html -->

```html
<auro-dropdown id="common" common aria-label="Label content for screen reader">
  <div style="padding: var(--ds-size-150);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#common').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Help text
  </span>
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common use with aria-labelledby

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `aria-labelledby` attribute to identify the element that labels the element it is applied to.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonLabelledby.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/commonLabelledby.html -->
  <p id="foo">The element is labelled by content external to the element.</p>
  <auro-dropdown id="commonAdvanced" aria-labelledby="foo" bordered rounded inset chevron>
    <div style="padding: var(--ds-size-150);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#commonAdvanced').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Help text
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonLabelledby.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/commonLabelledby.html -->

```html
<p id="foo">The element is labelled by content external to the element.</p>
<auro-dropdown id="commonAdvanced" aria-labelledby="foo" bordered rounded inset chevron>
  <div style="padding: var(--ds-size-150);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#commonAdvanced').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Help text
  </span>
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common use using the label content slot

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `slot` content container to define a string value that labels the interactive element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonSlot.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/commonSlot.html -->
  <auro-dropdown id="commonSlot" bordered rounded inset chevron>
    <div style="padding: var(--ds-size-150);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#commonSlot').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Help text
    </span>
    <span slot="label">
      Element label (default text will be read by screen reader)
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonSlot.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/commonSlot.html -->

```html
<auro-dropdown id="commonSlot" bordered rounded inset chevron>
  <div style="padding: var(--ds-size-150);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#commonSlot').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Help text
  </span>
  <span slot="label">
    Element label (default text will be read by screen reader)
  </span>
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common use with popover content wider than the trigger

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the trigger is full width of the containing element and the popover content is set to a width wider than the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/widerPopover.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/widerPopover.html -->
  <div style="width: 250px;">
    <auro-dropdown common aria-label="Label content for screen reader">
      <div style="padding: var(--ds-size-150); width: 500px;">
        This is special content.
      </div>
      <span slot="helpText">
        Help text
      </span>
      <div slot="trigger">
        Trigger
      </div>
    </auro-dropdown>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/widerPopover.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/widerPopover.html -->

```html
<div style="width: 250px;">
  <auro-dropdown common aria-label="Label content for screen reader">
    <div style="padding: var(--ds-size-150); width: 500px;">
      This is special content.
    </div>
    <span slot="helpText">
      Help text
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common use with popover width matching the trigger

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally  `matchWidth` attribute is used to make the popover match the width of the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonMatchWidth.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/commonMatchWidth.html -->
  <auro-dropdown id="common" common matchWidth aria-label="Label content for screen reader">
    <div style="padding: var(--ds-size-150);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#common').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Help text
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonMatchWidth.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/commonMatchWidth.html -->

```html
<auro-dropdown id="common" common matchWidth aria-label="Label content for screen reader">
  <div style="padding: var(--ds-size-150);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#common').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Help text
  </span>
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Supported standard and accessible interactions

The dropdown can be opened with the following actions:

1. Clicking/tapping on the trigger.
1. Tabbing to the trigger and using the `enter` or `spacebar` keys.
1. Programmatically via another control in the UI calling the `show()` method (see api).

The dropdown can be closed with the following actions:

1. Clicking anywhere in the view outside of the dropdown.
1. Clicking on the trigger when the `toggle` attribute is used.
1. Using the `esc` key.
1. Programmatically via another control in the UI calling the `hide()` method (see api).

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-dropdown` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import { AuroDropdown } from './src/auro-dropdown.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-dropdown', AuroDropdown);
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-dropdown>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <custom-dropdown id="common" common aria-label="Label content for screen reader">
    <div style="padding: var(--ds-size-150);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#common').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Help text
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </custom-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<custom-dropdown id="common" common aria-label="Label content for screen reader">
  <div style="padding: var(--ds-size-150);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#common').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Help text
  </span>
  <div slot="trigger">
    Trigger
  </div>
</custom-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
