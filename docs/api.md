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
| `rounded`          | `rounded`          | ` Boolean ` |         | If declared, will apply border-radius to trigger and default slots. |
| `toggle`           | `toggle`           | ` Boolean ` |         | If declared, the trigger will toggle the show/hide state of the dropdown. |

## Methods

| Method         | Type                    | Description                                      |
|----------------|-------------------------|--------------------------------------------------|
| `hide`         | `(): void`              | Hides the dropdown content.                      |
| `outsideClick` | `(event: Object): void` | **event**: Event passed in from the document click event listener that this function gets attached to. |
| `show`         | `(): void`              | Shows the dropdown content.                      |

## Events

| Event             | Type                                  |
|-------------------|---------------------------------------|
| `dropdownToggled` | `CustomEvent<{ expanded: boolean; }>` |

## Slots

| Name       | Description                           |
|------------|---------------------------------------|
|            | Default slot for the popover content. |
| `helpText` | Defines the content of the helpText.  |
| `label`    | Defines the content of the label.     |
| `trigger`  | Defines the content of the trigger.   |
