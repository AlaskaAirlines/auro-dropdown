# auro-dropdown

## Properties

| Property        | Attribute       | Type      | Default        | Description                                      |
|-----------------|-----------------|-----------|----------------|--------------------------------------------------|
| `dropdownWidth` | `dropdownWidth` | `number`  |                |                                                  |
| `for`           | `for`           | `string`  |                |                                                  |
| `placement`     | `placement`     | `string`  | "bottom-start" |                                                  |
| `toggle`        | `toggle`        | `boolean` | false          | If true, the trigger will toggle the show/hide state of the dropdown |

## Methods

| Method                        | Type       |
|-------------------------------|------------|
| `dispatchEventDropdownToggle` | `(): void` |
| `fixWidth`                    | `(): void` |
| `hide`                        | `(): void` |
| `show`                        | `(): void` |

## Events

| Event             | Type                                             |
|-------------------|--------------------------------------------------|
| `dropdownToggled` | `CustomEvent<{ expanded: boolean \| undefined; }>` |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default unnamed slot for the use of popover content |
| `trigger` | Slot for entering the trigger element into the scope of the shadow DOM |
