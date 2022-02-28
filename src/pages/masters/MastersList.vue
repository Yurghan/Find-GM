<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <master-filter @change-filter="setFilters"></master-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadMasters(true)">Refresh</base-button>
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Game Master</base-button>
          <base-button v-if="isLoggedIn && !isMaster && !isLoading" link to="/register">Register as Game Master</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasMasters">
          <master-item
            v-for="master in filteredMasters"
            :key="master.id"
            :id="master.id"
            :first-name="master.firstName"
            :last-name="master.lastName"
            :rate="master.hourlyRate"
            :areas="master.areas"
          ></master-item>
        </ul>
        <h3 v-else>No game master found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import MasterItem from '../../components/masters/MasterItem.vue';
import MasterFilter from '../../components/masters/MasterFilter.vue';

export default {
  components: {
    MasterItem,
    MasterFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        dungeons: true,
        pathfinder: true,
        warhammer: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isMaster() {
      return this.$store.getters['masters/isMaster'];
    },
    filteredMasters() {
      const masters = this.$store.getters['masters/masters'];
      return masters.filter((master) => {
        if (this.activeFilters.dungeons && master.areas.includes('dungeons')) {
          return true;
        }
        if (this.activeFilters.pathfinder && master.areas.includes('pathfinder')) {
          return true;
        }
        if (this.activeFilters.warhammer && master.areas.includes('warhammer')) {
          return true;
        }
        return false;
      });
    },
    hasMasters() {
      return !this.isLoading && this.$store.getters['masters/hasMasters'];
    },
  },
  created() {
    this.loadMasters();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadMasters(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('masters/loadMasters', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
