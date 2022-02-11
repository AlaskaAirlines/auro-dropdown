<!--
The demo.md file is a compiled document. No edits should be made directly to this file.

demo.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/demo.md`
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

## User Interaction

The dropdown can be opened with the following actions:

- `click` on the trigger
- Apply `focus` to the trigger and press any of the following keys:
  - `enter`
  - `spacebar`

The dropdown can be closed with the following actions:

- `click` anywhere in the document outside of the dropdown
- Call the `hide` method (useful to call from within the dropdown content)
- If the `toggle` attribute is applied the dropdown can additionally be closed by the following actions:
  - `click` on the trigger
  - Apply `focus` to the trigger and press any of the following keys:
    - `enter`
    - `spacebar`
    - `esc`

## Examples

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonBasic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/commonBasic.html -->
  <auro-dropdown id="commonBasic" bordered rounded inset chevron>
    <div style="padding: var(--auro-size-sm);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#commonBasic').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <div slot="trigger">
      <span tabindex="0">
        Trigger
      </span>
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonBasic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/commonBasic.html -->

```html
<auro-dropdown id="commonBasic" bordered rounded inset chevron>
  <div style="padding: var(--auro-size-sm);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#commonBasic').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonAdvanced.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/commonAdvanced.html -->
  <auro-dropdown id="commonAdvanced" bordered rounded inset chevron>
    <div style="padding: var(--auro-size-sm);">
      Lorem ipsum solar
      <br />
      <auro-button onclick="document.querySelector('#commonAdvanced').hide()">
        Dismiss Dropdown
      </auro-button>
    </div>
    <span slot="helpText">
      Helper text
    </span>
    <span slot="label">
      label text
    </span>
    <div slot="trigger">
      <span tabindex="0">
        Trigger
      </span>
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonAdvanced.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/commonAdvanced.html -->

```html
<auro-dropdown id="commonAdvanced" bordered rounded inset chevron>
  <div style="padding: var(--auro-size-sm);">
    Lorem ipsum solar
    <br />
    <auro-button onclick="document.querySelector('#commonAdvanced').hide()">
      Dismiss Dropdown
    </auro-button>
  </div>
  <span slot="helpText">
    Helper text
  </span>
  <span slot="label">
    label text
  </span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
