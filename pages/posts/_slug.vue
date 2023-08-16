<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.blogContent">
        <h1>{{ page.title }}</h1>
        <h5>{{ transformedDate(page.date) }} · {{ page.reading_time }} min</h5>
        <nuxt-content :document="page" />
        <nuxt-link to="/posts" :class="$style.blogContentBack"><i class="icon icon-arrow-back w-8 h-8 vertical-middle"></i> Back</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug;
    const page = await $content("posts/" + slug).fetch();
    return {
      page
    };
  },
  head() {
    return {
      title: this.page.title
    };
  },
  methods: {
    transformedDate(date) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      const ndate = new Date(date);
      return ndate.toLocaleDateString("en-US", options);
    }
  }
};
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>
