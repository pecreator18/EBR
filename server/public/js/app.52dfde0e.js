(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],l=0,_=[];l<c.length;l++)i=c[l],n[i]&&_.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);p&&p(e);while(_.length)_.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},n={app:0},a=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("64a9"),n=s.n(r);n.a},"03d6":function(t,e,s){},1232:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAdpQTFRFAAAADAwMFRUVBAQEGBgXFxcXFxcWERERGBgYAgICGhoaGRkZFBQUEhISFBQTHx8fDg4OFhYWCQkJCwsLCAgIDQ0NHx8eAwMDKCgoJSUlOzs7ODg4OTk5Ojo6JSUkMTExICAgPz8/ISEhIiIiNjY2RUVFV1dXU1NTS0tLTExMTU1NTk5OXFxcXl5eXV1dXl5dW1tbcHBwZmZma2trbm5ufX19cXFxZGRkfn5+e3t7kZGRjo6Oj4+PkJCQmJiYn5+fk5OTiYmJm5ubl5eXh4eHlJSUhISEgICAhoaGkpKSgoKCmpqajIyMjY2Ng4ODnZ2dnJyclZWViIiInp6eioqKqampoKCgvr6+v7+/sbGxtra2ubm5uLi4oaGhqKioo6OjpKSkpaWlpqamoqKhrq6ur6+voaGgtbW1vLy8u7u7oqKirKys29vb2traycnJw8PD2dnZxcXFxsbGzc3N1tbW39/fzMzMysrK0tLSyMjI09PT0NDQzs7OwcHBy8vLx8fH2NjY/v7+/f39/Pz89/f38vLy7u7u9vb27e3t+vr64ODg+/v74eHh+fn57+/v5OTk9fX16+vr9PTz8fHx6urq8PDw+Pj46enp7Ozs9PT05+fn8/Pz5ubm////R0oDiQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUATWljcm9zb2Z0IE9mZmljZX/tNXEAAAMBSURBVDhPZVQHW9NQFE1RVFQsIlVU1Ip74B4IRXAr7kEREUEcOKAOFAEXSUsYNSWIRYu+/+o9976kKdym+ZJ3T8656z1DmWwWXZZ3yZKpXQpmGmYyaBavillwERww0zKspGUlk3Thb6Va6upjDbH6WCw+SlBYkpg1I1ACVPaqUOV6ssqiRb3kpYtiYn5ipE+YkD5W9uLTCo+qtagPivlAECMDmVbZxY3iSywhYNAISAmAFkhlL122YWNVVdWmzSU+MC/NUTPQHGs6fITt6JnxeYxIQdKD/sRkWvt/OPOl06CmEnCMmeVnxf9mxVuUsiAZvFFP0sgqvfKc+O6XTlHF2YNXKrhJxacFqjvd3fNGIxqn1DvjWIa/IL8PtFBW+tC5EC47Pi2MP2Oriy/OMBI3C4xExV+931J+YjIf1K9LZdE2CR8DowtOC/1rdnwoTHTqpPGAOYmJgaxrbY2meC3Yt51hGg2QijQLfyxpkOAlTbHeinaMG2XEjAwcMB4WCuMtG6bWkwTVBNPDyE/liUIgmDPVDDTByEBiT4QGFzJmonHZD1oaA5SI9DuzMAeZOc6sk0o5v9d2IGxQ6T1jkvTlR52wrivNzXWPu+ihs/tqaVchkAqQCA2MubDx2mvXb/xx3Rz95sJPEKPHmE6aSZLW5c62KNUmfVaj0Q60Ny9NWQ9FhsWZ6VbqqS3PWQLSTKMu3BmUJzEfiPIwkLeoHADohc+YI8Znf4mIGZ9jU/rSDAyJdG6YZrzzs8uNnKmOa0ZdHmQdkYL31H5RarD5K7/M+NIa6MVIbbVRufRNyQYx6mOEk8Gx4cf4okep1pde1q8CQOx+kcaEKudWLtvk5MsTYNTAYRll9a2tfYhwknU8KM31GaLpwRFI4d6+w0NNT1nKWh+IMhQE/B4akQ2n1Nw/3PHibrvrM8qJZ6rBdbyRCq2v4nWw4Dh01MSuyO49MLrra+++ou22KPI8Mqep3Hv7aw7UeHYQD4dOTWtlbyvofi/U9nBglCOPE+ZTJ2iek/z/AW19JUS+W0JXAAAAAElFTkSuQmCC"},"44e0":function(t,e,s){t.exports=s.p+"img/wait.8696b3e3.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("div",{staticClass:"nav"},[s("button",{on:{click:t.Home}},[t._v("Home")]),s("button",{on:{click:t.Create}},[t._v("Create A Batch Record")]),s("button",{on:{click:t.Execute}},[t._v("Execute a Batch Record")])]),s("br"),t.home?s("div",[s("h1",[t._v("Batch Record System Home")]),s("p",[t._v(" This application will be developed to be used as a electronic batch record system\n\t\t\tfor use in manufacturing operations that must comply with FDA regulations.")])]):t._e(),s("br"),t.execute?s("batch_record"):t._e(),t.create?s("templateCreation"):t._e()],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"test"},[!1===t.br_selected?s("div",{staticClass:"batch_record_select"},[s("ol",t._l(t.batch_record_list,function(e){return s("li",[t._v("\n\t\t\t\t\t\tPart Number: "+t._s(e.part_number)+"\n\t\t\t\t\t\tLot Number: "+t._s(e.lot_number)+"\n\t\t\t\t\t\tUnit Operation: "+t._s(e.unit_operation)+"\n\t\t\t\t\t\tDescription: "+t._s(e.description)+"\n\t\t\t\t\t\t"),s("button",{attrs:{id:""},on:{click:function(s){return t.loadBatchRecord(e.lot_number)}}},[t._v("Start Batch Record")])])}),0)]):t._e(),t.br_selected?s("div",{staticClass:"batch_record"},[s("div",{staticClass:"operator_nav"},[s("table",{staticClass:"nav_buttons"},[s("tr",[s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Previous"},on:{click:t.view_previous}},[t._v("Previous Step")])]),s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Next"},on:{click:t.return_to_current}},[t._v("Return to Current Step")])]),s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Next"},on:{click:t.view_next}},[t._v("Next Step")])])])])]),s("br"),s("br"),s("div",{staticClass:"container"},[s("div",{staticClass:"step_header",attrs:{id:"step header"}},[s("table",{staticClass:"header_table"},[s("tr",[s("td",{staticClass:"step_number",attrs:{id:"step number"}},[t._v(t._s(t.step.step_number))]),s("td",{staticClass:"step_image"},[s("img",{attrs:{id:"step symbol",src:t.step_symbol}})]),s("td",{staticClass:"step_title",attrs:{id:"step title"}},[t._v(t._s(t.step.step_title))])])])]),s("div",{attrs:{id:"instructions"}},[s("ol",t._l(t.step.step_instructions,function(e){return s("li",[s("p",[t._v(t._s(e.instruction))])])}),0)]),s("h3",[t._v("Step Data")]),s("div",{staticClass:"step_data",attrs:{id:"step data"}},[s("table",{staticClass:"data_table"},[t._m(0),t._l(t.step.step_data,function(e){return"in-progress"===t.step.step_status?s("tr",[s("td",{staticClass:"data_description"},[s("label",[t._v(" "+t._s(e.process_component))])]),s("td",{staticClass:"data_entry"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data_input.data"}],staticClass:"data_input",attrs:{type:"text"},domProps:{value:e.data},on:{input:function(s){s.target.composing||t.$set(e,"data",s.target.value)}}})])]):s("tr",[s("td",{staticClass:"data_description"},[s("label",[t._v(" "+t._s(e.process_component))])]),s("td",{staticClass:"data_entry"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data_input.data"}],staticClass:"data_input",attrs:{type:"text",disabled:""},domProps:{value:e.data},on:{input:function(s){s.target.composing||t.$set(e,"data",s.target.value)}}})])])})],2)]),s("h3",[t._v("Performed By and Verified By")]),s("div",{staticClass:"sign_off",attrs:{id:"sign off"}},[s("table",{staticClass:"signatures"},[s("tr",[t._m(1),"in-progress"===t.step.step_status?s("td",{staticClass:"data_entry"},[s("esig",{staticClass:"data_input",on:{Singature_IMG:function(e){return t.performed(e)}}})],1):"pending"===t.step.step_status?s("td",{staticClass:"data_entry"},[s("img",{staticClass:"data_input",attrs:{src:t.wait}})]):s("td",{staticClass:"data_entry"},[s("img",{staticClass:"data_input",attrs:{src:t.step.performed_by}})]),t._m(2),"performed"===t.step.step_status?s("td",{staticClass:"data_entry"},[s("esig",{staticClass:"data_input",on:{Singature_IMG:function(e){return t.verified(e)}}})],1):"in-progress"===t.step.step_status||"pending"===t.step.step_status?s("td",{staticClass:"data_entry"},[s("img",{staticClass:"data_input",attrs:{src:t.wait}})]):s("td",{staticClass:"data_entry"},[s("img",{staticClass:"data_input",attrs:{src:t.step.verified_by}})])])])])])]):t._e()])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("Description")]),s("th",[t._v("Value")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"performer_verifier"},[s("label",[s("strong",[t._v("Performed By")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"performer_verifier"},[s("label",[s("strong",[t._v("Verified By")])])])}],o=(s("96cf"),s("3b8d")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticStyle:{}},[s("vueSignature",{ref:"signature",attrs:{sigOption:t.option}})],1),s("div",[s("button",{on:{click:t.save}},[t._v("Performed")]),s("button",{on:{click:t.clear}},[t._v("Clear")])])])},p=[],l={name:"app",data:function(){return{option:{penColor:"rgb(0, 0, 0)",backgroundColor:"rgb(255,255,255)"},imageURL:""}},methods:{save:function(t){var e=this,s=e.$refs.signature.save();e.$refs.signature.save("image/jpeg"),e.$refs.signature.save("image/svg+xml");this.imageURL=s,this.$emit("Singature_IMG",e.$refs.signature.save())},clear:function(){var t=this;t.$refs.signature.clear(),this.$emit("Singature_IMG","")},undo:function(){var t=this;t.$refs.signature.undo()},addWaterMark:function(){var t=this;t.$refs.signature.addWaterMark({text:"mark text",font:"20px Arial",style:"all",fillStyle:"red",strokeStyle:"blue",x:100,y:200,sx:100,sy:200})},fromDataURL:function(t){var e=this;e.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...")},emitSig:function(){console.log("Signal Sent"),this.$emit("Singature_IMG",this.imageURL)}}},_=l,d=(s("c473"),s("2877")),h=Object(d["a"])(_,u,p,!1,null,null,null),m=h.exports,b=s("d225"),v=s("b0b4"),f=s("bc3a"),g=s.n(f),y="api/batch_records/",C=function(){function t(){Object(b["a"])(this,t)}return Object(v["a"])(t,null,[{key:"getBatchRecordList",value:function(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,s){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat(y,"allBRs"));case 3:r=t.sent,n=r.data,e(n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),s(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e,s){return t.apply(this,arguments)}}())}},{key:"getBatchRecord",value:function(t){return new Promise(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(s,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(y,{params:{lot_number:t}});case 3:n=e.sent,a=n.data,s(a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,s){return e.apply(this,arguments)}}())}},{key:"updateBR",value:function(t){return g.a.post("".concat(y,"updateBR"),{batch_record_step:t})}},{key:"getBatchRecordTemplates",value:function(){return new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,s){var r,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat(y,"all"));case 3:for(r=t.sent,n=r.data,a=[],i=0;i<n.length;i++)a.push({template_number:n[i].part_number,unit_operation:n[i].unit_operation,description:n[i].description});e(a),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),s(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e,s){return t.apply(this,arguments)}}())}},{key:"getTemplate",value:function(t){return new Promise(function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(s,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(y,"getTemplate"),{params:{template_part_number:t}});case 3:n=e.sent,a=n.data,s(a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,s){return e.apply(this,arguments)}}())}},{key:"createLot",value:function(t){return g.a.post("".concat(y,"createLot"),{batch_record:t})}},{key:"deletePost",value:function(t){return g.a.delete("".concat(y).concat(t))}}]),t}(),x=C,w={name:"test",props:["steps[current_step].performed_by","steps[current_step].verified_by"],components:{esig:m},data:function(){return{br_selected:!1,batch_record_list:[],wait:s("44e0"),step_symbols:[s("1232"),s("44e0")],step_symbol:"",current_step:0,preview_counter:0,batch_record_length:0,batch_record:{},step:{}}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.getBatchRecordList().then(function(t){return t});case 3:this.batch_record_list=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{loadBatchRecord:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.getBatchRecord(e);case 2:this.batch_record=t.sent,this.step=this.batch_record.steps[this.batch_record.current_step],this.step_symbol=this.step_symbols[this.step.step_symbol],this.batch_record_length=this.batch_record.steps.length,this.br_selected=!0;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),view_previous:function(){this.batch_record.current_step>0&&(this.batch_record.current_step=this.batch_record.current_step-1,this.preview_counter=this.preview_counter-1,this.step=this.batch_record.steps[this.batch_record.current_step],this.step_symbol=this.step_symbols[this.step.step_symbol])},view_next:function(){this.batch_record.current_step<this.batch_record.steps.length-1&&(this.batch_record.current_step=this.batch_record.current_step+1,this.preview_counter=this.preview_counter+1,this.step=this.batch_record.steps[this.batch_record.current_step],this.step_symbol=this.step_symbols[this.step.step_symbol])},return_to_current:function(){this.batch_record.current_step=this.batch_record.current_step-this.preview_counter,this.preview_counter=0,this.step=this.batch_record.steps[this.batch_record.current_step],this.step_symbol=this.step_symbols[this.step.step_symbol]},performed:function(t){t.length>50?(this.step.performed_by=t,this.step.step_status="performed"):(this.step.performed_by=null,this.step.step_status="in-progress")},verified:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.length>2)){t.next=17;break}return t.next=3,e;case 3:return this.step.verified_by=t.sent,t.next=6,"complete";case 6:return this.step.step_status=t.sent,s={lot_number:this.batch_record.lot_number,current_step:this.batch_record.current_step,batch_record_length:this.batch_record_length,step:this.step},t.next=10,x.updateBR(s);case 10:return t.next=12,x.getBatchRecord(this.batch_record.lot_number);case 12:this.batch_record=t.sent,this.step=this.batch_record.steps[this.batch_record.current_step],this.step_symbol=this.step_symbols[this.step.step_symbol],t.next=18;break;case 17:this.steps[this.current_step].verified_by=null;case 18:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getURL:function(t){var e="this.step_symbol.".concat(t);this.step_symbol=e}},computed:{}},A=w,k=(s("7bcd"),Object(d["a"])(A,i,c,!1,null,"7b235bec",null)),R=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main_div"},[!1===t.template_selected?s("div",{staticClass:"template_select"},[s("ol",t._l(t.batch_record_template_list,function(e){return s("li",[t._v("\n\t\t\t\t\tTemplate Number: "+t._s(e.template_number)+"\n\t\t\t\t\tUnit Operation: "+t._s(e.unit_operation)+"\n\t\t\t\t\tTemplate Description: "+t._s(e.description)+"\n\t\t\t\t\t"),s("button",{attrs:{id:""},on:{click:function(s){return t.loadTemplate(e.template_number)}}},[t._v("Start with this template")])])}),0)]):t._e(),t.template_selected?s("div",{staticClass:"batch_record"},[s("div",{staticClass:"operator_nav"},[s("table",{staticClass:"nav_buttons"},[s("tr",[s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Previous"},on:{click:t.view_previous}},[t._v("Previous Step")])]),s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Next"},on:{click:t.return_to_current}},[t._v("Return to Current Step")])]),s("td",{staticClass:"nav_button_cell"},[s("button",{staticClass:"nav_button",attrs:{id:"Next"},on:{click:t.view_next}},[t._v("Next Step")])])])])]),s("br"),s("br"),s("div",{staticClass:"container",attrs:{id:"container"}},[s("div",{staticClass:"step_header",attrs:{id:"step header"}},[s("table",{staticClass:"header_table"},[s("tr",[s("td",{staticClass:"step_number",attrs:{id:"step number"}},[t._v(t._s(t.step.step_number))]),s("td",{staticClass:"step_image"},[s("img",{attrs:{id:"step symbol",src:t.step.step_symbol}})]),s("td",{staticClass:"step_title",attrs:{id:"step title"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.step.step_title,expression:"step.step_title"}],staticClass:"step_title_input",attrs:{type:"text"},domProps:{value:t.step.step_title},on:{input:function(e){e.target.composing||t.$set(t.step,"step_title",e.target.value)}}})])])])]),s("div",{staticClass:"instructions",attrs:{id:"instructions"}},[s("ol",t._l(t.step.step_instructions,function(e){return s("li",[s("p",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.instruction,expression:"instruction.instruction"}],staticClass:"instruction_input",attrs:{type:"text"},domProps:{value:e.instruction},on:{input:function(s){s.target.composing||t.$set(e,"instruction",s.target.value)}}}),s("button",{on:{click:function(s){return t.removeInstruction(e.instruction)}}},[t._v("Remove")])])])}),0),s("button",{on:{click:t.addInstruction}},[t._v("Add Instruction")])]),s("h3",[t._v("Step Data")]),s("div",{staticClass:"step_data",attrs:{id:"step data"}},[s("table",{staticClass:"data_table"},[t._m(0),t._l(t.step.step_data,function(e){return s("tr",[s("td",{staticClass:"data_description"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.process_component,expression:"data_input.process_component"}],staticClass:"process_component_input",attrs:{type:"text"},domProps:{value:e.process_component},on:{input:function(s){s.target.composing||t.$set(e,"process_component",s.target.value)}}})]),s("td",{staticClass:"data_entry"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data_input.data"}],staticClass:"data_input",attrs:{type:"text"},domProps:{value:e.data},on:{input:function(s){s.target.composing||t.$set(e,"data",s.target.value)}}})]),s("td",[s("button",{on:{click:function(s){return t.removeData(e.process_component)}}},[t._v("Remove")])])])})],2),s("button",{on:{click:t.addData}},[t._v("Add Data")])])]),s("button",{on:{click:t.addStep}},[t._v("Add Step")]),t._v("\n"+t._s(t.batch_record.steps.length)+"\n")]):t._e(),t.template_selected?s("div",{staticClass:"step_list"},[s("h1",[t._v("Batch Record Steps")]),s("ol",t._l(t.batch_record.steps,function(e){return s("li",[t._v(t._s(e.step_title))])}),0),s("button",{attrs:{type:"button",name:"button"},on:{click:t.createLot}},[t._v("Create Batch Record")])]):t._e()])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("Description")]),s("th",[t._v("Value")])])}],P={name:"test",props:["step.performed_by","step.verified_by"],components:{},data:function(){return{error:"",project_code:"",template_selected:!1,preview_counter:0,batch_record_template_list:[],batch_record:{part_number:"",lot_number:"",current_step:0,steps:[]},step:{step_status:"pending",step_number:1,step_symbol:0,step_title:"Enter A Step Title",step_instructions:[{instruction:"Add Instructions Here"}],step_data:[{custom_data_type:"",process_component:"Process Component",data:"This is data"}]}}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.getBatchRecordTemplates().then(function(t){return t});case 3:this.batch_record_template_list=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{addStep:function(){this.batch_record.steps[this.batch_record.current_step]=this.step,this.batch_record.steps.push({step_status:"pending",step_number:this.step.step_number+1,step_symbol:0,step_title:"Enter A Step Title",step_visual_aid:0,step_instructions:[{instruction:"Add Instructions Here"}],step_data:[{custom_data_type:"",process_component:"Process Component",data:"This is data"}]}),this.batch_record.current_step+=1,this.step=this.batch_record.steps[this.batch_record.current_step]},addInstruction:function(){this.step.step_instructions.push({instruction:""})},removeInstruction:function(t){for(var e=0;e<this.step.step_instructions.length;e++)this.step.step_instructions[e].instruction===t&&this.step.step_instructions.splice(e,1)},addData:function(){this.step.step_data.push({custom_data_type:"",process_component:"",data:""})},removeData:function(t){for(var e=0;e<this.step.step_data.length;e++)this.step.step_data[e].process_component===t&&this.step.step_data.splice(e,1)},loadTemplate:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x.getTemplate(e).then(function(t){return t});case 2:s=t.sent,delete s._id,this.batch_record=s,this.step=this.batch_record.steps[this.batch_record.current_step],this.template_selected=!0;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),createLot:function(){this.batch_record.part_number=String(Math.floor(1e3*Math.random())),this.batch_record.lot_number=String(Math.floor(1e3*Math.random())),this.batch_record.current_step=0,x.createLot(this.batch_record),this.template_selected=!1},view_previous:function(){this.batch_record.current_step>0&&(this.batch_record.current_step-=1,this.preview_counter-=1,this.step=this.batch_record.steps[this.batch_record.current_step])},view_next:function(){this.batch_record.current_step<this.batch_record.steps.length-1&&(this.batch_record.current_step+=1,this.preview_counter+=1,this.step=this.batch_record.steps[this.batch_record.current_step])},return_to_current:function(){this.batch_record.current_step-=this.preview_counter,this.preview_counter=0,this.step=this.batch_record.steps[this.batch_record.current_step]}},computed:{}},I=P,T=(s("ce13"),Object(d["a"])(I,S,O,!1,null,"00092133",null)),B=T.exports,E={name:"app",components:{batch_record:R,templateCreation:B},data:function(){return{create:!1,execute:!1,home:!0}},methods:{Create:function(){this.create=!0,this.execute=!1,this.home=!1},Execute:function(){this.create=!1,this.execute=!0,this.home=!1},Home:function(){this.create=!1,this.execute=!1,this.home=!0}}},j=E,D=(s("034f"),Object(d["a"])(j,n,a,!1,null,null,null)),M=D.exports,N=s("ae65"),U=s.n(N);r["a"].config.productionTip=!1,r["a"].use(U.a),new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"64a9":function(t,e,s){},"7bcd":function(t,e,s){"use strict";var r=s("03d6"),n=s.n(r);n.a},a759:function(t,e,s){},c473:function(t,e,s){"use strict";var r=s("a759"),n=s.n(r);n.a},ce13:function(t,e,s){"use strict";var r=s("e376"),n=s.n(r);n.a},e376:function(t,e,s){}});
//# sourceMappingURL=app.52dfde0e.js.map