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

<div class="exampleWrapper">
  <auro-dropdown inset rounded bordered>
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
  <auro-dropdown inset rounded bordered>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Example using label attribute

<div class="exampleWrapper">
  <auro-dropdown label="Label" bordered rounded inset chevron>
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
  <auro-dropdown label="Label" bordered rounded inset chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Examples with custom dimensions

The `auro-dropdown` trigger will fill 100% of the available width of it's parent container. The dropdown content will always be at least as wide as the trigger. If the container is narrower than the desired width of the dropdown content (e.g. using just an icon for the trigger) you may apply CSS to your dropdown content to define a custom width.

<div class="exampleWrapper" style="width: 100px;">
  <auro-dropdown inset rounded bordered chevron>
    <div style="width: 300px;">
      <img src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2" width="100%" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown inset rounded bordered chevron>
    <div style="width: 300px;">
      <img src="https://sitecore-test-single-westus2.azurewebsites.net/-/media/Images/pages/examples/ad2" width="100%" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

The dropdown container will grow in height to the size of the content. A combination of `height` or `max-height` and `overflow: scroll;` can be used to define a smaller container with larger content.

<div class="exampleWrapper" style="width: 300px;">
  <auro-dropdown inset bordered rounded chevron>
    <div style="width: 300px; max-height: 200px; overflow: scroll;">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-dropdown inset bordered rounded chevron>
    <div style="width: 300px; max-height: 200px; overflow: scroll;">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Disabled example

<div class="exampleWrapper">
  <auro-dropdown inset disabled>
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
  <auro-dropdown inset disabled>
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
  <auro-dropdown inset disabled rounded bordered chevron>
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
  <auro-dropdown inset disabled rounded bordered chevron>
    <span>
      Lorem ipsum solar
    </span>
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  ```

</auro-accordion>

## Error example

<div class="exampleWrapper">
  <auro-dropdown inset error>
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
  <auro-dropdown inset error>
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
  <auro-dropdown inset error rounded bordered>
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
  <auro-dropdown inset error rounded bordered>
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
    <p>
      Lorem ipsum solar
    </p>
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
    <p>
      Lorem ipsum solar
    </p>
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
