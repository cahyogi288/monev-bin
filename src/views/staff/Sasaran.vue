<template>
    <v-app>
        <Sidebar />
        <Appbar />
    </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Appbar from '@/components/Appbar.vue'

export default {
    components: {
        Sidebar,
        Appbar
    },
    data() {
        return {
            
        }
    },
}
</script>