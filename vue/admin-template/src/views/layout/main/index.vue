<template>
  <section>
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'LayoutMain',
  computed: {
    cachedViews () {
      return this.$store.state.tabnav.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}
</script>
