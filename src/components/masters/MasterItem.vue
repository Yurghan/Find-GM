<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="masterContactLink">Contact</base-button>
      <base-button link :to="masterDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    masterContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    masterDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';
li {
  margin: 1rem 0;
  border: 0.1rem solid $color-black;
  border-radius: 1.2rem;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}
</style>
