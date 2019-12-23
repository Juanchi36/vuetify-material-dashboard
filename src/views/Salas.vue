<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
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
              color="indigo"
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
                  <v-text-field v-model="editedItem.codigo" label="Código"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.direccion" label="Dirección"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select :items="selectEmpresas" v-model="editedItem.empresa" label="Empresa"></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="editedItem.cierreContable" label="Cierre Contable"></v-text-field>
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
        <material-card color="indigo" title="Salas">
          <v-data-table
            :headers="headers"
            :items="salas"
            class="elevation-1"
            hide-actions
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
              <td>
                <a href="#">
                  <v-icon @click="editItem(item)">mdi-pencil</v-icon>
                </a>
              </td>
              <td>
                <a href="#">
                  <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
                </a>
              </td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages" circle></v-pagination>
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
    ...mapState("app", ["salas", "empresas"]),

    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        {console.log('aca') ;return 0;}

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  data: () => ({
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
        text: "Editar",
        value: "edit"
      },
      {
        sortable: false,
        text: "Borrar",
        value: "delete"
      }
    ],

    items: [],
    selectEmpresas: [],
    dialog: false,
    pagination: {},
    editedIndex: -1,
    editedItem: {
      codigo: "",
      nombre: "",
      empresa: "",
      codigo: "",
      direccion: "",
      cierreContable: ""
    },
    defaultItem: {
      codigo: "",
      nombre: "",
      empresa: "",
      codigo: "",
      direccion: "",
      cierreContable: ""
    }
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
      this.editedIndex = this.salas.indexOf(item);
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
      const index = this.salas.indexOf(item);
      confirm("Está serguro que queire borrar la sala?") &&
        this.salas.splice(index, 1);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.salas[this.editedIndex], this.editedItem);
      } else {
        this.salas.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
