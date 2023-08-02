<template>
  <footer :class="$style.footer">
    <div :class="$style.screens">
      <div :class="$style.socialGrid">
        <div :class="$style.social">
          <a target="blank" href="mailto:work@dyvue.com" :class="$style.socialItem">
            <i class="icon icon-email w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Email</span>
              <br>
              work@dyvue.com
            </p>
          </a>
          <a target="blank" href="https://www.linkedin.com/in/ramadhanep/" :class="$style.socialItem">
            <i class="icon icon-linkedin w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Linkedin</span>
              <br>
              ramadhanep
            </p>
          </a>
          <a target="blank" href="https://github.com/dyvue/" :class="$style.socialItem">
            <i class="icon icon-github w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Github</span>
              <br>
              @dyvue
            </p>
          </a>
          <a target="blank" href="https://twitter.com/dyvue" :class="$style.socialItem">
            <i class="icon icon-twitter w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Twitter</span>
              <br>
              @dyvue
            </p>
          </a>
          <a :href="`javascript:void(0)`" :class="$style.socialItem">
            <i class="icon icon-bitcoin w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Bitcoin</span>
              <br>
              <i>{{ this.fn(bitcoinAddr, 27) }}</i>
            </p>
          </a>
          <a href="javascript:void(0)" :class="$style.socialItem" @click="copyERC20Addr()">
            <i class="icon icon-ethereum w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Ether</span>
              <br>
              {{ this.fn(erc20Addr, 27) }}
              <input id="erc20AddrInput" type="text" :value="erc20Addr" :class="$style.hidden">
            </p>
          </a>
          <a href="javascript:void(0)" :class="$style.socialItem" @click="copyERC20Addr()">
            <i class="icon icon-arbitrum w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Arbitrum (ERC20)</span>
              <br>
              {{ this.fn(erc20Addr, 27) }}
              <input id="erc20AddrInput" type="text" :value="erc20Addr" :class="$style.hidden">
            </p>
          </a>
          <a href="javascript:void(0)" :class="$style.socialItem" @click="copyERC20Addr()">
            <i class="icon icon-chainlink w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Chainlink (ERC20)</span>
              <br>
              {{ this.fn(erc20Addr, 27) }}
              <input id="erc20AddrInput" type="text" :value="erc20Addr" :class="$style.hidden">
            </p>
          </a>
        </div>
      </div>
      <div :class="$style.copyright">
        <p :class="$style.block">© 2021 - PRESENT @ RAMADHAN</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      bitcoinAddr: "address will be filled in",
      erc20Addr: "0x8A9A935f0d889202CdDb760C4C7df3eF2e82a0fD",
    }
  },
  methods: {
    copyERC20Addr: async () => {
      var copyText = document.getElementById("erc20AddrInput")
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(copyText.value)
      alert("Copied: " + copyText.value)
    },
    fn: (text, count) => {
      return text.slice(0, count) + (text.length > count ? "..." : "");
    }
  }
}
</script>

<style module lang="sass" src="@/assets/sass/modules/footer.sass"></style>