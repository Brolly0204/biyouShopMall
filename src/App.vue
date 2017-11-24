<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterTab></FooterTab>
  </div>
</template>

<script>
import FooterTab from '@/components/FooterTab'
export default {
  name: 'app',
  components: {
    FooterTab
  }
}
</script>

<style>
