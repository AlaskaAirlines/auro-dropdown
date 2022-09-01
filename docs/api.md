# auro-dropdown

## Attributes

| Attribute          | Type        | Description                                      |
|--------------------|-------------|--------------------------------------------------|
| `disableEventShow` | ` Boolean ` | If declared, the dropdown will only show by calling the API .show() public method. |

## Properties

| Property           | Attribute          | Type        | Default | Description                                      |
|--------------------|--------------------|-------------|---------|--------------------------------------------------|
| `bordered`         | `bordered`         | ` Boolean ` |         | If declared, applies a border around the trigger slot. |
| `chevron`          | `chevron`          | ` Boolean ` |         | If declared, the dropdown displays an display state chevron on the right. |
| `disabled`         | `disabled`         | ` Boolean ` |         | If declared, the dropdown is not interactive.    |
| `error`            | `error`            | ` Boolean ` |         | If declared in combination with `bordered` property or `helpText` slot content, will apply red color to both. |
| `inset`            | `inset`            | ` Boolean ` |         | If declared, will apply padding around trigger slot content. |
| `isPopoverVisible` | `isPopoverVisible` | ` Boolean ` | false   | If true, the dropdown bib is displayed.          |
| `matchWidth`       | `matchWidth`       | ` Boolean ` | false   | If declared, the popover and trigger will be set to the same width. |
| `ready`            | `ready`            | `Boolean`   |         | When false the component API should not be called. |
| `rounded`          | `rounded`          | ` Boolean ` |         | If declared, will apply border-radius to trigger and default slots. |
| `toggle`           | `toggle`           | ` Boolean ` |         | If declared, the trigger will toggle the show/hide state of the dropdown. |

## Methods

| Method              | Type       | Description                 |
|---------------------|------------|-----------------------------|
| `assessFocusWithin` | `(): void` |                             |
| `hide`              | `(): void` | Hides the dropdown content. |
| `show`              | `(): void` | Shows the dropdown content. |
| `trackFocus`        | `(): void` |                             |

## Events

| Event                       | Type                                  | Description                                      |
|-----------------------------|---------------------------------------|--------------------------------------------------|
| `auroDropdown-ready`        | `CustomEvent<any>`                    | Notifies that the component has finished initializing. |
| `auroDropdown-toggled`      | `CustomEvent<{ expanded: boolean; }>` | Notifies that the visibility of the dropdown bib has changed. |
| `auroDropdown-triggerClick` | `CustomEvent<any>`                    | Notifies that the trigger has been clicked.      |
| `dropdownToggled`           | `CustomEvent<{ expanded: boolean; }>` | (DEPRECATED) Notifies that the visibility of the dropdown bib has changed. |

## Slots

| Name       | Description                           |
|------------|---------------------------------------|
|            | Default slot for the popover content. |
| `helpText` | Defines the content of the helpText.  |
| `label`    | Defines the content of the label.     |
| `trigger`  | Defines the content of the trigger.   |

## CSS Shadow Parts

| Part       | Description                                  |
|------------|----------------------------------------------|
| `chevron`  | The collapsed/expanded state icon container. |
| `helpText` | The helpText content container.              |
| `popover`  | The bib content container.                   |
| `trigger`  | The trigger content container.               |
