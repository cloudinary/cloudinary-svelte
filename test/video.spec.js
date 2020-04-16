import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import Video from '../src/Video.svelte'

describe('Video', () => {
  test('src attribute should include cloud_name & public_id', () => {
    const { container } = render(Video, { cloud_name: 'demo', public_id: 'dog' });
    const video = container.querySelector("video");
    expect(video.childNodes[0].src).toBe(
      'http://res.cloudinary.com/demo/video/upload/dog.webm'
    );
  });
});
