<template>
  <a :href="link" target="blank" :class="$style.wraper">
    <div :class="$style.card">
      <div :class="$style.cardOverlay"></div>
      <img :src="screenshoot" :alt="name" :class="$style.cardThumbnail" />
      <div :class="$style.cardDescription">
        <h4 :class="$style.cardDescriptionTitle">{{ name }}</h4>
        <label :class="$style.cardDescriptionLabel">{{ category.name }}</label>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    technologies: Array,
    screenshoot: String,
    category: Object,
    name: String,
    description: String,
    link: String
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/card.sass"></style>
