import { newE2EPage } from '@stencil/core/testing';

describe('credit-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<credit-card></credit-card>');

    const element = await page.find('credit-card');
    expect(element).toHaveClass('hydrated');
  });
});
