<template>
  <footer :class="$style.footer">
    <div :class="$style.screens">
      <div :class="$style.socialGrid">
        <div :class="$style.social">
          <a target="blank" href="https://github.com/dyvue/" :class="$style.block">
            <i class="icon icon-github w-6 h-6 vertical-middle"></i>
          </a>
          <a target="blank" href="https://instagram.com/dy.vue" :class="$style.block">
            <i class="icon icon-instagram w-6 h-6 vertical-middle"></i>
          </a>
          <a target="blank" href="https://twitter.com/dyvue" :class="$style.block">
            <i class="icon icon-twitter w-6 h-6 vertical-middle"></i>
          </a>
          <a target="blank" href="https://www.linkedin.com/in/romadhan-prasetyo/" :class="$style.block">
            <i class="icon icon-linkedin w-6 h-6 vertical-middle"></i>
          </a>
          <!-- <a target="blank" href="javascript:void(0)" :class="$style.block">
            <i class="icon icon-bitcoin w-6 h-6 vertical-middle"></i>
          </a> -->
        </div>
      </div>
      <div :class="$style.copyright">
        <p :class="$style.block">Copyright © 2023 Romadhan Edy, Released under the MIT license</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style module lang="sass" src="@/assets/sass/modules/footer.sass"></style>