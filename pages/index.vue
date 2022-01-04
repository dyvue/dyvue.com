<template>
  <div class="__p_index">
    <div :class="$style.container">
      <div :class="$style.gridHero">
        <div :class="$style.heroText">
          <h2 :class="$style.heroH2"><span :class="[$style.heroH2, $style.textPrimary]">Hello, I'm Romadhan 👋,</span> <br>I'm fullstack web developer.</h2>
          <br>
          <p :class="$style.block">I'm a programmer in Jakarta. I have serious passion for frontend developer, dynamic user experiences, sometimes devops engineering. <a href="mailto:romadhanedy@gmail.com" :class="$style.textPrimary">Lets make something special.</a></p>
          <br><br>
          <a href="mailto:romadhanedy@gmail.com" :class="$style.button">Get In Touch</a>
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