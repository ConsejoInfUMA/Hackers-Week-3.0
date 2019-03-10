<template>
  <div id="particles" />
</template>


<style>
#particles {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -10;
  background: radial-gradient(#062933, #010c0f); /*#062933*/
}

#particles canvas {
  display: block;
  vertical-align: bottom;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: opacity 0.8s ease, -webkit-transform 1.4s ease;
  transition: opacity 0.8s ease, transform 1.4s ease;
}
</style>

<script>
export default {
  /*  global particlesJS */
  mounted() {
    this.$nextTick(() => {
      require('particles.js')
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS() {
      particlesJS('particles', {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 472.0061046122865
            }
          },
          color: {
            value: '#2196ba'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 8
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.660808546457201,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#1b677e',
            opacity: 0.6765420832776106,
            width: 0.9
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'remove'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      })
    }
  }
}
</script>
