<!--
The index.md file is a compiled document. No edits should be made directly to this file.

index.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Dropdown

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Dropdown use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/common.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common use with aria-labelledby

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `aria-labelledby` attribute to identify the element that labels the element it is applied to.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonLabelledby.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonLabelledby.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


## Common use using the label content slot

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the `slot` content container to define a string value that labels the interactive element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common use with popover content wider than the trigger

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally the trigger is full width of the containing element and the popover content is set to a width wider than the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/widerPopover.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/widerPopover.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common use with popover width matching the trigger

This common example uses the default `auro-dropdown` element with the attributes of `bordered` `rounded` `inset` `toggle` and `chevron`. Additionally  `matchWidth` attribute is used to make the popover match the width of the trigger.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/commonMatchWidth.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonMatchWidth.html) -->
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

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-dropdown` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroDropdown.register(name)` method and pass in a unique name.

```js
import { AuroDropdown } from './src/auro-dropdown.js';

AuroDropdown.register('custom-dropdown');
```

This will create a new custom element that you can use in your HTML that will function identically to the `<auro-dropdown>` element.

<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
