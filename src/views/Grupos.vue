<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="light-green" title="Grupos">
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
              <td>{{ item.salaEmpresa }}</td>
              <td><a href="#"><v-icon>mdi-pencil</v-icon></a></td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-btn class="ma-2" color="light-green" block>Agregar Grupo</v-btn>
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
        text: "Sala / Empresa",
        value: "salaEmpresa"
      },
      {
        sortable: false,
        text: "Editar",
        value: "edit"
      }
    ],
    items: [
      {
        codigo: "176242",
        nombre: "Grupo A",
        salaEmpresa: "Sala Gold - Teceng Gaming",
      },
      {
        codigo: "716557",
        nombre: "Grupo B",
        salaEmpresa: "Sala General - Oasis",
      }
    ]
  })
};
</script>
