<template>
  <span>
    <span class="typed" />
    <div id="typed-strings">
      <p>^250DevOps^750</p>
      <p>^250Functional Programming^500</p>
      <p>^250Artificial Intelligence^500</p>
      <p>^250Software Engineering^500</p>
    </div>
    <span id="typed" />
  </span>
</template>

<style>
#typed-strings {
  display: none;
}
</style>


<script>
import Typed from 'typed.js'
export default {
  mounted() {
    const options = {
      loop: true,
      stringsElement: '#typed-strings',
      strings: [
        '^250DevOps^750',
        '^250Functional Programming^500',
        '^250Artificial Intelligence^500',
        '^250Software Engineering^500'
      ],
      typeSpeed: 30,
      backSpeed: 30
    }
    const typed = new Typed('.typed', options) // eslint-disable-line no-unused-vars
  }
}
</script>
