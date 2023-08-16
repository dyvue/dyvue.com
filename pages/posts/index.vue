<template>
  <div class="_p_index">
    <div :class="$style.screens">
      <div :class="$style.page">
        <h2 :class="$style.h3">Blog ✨</h2>
        <br>
        <p :class="$style.block">From code to web3: Ramadhan's tech journey</p>
        <br><br>
        <div v-for="post in posts" :key="post.slug" :class="$style.blogList">
          <nuxt-link :to="`/posts/${post.slug}`"><h2>{{ post.title }}</h2></nuxt-link>
          <h5>{{ transformedDate(post.date) }} · {{ post.reading_time }} min</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("posts").sortBy("date", "desc").fetch();
    return {
      posts
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
