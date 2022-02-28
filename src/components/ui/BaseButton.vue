<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';

button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: $color-primary;
  border: 0.1rem solid $color-primary;
  color: $color-white;
  cursor: pointer;
  border-radius: 3rem;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: $color-primary-darker;
  border-color: $color-primary-darker;
}

.flat {
  background-color: transparent;
  color: $color-primary;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: $color-primary-darker;
  color: $color-primary-darker;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: rgba($color-primary, $alpha: 0.1);
}
</style>
