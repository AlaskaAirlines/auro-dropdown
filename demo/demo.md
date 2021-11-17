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

## Default examples

<div class="exampleWrapper">
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      <auro-icon category="interface" name="arrow-down"></auro-icon>
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <auro-button slot="trigger" fluid>
      Dropdown
    </auro-button>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <auro-button slot="trigger" fluid>
      Dropdown
    </auro-button>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <auro-input
      slot="trigger"
      label="Name"
      id="inputExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown>
    <span>
      Lorem ipsum solar
    </span>
    <auro-input
      slot="trigger"
      label="Name"
      id="inputExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
  ```

</auro-accordion>

## Examples with state chevron

<div class="exampleWrapper">
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      <auro-icon category="interface" name="arrow-down"></auro-icon>
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <auro-button slot="trigger" fluid>
      Dropdown
    </auro-button>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <auro-button slot="trigger" fluid>
      Dropdown
    </auro-button>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <auro-input
      slot="trigger"
      label="Name"
      id="inputExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown chevron>
    <span>
      Lorem ipsum solar
    </span>
    <auro-input
      slot="trigger"
      label="Name"
      id="inputExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using toggle attribute

<div class="exampleWrapper">
  <auro-dropdown toggle>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown toggle>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using bordered attribute

<div class="exampleWrapper">
  <auro-dropdown bordered>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown bordered>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown bordered chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown bordered chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using rounded attribute

_Note: best combined with bordered attribute_

<div class="exampleWrapper">
  <auro-dropdown bordered rounded>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown bordered rounded>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown bordered rounded chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown bordered rounded chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using inset attribute

<div class="exampleWrapper">
  <auro-dropdown inset>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown inset>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Disabled Example

<div class="exampleWrapper">
  <auro-dropdown disabled>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown disabled>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown disabled rounded bordered>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown disabled rounded bordered>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

<div class="exampleWrapper">
  <auro-dropdown disabled rounded bordered chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown disabled rounded bordered chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using hide method programmatically

<div class="exampleWrapper">
  <auro-dropdown id="hideExample">
    <span>
      Lorem ipsum solar
    </span>
    <auro-button onclick="document.querySelector('#hideExample').hide()">
      Dismiss Dropdown
    </auro-button>
    <auro-input
      slot="trigger"
      label="Name"
      id="hideExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown id="hideExample">
    <span>
      Lorem ipsum solar
    </span>
    <auro-button onclick="document.querySelector('#hideExample').hide()">
      Dismiss Dropdown
    </auro-button>
    <auro-input
      slot="trigger"
      label="Name"
      id="hideExampleTrigger"
      helptext="Please enter your full name">
    </auro-input>
  </auro-dropdown>
  ```

</auro-accordion>
