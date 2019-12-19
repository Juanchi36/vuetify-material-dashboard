<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex md12 sm12 lg4>
        <div class="container" v-dragula="colOne" drake="first">
          <!-- with click -->
          <div v-for="text in colOne" :key="text">{{text}} [click me]</div>
        </div>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <div class="container" v-dragula="colTwo" drake="first">
          <div v-for="text in colTwo" :key="text">{{text}}</div>
        </div>
      </v-flex>
      <v-flex md12 sm12 lg4>
        <div class="container" v-dragula="colThree" drake="first">
          <div v-for="text in colThree" :key="text">{{text}}</div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      colOne: [
        "You can move these elements between these two containers",
        'Moving them anywhere else isn"t quite possible',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo: [
        "This is the default use case. You only need to specify the containers you want to use",
        "More interactive use cases lie ahead",
        "Another message"
      ],
      colThree: [
        "This is the default use case. You only need to specify the containers you want to use",
        "More interactive use cases lie ahead",
        "Another message"
      ]
    };
  },
  created() {
    //console.log("DRAG EFFECTS: created");
    let dragula = this.$dragula;
    let service = dragula.createService({
      name: "effects",
      drake: {
        copy: true
      }
    });
    let log = console.log;
    // TODO: Use classlist: https://developer.mozilla.org/en/docs/Web/API/Element/classList
    // See all events here: https://github.com/bevacqua/dragula#drakeon-events
    //
    service.on({
      "effects:removeModel": ({ name, el, source, dragIndex, model }) => {
        // log("HANDLE effects:removeModel: ", name, el, source, dragIndex, model);
        el.classList.remove("ex-moved");
      },
      "effects:dropModel": ({ name, el, source, target, dropIndex, model }) => {
        // log("HANDLE effects:dropModel: ", el, source, target, dropIndex, model);
        el.classList.add("ex-moved");
      },
      accepts: ({ el, target }) => {
        // log("accepts: ", el, target);
        return true; // target !== document.getElementById(left)
      },
      drag: ({ el, source, target, container }) => {
        // log("HANDLE drag: ", "el:", el, "c:", container);
        // log("classList", el.classList);
        el.classList.remove("ex-moved");
      },
      drop: opts => {
        const { el, container, model } = opts;
        // log("HANDLE drop: ", el, container, model, opts);
        // log("classList", el.classList);
        el.classList.add("ex-moved");
        // log("new classList", el.classList);
      },
      over: ({ el, container }) => {
        // log("over: ", el, container);
        // log("classList", el.classList);
        el.classList.add("ex-over");
      },
      out: ({ el, container }) => {
        // log("out: ", el, container);
        // log("classList", el.classList);
        el.classList.remove("ex-over");
      }
    });
    //console.log("DRAG EFFECTS: ready");
  }
};
</script>