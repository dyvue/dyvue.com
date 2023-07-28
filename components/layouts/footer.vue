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
          <!-- <a target="blank" href="https://instagram.com/dy.vue" :class="$style.socialItem">
            <i class="icon icon-instagram w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Instagram</span>
              <br>
              @dy.vue
            </p>
          </a> -->
          <a target="blank" href="https://twitter.com/dyvue" :class="$style.socialItem">
            <i class="icon icon-twitter w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Twitter</span>
              <br>
              @dyvue
            </p>
          </a>
          <!-- <a target="blank" :href="`https://www.blockchain.com/explorer/addresses/btc/${bitcoinAddr}`" :class="$style.socialItem"> -->
          <a :href="`javascript:void(0)`" :class="$style.socialItem">
            <i class="icon icon-bitcoin w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Bitcoin</span>
              <br>
              <i>{{ this.fn(bitcoinAddr, 27) }}</i>
            </p>
          </a>
          <a target="blank" :href="`https://arbiscan.io/tokenholdings?a=${arbitrumAddr}#tokentxns`" :class="$style.socialItem">
            <i class="icon icon-arbitrum w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Arbitrum</span>
              <br>
              {{ this.fn(arbitrumAddr, 27) }}
            </p>
          </a>
          <!-- <a href="javascript:void(0)" :class="$style.socialItem" @click="copyBitcoinAddr()">
            <i class="icon icon-bitcoin w-10 h-10 vertical-middle"></i>
            <p :class="$style.block">
              <span :class="$style.textWhite">Bitcoin</span>
              <br>
              {{ this.fn(bitcoinAddr, 27) }}
              <input id="bitcoinAddrInput" type="text" :value="bitcoinAddr" :class="$style.hidden">
            </p>
          </a> -->
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
      bitcoinAddr: "waiting for ledger wallet",
      arbitrumAddr: "0x8A9A935f0d889202CdDb760C4C7df3eF2e82a0fD",
    }
  },
  methods: {
    copyBitcoinAddr: async () => {
      var copyText = document.getElementById("bitcoinAddrInput")
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