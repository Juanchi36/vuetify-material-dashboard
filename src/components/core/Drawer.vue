<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img :src="image" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img :src="logo" height="34" contain />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">Sistema Urano</v-list-tile-title>
        </v-list-tile>
        <v-divider />
        <!-- <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
          v-model="prueba"
        >
          <v-list-tile-action >
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>-->

        <v-list-tile :to="links[0].to" :active-class="color" avatar class="v-list-item">
          <v-list-tile-action>
            <v-icon>{{ links[0].icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="links[0].text" />
        </v-list-tile>
        <v-list-group no-action>
          <v-list-tile class="v-list-item" slot="activator" onmouseover="this.style.backgroundColor='transparent'">
            <v-list-tile-action>
              <v-icon>{{ links[1].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Config</v-list-tile-title>
          </v-list-tile>

          <!-- <v-list-tile :to="links[1].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[1].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[1].text" />
          </v-list-tile>-->

          <v-list-tile :to="links[2].to" :active-class="color" avatar class="v-list-item" >
            <v-list-tile-action>
              <v-icon>{{ links[2].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[2].text" />
          </v-list-tile>

          <v-list-tile :to="links[3].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[3].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[3].text" />
          </v-list-tile>

          <v-list-tile
            :to="links[4].to"
            :active-class="color"
            avatar
            class="v-list-item"
            style="margin-top: 10px"
          >
            <v-list-tile-action>
              <v-icon>{{ links[4].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[4].text" />
          </v-list-tile>

          <v-list-tile :to="links[5].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[5].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[5].text" />
          </v-list-tile>

          <v-list-tile :to="links[6].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[6].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[6].text" />
          </v-list-tile>

          <!-- <v-list-tile :to="links[7].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[7].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[7].text" />
          </v-list-tile>

          <v-list-tile :to="links[8].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[8].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[8].text" />
          </v-list-tile>-->
        </v-list-group>
        <v-list-group no-action>
          <v-list-tile class="v-list-item" slot="activator" onmouseover="this.style.backgroundColor='transparent'">
            <v-list-tile-action>
              <v-icon>{{ links[7].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Reportes</v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="links[8].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[8].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[8].text" />
          </v-list-tile>

          <v-list-tile :to="links[9].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[9].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[9].text" />
          </v-list-tile>
        </v-list-group>

        <v-list-group no-action>
          <v-list-tile class="v-list-item" slot="activator" onmouseover="this.style.backgroundColor='transparent'">
            <v-list-tile-action>
              <v-icon>{{ links[10].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Auditorías</v-list-tile-title>
          </v-list-tile>

          <v-list-tile :to="links[11].to" :active-class="color" avatar class="v-list-item">
            <v-list-tile-action>
              <v-icon>{{ links[11].icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title v-text="links[11].text" />
          </v-list-tile>
        </v-list-group>

        <v-list-tile :to="links[12].to" :active-class="color" avatar class="v-list-item">
          <v-list-tile-action>
            <!-- <v-icon>{{ links[12].icon }}</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-title> </v-list-tile-title>
        </v-list-tile>
        <!-- <v-list-group
        prepend-icon="mdi-settings"
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile-title>Users</v-list-tile-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
           
          >
            <v-list-item-title >hey</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        </v-list-group>-->
        <!-- <v-list-tile
          active-class="success"
          class="v-list-item v-list__tile--buy"
          to="/upgrade"
        >
          <v-list-tile-action>
            <v-icon>mdi-package-up</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="font-weight-light">
            Upgrade To PRO
          </v-list-tile-title>
        </v-list-tile>-->
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: "urano-logo.png",
    links: [
      {
        to: "/",
        icon: "mdi-home-outline",
        text: "Home"
      },
      {
        to: "/config",
        icon: "mdi-settings",
        text: "Config"
      },
      {
        to: "/empresas",
        icon: "mdi-factory",
        text: "Empresas"
      },
      {
        to: "/salas",
        icon: "mdi-cards-playing-outline",
        text: "Salas"
      },
      {
        to: "/grupos",
        icon: "mdi-account-multiple",
        text: "Grupos"
      },
      {
        to: "/egm",
        icon: "mdi-bank",
        text: "EGM"
      },
      {
        to: "/usuarios",
        icon: "mdi-account-circle",
        text: "Usuarios"
      },
      {
        to: "/reportes",
        icon: "mdi-note-multiple-outline",
        text: "Reportes"
      },
      {
        to: "/reporte-contadores",
        icon: "mdi-counter",
        text: "Reporte de contadores"
      },
      {
        to: "/reporte-eventos",
        icon: "mdi-eventbrite",
        text: "Reporte de eventos"
      },
      {
        to: "/auditorias",
        icon: "mdi-checkbox-marked-circle",
        text: "Auditorías"
      },
      {
        to: "/registro-egm",
        icon: "mdi-rotate-left",
        text: "Cambios en EGMs"
      },
      {
        to: '/crud',
        icon: 'mdi-account',
        text: 'Crud'
      },
      // {
      //   to: '/table-list',
      //   icon: 'mdi-clipboard-outline',
      //   text: 'Table List'
      // },
      // {
      //   to: '/typography',
      //   icon: 'mdi-format-font',
      //   text: 'Typography'
      // },
      // {
      //   to: '/icons',
      //   icon: 'mdi-chart-bubble',
      //   text: 'Icons'
      // },
      // {
      //   to: '/maps',
      //   icon: 'mdi-map-marker',
      //   text: 'Maps'
      // },
      // {
      //   to: '/notifications',
      //   icon: 'mdi-bell',
      //   text: 'Notifications'
      // }
    ]
  }),
  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    },
    items() {
      return this.$t("Layout.View.items");
    },
    prueba() {
      if (this.link === "Config") {
        console.log("config");
      } else {
        //console.log(link)
      }
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  }
};
</script>

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }
}
</style>
