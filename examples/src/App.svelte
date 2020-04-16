<script>
  import { Image, Video } from "../../dist/cloudinary-svelte";
  export let cloud_name;
  export let image_public_id;
  export let video_public_id;

  $: imageProps = {
    cloud_name,
    public_id: image_public_id,
    transformation: [
      { width: 400, height: 400, gravity: "face", radius: "max", crop: "crop" },
      { width: 200, crop: "scale" }
    ]
  };
  $: videoProps = {
    cloud_name,
    public_id: video_public_id,
    transformation: { angle: 20 }
  };

  $: logoProps = {
    cloud_name: "cloudinary",
    public_id: "cloudinary_logo_for_white_bg",
    transformation: { width: 50, crop: "scale" }
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .title {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .code-wrapper {
    margin: 0 auto;
    text-align: center;
    padding: 10px 20% 10px 20%;
  }

  code {
    text-align: left;
    display: block;
    white-space: pre-wrap;
    background: cornsilk;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Cloudinary Svelte SDK</h1>
  <h1 class="title">Example</h1>
  <div>
    <h2>Image</h2>
    <div class="code-wrapper">
      <code>
        {
`<Image
  cloud_name="${cloud_name}"
  public_id="${image_public_id}"
  transformation="{[
    { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
    { width: 200, crop: 'scale' }
  ]}"
/>`
        }
      </code>
    </div>
    <Image
      {cloud_name}
      public_id={image_public_id}
      transformation={[{ width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' }, { width: 200, crop: 'scale' }]} />
  </div>
  <div>
    <h2>Video</h2>
    <div class="code-wrapper">
      <code>
        {
`<Video
  cloud_name="${cloud_name}"
  public_id="${video_public_id}"
  transformation={{ angle: 20 }}
  controls
  muted
/>`
      }
      </code>
    </div>
    <Video
      {cloud_name}
      public_id={video_public_id}
      transformation={{ angle: 20 }}
      controls
      muted
    />
  </div>
</main>
