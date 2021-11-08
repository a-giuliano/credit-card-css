import { newSpecPage } from '@stencil/core/testing';
import { CreditCard } from '../credit-card';

describe('credit-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CreditCard],
      html: `<credit-card></credit-card>`,
    });
    expect(page.root).toEqualHtml(`
      <credit-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </credit-card>
    `);
  });
});
