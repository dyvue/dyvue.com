<template>
  <div class="__p_index">
    <div :class="$style.container">
      <div :class="$style.pageFlex">
        <div :class="$style.page">
          <h2 :class="$style.h3">Some Things I’ve Built 🚧</h2>
          <br>
          <p :class="$style.block">these are all the projects I've worked on and some have been awarded awards 🏆.</p>
          <br><br>
          <div :class="$style.portfolioGrid">
            <c-card
              v-for="(item, index) in portfolios"
              :key="index"
              :technologies="item.technologies"
              :screenshoot="require(`@/assets/img/projects/${item.screenshoot}`)"
              :category="item.category"
              :name="item.name"
              :description="item.description"
              :link="item.link"
            />
          </div>
          <div :class="$style.portfolioAction">
            <a href="javascript:void(0)" :class="$style.button" @click="viewPortfolioStatus()">
              <template v-if="!portfolioViewStatus">View more</template>
              <template v-else>View less</template>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/basics/card"
export default {
  head: {
    title: 'Portfolio - Dyvue',
  },
  components: {
    "c-card": Card
  },
  data() {
    return {
      portfolios: [],
      portfoliosStore: [],
      portfolioViewStatus: false
    };
  },
  mounted() {
    this.$ga.page({
      page: '/portfolio',
      title: 'Portfolio',
      location: window.location.href
    })
    this.getPortfolio();
  },
  methods: {
    async getPortfolio() {
      try {
        const portfolioStore = this.$store.state.portfolios;

        this.portfolios = portfolioStore.slice(0, 8);
        this.portfoliosStore = portfolioStore;
      } catch (err) {
        this.portfolios = [];
        console.error(err);
      }
    },
    viewPortfolioStatus() {
      if (this.portfolioViewStatus) {
        this.portfolioViewStatus = false;
        this.portfolios = this.portfoliosStore.slice(0, 8);
      } else {
        this.portfolioViewStatus = true;
        this.portfolios = this.portfoliosStore;
      }
    }
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/pages.sass"></style>