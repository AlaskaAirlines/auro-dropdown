# auro-dropdown

## Properties

| Property  | Attribute | Type      | Description                                      |
|-----------|-----------|-----------|--------------------------------------------------|
| `chevron` | `chevron` | `boolean` | If true, the dropdown displays an display state chevron on the right. |
| `toggle`  | `toggle`  | `boolean` | If true, the trigger will toggle the show/hide state of the dropdown. |

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

| Name         | Description                                      |
|--------------|--------------------------------------------------|
|              | Default unnamed slot for the use of popover content. |
| `helperText` | Sets the helperText text for the input.          |
| `label`      | Sets the label text for the input.               |
| `trigger`    | Slot for entering the trigger element into the scope of the shadow DOM. |
