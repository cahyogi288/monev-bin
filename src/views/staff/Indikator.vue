<template>
    <v-app>
        <Sidebar />
        <Appbar />
        <v-main style="margin-top: 10px;">
            <v-container fluid>
                <v-card>
                    <template>
                        <v-row class="ml-10">
                            <h1>Indikator</h1>
                        </v-row>
                    </template>
                    <!-- <template>
                        <v-row class="ml-10" >
                            <v-btn
                                rounded 
                                color="#EF5350" 
                                class="white--text mt-5"
                                v-bind="attrs"
                                v-on="on">
                                <v-icon>mdi-file-plus-outline</v-icon>
                                Indikator
                            </v-btn>
                        </v-row>
                        
                    </template> -->
                    <template>
                        <v-row class="ml-10">
                            <v-col sm="1">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                            class="mt-5" tile small color="#EF5350"  icon
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                            <v-icon>mdi-file-plus-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Tambah data indikator</span>
                                </v-tooltip>
                                <!-- <v-btn
                                    tile small  icon
                                    color="#EF5350" 
                                    class="ma-2 mt-5">
                                    <v-icon>mdi-file-plus-outline</v-icon>
                                </v-btn> -->
                            </v-col>
                            <v-col  sm="2">
                                <v-dialog
                                    ref="dialog"
                                    v-model="modalDatePicker"
                                    :return-value.sync="date"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="date"
                                        label="Pilih bulan"
                                        prepend-icon="mdi-calendar-month"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date" type="month" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modalDatePicker = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                        <div style="margin-left:50px; margin-right:50px;">
                            <v-data-table
                                :headers="headers"
                                :items="dataKonten"
                                :search="search">
                                <!-- <template v-slot:item.foto="{ item }">
                                    <img :src="item.foto" style="width:50px; height:50px;">
                                    
                                </template> -->

                                <template v-slot:item.aksi="{ item }">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                                class="ma-2" tile small color="success" @click="detailData(item)" icon
                                                v-bind="attrs"
                                                v-on="on"
                                                >
                                                <v-icon>mdi-eye-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Detail</span>
                                    </v-tooltip>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                                class="ma-2" tile small color="primary" @click="editdata(item)" icon
                                                v-bind="attrs"
                                                v-on="on"
                                                >
                                                <v-icon>mdi-square-edit-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Edit data</span>
                                    </v-tooltip>
                                    <!-- <v-btn class="ma-2" tile small color="success" @click="detailData(item)" icon title="detail">
                                        <v-icon>mdi-eye-outline</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2" tile small color="primary" @click="editData(item)" icon title="edit">
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                    </v-btn> -->
                                    <!-- <v-btn class="ma-2" tile small color="red" @click="actionDelete(item)" icon title="delete">
                                        <v-icon>mdi-trash-can-outline</v-icon>
                                    </v-btn>
                                    <v-btn class="ma-2" @click="contentDetail(item)" tile small color="blue" text title="delete">
                                        Detail
                                    </v-btn> -->
                                </template>
                            </v-data-table>
                        </div>
                        
                    </template>
                </v-card>

            </v-container>
        </v-main>
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
            date: new Date().toISOString().substr(0, 7),
            modalDatePicker: false,
            headers : [
                { text: '#', value:'nomor'},
                { text: 'Indikator', value: 'indikator'},
                { text: 'Target', value: 'target' },
                { text: 'Realisasi', value: 'realisasi' },
                { text: '% Realisasi', value: 'persenRealisasi' },
                { text: 'Anggaran', value: 'anggaran' },
                { text: 'Aksi', value: 'aksi', sortable: false },
            ],
            dataKonten: [
                {
                    nomor : '1',
                    indikator : 'Pengendalian SDM',
                    target : '24',
                    realisasi : '20',
                    persenRealisasi : '8,3%',
                    anggaran :'Rp 10.000.000'
                }
            ]
        }
    },
}
</script>