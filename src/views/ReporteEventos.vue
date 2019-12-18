<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="red"
          title="Reporte de Eventos"
          text="Eventos"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.egmId }}</td>
              <td>{{ item.fecha }}</td>
              <td>{{ item.codigoEvento }}</td>
              <td>{{ item.descripcionEvento }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
        <material-card
          color="red"
          flat
          full-width
          title="Reporte de Eventos"
          text="Eventos"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.egmId }}</td>
              <td>{{ item.fecha }}</td>
              <td>{{ item.codigoEvento }}</td>
              <td>{{ item.descripcionEvento }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'EGM Id',
        value: 'egmId'
      },
      {
        sortable: false,
        text: 'Fecha',
        value: 'fecha'
      },
      {
        sortable: false,
        text: 'Código del Evento',
        value: 'codigoEvento'
      },
      {
        sortable: false,
        text: 'Descripción del Evento',
        value: 'descripcionEvento',
      }
    ],
    items: [
      {
        egmId: 'F225DA',
        fecha: '01-06-2019',
        codigoEvento: '66',
        descripcionEvento: 'Se presiona el boton de cobrar'
      },
      {
        egmId: 'AC695D',
        fecha: '14-07-2019',
        codigoEvento: '6A',
        descripcionEvento: 'AFT request for host cashout'
      },
      {
        egmId: '9BD55A',
        fecha: '15-08-2019',
        codigoEvento: '69',
        descripcionEvento: 'AFT Transfer complete'
      },
      {
        egmId: 'CD25DA',
        fecha: '16-09-2019',
        codigoEvento: '51',
        descripcionEvento: 'Se genera un Pago en Mano'
      },
      {
        egmId: '9FC5DA',
        fecha: '17-10-2019',
        codigoEvento: '3E',
        descripcionEvento: 'Un Pago Manual ha sido validado'
      },
      
    ]
  })
}
</script>
