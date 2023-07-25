<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.pageFlex">
        <div :class="$style.page">
          <h2 :class="$style.h3">Reach Out and Connect 👋</h2>
          <br>
          <p :class="$style.block">Although I'm currently not looking for any new opportunities, my inbox is always open. <br>Whether you have a question or just want to say hi, I'll be delighted to hear from you! <br>Feel free to reach out, and I'll make every effort to respond promptly. 📩</p>
          <br><br>
          <a href="mailto:work@dyvue.com" :class="$style.button">Say hello</a>
          <br><br><br>
          <iframe v-if="zohoFormView" frameborder="0" style="height:765px;width:103%;border:none;" src='https://forms.zohopublic.com/romadhanep/form/Contact/formperma/267TCG57AQjmz8GT4nFR5sXyZexW7ANjhtEmN9os1Nw'></iframe>
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
  data() {
    return {
      zohoFormView: false
    };
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