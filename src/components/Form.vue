<template>
  <div class="Form">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.6}px; width : ${
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
            ENTER YOUR PHONE NUMBER TO <br />DISCOVER YOUR TABBY AND <br />CLAIM
            YOUR PRIZE
          </h5>

          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <input type="text" placeholder="NAME" class="input" v-model="name" />
          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <!-- mobile -->
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <input
              type="number"
              placeholder="+62"
              class="input left"
              style="width: 20%"
            />
            <div style="width: 2.5%" />
            <input
              type="number"
              placeholder="MOBILE"
              class="input right"
              style="width: 77.5%"
              v-model="phone"
              @change="handleInputChange_phone"
            />
          </div>
          <!-- email -->
          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <input
            type="text"
            placeholder="EMAIL"
            style="color: #ff99a7"
            class="input"
            v-model="email"
          />
          <div class="block" :style="`height: ${innerHeight * 0.01}px;`" />

          <div class="block" :style="`height : ${innerHeight * 0.05}px`" />
          <div class="inputcheckBox">
            <input type="checkbox" id="terms" />
            <label for="terms">
              By submitting, I agree to Coach Indonesia
              <a target="_blank" href="https://id.coach.com/privacy-policy">
                privacy policy
              </a>
              and terms of use.
            </label>
          </div>
        </div>
        <div class="btn-next">
          <button @click="next" class="loadingBTN">
            <h4 v-if="!isloading">submit</h4>
            <div v-if="isloading" class="loader"></div>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
import axios from "axios";
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
    setNamePhoneEmail: {
      type: Function,
      required: true,
    },
  },
  components: {
    VueTelInput,
  },
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      isloading: false,
    };
  },
  methods: {
    next() {
      this.isloading = true;

      // window scroll to top
      window.scrollTo(0, 0);

      if (this.email === "" || this.phone === "" || this.name === "") {
        alert("Please fill in your email and mobile and name to proceed.");
        this.isloading = false;
        return;
      }
      // email format
      if (!this.email.includes("@")) {
        alert("Please fill in a valid email to proceed.");
        this.isloading = false;
        return;
      }
      // phone format
      if (this.phone.length < 8) {
        alert("Please fill in a valid mobile to proceed.");
        this.isloading = false;
        return;
      }

      if (!document.querySelector("#terms").checked) {
        alert("Please check the Terms and Conditions box to proceed.");
        this.isloading = false;
        return;
      }
      // check phone format sigapore
      if (this.phone.length < 8) {
        alert("Please enter a valid mobile number.");
        this.isloading = false;
        return;
      }
      // email format check
      if (!this.email.includes("@")) {
        alert("Please enter a valid email address.");
        this.isloading = false;
        return;
      }

      axios
        .get(process.env.VUE_APP_API_URL + "/id", {
          params: {
            name: this.name,
            email: this.email,
            phone: this.phone,
          },
        })
        .then((response) => {
          window.localStorage.setItem("name", this.name);
          window.localStorage.setItem("email", this.email);
          window.localStorage.setItem("phone", this.phone);

          if (response.data.message?.statusCode === 400) {
            this.isloading = false;
            alert(response.data.message.body);
          } else {
            this.isloading = false;
            this.$emit("triggerAnimation");
          }
        })
        .catch((error) => {
          this.isloading = false;
          console.log(error);
        });
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
  color: #ff99a7 !important;
  text-align: center;
  font-family: "Cream-Bold";
  font-size: 2vh;
}
.input {
  padding: 1.2vh;
  text-align: center;
  border: none;
  font-family: "Cream-Bold";
  color: #ff99a7 !important;
  font-size: 2vh;
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
  width: 10%;
  height: 1rem;
  border: none;
}
.vti__dropdown-list.below {
  top: 33px;
  height: 150px;
  max-width: 100%;
}
.vti__dropdown-item strong {
  display: none;
}
.vti__dropdown-item span {
  display: none;
}
input[type="checkbox"]:focus {
  outline: 0;
}

input[type="checkbox"] {
  appearance: white;
  border: none;
  position: relative;
  background-color: white;
}

.loader {
  border: 0.1rem solid #f3f3f3; /* Light grey */
  border-top: 0.1rem solid #ff99a7;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
label {
  text-transform: uppercase;
}

.loadingBTN h4 {
  margin: 0;
}
</style>
