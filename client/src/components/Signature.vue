<template>
    <div id="app">
		<div style = "width">
        <vueSignature ref="signature" :sigOption="option" ></vueSignature>
		</div>
		<div>
        <button @click="save" >Performed</button>
        <button @click="clear">Clear</button>
        <!--<button @click="undo">Undo</button>
        <button @click="addWaterMark">addWaterMark</button>-->
		</div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            option:{
                penColor:"rgb(0, 0, 0)",
                backgroundColor:"rgb(255,255,255)"
            },
			imageURL: ""
        };
    },
    methods:{
        save(event){
            var _this = this;
            var png = _this.$refs.signature.save()
            var jpeg = _this.$refs.signature.save('image/jpeg')
            var svg = _this.$refs.signature.save('image/svg+xml');
			this.imageURL = png;
			this.$emit('Singature_IMG', _this.$refs.signature.save());
            /*console.log(png);
            console.log(jpeg)
            console.log(svg)*/
			
        },
        clear(){
            var _this = this;
            _this.$refs.signature.clear();
			this.$emit('Singature_IMG', "");
        },
        undo(){
            var _this = this;
            _this.$refs.signature.undo();
        },
        addWaterMark(){
            var _this = this;
            _this.$refs.signature.addWaterMark({
                text:"mark text",          // watermark text, > default ''
                font:"20px Arial",         // mark font, > default '20px sans-serif'
                style:'all',               // fillText and strokeText,  'all'/'stroke'/'fill', > default 'fill		
                fillStyle:"red",           // fillcolor, > default '#333' 
                strokeStyle:"blue",	   // strokecolor, > default '#333'	
                x:100,                     // fill positionX, > default 20
                y:200,                     // fill positionY, > default 20				
                sx:100,                    // stroke positionX, > default 40
                sy:200                     // stroke positionY, > default 40
            });
        },
        fromDataURL(url){
            var _this = this;
            _this.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...");
        },
		
		emitSig(){
			console.log('Signal Sent');
			this.$emit('Singature_IMG', this.imageURL);
		}
		
    }
};
</script>
<style>
#app{
	
	width: 100%;
	height: 100%;
	background-color: lightgrey;

}

</style>
