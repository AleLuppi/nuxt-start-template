<template>
  <Transition v-bind="$props">
    <slot v-if="isVisible" />
  </Transition>
</template>

<script setup lang="ts">
/**
 * A Transition component that hides its content when the user is idle.
 *
 * Supports all Vue `Transition` props, allowing you to customize how the content
 * appears and disappears (e.g. with CSS transitions or custom enter/leave hooks).
 *
 * @example
 * ```vue
 * <UiHideOnIdle>
 *   <div>My content</div>
 * </UiHideOnIdle>
 * ```
 *
 * @example
 * ```vue
 * <UiHideOnIdle name="fade" :delay="1000">
 *   <div>My content</div>
 * </UiHideOnIdle>
 * ```
 *
 * @requires [@vueuse/nuxt](https://vueuse.org/guide/#nuxt)
 */

import type { TransitionProps } from "vue";

const props = withDefaults(
  defineProps<
    TransitionProps & {
      /**
       * The delay in milliseconds before the user is considered idle.
       *
       * @default 10000
       */
      delay?: number;

      /**
       * When component is active, prevent the content from being hidden.
       */
      active?: boolean;
    }
  >(),
  {
    delay: 10000,
    css: undefined, // default Transition's boolean to undefined
  },
);

const { idle } = useIdle(props.delay);

const isVisible = computed(() => props.active || !idle.value);

defineExpose({
  /**
   * Whether the content is currently visible.
   */
  visible: isVisible,
});
</script>
