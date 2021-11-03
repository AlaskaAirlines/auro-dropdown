# auro-dropdown

Popover attaches to an element and displays on hover/blur.

## Attributes

| Attribute     | Type      | Description                                      |
|---------------|-----------|--------------------------------------------------|
| `addSpace`    | `boolean` | If true, will add additional top and bottom space around the appearance of the popover in relation to the trigger |
| `removeSpace` | `boolean` | If true, will remove top and bottom space around the appearance of the popover in relation to the trigger |

## Properties

| Property        | Attribute       | Type      | Default        | Description                                      |
|-----------------|-----------------|-----------|----------------|--------------------------------------------------|
| `dropdownWidth` | `dropdownWidth` | `Array`   |                | Width in pixels of how wide the auro-dropdown field is, which dictates width of options container. |
| `fixedWidth`    | `fixedWidth`    | `string`  | "auto"         |                                                  |
| `for`           | `for`           | `String`  |                | Defines an `id` for an element in the DOM to use as the trigger |
| `placement`     | `placement`     | `String`  | "bottom-start" | Expects top/bottom - position for popover in relation to the element |
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
