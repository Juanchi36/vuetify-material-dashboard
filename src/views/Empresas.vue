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
                  <v-text-field label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Código"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Total"></v-text-field>
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
        <v-flex sm6 xs12 md6 lg3 v-for="(empresa, index) in empresas" :key="index">
          <material-stats-card
            :color="empresa.color"
            :icon="empresa.icon"
            :title="empresa.title"
            :value="empresa.value"
            :sub-icon="empresa.subIcon"
            :sub-text="empresa.subText"
            style="margin-bottom: 5px !important;"
            onmouseover="this.style.cursor='move'"
          />
          <v-layout class="justify-end mr-1" style="margin-top: -25px !important">
            <v-btn class="mx-2" fab dark small end color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
        <!-- <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="black"
            icon="mdi-cards-spade"
            title="Oasis"
            value="$325,115"
            sub-icon="mdi-alert"
            sub-icon-color="error"
            sub-text="Get More Space..."
            sub-text-color="text-primary"
            style="margin-bottom: 5px !important"
            onmouseover="this.style.cursor='move'"
          />
          <v-layout class="justify-end mr-1" style="margin-top: -25px !important">
            <v-btn class="mx-2" fab dark small end color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>-->
        <!-- <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="red"
            icon="mdi-cards-diamond"
            title="Misiones"
            value="$114,085"
            sub-icon="mdi-tag"
            sub-text="Tracked from Github"
            style="margin-bottom: 5px !important"
            onmouseover="this.style.cursor='move'"
          />
          <v-layout class="justify-end mr-1" style="margin-top: -25px !important">
            <v-btn class="mx-2" fab dark small end color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>-->
        <!-- <v-flex sm6 xs12 md6 lg3>
          <material-stats-card
            color="black"
            icon="mdi-cards-club"
            title="Panamá"
            value="$96,112"
            sub-icon="mdi-update"
            sub-text="Just Updated"
            style="margin-bottom: 5px !important"
            onmouseover="this.style.cursor='move'"
          />
          <v-layout class="justify-end mr-1" style="margin-top: -25px !important">
            <v-btn class="mx-2" fab dark small end color="green">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>-->
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import Dragula from "dragula/dragula";
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
  data() {
    return {
      empresas: [],
      title: "Teceng Gaming",
      dialog: false,
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      headers: [
        {
          sortable: false,
          text: "ID",
          value: "id"
        },
        {
          sortable: false,
          text: "Name",
          value: "name"
        },
        {
          sortable: false,
          text: "Salary",
          value: "salary",
          align: "right"
        },
        {
          sortable: false,
          text: "Country",
          value: "country",
          align: "right"
        },
        {
          sortable: false,
          text: "City",
          value: "city",
          align: "right"
        }
      ],
      items: [
        {
          name: "Dakota Rice",
          country: "Niger",
          city: "Oud-Tunrhout",
          salary: "$35,738"
        },
        {
          name: "Minerva Hooper",
          country: "Curaçao",
          city: "Sinaai-Waas",
          salary: "$23,738"
        },
        {
          name: "Sage Rodriguez",
          country: "Netherlands",
          city: "Overland Park",
          salary: "$56,142"
        },
        {
          name: "Philip Chanley",
          country: "Korea, South",
          city: "Gloucester",
          salary: "$38,735"
        },
        {
          name: "Doris Greene",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
          salary: "$63,542"
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.empresas = [
        {
          color: "red",
          icon: "mdi-cards-heart",
          title: "Teceng Gaming",
          value: "347,245",
          subIcon: "mdi-pencil",
          subText: "Last 24 Hours"
        },
        {
          color: "black",
          icon: "mdi-cards-spade",
          title: "Oasis",
          value: "$325,115",
          subIcon: "mdi-alert",
          subText: "Get More Space..."
        },
        {
          color: "red",
          icon: "mdi-cards-diamond",
          title: "Misiones",
          value: "$114,085",
          subIcon: "mdi-tag",
          subText: "Tracked from Github"
        },
        {
          color: "black",
          icon: "mdi-cards-club",
          title: "Panamá",
          value: "$96,112",
          subIcon: "mdi-update",
          subText: "Just Updated"
        },
        {
          color: "black",
          icon: "mdi-cards-club",
          title: "Panamá",
          value: "$96,112",
          subIcon: "mdi-update",
          subText: "Just Updated"
        },
      ];
    },
    complete(index) {
      this.list[index] = !this.list[index];
    },
    close() {
      this.dialog = false;
      // setTimeout(() => {
      //   this.editedItem = Object.assign({}, this.defaultItem);
      //   this.editedIndex = -1;
      // }, 300);
    },

    save() {
      // if (this.editedIndex > -1) {
      //   Object.assign(this.desserts[this.editedIndex], this.editedItem);
      // } else {
      //   this.desserts.push(this.editedItem);
      // }
      this.close();
    }
  }
};
</script>


