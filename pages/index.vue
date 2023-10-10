<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.gridHero">
        <div :class="$style.heroText">
          <h2 :class="$style.heroH2"><span :class="[$style.heroH2, $style.textPrimary]">Hey, I am Ramadhan👋</span> <br>A computer programmer.</h2>
          <br>
          <p :class="$style.block">Bachelor of computer science <br><br>I am a dedicated professional with a strong passion for web and mobile engineering. My expertise lies in crafting dynamic user experiences and occasionally exploring the realm of DevOps engineering.<br><br>I take great care in experience, architecture, and code quality of the things I build. <a href="mailto:romadhanedy@gmail.com" :class="$style.textPrimary">Join me on this journey as we create something truly exceptional together.</a></p>
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