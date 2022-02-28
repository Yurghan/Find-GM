<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find GM for your game!</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/masters">All Game Masters</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/masters');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';
header {
  width: 100%;
  height: 5rem;
  background-color: $color-primary;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: $color-white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 0.1rem solid transparent;

    &:active,
    &:hover,
    &.router-link-active {
      border: 0.1rem solid $color-white;
    }
  }
}

h1 {
  margin: 0;

  a {
    color: $color-white;
    margin: 0;

    &:hover,
    &:active,
    &.router-link-active {
      border-color: transparent;
    }
  }
}

@media (max-width: 768px) {
  h1 {
    display: none;
  }
}
</style>
