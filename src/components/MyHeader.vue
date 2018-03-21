<template>
  <div id="my-header">
    <router-link to="/" class="logo">Главная</router-link>
    <router-link to="/hello" class="logo">hello</router-link>
    <router-link to="/download" class="logo">download</router-link>
    <router-link to="/save" class="logo">save</router-link>
  </div>
</template>
<script>

export default {
  name: 'MyHeader'
}
</script>
<style>
#my-header .logo {
  color: white;
    text-decoration: none;
    padding: 10px;
}
</style>
