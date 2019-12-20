<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap class="mt-3">
      <v-dialog v-model="dialog" max-width="500px">
        <!-- <template v-slot:activator="{ on }"> -->
        <template slot="activator" scope="{ on }">
          <v-flex sm6 xs12 md6 lg12>
            <v-btn
              class="mx-2 mt-4"
              absolute
              dark
              fab
              top
              right
              color="green"
              small
              style="border-radius: 50px;"
              v-on="on"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-flex>
        </template>
        <v-card>
          <!-- <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>-->

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.title" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="Código"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.value" label="Total"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-layout wrap id="up">
        <v-flex sm6 xs12 md6 lg4 v-for="(empresa, index) in empresas" :key="index">
          <material-stats-card
            :color="empresa.color"
            :icon="empresa.icon"
            :title="empresa.title"
            :value="formValue(empresa.value)"
            :sub-icon="empresa.subIcon"
            :sub-text="empresa.subText"
            style="margin-bottom: 5px !important;"
            onmouseover="this.style.cursor='move'"
          />
          <v-layout class="justify-end mr-1" style="margin-top: -25px !important">
            <v-btn class="mx-2" fab dark small end color="green">
              <v-icon @click="editItem(empresa)">mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon @click="deleteItem(empresa)">mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Dragula from "dragula/dragula";
import { mapState, mapMutations } from "vuex";

export default {
  mounted() {
    let vm = this;
    this.dragula = Dragula([
      document.querySelector("#up")
      // document.querySelector("#center"),
      // document.querySelector("#bottom")
    ]).on("drop", (el, container, source) => {
      if (source.id === container.id) {
        return;
      }
      //source.id === "up";
    });
  },
  computed: {
    ...mapState("app", ["empresas"]),
    // fill() {
    //   return this.$store.app.empresas;
    // }
  },
  data() {
    return {
      editedIndex: -1,
      editedItem: {
        title: "",
        codigo: "",
        value: ""
      },
      defaultItem: {
        nombre: "",
        codigo: "",
        total: ""
      },
      dialog: false
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    // this.initialize();
  },
  methods: {
    // initialize() {
    //   this.empresas = fill();
    // },
    formValue(value) {
      return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    // initialize() {
    //   this.empresas = [
    //     {
    //       title: "Teceng Gaming",
    //       color: "red",
    //       icon: "mdi-cards-heart",
    //       codigo: 1414,
    //       value: 345896,
    //       subIcon: "mdi-pencil",
    //       subText: "Last 24 Hours"
    //     },
    //     {
    //       title: "Oasis",
    //       color: "black",
    //       icon: "mdi-cards-spade",
    //       codigo: "0123",
    //       value: 325115,
    //       subIcon: "mdi-alert",
    //       subText: "Get More Space..."
    //     },
    //     {
    //       title: "Misiones",
    //       color: "red",
    //       icon: "mdi-cards-diamond",
    //       codigo: "2040",
    //       value: 114085,
    //       subIcon: "mdi-tag",
    //       subText: "Tracked from Github"
    //     },
    //     {
    //       title: "Panamá",
    //       color: "black",
    //       icon: "mdi-cards-club",
    //       codigo: "1474",
    //       value: 96112,
    //       subIcon: "mdi-update",
    //       subText: "Just Updated"
    //     }
    //   ];
    // },
    complete(index) {
      this.list[index] = !this.list[index];
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    editItem(item) {
      //console.log(item);
      this.editedIndex = this.empresas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.empresas.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.empresas.splice(index, 1);
    },
    save() {
      if (this.editedItem) {
        const icons = [
          "mdi-cards-club/black",
          "mdi-cards-diamond/red",
          "mdi-cards-heart/red",
          "mdi-cards-spade/black"
        ];
        const randIcon = icons[Math.floor(Math.random() * icons.length)];
        const ico = randIcon.split("/")[0];
        const col = randIcon.split("/")[1];
        this.editedItem.icon = ico;
        this.editedItem.color = col;
        this.editedItem.subIcon = "mdi-update";
        this.editedItem.subText = "Just Updated";
      }
      if (this.editedIndex > -1) {
        Object.assign(this.empresas[this.editedIndex], this.editedItem);
        //this.empresas[this.editedIndex].icon = "mdi-cards-club";
      } else {
        this.empresas.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>


