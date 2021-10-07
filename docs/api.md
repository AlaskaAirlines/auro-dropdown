# auro-dropdown

Popover attaches to an element and displays on hover/blur.

## Attributes

| Attribute     | Type      | Description                                      |
|---------------|-----------|--------------------------------------------------|
| `addSpace`    | `boolean` | If true, will add additional top and bottom space around the appearance of the popover in relation to the trigger |
| `removeSpace` | `boolean` | If true, will remove top and bottom space around the appearance of the popover in relation to the trigger |

## Properties

| Property    | Attribute   | Type     | Default        | Description                                      |
|-------------|-------------|----------|----------------|--------------------------------------------------|
| `for`       | `for`       | `String` |                | Defines an `id` for an element in the DOM to trigger on hover/blur |
| `placement` | `placement` | `String` | "bottom-start" | Expects top/bottom - position for popover in relation to the element |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
|           | Default unnamed slot for the use of popover content |
| `trigger` | Slot for entering the trigger element into the scope of the shadow DOM |
