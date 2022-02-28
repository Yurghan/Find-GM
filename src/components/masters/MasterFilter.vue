<template>
  <base-card>
    <h2>Select the game system</h2>
    <span class="filter-option">
      <input type="checkbox" id="dungeons" checked @change="setFilter" />
      <label for="dungeons">D&amp;D 5E</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="pathfinder" checked @change="setFilter" />
      <label for="pathfinder">Pathfinder</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="warhammer" checked @change="setFilter" />
      <label for="warhammer">Warhammer</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        dungeons: true,
        pathfinder: true,
        warhammer: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;

  label,
  input {
    vertical-align: middle;
  }

  label {
    margin-left: 0.25rem;
  }
  &.active label {
    font-weight: bold;
  }
}
</style>
