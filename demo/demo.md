<!--
The demo.md file is a compiled document. No edits should be made directly to this file.

demo.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/demo.md`
-->

# Dropdown

The `auro-dropdown` component is a trigger and dropdown element combination intended to be used with dropdown content that is interactive. `auro-dropdown` is content agnostic and any valid HTML can be placed in either the trigger or the dropdown.

_Note: if the dropdown content in your implementation is not interactive (e.g. a tooltip) [auro-popover](http://auro.alaskaair.com/components/auro/popover) may better serve your needs._

## Dropdown use cases

The `auro-dropdown` element should be used in situations where users may:

* interact with an element to get clarification on content offering
* provide definition to iconic imagery
* when interactive help is required

## Accessibility support

To meet our accessibility requirement, all uses of `auro-dropdown` should have a valid label. See the following options.

1. Use the `label` content slot
1. Use `aria-label` to insert label content that will only be read by screen readers
1. Use `aria-labeledby` to append a description from another element on the page

Not including one of the above options will result in your UI being non-compliant with Alaska's accessibility policies.

## Common use with auro-label

This first common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `aria-label` attribute is used to define a string value that labels an interactive element.

<div class="exampleWrapper">
  <auro-dropdown id="common" aria-label="Label content for screen reader" bordered rounded inset chevron>
    <div style="padding: var(--auro-size-sm);">
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
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown id="common" aria-label="Label content for screen reader" bordered rounded inset chevron>
  <div style="padding: var(--auro-size-sm);">
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

</auro-accordion>

## Common use with aria-labelledby

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `aria-labelledby` attribute to identify the element that labels the element it is applied to.

<div class="exampleWrapper">
  <p id="foo">The element is labelled by content external to the element.</p>
  <auro-dropdown id="commonAdvanced" aria-labelledby="foo" bordered rounded inset chevron>
    <div style="padding: var(--auro-size-sm);">
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
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<p id="foo">The element is labelled by content external to the element.</p>
<auro-dropdown id="commonAdvanced" aria-labelledby="foo" bordered rounded inset chevron>
  <div style="padding: var(--auro-size-sm);">
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

</auro-accordion>

## Common use using the label content slot

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `slot` content container to define a string value that labels the interactive element.

<div class="exampleWrapper">
  <auro-dropdown id="commonSlot" bordered rounded inset chevron>
    <div style="padding: var(--auro-size-sm);">
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
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown id="commonSlot" bordered rounded inset chevron>
  <div style="padding: var(--auro-size-sm);">
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

</auro-accordion>

## Supported standard and accessible interactions

The dropdown can be opened with the following actions:

1. Clicking/tapping on the trigger will open the dropdown UI.
1. Tabbing to the trigger and using the `enter` or `spacebar` keys will open the dropdown UI.

The dropdown can be closed with the following actions:

1. Clicking anywhere in the view outside of the dropdown.
1. When the `toggle` attribute is added, clicking on the trigger.
1. Programmatically via another control in the UI calling the `hide()` method (see api).
1. Using the `esc` key.
