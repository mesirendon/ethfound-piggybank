<template>
  <div id="app">
    <top class="container-fluid"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Top from '@/components/menu/Top.vue';

export default {
  name: 'App',
  components: {
    Top,
  },
};
</script>
