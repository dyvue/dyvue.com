<template>
  <div class="__p_index">
    <div :class="$style.screens">
      <div :class="$style.pageFlexCenter">
        <div :class="$style.pageText">
          <span :class="$style.h1">✏️</span>
          <br><br>
          <h2 :class="$style.h3">Stay tuned for captivating insights and expert knowledge</h2>
          <br>
          <p :class="$style.block">This blog will soon be filled, in the meantime, you can checkout my twitter 🐦.</p>
          <br><br>
          <a href="/" :class="$style.button">Home page</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Blog - Dyvue',
  },
  mounted() {
    this.$ga.page({
      page: '/blog',
      title: 'Blog',
      location: window.location.href
    })
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>