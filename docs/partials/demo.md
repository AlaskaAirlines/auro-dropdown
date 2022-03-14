<!--
The demo.md file is a compiled document. No edits should be made directly to this file.

demo.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from `./docs/partials/demo.md`
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
<auro-accordion lowProfile justifyRight>
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
<auro-accordion lowProfile justifyRight>
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
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/commonSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

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
