import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    cloud_name: 'demo',
    image_public_id: 'sample',
    video_public_id: 'dog'
	}
});

export default app;