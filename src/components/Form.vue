<template>
  <div class="Form">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.55}px; width : ${
            (innerHeight * 0.55 * 736) / 1103
          }px; margin-top : ${innerHeight * -0.05}px;`"
        >
          <div class="imgContainer_form">
            <img
              :style="`height : ${innerHeight * 0.01}px;`"
              src="/icon-icecream_darker.png"
              alt=""
            />
          </div>

          <div class="block" :style="`height: ${innerHeight * 0.025}px;`" />

          <h5 style="text-align: center">
            ENTER YOUR MOBILE NUMBER <br />TO REVEAL YOUR TABBY AND
            <br />RECEIVE A PRIZE
          </h5>

          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <input type="text" placeholder="NAME" class="input" />
          <div class="block" :style="`height: ${innerHeight * 0.01}px;`" />
          <input type="text" placeholder="MOBILE" class="input" />
          <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
          <div class="inputcheckBox">
            <input type="checkbox" id="terms" />
            <label for="terms">
              BY SUBMITTING THIS FORM, YOU AGREE TO RECEIVE RECURRING AUTOMATED
              PROMOTIONAL AND PERSONALIZED MARKETING TEXT MESSAGES (E.G. CART
              REMINDERS) FROM COACH AT THE CELL NUMBER USED WHEN SIGNING UP.
              CONSENT IS NOT A CONDITION OF ANY PURCHASE. REPLY HELP FOR HELP
              AND STOP TO CANCEL. MSG FREQUENCY VARIES. MSG AND DATA RATES MAY
              APPLY. VIEW TERMS & PRIVACY.
            </label>
          </div>
        </div>
        <div class="btn-next">
          <button @click="next">SUBMIT</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Form",
  props: {
    triggerAnimation: {
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
  methods: {
    next() {
      this.$emit("triggerAnimation");
    },
    beforeEnter(el) {
      el.style.opacity = "0";
    },
    enter(el) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        type: "ease",
        delay: 0.5,
      });
    },
  },
};
</script>

<style>
.--white {
  background-color: white !important;
  color: #ff99a7 !important;
}
.imgContainer_form {
  height: 25%;
  width: fit-content;
  margin: 0 auto;
}
.imgContainer_form img {
  height: 100% !important;
}
.input::placeholder {
  color: #ff99a7;
  text-align: center;
  font-family: "Cream-Bold";
  font-size: 2vh;
}
.input {
  padding: 1.2vh;
  text-align: center;
  border: none;
  font-family: "Cream-Bold";
  color: #ff99a7;
}
.inputcheckBox {
  display: flex;
}
.inputcheckBox input {
  margin: 0;
  height: fit-content;
  margin-right: 0.5rem;
}
.inputcheckBox label {
  font-size: 1vh;
  color: #ff99a7;
  line-height: 1;
}
#terms {
  width: 50%;
  height: 1rem;
  border: none;
}
</style>
