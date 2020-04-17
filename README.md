# cloudinary-svelte

##[Cloudinary](https://cloudinary.com) components library for Svelte

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.


## Components
* [Image](https://nirmaoz.github.io/cloudinary-svelte/?path=/docs/image--sample)
* [Video](https://nirmaoz.github.io/cloudinary-svelte/?path=/docs/video--sample)


## Installation

```shell
npm i cloudinary-svelte
```

## Usage Example
   
```js
<script>
  import { Image, Video } from 'cloudinary-svelte';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>

<Image
  cloud_name="demo"
  public_id="sample"
  transformation="{[
    { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
    { width: 200, crop: 'scale' }
  ]}"
/>

<Video
  cloud_name="demo"
  public_id="dog"
  transformation={{ angle: 20 }}
  controls
  muted
/>
```

#### Image result:
<div>
    <img alt="sample" src="http://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,w_200/sample">
</div>

## Documentation:

The Cloudinary Documentation can be found at:
http://cloudinary.com/documentation

### Additional resources

Additional resources are available at:

* [Website](http://cloudinary.com)
* [Documentation](http://cloudinary.com/documentation)
* [Knowledge Base](http://support.cloudinary.com/forums)
* [Image transformations documentation](http://cloudinary.com/documentation/image_transformations)

## Support

You can [open an issue through GitHub](https://github.com/cloudinary/cloudinary-svelte/issues).

Contact us at [http://cloudinary.com/contact](http://cloudinary.com/contact).

Stay tuned for updates, tips and tutorials: [Blog](http://cloudinary.com/blog), [Twitter](https://twitter.com/cloudinary), [Facebook](http://www.facebook.com/Cloudinary).

## Join the Community ##########################################################

Impact the product, hear updates, test drive new features and more! Join [here](https://www.facebook.com/groups/CloudinaryCommunity).

## License

Released under the MIT license.