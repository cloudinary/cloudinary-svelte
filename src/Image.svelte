<script>
    /**
     * Cloudinary Image Component
     */
    import {onMount, afterUpdate} from 'svelte';
    import {getImageTag, responsive} from "./utils";
    const bindImage = (node) => (imgElement = node);

    let imgElement; // Reference to underlying <img> element
    let isResponsive;

    $: attributes = getImageTag($$props).attributes();

    afterUpdate(() => {
        // Run responsive() only when props.responsive is updated to truthy value
        isResponsive = $$props.responsive && imgElement && !isResponsive;
        if (isResponsive) {
            responsive(imgElement, $$props);
        }
    });
</script>

<img use:bindImage alt="" {...attributes}/>
