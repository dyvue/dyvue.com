<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.headerFlex">
        <a href="/">
          <h1 :class="$style.h1">Dyvue.</h1>
        </a>
        <a href="javascript:void(0)" :class="$style.headerHamburger">
          <i class="icon icon-menu w-6 h-6 vertical-middle mt-1"></i>
        </a>
        <div :class="$style.headerNavigation">
          <nuxt-link to="/" :class="$style.headerNavigationLink" :active="navigationActive('index')">Home</nuxt-link>
          <nuxt-link to="/about-me" :class="$style.headerNavigationLink" :active="navigationActive('about-me')">About me</nuxt-link>
          <nuxt-link to="/portfolio" :class="$style.headerNavigationLink" :active="navigationActive('portfolio')">Portfolio</nuxt-link>
          <nuxt-link to="/blog" :class="$style.headerNavigationLink" :active="navigationActive('blog')">Blog</nuxt-link>
          <nuxt-link to="/contact" :class="$style.headerNavigationLink" :active="navigationActive('contact')">Contact</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    navigationActive(RouteName) {
      if (this.$route.name === RouteName) {
        return true
      }
    }
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/navbar.sass"></style>