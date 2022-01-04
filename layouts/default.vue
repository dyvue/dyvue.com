<template>
  <div :class="app_class">
    <particles
      id="__tsparticles"
      :options="{
        fpsLimit: 240,
        interactivity: {
          detectsOn: 'canvas',
          // events: {
          //   onClick: {
          //     enable: true,
          //     mode: 'push'
          //   },
          //   onHover: {
          //     enable: true,
          //     mode: 'repulse'
          //   },
          //   resize: true
          // },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.1,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#00dc82'
          },
          links: {
            color: '#00dc82',
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
            value: 50
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
    <div class="kingsman">
      <div></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
export default {
  components: {
    "c-navbar": Navbar,
    "c-footer": Footer
  },
  data() {
    return {
      app_class: this.uint(32)
    };
  },
  methods: {
    uint: function(base) {
      let r = "__0x";
      for (let i = 0; i < base; i++) {
        r += "0";
      }
      console.log(
        "%c " + r + " ",
        "text-shadow: 0 0 10px #00dc82,0 0 20px #00dc82,0 0 30px #00dc82,0 0 40px #092420,0 0 70px #092420,0 0 80px #092420,0 0 100px #092420,0 0 150px #092420;padding:20px 0;font-size:16px;"
      );
      console.log(
        "%c whatcha doing here dude?",
        "text-shadow: 0 0 10px #00dc82,0 0 20px #00dc82,0 0 30px #00dc82,0 0 40px #092420,0 0 70px #092420,0 0 80px #092420,0 0 100px #092420,0 0 150px #092420;padding:20px 0;font-size:16px;"
      );
      return r;
    }
  }
};
</script>
