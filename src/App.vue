<template>
  <div id="app">
    <div id="nav">
      <RouterLink v-if="authenticated" to="/login" @click.native="logout()" replace>Logout</RouterLink>
    </div>
    <RouterView @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      adminAccess: {
        username: "admin",
        password: "admin"
      }
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" }).catch(()=>{});
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
      
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@300;400;500;600;800&display=swap');

body {
  background: url('./assets/car.jpg') no-repeat center center fixed;
  width: 97%;
  height: 75vh;
  background-size: cover;
  font-family: Open Sans;
}

a{
  text-decoration: none;
  position: absolute;
  right: 5%;
  color: #fff;
  font-size: 18px;
}
a:hover{
  color: #C69749;
}

@media screen and (max-width: 650px){
  a{
    right: 6%;
  }
}
</style>