<script>
  /**
   * Cloudinary Video Component
   */

  import { getVideoTag } from "./utils";
  $: videoTag = getVideoTag($$props);
</script>

<video {...videoTag.attributes()}>
  {@html videoTag.content()}
</video>
