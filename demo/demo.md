# Dropdown

The Auro Design System fully supports `top` and `bottom` placed popovers. The following examples illustrate common popover uses followed up by code examples.

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

## Default Example

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="defaultExampleTrigger" id="defaultExample">
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="defaultExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="defaultExampleTrigger" id="defaultExample">
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="defaultExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using a button trigger

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="buttonExampleTrigger" id="buttonExample">
    <p>Lorem ipsum solar</p>
    <auro-button slot="trigger" id="buttonExampleTrigger">
      Dropdown
    </auro-button>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="buttonExampleTrigger" id="buttonExample">
    <p>Lorem ipsum solar</p>
    <auro-button slot="trigger" id="buttonExampleTrigger">
      Dropdown
    </auro-button>
  </auro-dropdown>
  ```

</auro-accordion>

## Example with input trigger

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="inputExampleTrigger" id="inputExample">
    <div>
      <p>Lorem ipsum solar</p>
      <auro-button id="buttonInputExample" onclick="document.querySelector('#auroDropdown1').hide()">Dismiss Dropdown</auro-button>
    </div>
    <auro-input slot="trigger" label="Name" id="inputExampleTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="inputExampleTrigger" id="inputExample">
    <div>
      <p>Lorem ipsum solar</p>
      <auro-button id="buttonInputExample" onclick="document.querySelector('#auroDropdown1').hide()">Dismiss Dropdown</auro-button>
    </div>
    <auro-input slot="trigger" label="Name" id="inputExampleTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
  ```

</auro-accordion>

## Example with fixedWidth

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="fixedWidthTrigger" id="fixedWidth" fixedWidth="500px">
    <p>Lorem ipsum solar</p>
    <auro-input slot="trigger" label="Name" id="fixedWidthTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="fixedWidthTrigger" id="fixedWidth" fixedWidth="500px">
    <p>Lorem ipsum solar</p>
    <auro-input slot="trigger" label="Name" id="fixedWidthTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using toggle attribute

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="toggleExampleTrigger" id="toggleExample" toggle>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="toggleExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="toggleExampleTrigger" id="toggleExample" toggle>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="toggleExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Disabled Example

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="disabledExampleTrigger" id="disabledExample" disabled>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="disabledExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="disabledExampleTrigger" id="disabledExample" disabled>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="disabledExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using bordered attribute

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="borderedExampleTrigger" id="borderedExample" bordered>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="borderedExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="borderedExampleTrigger" id="borderedExample" bordered>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="borderedExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using rounded attribute

_Note: best combined with bordered attribute_

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="roundedExampleTrigger" id="roundedExample" bordered rounded inset>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="roundedExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="roundedExampleTrigger" id="roundedExample" bordered rounded inset>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="roundedExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using inset attribute

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="insetExampleTrigger" id="insetExample" inset>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="insetExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="insetExampleTrigger" id="insetExample" inset>
    <p>Lorem ipsum solar</p>
    <div slot="trigger" id="insetExampleTrigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using hide method programmatically

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="hideExampleTrigger" id="hideExample" fixedWidth="500px">
    <div>
      <p>Lorem ipsum solar</p>
      <auro-button id="buttonHideExample" onclick="document.querySelector('#hideExample').hide()">Dismiss Dropdown</auro-button>
    </div>
    <auro-input slot="trigger" label="Name" id="hideExampleTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown for="hideExampleTrigger" id="hideExample" fixedWidth="500px">
    <div>
      <p>Lorem ipsum solar</p>
      <auro-button id="buttonHideExample" onclick="document.querySelector('#hideExample').hide()">Dismiss Dropdown</auro-button>
    </div>
    <auro-input slot="trigger" label="Name" id="hideExampleTrigger" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
  ```

</auro-accordion>
