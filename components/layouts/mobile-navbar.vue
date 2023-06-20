<template>
  <nav :class="$style.mobileNavbar">
    <div :class="$style.mobileNavbarGroup">
      <nuxt-link
        to="/"
        :class="$style.mobileNavbarLink"
        :active="navigationActive('index')"
      >
        <i class="icon-nav icon-nav-home w-6 h-6 align-middle"></i>
        <span :class="$style.mobileNavbarText">Home</span>
      </nuxt-link>
      <nuxt-link
        to="/projects"
        :class="$style.mobileNavbarLink"
        :active="navigationActive('projects')"
      >
        <i class="icon-nav icon-nav-project w-6 h-6 align-middle"></i>
        <span :class="$style.mobileNavbarText">Projects</span>
      </nuxt-link>
      <nuxt-link
        to="/blog"
        :class="$style.mobileNavbarLink"
        :active="navigationActive('blog')"
      >
        <i class="icon-nav icon-nav-blog w-6 h-6 align-middle"></i>
        <span :class="$style.mobileNavbarText">Blog</span>
      </nuxt-link>
      <nuxt-link
        to="/contact"
        :class="$style.mobileNavbarLink"
        :active="navigationActive('contact')"
      >
        <i class="icon-nav icon-nav-contact w-6 h-6 align-middle"></i>
        <span :class="$style.mobileNavbarText">Contact</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    navigationActive(RouteName) {
      if (this.$route.name === RouteName) {
        return true;
      }
    }
  }
};
</script>

<style module lang="sass" src="@/assets/sass/modules/mobile-navbar.sass"></style>
