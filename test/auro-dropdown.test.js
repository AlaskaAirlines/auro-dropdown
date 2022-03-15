import { fixture, html, expect, waitUntil } from '@open-wc/testing';
import '../src/auro-dropdown.js';

describe('auro-dropdown', () => {
  it('auro-dropdown is accessible', async () => {
    const el = await fixture(html`
      <auro-dropdown>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dropdown custom element is defined', async () => {
    const el = await !!customElements.get("auro-dropdown");

    await expect(el).to.be.true;
  });

  it('auro-dropdown with chevron', async () => {
    const el = await fixture(html`
      <auro-dropdown chevron>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    const chevronEl = el.shadowRoot.querySelector('#showStateIcon');
    expect(chevronEl).to.be.visible;
  })

  it('auro-dropdown with non-focusable trigger', async () => {
    const el = await fixture(html`
      <auro-dropdown chevron>
        <span slot="trigger">Trigger</span>
      </auro-dropdown>
    `);

    await expect (el.shadowRoot.querySelector('#trigger').getAttribute('tabindex')).to.equal('0');
  })

  it('auro-dropdown with focusable trigger', async () => {
    const el = await fixture(html`
      <auro-dropdown chevron>
        <a slot="trigger">Trigger</a>
      </auro-dropdown>
    `);

    await expect (el.shadowRoot.querySelector('#trigger').getAttribute('tabindex')).to.equal('0');
  })

  it('auro-dropdown with focusable trigger child element', async () => {
    const el = await fixture(html`
      <auro-dropdown chevron>
        <span slot="trigger">
          <a>Trigger</a>
        </span>
      </auro-dropdown>
    `);

    await expect (el.shadowRoot.querySelector('#trigger').getAttribute('tabindex')).to.equal('-1');
  })

  it('auro-dropdown aria rules with label slot content', async () => {
    const el = await fixture(html`
      <auro-dropdown>
        <span slot="label">
          label text
        </span>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    const triggerEl = el.shadowRoot.querySelector('.triggerContent');
    expect(triggerEl).to.have.attribute('aria-labelledby', 'triggerLabel');
  })

  it('auro-dropdown shows only with click', async () => {
    const el = await fixture(html`
      <auro-dropdown>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    const trigger = el.shadowRoot.querySelector('#trigger');
    expectPopoverHidden(el);

    trigger.click();
    expectPopoverShown(el);

    trigger.click();
    expectPopoverShown(el);
  })

  it('auro-dropdown toggle with click', async () => {
    const el = await fixture(html`
      <auro-dropdown toggle>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    const trigger = el.shadowRoot.querySelector('#trigger');
    expectPopoverHidden(el);

    trigger.click();
    expectPopoverShown(el);

    trigger.click();
    expectPopoverHidden(el);
  })

  it('auro-dropdown programmatically hide', async () => {
    const el = await fixture(html`
      <auro-dropdown toggle chevron>
        <div slot="trigger">Trigger</div>
      </auro-dropdown>
    `);

    const chevron = el.shadowRoot.querySelector('#showStateIcon');
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');

    expectPopoverHidden(el);

    el.show();
    expectPopoverShown(el);

    el.hide();
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');
  })
});

function expectPopoverShown(el) {
  expect(el.hasAttribute('data-show')).to.equal(true);
}

function expectPopoverHidden(el) {
  expect(el.hasAttribute('data-show')).to.equal(false);
}
