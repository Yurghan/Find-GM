<template>
  <section>
    <base-card>
      <h2>Register as a Game Master now!</h2>
      <master-form @save-data="saveData"></master-form>
    </base-card>
  </section>
</template>

<script>
import MasterForm from '../../components/masters/MasterForm.vue';

export default {
  components: {
    MasterForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('masters/registerMaster', data);
      this.$router.replace('/masters');
    },
  },
};
</script>
