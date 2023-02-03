<template>
  <div class="page1" :style="`height : ${innerHeight}px`">
    <div class="block" :style="`height : ${innerHeight * 0.16}px`" />
    <img
      src="/TabbyGame_sticker.png"
      :style="`max-height : ${innerHeight * 0.25}px;margin : 0 auto`"
    />
    <div class="block" :style="`height : ${innerHeight * 0.02}px`" />
    <h5 :style="`text-align : center;`">
      Take a personality quiz to<br />
      discover what Tabby are you.
    </h5>
    <div class="block" :style="`height : ${innerHeight * 0.04}px`" />
    <button @click="$emit('nextPage')">START</button>
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

<style>
.page1 {
  max-width: 750;
  display: flex;
  flex-direction: column;
}
.page1 button {
  width: fit-content;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  background-color: #ff99a7;
  border: none;
  color: white;
  border-radius: 20px;
}
</style>
