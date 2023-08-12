<template>
  <div :class="app_class">
    <particles
      id="_tsparticles"
      :options="{
        fpsLimit: 240,
        interactivity: {
          detectsOn: 'canvas',
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.1,
              size: 40
            },
            push: {
              quantity: 1
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#9a9a9a'
          },
          links: {
            color: '#9a9a9a',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'destroy',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 20
          },
          opacity: {
            value: 1
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 3
          }
        },
        detectRetina: true
      }"
    />
    <c-navbar />
    <nuxt />
    <c-footer />
    <mobile-navbar v-if="isMobile()" />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import MobileNavbar from "@/components/layouts/mobile-navbar";
export default {
  components: {
    "c-navbar": Navbar,
    "c-footer": Footer,
    "mobile-navbar": MobileNavbar,
  },
  data() {
    return {
      app_class: this.generateApp(32)
    };
  },
  methods: {
    generateApp: function(base) {
      let r = "0x" + this.makeid(base);
      console.log(
        "%c " + r + " ",
        "text-shadow: 0 0 10px #9a9a9a,0 0 20px #9a9a9a,0 0 30px #9a9a9a,0 0 40px #092420,0 0 70px #092420,0 0 80px #092420,0 0 100px #092420,0 0 150px #092420;padding:20px 0;font-size:16px;"
      );
      return r;
    },
    makeid: function(length) {
      var result           = '';
      var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  }
};
</script>
