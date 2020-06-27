<script>
    /**
     * Cloudinary Image Component
     * This element binds the underlying <img> element to it's imgElement variable.
     * imgElement is passed to makeElementResponsive() so it can update the src attribute when needed
     */
    import {afterUpdate} from 'svelte';
    import {getImageTag, makeElementResponsive} from "./utils";

    /**
     * Bind imgElement to the underlying <img> element.
     * @param node - the underlying <img> element's node.
     */
    const bindImage = (node) => (imgElement = node);

    let imgElement; // Reference to underlying <img> element
    $: attributes = getImageTag($$props).attributes(); // The <img> attributes, computed on update.

    afterUpdate(() => {
        if ($$props.responsive && imgElement) {
            makeElementResponsive(imgElement, $$props);
        }
    });
</script>

<img use:bindImage alt="" {...attributes}/>
