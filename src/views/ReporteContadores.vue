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
          color="green"
          title="Reporte de Contadores"
          text="Contadores"
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
              <td>{{ item.ci }}</td>
              <td>{{ item.co }}</td>
              <td>{{ item.jp }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
        <material-card
          color="green"
          flat
          full-width
          title="Reporte de Contadores"
          text="Contadores"
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
              <td>{{ item.ci }}</td>
              <td>{{ item.co }}</td>
              <td>{{ item.jp }}</td>
              <a href="#">Edit</a>
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
        text: 'EMG Id',
        value: 'egmId'
      },
      {
        sortable: false,
        text: 'Fecha',
        value: 'fecha'
      },
      {
        sortable: false,
        text: 'CI',
        value: 'ci'
      },
      {
        sortable: false,
        text: 'CO',
        value: 'co'
      },
      {
        sortable: false,
        text: 'JP',
        value: 'jp',
        // align: 'right'
      }
    ],
    items: [
      {
        egmId: 'AC95F2',
        fecha: '14-09-2019',
        ci: '569492',
        co: '296656',
        jp: '000796'
      },
      {
        egmId: 'BC65F2',
        fecha: '01-07-2019',
        ci: '656592',
        co: '963656',
        jp: '000542'
      },
      {
        egmId: 'CC95D9',
        fecha: '07-10-2019',
        ci: '655892',
        co: '123656',
        jp: '000891'
      },
      {
        egmId: 'DA65F2',
        fecha: '09-11-2019',
        ci: '658492',
        co: '223656',
        jp: '000596'
      },
      {
        egmId: 'EC00F2',
        fecha: '14-12-2019',
        ci: '738492',
        co: '003656',
        jp: '000391'
      },
      {
        egmId: 'FCC1C2',
        fecha: '03-01-2019',
        ci: '123492',
        co: '265656',
        jp: '000100'
      },
      {
        egmId: 'GAA5F2',
        fecha: '17-11-2019',
        ci: '158492',
        co: '723656',
        jp: '001589'
      },
      
    ]
  })
}
</script>
