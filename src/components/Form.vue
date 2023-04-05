<template>
  <div class="Form">
    <!-- <div class="block" :style="`height : ${innerHeight * 0.5}px`" /> -->
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <div
          class="container"
          :style="`height : ${innerHeight * 0.65}px; width : ${
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
            保持聯絡 <br /><br />
            找出你對應的 Tabby 風格，<br />
            並了解 COACH 所有相關新訊
          </h5>

          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <input type="text" placeholder="姓名" class="input" v-model="name" />
          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <!-- mobile -->
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <input
              type="number"
              placeholder="+886"
              class="input left"
              style="width: 20%"
            />
            <div style="width: 2.5%" />
            <input
              type="number"
              placeholder="行動電話"
              class="input right"
              style="width: 77.5%"
              v-model="phone"
              @change="handleInputChange_phone"
            />
          </div>
          <!-- email -->
          <div class="block" :style="`height: ${innerHeight * 0.02}px;`" />
          <!-- <input
            type="text"
            placeholder="EMAIL"
            style="color: #ff99a7"
            class="input"
            v-model="email"
          /> -->
          <select
            id="age-range"
            placeholder=""
            name="age-range"
            v-bind="ageRange"
          >
            <option value="">年齡區間</option>
            <option value="18-25">18-25</option>
            <option value="26-32">26-32</option>
            <option value="33-41">33-41</option>
            <option value="42-57">42-57</option>
            <option value="58 +">58 +</option>
          </select>

          <div class="block" :style="`height: ${innerHeight * 0.01}px;`" />

          <div class="inputcheckBox">
            <input type="checkbox" id="terms" />
            <label for="terms">
              送出此表格代表您自動同意透過註冊時使用的手機號碼來接收COACH的自動化優惠活動與
              個人專屬行銷訊息（如購物車提醒）。您的同意不代表任何消費行為的授意。可依需求點選
              「幫助」、「終止」和「取消」等功能。因傳輸速度不同，過程中可能會產生訊息與數據費率。
              請查看使用
              <a target="_blank" href="http://attn.tv/coach/terms.html">
                條款
              </a>
              與
              <a target="_blank" href="https://attnl.tv/legal/p/Ahj">
                隱私政策
              </a>
              。
            </label>
          </div>
        </div>
        <div class="btn-next">
          <button @click="next" class="loadingBTN">
            <h4 v-if="!isloading">開始</h4>
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
      name: "",
      phone: "",
      ageRange: "",
      isloading: false,
    };
  },
  methods: {
    next() {
      this.isloading = true;
      let age = document.querySelector("select");
      let ageRange = age.options[age.selectedIndex].value;

      // window scroll to top
      window.scrollTo(0, 0);

      if (this.phone === "" || this.name === "") {
        alert("Please fill in your name and mobile and name to proceed.");
        this.isloading = false;
        return;
      }

      if (!document.querySelector("#terms").checked) {
        alert("Please check the Terms and Conditions box to proceed.");
        this.isloading = false;
        return;
      }
      // us number length check
      if (this.phone.length < 10) {
        alert("Please enter a valid mobile number.");
        this.isloading = false;
        return;
      }

      if (age.value === "") {
        alert("Please select your age range.");
        this.isloading = false;
        return;
      }

      window.localStorage.setItem("name", this.name);
      window.localStorage.setItem("ageRange", ageRange);
      window.localStorage.setItem("phone", this.phone);

      // this.$emit("triggerAnimation");

      axios
        .get(process.env.VUE_APP_API_URL_SG + "/taiwan", {
          params: {
            name: this.name,
            phone: this.phone,
            ageRange: age.value,
          },
        })
        .then((response) => {
          window.localStorage.setItem("name", this.name);
          window.localStorage.setItem("email", this.email);
          window.localStorage.setItem("phone", this.phone);

          if (response.data.message?.statusCode === 400) {
            this.isloading = false;
            let message = JSON.parse(response.data.message.body);
            alert(message.message);
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
  height: 20%;
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
  font-size: 1.8vh;
}
.input {
  padding: 1.2vh;
  text-align: center;
  border: none;
  font-family: "Cream-Bold";
  color: #ff99a7 !important;
  font-size: 1.8vh;
  border: none;
  border-radius: 0;
}
.input.left {
  border-radius: 0;
}
.inputcheckBox {
  display: flex;
  margin-top: 1rem;
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
  letter-spacing: 0.3px;
}
#terms {
  width: 50%;
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

select {
  font-size: 2vh;
  padding: 1.2vh;
  font-family: "Cream-Bold";
  color: #ff99a7 !important;
  border: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY5OWE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: left 1rem center;
  background-size: 1em;
  text-align-last: center;
  background-color: white;
}
select:focus-visible {
  outline: none;
  border: #ff99a7 1px solid;
}

select::-ms-expand {
  border-radius: 0%;
}
option {
  color: #ff99a7;
  text-align: center;
  font-family: "Cream-Bold";
  text-align: -webkit-center;
}

select option:hover {
  box-shadow: 0 0 10px 100px #1882a8 inset;
  color: white;
}
</style>
