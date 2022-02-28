<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';
li {
  margin: 1rem 0;
  border: 0.1rem solid $color-grey;
  padding: 1rem;
}

a {
  color: $color-primary;
  text-decoration: none;
  font-weight: bold;

  &:hover,
  &:active {
    color: $color-primary-darker;
  }
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
