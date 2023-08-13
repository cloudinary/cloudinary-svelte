> DEPRECATED
> 
> This package has been deprecated, see https://github.com/cloudinary-community/svelte-cloudinary
>

# cloudinary-svelte

## Cloudinary components library for Svelte

[Cloudinary](https://cloudinary.com) is a cloud service that offers a solution to a web application's entire image and video management pipeline.

Easily upload images to the cloud. Automatically perform smart image resizing, cropping and conversion without installing any complex software. Integrate Facebook or Twitter profile image extraction in a snap, in any dimension and style to match your website’s graphics requirements. Images are seamlessly delivered through a fast CDN, and much much more.

Cloudinary offers comprehensive APIs and administration capabilities and is easy to integrate with any web application, existing or new.

Cloudinary provides URL and HTTP based APIs that can be easily integrated with any Web development framework.


## Installation
Install the package using the following command:

```shell
npm i @cloudinary/svelte
```

## Setup
1. Include the cloudinary-svelte package in your code, for example: 
    ```javascript
    import { Image, Video } from '@cloudinary/svelte';
    ```
    
2. Add an Image or Video component in your html:
    ```html
    <Image.../> <Video.../>
    ```
3. Pass the required parameters to the component:
    ```javascript
    // cloud_name - is your Cloudinary account
    // public_id  - is the asset identifier in your Cloudinary account
    //              (usually the file name without a file extension)
    <Image cloud_name="demo" public_id="sample" …{any <img> tag attributes}/>
    ```
4. To fetch a transformed asset, you can pass a transformation parameter to the Image or Video components.  
   For example, this transformation will alter the image URL to fetch the same image scaled to 200px:  
    ```javascript
   transformation = “{ width: 200, crop: ‘scale’ }”  
    ```   
   The transformation object can be an array of transformations,  
   where each transformation is applied to the result of the previous transformation, for example:  
    ```javascript
    transformation="{[
     { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
     { width: 200, crop: 'scale' }
    ]}"
    ```

## Components
* [Image](https://cloudinary.github.io/cloudinary-svelte/?path=/docs/image--sample)
* [Video](https://cloudinary.github.io/cloudinary-svelte/?path=/docs/video--sample)


## Usage Example
   
```html
<script>
  import { Image, Video } from '@cloudinary/svelte';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>

<main>
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
</main>
```

#### Image result:
<div>
    <img alt="sample" src="http://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,r_max,w_400/c_scale,w_200/sample">
</div>

#### Video result:
The video component will generate this html:
([See actual video here](http://res.cloudinary.com/demo/video/upload/a_20/dog.mp4))
```html
<video controls muted poster="http://res.cloudinary.com/demo/video/upload/a_20/dog.jpg">
    <source src="http://res.cloudinary.com/demo/video/upload/a_20/dog.webm" type="video/webm">
    <source src="http://res.cloudinary.com/demo/video/upload/a_20/dog.mp4" type="video/mp4">
    <source src="http://res.cloudinary.com/demo/video/upload/a_20/dog.ogv" type="video/ogg">
</video>
```

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
