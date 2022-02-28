<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';

.card {
  border-radius: 1.2rem;
  box-shadow: 0 0.2rem 0.8rem rgba($color-black, $alpha: 0.2);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
