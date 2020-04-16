import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Image from '../src/Image.svelte'

describe('Image', () => {
  it('src attribute should include cloud_name & public_id', () => {
    const { container } = render(Image, { cloud_name: 'demo', public_id: 'sample' });
    const img = container.querySelector("img");
    expect(img.src).toBe(
      'http://res.cloudinary.com/demo/image/upload/sample'
    );
  });
  it('alt attribute should be set to given alt value', () => {
    const { container } = render(Image, { cloud_name: 'demo', public_id: 'sample', alt: 'test image' });
    const img = container.querySelector("img");
    expect(img.alt).toBe(
      'test image'
    );
  });
});
