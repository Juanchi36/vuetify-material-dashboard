<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="indigo" title="Salas">
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.codigo }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.empresa }}</td>
              <td><a href="#"><v-icon>mdi-pencil</v-icon></a></td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-btn class="ma-2" color="indigo" block>Agregar Sala</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
      }
    ],
    items: [
      {
        codigo: "456242",
        nombre: "Vip",
        empresa: "Teceng Gaming",
      },
      {
        codigo: "986557",
        nombre: "Gold",
        empresa: "Teceng Gaming",
      },
      {
        codigo: "245874",
        nombre: "Black",
        empresa: "Oasis",
      },
      {
        codigo: "755413",
        nombre: "General",
        empresa: "Misiones",
      },
      {
        codigo: "635653",
        nombre: "Plus",
        empresa: "Misiones",
      }
    ]
  })
};
</script>
