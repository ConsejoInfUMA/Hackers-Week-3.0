<template>
  <vue-particles
    class="particles"
    color="#dedede"
    :particle-opacity="0.7"
    :particles-number="80"
    shape-type="circle"
    :particle-size="4"
    lines-color="#dedede"
    :lines-width="1"
    :line-linked="true"
    :line-opacity="0.4"
    :lines-distance="150"
    :move-speed="3"
    :hover-effect="true"
    hover-mode="grab"
    :click-effect="true"
    click-mode="push"
  />
</template>


<style>
.particles {
  display: flex;
  position: absolute;
  flex-flow: column;
  height: 100vh;
}
</style>
