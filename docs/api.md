# auro-dropdown

## Properties

| Property   | Attribute  | Type        | Description                                      |
|------------|------------|-------------|--------------------------------------------------|
| `bordered` | `bordered` | ` Boolean ` | If declared, applies a border around the trigger slot. |
| `chevron`  | `chevron`  | ` Boolean ` | If declared, the dropdown displays an display state chevron on the right. |
| `disabled` | `disabled` | ` Boolean ` | If declared, the dropdown is not interactive.    |
| `error`    | `error`    | ` Boolean ` | If declared in combination with `bordered` property or `helperText` slot content, will apply red color to both. |
| `inset`    | `inset`    | ` Boolean ` | If declared, will apply padding around trigger slot content. |
| `rounded`  | `rounded`  | ` Boolean ` | If declared, will apply border-radius to trigger and default slots. |
| `toggle`   | `toggle`   | ` Boolean ` | If declared, the trigger will toggle the show/hide state of the dropdown. |

## Methods

| Method | Type       | Description                 |
|--------|------------|-----------------------------|
| `hide` | `(): void` | Hides the dropdown content. |
| `show` | `(): void` | Shows the dropdown content. |

## Events

| Event             | Type                                             |
|-------------------|--------------------------------------------------|
| `dropdownToggled` | `CustomEvent<{ expanded: boolean \| undefined; }>` |

## Slots

| Name         | Description                            |
|--------------|----------------------------------------|
|              | Default slot for the popover content.  |
| `helperText` | Defines the content of the helperText. |
| `label`      | Defines the content of the label.      |
| `trigger`    | Defines the content of the trigger.    |
