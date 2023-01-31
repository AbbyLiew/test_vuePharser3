<template>
  <div class="Result">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: {
    quationsData: {
      type: Array,
      default: () => [],
    },
  },

  methods: {},

  watch: {
    quationsData: {
      handler: function (newVal, oldVal) {
        console.log(newVal);
      },
      deep: true,
    },
  },
  mounted() {},
};
</script>

<style></style>
