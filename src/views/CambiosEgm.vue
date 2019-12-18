<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="blue"
          title="Auditorías de EGMs"
          text="Reporte de modificaciones de EGMs"
        >
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.fecha }}</td>
              <td>{{ item.egmId }}</td>
              <td>{{ item.empresa }}</td>
              <td>{{ item.usuario }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex md12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: "Fecha",
        value: "fecha"
      },
      {
        sortable: false,
        text: "EGM Id",
        value: "egmId"
      },
      {
        sortable: false,
        text: "Empresa",
        value: "empresa"
      },
      {
        sortable: false,
        text: "Usuario",
        value: "usuario"
      }
    ],
    items: [
      {
        egmId: "F225DA",
        fecha: "01-06-2019",
        empresa: "Teceng Gaming",
        usuario: "jperez"
      },
      {
        egmId: "AC695D",
        fecha: "14-07-2019",
        empresa: "Teceng Gaming",
        usuario: "jjlopez"
      },
      {
        egmId: "9BD55A",
        fecha: "15-08-2019",
        empresa: "Teceng Gaming",
        usuario: "frodriguez"
      },
      {
        egmId: "CD25DA",
        fecha: "16-09-2019",
        empresa: "Teceng Gaming",
        usuario: "jcgarcia"
      },
      {
        egmId: "9FC5DA",
        fecha: "17-10-2019",
        empresa: "Teceng Gaming",
        usuario: "mpalma"
      }
    ]
  })
};
</script>
