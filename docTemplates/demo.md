# Dropdown

The `auro-dropdown` component is a trigger and dropdown element combination intended to be used with dropdown content that is interactive. `auro-dropdown` is content agnostic and any valid HTML can be placed in either the trigger or the dropdown.

See [install instructions](https://auro.alaskaair.com/components/auro/popover/install) for more information as how to install and full API for the `auro-dropdown` element.

## Interaction

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

## Dropdown use cases

The `auro-dropdown` element should be used in situations where users may:

* interact with an element to get clarification on content offering
* provide definition to iconic imagery
* when helper text is required

Auro popover allows two ways to layout the HTML. Please see the following examples.

## Default examples

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicIcon.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicIcon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicIcon-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicIcon-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButton.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicButton.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButton-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicButton-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicInput.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicInput.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicInput-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicInput-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Examples with state chevron

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronIcon.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronIcon.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronIcon-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronIcon-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronButton.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronButton.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronButton-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronButton-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronInput.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronInput.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronInput-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronInput-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using bordered attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/bordered.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/bordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/bordered-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/bordered-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using rounded attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/rounded.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/rounded.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/rounded-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/rounded-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using inset attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/insetBordered.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/insetBordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/insetBordered-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/insetBordered-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Error example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/errorBordered.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/errorBordered.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/errorBordered-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/errorBordered-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using label attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using helperText attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperText.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperText.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperText-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperText-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperTextError.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperTextError.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperTextError-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperTextError-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Disabled example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledAll.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledAll.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledAll-onDark.html) -->
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledAll-onDark.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Examples with custom dimensions

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customDimensions100.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customDimensions100.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customDimensions300.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customDimensions300.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example using toggle attribute

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggle.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example using hide method programmatically

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/programmaticallyHide.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/programmaticallyHide.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
