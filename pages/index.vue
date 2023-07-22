<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.gridHero">
        <div :class="$style.heroText">
          <h2 :class="$style.heroH2"><span :class="[$style.heroH2, $style.textPrimary]">Hey, I am Ramadhan👋</span> <br>A software developer.</h2>
          <br>
          <p :class="$style.block">Welcome to my personal website! <br><br>I am deeply passionate about web and mobile engineering, creating dynamic user experiences, and occasionally dabbling in devops engineering. I find joy in coding with meticulous attention to detail, crafting clean and fascinating solutions, all while maintaining maximum efficiency. <a href="mailto:romadhanedy@gmail.com" :class="$style.textPrimary">Join me on this journey as we create something truly exceptional together.</a></p>
          <br><br>
          <!-- <a href="mailto:romadhanedy@gmail.com" :class="$style.button">Get in Touch</a> -->
          <nuxt-link to="/projects" :class="$style.button">Projects</nuxt-link>
        </div>
        <div :class="$style.heroProfile">
          <div :class="$style.heroProfileImgWrap">
            <img src="@/assets/img/profile.jpg" :class="$style.heroProfileImg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$ga.page({
      page: '/',
      title: 'Home Page',
      location: window.location.href
    })
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>