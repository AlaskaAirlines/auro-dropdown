import { fixture, html, expect } from '@open-wc/testing';
import '../src/aurolabs-dropdown.js';

describe('aurolabs-dropdown', () => {
  it('sets the CSS class on aurolabs-dropdown > div element', async () => {
    const el = await fixture(html`
      <aurolabs-dropdown cssclass="testClass"></aurolabs-dropdown>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('aurolabs-dropdown is accessible', async () => {
    const el = await fixture(html`
      <aurolabs-dropdown cssclass="testClass"></aurolabs-dropdown>
    `);

    await expect(el).to.be.accessible();
  });

  it('aurolabs-dropdown custom element is defined', async () => {
    const el = await !!customElements.get("aurolabs-dropdown");

    await expect(el).to.be.true;
  });
});
