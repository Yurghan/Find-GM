<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';
.badge {
  background-color: $color-grey;
  color: $color-black;
  border-radius: 3rem;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.dungeons {
  background-color: $color-dungeons;
  color: $color-white;
}

.pathfinder {
  background-color: $color-pathfinder;
  color: $color-white;
}

.warhammer {
  background-color: $color-warhammer;
  color: $color-white;
}
</style>
