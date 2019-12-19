<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 lg6>
        <div class="card shadow-3 no-margin" id="left">
          <button>Hey</button>
          <button class="relative-position no-padding" value="5">
            <img src="./img/apple.svg" class="icon-size" alt />
            <span class="floating label bg-primary text-white">$5</span>
          </button>
          <button class="relative-position no-padding" value="3">
            <img src="./img/pear.svg" class="icon-size" alt />
            <span class="floating label bg-primary text-white">$3</span>
          </button>
          <button class="relative-position no-padding" value="2">
            <img src="./img/orange.svg" class="icon-size" alt />
            <span class="floating label bg-primary text-white">$2</span>
          </button>
        </div>
      </v-flex>
      <v-flex md12 sm12 lg6>
        <div class="text-center" id="cart" ref="cart" :style="move">
          <h5>
            <span class="label bg-amber text-white" id="span-price">
              <!-- <span class="left-detail">Total</span> $ -->
              <span ref="number"></span>
            </span>
          </h5>
          <!-- <div id="right"></div> -->
        </div>
      </v-flex>
      <!-- <div class="auto self-end" v-show="totalCost > 0">
        <button class="green raised" @click="pay()">Pay</button>
      </div>-->
    </v-layout>
  </v-container>
</template>

<script>
import Dragula from "dragula/dragula";
//import CountUp from "countup.js";
export default {
  mounted() {
    let vm = this;
    this.dragula = Dragula([document.querySelector("#left")]).on(
      "drop",
      (el, container, source) => {
        if (source.id === container.id) {
          return;
        }
        source.id === "left";
      }
    );
  },

  data() {
    return {
      dragula: "",
      move: ""
    };
  }
};
</script>

<style scoped>
.card {
  margin-right: 2%;
  border: 2px solid;
}
#cart {
  /* background: url("img/cart.svg") white no-repeat;
  background-size: 300px 300px; */
  width: 300px;
  height: 320px;
  /* border: 2px solid; */
}
#span-price {
  margin-top: 16px;
  margin-left: 166px;
  width: 132px;
}
#left {
  margin-left: 87px;
  margin-top: 20px;
  width: 90%;
  /* height: 111px; */
}
#right {
  margin-left: 87px;
  margin-top: 20px;
  width: 50%;
  /* height: 111px; */
}
.icon-size {
  width: 56px;
  height: 57px;
}
</style>
