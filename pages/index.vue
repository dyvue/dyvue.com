<template>
  <div class="__p_index">
    <div :class="$style.screens">
      <div :class="$style.gridHero">
        <div :class="$style.heroText">
          <h2 :class="$style.heroH2"><span :class="[$style.heroH2, $style.textPrimary]">Hi, Romadhan's here 👋</span> <br>A software engineer who loves web engineering.</h2>
          <br>
          <p :class="$style.block">I have serious passion for web and mobile engineering, dynamic user experiences, sometimes devops engineering to. I really like coding with a level of neatness that is detailed and interesting, of course with maximum working speed. <a href="mailto:romadhanedy@gmail.com" :class="$style.textPrimary">Lets make something special with me.</a></p>
          <br><br>
          <nuxt-link to="/contact" :class="$style.button">Get in Touch</nuxt-link>
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