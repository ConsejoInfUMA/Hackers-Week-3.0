<template>
  <span class="typed" />
</template>
<script>
import Typed from 'typed.js'
export default {
  mounted() {
    const options = {
      loop: true,
      strings: [
        'DevOps',
        'Functional Programming',
        'Artificial Intelligence',
        'Software Engineering'
      ],
      typeSpeed: 80,
      backSpeed: 20
    }
    const typed = new Typed('.typed', options) // eslint-disable-line no-unused-vars
  }
}
</script>
