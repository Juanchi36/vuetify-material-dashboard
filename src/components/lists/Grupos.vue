<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-dialog v-model="dialog" max-width="500px" style="flex: auto; text-align: -webkit-right;">
        <!-- <template v-slot:activator="{ on }"> -->
        <template slot="activator" scope="{ on }">
          <v-flex sm6 xs12 md6 lg12>
            <v-btn
              class="mx-2"
              dark
              fab
              color="orange"
              small
              style="border-radius: 50px;"
              v-on="on"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-flex>
        </template>
        <v-card>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="Código"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    :items="selectEmpresas"
                    v-model="editedItem.empresa"
                    @change="fillSalas"
                    label="Empresa"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select :items="selectSalas" v-model="editedItem.sala" label="Sala"></v-select>
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
      <v-flex md12>
        <material-card color="orange" title="Grupos" style="margin-top: 0;">
          <v-data-table
            :headers="headers"
            :items="grupos"
            hide-actions
            class="elevation-1"
            :pagination.sync="pagination"
            :rows-per-page-items="[4, 4]"
          >
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" scope="props">
              <td>{{ props.item.codigo }}</td>
              <td>{{ props.item.nombre }}</td>
              <td>{{ props.item.empresa }}</td>
              <td>{{ props.item.sala }}</td>
              <td>
                <a href="#">
                  <v-icon @click="editItem(props.item)">mdi-pencil</v-icon>
                </a>
              </td>
              <td>
                <a href="#">
                  <v-icon @click="deleteItem(props.item)">mdi-delete</v-icon>
                </a>
              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" color="orange"></v-pagination>
          </div>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("app", ["grupos", "empresas", "salas"]),

    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) {
        return 0;
      }

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  data: () => ({
    cosas: ["uno", "dos", "tres", "cuatro"],
    selectEmpresas: [],
    selectSalas: [],
    dialog: false,
    pagination: {},
    editedIndex: -1,
    editedItem: {
      codigo: "",
      nombre: "",
      empresa: "",
      sala: ""
    },
    defaultItem: {
      codigo: "",
      nombre: "",
      empresa: "",
      sala: ""
    },
    headers: [
      {
        sortable: false,
        text: "Código",
        value: "codigo"
      },
      {
        sortable: false,
        text: "Nombre",
        value: "nombre"
      },
      {
        sortable: false,
        text: "Empresa",
        value: "empresa"
      },
      {
        sortable: false,
        text: "Sala",
        value: "sala"
      },
      {
        sortable: false,
        text: "Editar",
        value: "edit"
      },
      {
        sortable: false,
        text: "Borrar",
        value: "delete"
      }
    ]
  }),
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  mounted() {
    this.items = this.salas;
    this.selectEmpresas = this.empresas.map(empresa => {
      //console.log(empresa.title)
      return empresa.title;
    });
    //this.selectEmpresas = JSON.parse(JSON.stringify(this.empresas));
    //this.selectEmpresas = Object.values(this.empresa)
    //console.log(this.selectEmpresas);
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.grupos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    deleteItem(item) {
      const index = this.grupos.indexOf(item);
      confirm("Está serguro que queire borrar el grupo?") &&
        this.grupos.splice(index, 1);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.grupos[this.editedIndex], this.editedItem);
      } else {
        this.grupos.push(this.editedItem);
      }
      this.close();
    },
    fillSalas(selectValue) {
      let selectSalas = [];
      this.salas.map(sala => {
        if (sala.empresa === selectValue) {
          selectSalas.push(sala.nombre);
        }
      });
      //console.log(selectSalas);
      this.selectSalas = selectSalas;
    }
  }
};
</script>
