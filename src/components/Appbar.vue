<template>
    <div>
        <v-app-bar
        app
        absolute
        style="margin: 10px;"
        class="rounded-lg white">
            <v-spacer></v-spacer>
            <v-badge
            :content="messages"
            :value="messages"
            color="green"
            overlap
            >
                <v-icon>mdi-bell</v-icon>
            </v-badge>

            <v-menu
            offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    text
                    v-bind="attrs"
                    v-on="on">
                        <v-icon left>mdi-logout</v-icon>
                        Sign Out
                    </v-btn>
                    
                </template>
                
                <!-- <v-list>
                    <v-list-item
                    v-for="n in listRight"
                    :key="n"
                    >
                        <v-list-item-title>{{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list> -->
                
            </v-menu>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: 5,
            listRight: ["Logout"]
        }
    },
}
</script>