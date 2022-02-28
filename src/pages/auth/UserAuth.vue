<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long).</p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
      </form>
    </base-card>

    <base-card>
      <h3>Data required to log in</h3>
      <div>
        <h4>Owner: e-mail + password</h4>
        <ul>
          <li>John Smith: test1@test.com + password1</li>
          <li>Miłosz Topolewski: test2@test.com + password2</li>
          <li>Maria Hernandez: test3@test.com + password3</li>
        </ul>
      </div>
      <p>If you want, you can also create your own account and assign a game master to it.</p>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', actionPayload);
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'masters');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },

    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/_shared.scss';

form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 0.1rem solid $color-grey;
  padding: 0.15rem;

  &:focus {
    border-color: $color-primary;
    background-color: $color-white;
    outline: none;
  }
}

h4 {
  margin-bottom: 0.1rem;
}
ul {
  margin: 0.3rem;
}
</style>
