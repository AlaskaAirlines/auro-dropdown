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
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"></auro-icon>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-icon
      category="interface"
      name="arrow-down"></auro-icon>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"
            onDark></auro-icon>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-icon
      category="interface"
      name="arrow-down"
      onDark></auro-icon>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-button
            slot="trigger"
            fluid>
            Dropdown
          </auro-button>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-button
      slot="trigger"
      fluid>
      Dropdown
    </auro-button>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-button
            slot="trigger"
            fluid
            onDark>
            Dropdown
          </auro-button>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-button
      slot="trigger"
      fluid
      onDark>
      Dropdown
    </auro-button>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger">
          </auro-input>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-input
      slot="trigger"
      id="inputExampleTrigger">
    </auro-input>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger"
            onDark>
          </auro-input>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-input
      slot="trigger"
      id="inputExampleTrigger"
      onDark>
    </auro-input>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Examples with state chevron

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        onDark
        chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  onDark
  chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"></auro-icon>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-icon
      category="interface"
      name="arrow-down"></auro-icon>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        onDark
        chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"
            onDark></auro-icon>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  onDark
  chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-icon
      category="interface"
      name="arrow-down"
      onDark></auro-icon>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-button
            slot="trigger"
            fluid>
            Dropdown
          </auro-button>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-button
      slot="trigger"
      fluid>
      Dropdown
    </auro-button>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        onDark
        chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-button
            slot="trigger"
            fluid
            onDark>
            Dropdown
          </auro-button>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  onDark
  chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-button
      slot="trigger"
      fluid
      onDark>
      Dropdown
    </auro-button>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger">
          </auro-input>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-input
      slot="trigger"
      id="inputExampleTrigger">
    </auro-input>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        onDark
        chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger"
            onDark>
          </auro-input>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  onDark
  chevron>
  Lorem ipsum solar
  <div slot="trigger">
    <auro-input
      slot="trigger"
      id="inputExampleTrigger"
      onDark>
    </auro-input>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Example using bordered attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown bordered>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown bordered>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Example using rounded attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Example using inset attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown inset>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown inset>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        inset
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        inset
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        inset
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Error example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        error>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  error>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        error
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  error
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        inset
        error
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  error
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        inset
        error
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  error
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Example using label attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        bordered
        rounded
        inset
        chevron>
        Lorem ipsum solar
        <span slot="label">Name</span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  bordered
  rounded
  inset
  chevron>
  Lorem ipsum solar
  <span slot="label">Name</span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        bordered
        rounded
        inset
        chevron
        onDark>
        Lorem ipsum solar
        <span slot="label">Name</span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  bordered
  rounded
  inset
  chevron
  onDark>
  Lorem ipsum solar
  <span slot="label">Name</span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Example using helperText attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        inset
        bordered
        rounded>
        Lorem ipsum solar
        <span slot="helperText">
          Helper text
        </span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  bordered
  rounded>
  Lorem ipsum solar
  <span slot="helperText">
    Helper text
  </span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        inset
        bordered
        rounded
        onDark>
        Lorem ipsum solar
        <span slot="helperText">
          Helper text
        </span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  bordered
  rounded
  onDark>
  Lorem ipsum solar
  <span slot="helperText">
    Helper text
  </span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        inset
        bordered
        rounded
        error>
        Lorem ipsum solar
        <span slot="helperText">
          Helper text
        </span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  bordered
  rounded
  error>
  Lorem ipsum solar
  <span slot="helperText">
    Helper text
  </span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        inset
        bordered
        rounded
        error
        onDark>
        Lorem ipsum solar
        <span slot="helperText">
          Helper text
        </span>
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  inset
  bordered
  rounded
  error
  onDark>
  Lorem ipsum solar
  <span slot="helperText">
    Helper text
  </span>
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Disabled example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown disabled>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown disabled>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        disabled
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  disabled
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <auro-dropdown
        disabled
        chevron
        rounded
        inset
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
        <span slot="helperText">
          Helper text
        </span>
        <span slot="label">
          Name
        </span>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  disabled
  chevron
  rounded
  inset
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
  <span slot="helperText">
    Helper text
  </span>
  <span slot="label">
    Name
  </span>
</auro-dropdown>
```

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <auro-dropdown
        disabled
        chevron
        rounded
        bordered
        inset
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <span tabindex="0">
            Trigger
          </span>
        </div>
        <span slot="helperText">
          Helper text
        </span>
        <span slot="label">
          Name
        </span>
      </auro-dropdown>
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown
  disabled
  chevron
  rounded
  bordered
  inset
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
  <span slot="helperText">
    Helper text
  </span>
  <span slot="label">
    Name
  </span>
</auro-dropdown>
```

</auro-accordion>
  </div>
</div>

## Examples with custom dimensions

<div class="exampleWrapper">
  <div style="width: 100px;">
    <auro-dropdown inset bordered rounded chevron>
      <div style="width: 100px; max-height: 200px; overflow: scroll;">
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
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<div style="width: 100px;">
  <auro-dropdown inset bordered rounded chevron>
    <div style="width: 100px; max-height: 200px; overflow: scroll;">
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
```

</auro-accordion>
<div class="exampleWrapper">
  <div style="width: 300px;">
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
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<div style="width: 300px;">
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
```

</auro-accordion>

## Example using toggle attribute

<div class="exampleWrapper">
  <auro-dropdown toggle>
    Lorem ipsum solar
    <div slot="trigger">
      <span tabindex="0">
        Trigger
      </span>
    </div>
  </auro-dropdown>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown toggle>
  Lorem ipsum solar
  <div slot="trigger">
    <span tabindex="0">
      Trigger
    </span>
  </div>
</auro-dropdown>
```

</auro-accordion>

## Example using hide method programmatically

<div class="exampleWrapper">
  <auro-dropdown id="hideExample" rounded bordered inset>
    <p>
      Lorem ipsum solar
    </p>
    <auro-button onclick="document.querySelector('#hideExample').hide()">
      Dismiss Dropdown
    </auro-button>
    <auro-input
      slot="trigger"
      id="hideExampleTrigger">
    </auro-input>
    <span slot="helperText">Helper Text</span>
  </auro-dropdown>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown id="hideExample" rounded bordered inset>
  <p>
    Lorem ipsum solar
  </p>
  <auro-button onclick="document.querySelector('#hideExample').hide()">
    Dismiss Dropdown
  </auro-button>
  <auro-input
    slot="trigger"
    id="hideExampleTrigger">
  </auro-input>
  <span slot="helperText">Helper Text</span>
</auro-dropdown>
```

</auro-accordion>
