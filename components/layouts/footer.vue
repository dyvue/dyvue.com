<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <div :class="$style.flexBetween">
        <div :class="$style.social">
          <a target="blank" href="https://github.com/dyvue/" :class="$style.block">
            <i class="icon icon-github w-5 h-5 vertical-middle"></i>
          </a>
          <a target="blank" href="https://instagram.com/dy.vue" :class="$style.block">
            <i class="icon icon-instagram w-5 h-5 vertical-middle"></i>
          </a>
          <a target="blank" href="https://twitter.com/dyvue" :class="$style.block">
            <i class="icon icon-twitter w-5 h-5 vertical-middle"></i>
          </a>
          <a target="blank" href="https://www.linkedin.com/in/romadhan-prasetyo/" :class="$style.block">
            <i class="icon icon-linkedin w-5 h-5 vertical-middle"></i>
          </a>
        </div>
        <div :class="$style.copyright">
          <p :class="$style.block">© 2022 All right reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style module lang="sass" src="@/assets/sass/modules/footer.sass"></style>