<template>
  <div class="page1">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <button @click="$emit('nextPage')">click start</button>
  </div>
</template>

<script>
export default {
  props: {
    nextPage: {
      type: Function,
      required: true,
    },
    innerHeight: {
      type: Number,
      required: true,
    },
    innerWidth: {
      type: Number,
      required: true,
    },
  },

  methods: {},
};
</script>

<style></style>
