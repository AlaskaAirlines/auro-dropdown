

# auro-dropdown

## Properties

| Property   | Attribute  | Type        | Description                                      |
|------------|------------|-------------|--------------------------------------------------|
| [bordered](#bordered) | `bordered` | ` Boolean ` | If declared, applies a border around the trigger slot. |
| [chevron](#chevron)  | `chevron`  | ` Boolean ` | If declared, the dropdown displays an display state chevron on the right. |
| [disabled](#disabled) | `disabled` | ` Boolean ` | If declared, the dropdown is not interactive.    |
| [error](#error)    | `error`    | ` Boolean ` | If declared in combination with `bordered` property or `helperText` slot content, will apply red color to both. |
| [inset](#inset)    | `inset`    | ` Boolean ` | If declared, will apply padding around trigger slot content. |
| [rounded](#rounded)  | `rounded`  | ` Boolean ` | If declared, will apply border-radius to trigger and default slots. |
| [toggle](#toggle)   | `toggle`   | ` Boolean ` | If declared, the trigger will toggle the show/hide state of the dropdown. |

## Methods

| Method | Type       | Description                 |
|--------|------------|-----------------------------|
| [hide](#hide) | `(): void` | Hides the dropdown content. |
| [show](#show) | `(): void` | Shows the dropdown content. |

## Events

| Event             | Type                                             |
|-------------------|--------------------------------------------------|
| [dropdownToggled](#dropdownToggled) | `CustomEvent<{ expanded: boolean \| undefined; }>` |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the popover content.  |
| [helperText](#helperText) | Defines the content of the helperText. |
| [label](#label)      | Defines the content of the label.      |
| [trigger](#trigger)    | Defines the content of the trigger.    |

## API Examples

### Basic

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

### Property Examples

#### <a name="bordered"></a>`bordered`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

#### <a name="chevron"></a>`chevron`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

#### <a name="disabled"></a>`disabled`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

#### <a name="error"></a>`error`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
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

#### <a name="inset"></a>`inset`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `inset` property applies a predefined amount of CSS `padding` to the `trigger` slot content.

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

#### <a name="rounded"></a>`rounded`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `rounded` property applies `border-radius` CSS to the trigger and default slot content.

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

#### <a name="toggle"></a>`toggle`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
In cases where it is desired behavior for `auro-dropdown` to hide already displayed dropdown content when clicking on the trigger the `toggle` attribute must be applied.

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

### Slot Examples

#### <a name="trigger"></a>`trigger`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a> & default

All examples shown on this page include default and `trigger` slot content.

#### <a name="label"></a>`label`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Content defined in the `label` slot will be rendered left aligned inside the trigger above all other defined trigger slot content.

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

#### <a name="helperText"></a>`helperText`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Content defined in the `helperText` slot will be rendered left aligned below the trigger.

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

#####

When combined with the `error` property the `helperText` slot content is colored red.

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

### Method Examples

#### <a name="hide"></a>`hide`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `hide` method can be called from within the default slot content. This is useful for cases such as `auro-dropdownmenu`.

The `hide` method may also be called from anywhere in your code by executing `document.querySelector('#idOfTheDropdownElement').hide()`.

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
</auro-dropdown>
```

</auro-accordion>

#### <a name="show"></a>`show`<a href="#auro-dropdown" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
The `show` method is available for any situation where the dropdown needs to be displayed without manual user interaction. The `show` method may be called from anywhere in your code by executing `document.querySelector('#idOfTheDropdownElement').show()`.

<div class="exampleWrapper">
  <auro-dropdown id="showHideExample" rounded bordered inset>
    <p>
      Lorem ipsum solar
    </p>
    <auro-input
      slot="trigger"
      id="showHideExampleTrigger">
    </auro-input>
  </auro-dropdown>
  <br />
  <auro-button onclick="document.querySelector('#showHideExample').show()">
    Show Dropdown
  </auro-button>
  <auro-button onclick="document.querySelector('#showHideExample').hide()">
    Hide Dropdown
  </auro-button>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown id="showHideExample" rounded bordered inset>
  <p>
    Lorem ipsum solar
  </p>
  <auro-input
    slot="trigger"
    id="showHideExampleTrigger">
  </auro-input>
</auro-dropdown>
<br />
<auro-button onclick="document.querySelector('#showHideExample').show()">
  Show Dropdown
</auro-button>
<auro-button onclick="document.querySelector('#showHideExample').hide()">
  Hide Dropdown
</auro-button>
```

</auro-accordion>

### Other Examples

#### Width inheritance

`auro-dropdown` will consume all available width of the parent container. `auro-dropdown` can be made narrower by wrapping it in a container of the desired width.

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
