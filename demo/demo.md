# Dropdown

The Auro Design System fully supports `top` and `bottom` placed popovers. The following examples illustrate common popover uses followed up by code examples.

See [install instructions](https://auro.alaskaair.com/components/auro/popover/install) for more information as how to install and full API for the `auro-dropdown` element.

## Dropdown use cases

The `auro-dropdown` element should be used in situations where users may:

* interact with an element to get clarification on content offering
* provide definition to iconic imagery
* when helper text is required

Auro popover allows two ways to layout the HTML. Please see the following examples.

## Default Example

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="full-name2" triggerEvent="show" id="auroDropdown1">
    <div>
      <p>Lorem ipsum solar</p>
      <auro-button id="button1" onclick="document.querySelector('#auroDropdown1').hide()">Dismiss Dropdown</auro-button>
    </div>
    <auro-input slot="trigger" label="Name" id="full-name2" helptext="Please enter your full name"></auro-input>
  </auro-dropdown>
</div>

## Example using toggle attribute

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="menu1" toggle>
    Top popover content!
    <!-- <auro-input slot="trigger" label="Name" id="full-name" helptext="Please enter your full name"></auro-input> -->
    <auro-button slot="trigger" id="menu1">
      Dropdown
    </auro-button>
  </auro-dropdown>
</div>

<!-- ## Using slots, internal to the popover element

The following examples illustrates using the `trigger` slot within the scope of the `auro-dropdown` element.

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="button1">
    Top popover content!
    <auro-button id="button1" slot="trigger">Popover Test</auro-button>
  </auro-dropdown>

  <auro-dropdown for="button2">
    Bottom popover content!
    <auro-button secondary id="button2" slot="trigger">Popover Test</auro-button>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown for="button1">
  Top popover content!
  <auro-button id="button1" slot="trigger">Popover Test</auro-button>
</auro-dropdown>

<auro-dropdown for="button2">
  Bottom popover content!
  <auro-button secondary id="button2" slot="trigger">Popover Test</auro-button>
</auro-dropdown>
```
</auro-accordion>

## Add space around popover

Sometimes you just need more space. For these instances, use the `addSpace` attribute.

<div class="exampleWrapper" style="overflow: unset">
  <auro-dropdown for="button10" addSpace>
    Notice this popover is a little<br>further away from the trigger.
    <auro-button id="button10" slot="trigger">Popover w/additional space above</auro-button>
  </auro-dropdown>

  <auro-dropdown for="button11" addSpace>
    Notice this popover is a little<br>further away from the trigger.
    <auro-button secondary id="button11" slot="trigger">Popover w/additional space below</auro-button>
  </auro-dropdown>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown for="button10" addSpace>
  Notice this popover is a little<br>further away from the trigger.
  <auro-button id="button10" slot="trigger">Popover w/additional space above</auro-button>
</auro-dropdown>

<auro-dropdown for="button11" addSpace>
  Notice this popover is a little<br>further away from the trigger.
  <auro-button secondary id="button11" slot="trigger">Popover w/additional space below</auro-button>
</auro-dropdown>

```
</auro-accordion>

## Guidelines

The auro-dropdown element is meant to be used when the interaction and it's content is passive. A popover is not to be used for cases where the user must adjust their focus and acknowledge the presented content. For these cases, please see the [auro-dialog](https://auro.alaskaair.com/components/auro/dialog) element.

Binding a `trigger` event to a hyperlink is **not** recommended. This is a poor user experience for mobile devices, the event required to make the popover appear is a `tap`. The tap will also trigger the hyperlink to fire as well, thus negating the impact of the popover.

The use of a hyperlink for to trigger an event in the UI is semantically incorrect and this will present itself as a confusing scenario to assistive devices.

<auro-alerts error noIcon>
  <div class="exampleWrapper">
    <auro-dropdown for="link">
      This works, but not recommended
      <auro-hyperlink id="link" href="#" relative nav slot="trigger">hyperlink popover trigger</auro-hyperlink>
    </auro-dropdown>
  </div>
</auro-alerts>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown for="link">
  This works, but not recommended
  <auro-hyperlink id="link" href="#" relative nav slot="trigger">hyperlink popover trigger</auro-hyperlink>
</auro-dropdown>
```
</auro-accordion>

In the event that a hyperlink UI is desired, it is recommended to use the `role="button"` semantic reassignment to the hyperlink element.

<auro-alerts success noIcon>
  <div class="exampleWrapper">
    <auro-dropdown for="linkButton">
      Role button is recommended
      <auro-hyperlink id="linkButton" role="button" slot="trigger">hyperlink, role button</auro-hyperlink>
    </auro-dropdown>
  </div>
</auro-alerts>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-dropdown for="linkButton">
  Role button is recommended
  <auro-hyperlink id="linkButton" role="button" slot="trigger">hyperlink, role button</auro-hyperlink>
</auro-dropdown>
```
</auro-accordion>

## Developer notes

The default trigger for a popover is a `hover` event. Mobile devices do not support `hover` events directly, so the `hover` event is replaced with a `touchstart` event to produce the popover. This is to ensure reliability of the action versus versus a dependency on a secondary interruption of the `hover` event on mobile devices. -->
