# Dropdown

The `auro-dropdown` component is a trigger and dropdown element combination intended to be used with dropdown content that is interactive. `auro-dropdown` is content agnostic and any valid HTML can be placed in either the trigger or the dropdown.

See [install instructions](https://auro.alaskaair.com/components/auro/popover/install) for more information as how to install and full API for the `auro-dropdown` element.

## Interaction

The dropdown can be opened with the following actions:

- `click` on the trigger
- Apply `focus` to the trigger and press any of the following keys:
  - `enter`
  - `spacebar`

The dropdown can be closed with the following actions:

- `click` anywhere in the document outside of the dropdown
- Call the `hide` method (useful to call from within the dropdown content)
- If the `toggle` attribute is applied the dropdown can additionally be closed by the following actions:
  - `click` on the trigger
  - Apply `focus` to the trigger and press any of the following keys:
    - `enter`
    - `spacebar`
    - `esc`

## Dropdown use cases

The `auro-dropdown` element should be used in situations where users may:

* interact with an element to get clarification on content offering
* provide definition to iconic imagery
* when helper text is required

Auro popover allows two ways to layout the HTML. Please see the following examples.

## Default examples

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basic.html -->
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->
```html
<auro-dropdown>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basic-onDark.html -->
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic-onDark.html -->
```html
<auro-dropdown onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicIcon.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicIcon.html -->
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"></auro-icon>
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicIcon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicIcon.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicIcon-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicIcon-onDark.html -->
      <auro-dropdown onDark>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"
            onDark></auro-icon>
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicIcon-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicIcon-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButton.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicButton.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicButton.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicButton.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicButton-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicButton-onDark.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicButton-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicButton-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicInput.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicInput.html -->
      <auro-dropdown>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger">
          </auro-input>
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicInput.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicInput.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basicInput-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/basicInput-onDark.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basicInput-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basicInput-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Examples with state chevron

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevron.html -->
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevron.html -->
```html
<auro-dropdown chevron>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevron-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevron-onDark.html -->
      <auro-dropdown
        onDark
        chevron>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevron-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevron-onDark.html -->
```html
<auro-dropdown
  onDark
  chevron>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronIcon.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronIcon.html -->
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-icon
            category="interface"
            name="arrow-down"></auro-icon>
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronIcon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronIcon.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronIcon-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronIcon-onDark.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronIcon-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronIcon-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronButton.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronButton.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronButton.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronButton.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronButton-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronButton-onDark.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronButton-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronButton-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronInput.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronInput.html -->
      <auro-dropdown chevron>
        Lorem ipsum solar
        <div slot="trigger">
          <auro-input
            slot="trigger"
            id="inputExampleTrigger">
          </auro-input>
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronInput.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronInput.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/chevronInput-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/chevronInput-onDark.html -->
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
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/chevronInput-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/chevronInput-onDark.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using bordered attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/bordered.html) -->
      <!-- The below content is automatically added from ./../apiExamples/bordered.html -->
      <auro-dropdown bordered>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/bordered.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/bordered.html -->
```html
<auro-dropdown bordered>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/bordered-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/bordered-onDark.html -->
      <auro-dropdown
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/bordered-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/bordered-onDark.html -->
```html
<auro-dropdown
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using rounded attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/rounded.html) -->
      <!-- The below content is automatically added from ./../apiExamples/rounded.html -->
      <auro-dropdown
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/rounded.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/rounded.html -->
```html
<auro-dropdown
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/rounded-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/rounded-onDark.html -->
      <auro-dropdown
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/rounded-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/rounded-onDark.html -->
```html
<auro-dropdown
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using inset attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset.html) -->
      <!-- The below content is automatically added from ./../apiExamples/inset.html -->
      <auro-dropdown inset>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inset.html -->
```html
<auro-dropdown inset>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/inset-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/inset-onDark.html -->
      <auro-dropdown
        inset
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/inset-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/inset-onDark.html -->
```html
<auro-dropdown
  inset
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/insetBordered.html) -->
      <!-- The below content is automatically added from ./../apiExamples/insetBordered.html -->
      <auro-dropdown
        inset
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/insetBordered.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/insetBordered.html -->
```html
<auro-dropdown
  inset
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/insetBordered-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/insetBordered-onDark.html -->
      <auro-dropdown
        inset
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/insetBordered-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/insetBordered-onDark.html -->
```html
<auro-dropdown
  inset
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Error example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error.html) -->
      <!-- The below content is automatically added from ./../apiExamples/error.html -->
      <auro-dropdown
        error>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/error.html -->
```html
<auro-dropdown
  error>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/error-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/error-onDark.html -->
      <auro-dropdown
        error
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/error-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/error-onDark.html -->
```html
<auro-dropdown
  error
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/errorBordered.html) -->
      <!-- The below content is automatically added from ./../apiExamples/errorBordered.html -->
      <auro-dropdown
        inset
        error
        rounded
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/errorBordered.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/errorBordered.html -->
```html
<auro-dropdown
  inset
  error
  rounded
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/errorBordered-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/errorBordered-onDark.html -->
      <auro-dropdown
        inset
        error
        rounded
        bordered
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/errorBordered-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/errorBordered-onDark.html -->
```html
<auro-dropdown
  inset
  error
  rounded
  bordered
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using label attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label.html) -->
      <!-- The below content is automatically added from ./../apiExamples/label.html -->
      <auro-dropdown
        bordered
        rounded
        inset
        chevron>
        Lorem ipsum solar
        <span slot="label">Name</span>
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/label.html -->
```html
<auro-dropdown
  bordered
  rounded
  inset
  chevron>
  Lorem ipsum solar
  <span slot="label">Name</span>
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/label-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/label-onDark.html -->
      <auro-dropdown
        bordered
        rounded
        inset
        chevron
        onDark>
        Lorem ipsum solar
        <span slot="label">Name</span>
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/label-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/label-onDark.html -->
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
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Example using helperText attribute

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperText.html) -->
      <!-- The below content is automatically added from ./../apiExamples/helperText.html -->
      <auro-dropdown
        inset
        bordered
        rounded>
        Lorem ipsum solar
        <span slot="helperText">
          Helper text
        </span>
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperText.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/helperText.html -->
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
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperText-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/helperText-onDark.html -->
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
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperText-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/helperText-onDark.html -->
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
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperTextError.html) -->
      <!-- The below content is automatically added from ./../apiExamples/helperTextError.html -->
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
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperTextError.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/helperTextError.html -->
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
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/helperTextError-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/helperTextError-onDark.html -->
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
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/helperTextError-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/helperTextError-onDark.html -->
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
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Disabled example

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled.html) -->
      <!-- The below content is automatically added from ./../apiExamples/disabled.html -->
      <auro-dropdown disabled>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled.html -->
```html
<auro-dropdown disabled>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabled-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/disabled-onDark.html -->
      <auro-dropdown
        disabled
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabled-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabled-onDark.html -->
```html
<auro-dropdown
  disabled
  onDark>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>
<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledAll.html) -->
      <!-- The below content is automatically added from ./../apiExamples/disabledAll.html -->
      <auro-dropdown
        disabled
        chevron
        rounded
        inset
        bordered>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
        <span slot="helperText">
          Helper text
        </span>
        <span slot="label">
          Name
        </span>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledAll.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabledAll.html -->
```html
<auro-dropdown
  disabled
  chevron
  rounded
  inset
  bordered>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
  <span slot="helperText">
    Helper text
  </span>
  <span slot="label">
    Name
  </span>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
  <div>
    <div class="exampleWrapper--ondark">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/disabledAll-onDark.html) -->
      <!-- The below content is automatically added from ./../apiExamples/disabledAll-onDark.html -->
      <auro-dropdown
        disabled
        chevron
        rounded
        bordered
        inset
        onDark>
        Lorem ipsum solar
        <div slot="trigger">
          Trigger
        </div>
        <span slot="helperText">
          Helper text
        </span>
        <span slot="label">
          Name
        </span>
      </auro-dropdown>
      <!-- AURO-GENERATED-CONTENT:END -->
    </div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/disabledAll-onDark.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/disabledAll-onDark.html -->
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
    Trigger
  </div>
  <span slot="helperText">
    Helper text
  </span>
  <span slot="label">
    Name
  </span>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
  </div>
</div>

## Examples with custom dimensions

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customDimensions100.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customDimensions100.html -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customDimensions100.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customDimensions100.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customDimensions300.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customDimensions300.html -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customDimensions300.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customDimensions300.html -->
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example using toggle attribute

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/toggle.html) -->
  <!-- The below content is automatically added from ./../apiExamples/toggle.html -->
  <auro-dropdown toggle>
    Lorem ipsum solar
    <div slot="trigger">
      Trigger
    </div>
  </auro-dropdown>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/toggle.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/toggle.html -->
```html
<auro-dropdown toggle>
  Lorem ipsum solar
  <div slot="trigger">
    Trigger
  </div>
</auro-dropdown>
```
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Example using hide method programmatically

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/programmaticallyHide.html) -->
  <!-- The below content is automatically added from ./../apiExamples/programmaticallyHide.html -->
  <auro-dropdown id="hideExample">
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/programmaticallyHide.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/programmaticallyHide.html -->
```html
<auro-dropdown id="hideExample">
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
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
