<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedMaster: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedMaster.firstName + ' ' + this.selectedMaster.lastName;
    },
    areas() {
      return this.selectedMaster.areas;
    },
    rate() {
      return this.selectedMaster.hourlyRate;
    },
    description() {
      return this.selectedMaster.description;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  },
  created() {
    this.selectedMaster = this.$store.getters['masters/masters'].find(
      (master) => master.id === this.id
    );
  },
};
</script>
