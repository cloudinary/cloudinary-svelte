<script>
  /**
   * Cloudinary Image Component
   */

  import { getImageTag } from "./utils";
  $: imageTag = getImageTag($$props);
</script>

<img alt="" {...imageTag.attributes()} />
