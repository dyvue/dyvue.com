<template>
  <header :class="$style.header">
    <div :class="$style.screens">
      <div :class="$style.headerFlex">
        <a href="javascript:void(0)" @click="toggleTheme()" :class="$style.headerBrand">
          <img src="@/assets/img/logo.png" alt="D" :class="$style.headerImg">
          <h1 :class="$style.h1">Ramadhan.</h1>
        </a>
        <a v-if="!isMobile()" href="javascript:void(0)" :class="$style.headerHamburger">
          <i class="icon icon-menu w-6 h-6 vertical-middle mt-1"></i>
        </a>
        <div v-if="!isMobile()" :class="$style.headerNavigation">
          <nuxt-link
            to="/projects"
            :class="$style.headerNavigationLink"
            :active="navigationActive('projects')"
            >Projects</nuxt-link
          >
          <nuxt-link
            to="/blog"
            :class="$style.headerNavigationLink"
            :active="navigationActive('blog')"
            >Blog</nuxt-link
          >
          <nuxt-link
            to="/contact"
            :class="$style.headerNavigationLink"
            :active="navigationActive('contact')"
            >Contact</nuxt-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      lightMode: false,
    };
  },
  methods: {
    navigationActive(RouteName) {
      if (this.$route.name === RouteName) {
        return true;
      }
    },
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    toggleTheme() {
      this.lightMode = !this.lightMode
      if (this.lightMode) {
        document.body.classList.add('light');
      }
      else {
        document.body.classList.remove('light');
      }
    },
  }
};
</script>

<style module lang="sass" src="@/assets/sass/modules/navbar.sass"></style>
