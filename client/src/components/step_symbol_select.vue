<template>
    <div id="login">
                <div class="col-lg-2" v-for="(im,index) in images" v-bind:key="im">
                                                <table>
                                                <tr v-on:click = "select_icon(im)">
                                                                <td ><img :src="getImgUrl(im)"></td>
                                                                <td ><p>{{image_names[index]}}</p></td>
                                                </tr>
                                                </table>


                </div>

</div>
</template>

<script>
    export default {
        name: 'step_symbol_select',
        data() {
            return {

                                images: [
                                                'Stop.jpg',
                                                'Balance_Verification.jpg',
                                                'Buffer Addition.jpg',
                                                'Calculation.jpg',
                                                'Caution_Safety.jpg',
                                                'Chromatography_Column.jpg',
                                                'Concentration.png',
                                                'Diafiltration.jpg',
                                                'Dilute_pH_Adjust.jpg',
                                                'Discard.jpg',
                                                'Documentation.jpg',
                                                'Fermentation.jpg',
                                                'Formulation.jpg',
                                                'Freeze.jpg',
                                                'image076.jpg',
                                                'image103.jpg',
                                                'Instrument_Reading.jpg',
                                                'Measure_1.jpg',
                                                'Measure.png',
                                                'Measure_Temperature.jpg',
                                                'Measure_Volume.png',
                                                'Mix.jpg',
                                                'pH_Conductivity_Measurement.jpg',
                                                'Pooling.png',
                                                'Pressure_Guage.jpg',
                                                'Recirculate.jpg',
                                                'Rinse.jpg',
                                                'Sample_Collection.jpg',
                                                'Tare_Weight.jpg',
                                                'TFF.jpg',
                                                'Thaw.jpg',
                                                'Timer.jpg',
                                                'Tubing_Assembly (2).jpg',
                                                'Tubing_Assembly.jpg',
                                                'Warning.jpg'
                                                ],
                                image_names: [
                                                'Stop',
                                                'Balance_Verification',
                                                'Buffer Addition',
                                                'Calculation',
                                                'Caution_Safety',
                                                'Chromatography Column',
                                                'Concentration',
                                                'Diafiltration',
                                                'Dilute/pH_Adjust',
                                                'Discard',
                                                'Documentation',
                                                'Fermentation',
                                                'Formulation',
                                                'Freeze',
                                                'image076',
                                                'image103',
                                                'Instrument Reading',
                                                'Measure(2)',
                                                'Measure',
                                                'Measure Temperature',
                                                'Measure Volume',
                                                'Mix',
                                                'pH/Conductivity Measurement',
                                                'Pooling',
                                                'Pressure_Guage',
                                                'Recirculate',
                                                'Rinse',
                                                'Sample_Collection',
                                                'Tare_Weight',
                                                'TFF',
                                                'Thaw',
                                                'Timer',
                                                'Tubing_Assembly (2)',
                                                'Tubing_Assembly',
                                                'Warning'
                                                ]
            }
        },
        methods: {
            select_icon: function(scr_path){
                                                this.$emit("update", scr_path);
                                },
                                getImgUrl(img) {
                                                return require('@/assets/Step_Symbols/' + img)
                                },

        }
    }
</script>

<style scoped>
    #login {
        width: 300px;
                height: 100px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
                overflow: scroll;
    }
td{
                text-align:center;
}


</style>
