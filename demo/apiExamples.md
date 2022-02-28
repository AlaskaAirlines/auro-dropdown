

# auro-dropdown

## Properties

| Property   | Attribute  | Type        | Description                                      |
|------------|------------|-------------|--------------------------------------------------|
| [bordered](#bordered) | `bordered` | ` Boolean ` | If declared, applies a border around the trigger slot. |
| [chevron](#chevron)  | `chevron`  | ` Boolean ` | If declared, the dropdown displays an display state chevron on the right. |
| [disabled](#disabled) | `disabled` | ` Boolean ` | If declared, the dropdown is not interactive.    |
| [error](#error)    | `error`    | ` Boolean ` | If declared in combination with `bordered` property or `helpText` slot content, will apply red color to both. |
| [inset](#inset)    | `inset`    | ` Boolean ` | If declared, will apply padding around trigger slot content. |
| [rounded](#rounded)  | `rounded`  | ` Boolean ` | If declared, will apply border-radius to trigger and default slots. |
| [toggle](#toggle)   | `toggle`   | ` Boolean ` | If declared, the trigger will toggle the show/hide state of the dropdown. |

## Methods

| Method | Type       | Description                 |
|--------|------------|-----------------------------|
| [hide](#hide) | `(): void` | Hides the dropdown content. |

## Events

| Event             | Type                                             |
|-------------------|--------------------------------------------------|
| [dropdownToggled](#dropdownToggled) | `CustomEvent<{ expanded: boolean \| undefined; }>` |

## Slots

| Name       | Description                           |
|------------|---------------------------------------|
|            | Default slot for the popover content. |
| [helpText](#helpText) | Defines the content of the helpText.  |
| [label](#label)    | Defines the content of the label.     |
| [trigger](#trigger)  | Defines the content of the trigger.   |

## API Examples

### Basic
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

### Property Examples

#### <a name="bordered"></a>bordered

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

#### <a name="chevron"></a>chevron

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

#### <a name="disabled"></a>disabled

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
    <span slot="helpText">
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
  <span slot="helpText">
    Helper text
  </span>
  <span slot="label">
    Name
  </span>
</auro-dropdown>
```

</auro-accordion>

#### <a name="error"></a>error

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

#### <a name="inset"></a>inset

The `inset` property applies a predefined amount of CSS `padding` to the `trigger` slot content.

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

#### <a name="rounded"></a>rounded

The `rounded` property applies `border-radius` CSS to the trigger and default slot content.

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

#### <a name="toggle"></a>toggle

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

#### <a name="trigger"></a>trigger & default

All examples shown on this page include default and `trigger` slot content.

#### <a name="label"></a>label

Content defined in the `label` slot will be rendered left aligned inside the trigger above all other defined trigger slot content.

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

#### <a name="helpText"></a>helpText

Content defined in the `helpText` slot will be rendered left aligned below the trigger.

<div class="exampleWrapper">
  <auro-dropdown
    inset
    bordered
    rounded>
    Lorem ipsum solar
    <span slot="helpText">
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
  <span slot="helpText">
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

#####

When combined with the `error` property the `helpText` slot content is colored red.

<div class="exampleWrapper">
  <auro-dropdown
    inset
    bordered
    rounded
    error>
    Lorem ipsum solar
    <span slot="helpText">
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
  <span slot="helpText">
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

### Method Examples

#### <a name="hide"></a>hide

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
</auro-accordion>

### Other Examples

#### <a name="Width"></a>Width inheritance

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
