<template>
  <header :class="headerClass">
    <slot />
  </header>
</template>

<script setup lang="ts">
/**
 * A header component with sticky and scroll-aware behavior.
 *
 * Some variants hide or show the header using CSS transforms.
 * You can animate these transitions by adding transition or animation classes.
 *
 * @example
 * ```vue
 * <UiHeader>
 *   My App
 * </UiHeader>
 * ```
 *
 * @example
 * ```vue
 * <UiHeader variant="scroll-up" scroll-threshold="20" class="transition-transform duration-300">
 *   My App
 * </UiHeader>
 * ```
 *
 * @requires [tailwindcss](https://tailwindcss.com/)
 * @requires [@vueuse/nuxt](https://vueuse.org/guide/#nuxt)
 */

const props = defineProps<{
  /**
   * Header behavior.
   *
   * - "fixed": visible header at the top
   * - "top": position header at the top of the page
   * - "scroll-up": hide header when scrolling down
   * - "hide-below-threshold": hide header after scrolling past a threshold
   *
   * @default "fixed"
   */
  variant?: "fixed" | "top" | "scroll-up" | "hide-below-threshold";

  /**
   * Scroll threshold.
   *
   * - For variant "scroll-up":
   *   minimum entity of the scroll down causing the header to hide (default: 0)
   * - For variant "hide-below-threshold":
   *   how many pixels to scroll before the header is hidden (default: 100)
   */
  scrollThreshold?: number;
}>();

const { y } = useWindowScroll();

// Track latest relevant vertical scroll
const movedDown = ref(false);

const isVisible = computed(() => {
  if (
    props.variant === "hide-below-threshold" &&
    y.value > (props.scrollThreshold ?? 100)
  )
    return false;

  if (props.variant === "scroll-up") return !movedDown.value;

  // This value won't be used
  return true;
});

const headerClass = computed(() => {
  const variant = props.variant ?? "fixed";

  if (variant === "top") return "";

  const classes = ["sticky top-0"];

  if (variant !== "fixed")
    classes.push(isVisible.value ? "translate-y-0" : "-translate-y-full");

  return classes;
});

watch(y, (currY, prevY) => {
  if (currY < prevY) movedDown.value = false;
  if (currY - prevY > (props.scrollThreshold ?? 0)) movedDown.value = true;
});
</script>
