<template>
    <v-navigation-drawer
    app
    permanent>
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item> -->

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
        v-for="item in items2"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        //   { title: 'Photos', icon: 'mdi-image' },
        //   { title: 'About', icon: 'mdi-help-box' },
        ],
        items2: [
          {
            action: 'mdi-file',
            title: 'Monev',
            items: [
              { title: 'Sasaran' },
              { title: 'Indikator' }
            ],
          },
          {
            action: 'mdi-account-circle',
            title: 'Akun',
            items: [
              { title: 'Edit Profil' },
              { title: 'Reset Password' }
            ],
          },
        ],
        right: null,
      }
    },
}
</script>