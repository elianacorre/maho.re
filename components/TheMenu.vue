<template lang="pug">
  nav.navbar.is-primary
    .navbar-brand 
      span.navbar-item Maho
    .navbar-menu
      .navbar-end
        nuxt-link.navbar-item(v-for="(item, index) in menu", :key="index", :to="item.to", :exact="item.exact", active-class="is-active")
          | {{item.label}}
</template>

<script>
import menu from '~/data/menu.json';

export default {
  data: () => { 
    return {
      menu,
    }
  }
};
</script>
