<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.pageFlexCenter">
        <div v-if="error.statusCode === 404" :class="$style.pageText">
          <h2 :class="$style.h2">451 – Unavailable For Legal Reasons</h2>
          <br />
          <p :class="$style.block">
            Why show a generic 404 when I can make it sound mysterious? It seems
            you've found something that used to exist, or you spelled something
            wrong. I'm guessing you spelled something wrong. Can you double
            check that URL?
          </p>
          <br /><br />
          <a href="/" :class="$style.button">Return Home</a>
        </div>
        <div v-else :class="$style.pageText">
          <h2 :class="$style.h2">451 – Unavailable For Legal Reasons</h2>
          <br />
          <p :class="$style.block">
            Why show a generic 404 when I can make it sound mysterious? It seems
            you've found something that used to exist, or you spelled something
            wrong. I'm guessing you spelled something wrong. Can you double
            check that URL?
          </p>
          <br /><br />
          <a href="/" :class="$style.button">Return Home</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>
