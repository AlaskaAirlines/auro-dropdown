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

  it('auro-dropdown toggles with click', async () => {
    const el = await fixture(html`
      <auro-dropdown toggle chevron></auro-dropdown>
    `);

    const trigger = el.shadowRoot.querySelector('#trigger');
    const chevron = el.shadowRoot.querySelector('#showStateIcon');
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');

    trigger.click();
    expectPopoverShown(el);
    expect(chevron).to.have.attribute('data-expanded');

    trigger.click();
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');
  })

  it('auro-dropdown programmatically show and hide', async () => {
    const el = await fixture(html`
      <auro-dropdown toggle chevron></auro-dropdown>
    `);

    const trigger = el.shadowRoot.querySelector('#trigger');
    const chevron = el.shadowRoot.querySelector('#showStateIcon');
    expectPopoverHidden(el);
    expect(chevron).to.not.have.attribute('data-expanded');

    // trigger.click();
    el.show();
    expectPopoverShown(el);
    expect(chevron).to.have.attribute('data-expanded');

    // trigger.click();
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