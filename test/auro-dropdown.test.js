import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-dropdown.js';

describe('auro-dropdown', () => {
  it('auro-dropdown is accessible', async () => {
    const el = await fixture(html`
      <auro-dropdown></auro-dropdown>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dropdown custom element is defined', async () => {
    const el = await !!customElements.get("auro-dropdown");

    await expect(el).to.be.true;
  });

  it('auro-dropdown with chevron', async () => {
    const el = await fixture(html`
      <auro-dropdown chevron></auro-dropdown>
    `);

    const chevronEl = el.shadowRoot.querySelector('#showStateIcon');
    expect(chevronEl).to.be.visible;
  })

  it('auro-dropdown shows only with click', async () => {
    const el = await fixture(html`
      <auro-dropdown></auro-dropdown>
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
      <auro-dropdown toggle></auro-dropdown>
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
      <auro-dropdown toggle chevron></auro-dropdown>
    `);

    const chevron = el.shadowRoot.querySelector('#showStateIcon');
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');

    const trigger = el.shadowRoot.querySelector('#trigger');
    expectPopoverHidden(el);

    trigger.click();
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
