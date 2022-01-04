<template>
  <div class="__p_index">
    <div :class="$style.container">
      <div :class="$style.pageFlex">
        <div :class="$style.page">
          <h2 :class="$style.h3">Get in Touch 👋</h2>
          <br>
          <p :class="$style.block">Although I'm not currently looking for any new opportunities, my inbox is always open. <br>Whether you have a question or just want to say hi, I'll try my best to get back to you! 📩</p>
          <br><br>
          <a href="mailto:romadhanedy@gmail.com" :class="$style.button">Say Hello</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact - Dyvue',
  },
  mounted() {
    this.$ga.page({
      page: '/contact',
      title: 'Contact',
      location: window.location.href
    })
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>