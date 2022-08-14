<script lang='ts' setup>
const { isHovered } = defineProps<{ isHovered: boolean }>()
</script>

<template>
  <div
    pointer-events-none
    absolute top-20 left-0
    w-full h-full z--1
    overflow-hidden
    :style="!isHovered ? 'display:none' : ''"
  >
    <div w-full h-full>
      <div absolute w-200vw bg-green6 rounded-full class="line-1" />
      <div absolute w-200vw bg-green6 rounded-full class="line-2" />
      <div absolute w-200vw bg-green6 rounded-full class="line-3" />
    </div>
  </div>
</template>

<style scoped>
.line-1 {
  top: 0%;
  left: -10%;
  transform: rotate(4deg) translateZ(0px);
  transform-origin: left center;
  height: 10px;
  animation: l1 0.4s ease-in both;
}
.line-2{
  top: 72%;
  left: -18%;
  transform: rotate(-45deg) scaleX(1) translateZ(0px);
  transform-origin: left center;
  height: 16px;
  animation: l2 0.4s ease-in both;
}
.line-3{
  top: -30%;
  left: -36%;
  transform: rotate(-33deg) scaleX(1) translateZ(0px);
  transform-origin: right center;
  height: 20px;
  animation: l3 0.4s ease-in both;
}

@keyframes l1{
  from{
    transform: rotate(4deg) scaleX(0) translateZ(0px);
    height: 0px;
  }
  to{
    transform: rotate(4deg) scaleX(1) translateZ(0px);
    height: 10px;
  }
}
@keyframes l2{
  from{
    transform: rotate(-45deg) scaleX(0) translateZ(0px);
    height: 0px;
  }
  to{
    transform: rotate(-45deg) scaleX(1) translateZ(0px);
    height: 16px;
  }
}
@keyframes l3{
  from{
    transform: rotate(-33deg) scaleX(0) translateZ(0px);
    height: 0px;
  }
  to{
    transform: rotate(-33deg) scaleX(1) translateZ(0px);
    height: 20px;
  }
}
</style>
