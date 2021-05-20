<template>
  <div>
      <!-- NavBar Bootstrap Vue + router-link (vue-router) -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/produtos">Produtos</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style>
</style>