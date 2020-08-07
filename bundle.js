!function(){"use strict";const e=100,t=100,a=50,r=100,s=window.innerWidth-t-r,l=window.innerHeight-e-a,o=s+t+r,i=l+e+a,n=d3.geoAlbers().center([24.7731,45.7909]).rotate([-14,3.3,-10]).parallels([37,54]).scale(5e3).translate([s/2,l/2]),d=(d3.geoPath().projection(n),d3.timeFormatLocale({dateTime:"%A, %e %B %Y г. %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă","Duminică"],shortDays:["Lu","Ma","Mi","Jo","Vi","Sa","Du"],months:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],shortMonths:["Ian","Feb","Mart","Apr","Mai","Iun","Iul","Aug","Sept","Oct","Nov","Dec"]})),c=d.format(".%L"),p=d.format(":%S"),u=d.format("%I:%M"),g=d.format("%I %p"),m=d.format("%a %d"),f=d.format("%b %d"),y=d.format("%B"),h=d.format("%Y"),A=e=>(d3.timeSecond(e)<e?c:d3.timeMinute(e)<e?p:d3.timeHour(e)<e?u:d3.timeDay(e)<e?g:d3.timeMonth(e)<e?d3.timeWeek(e)<e?m:f:d3.timeYear(e)<e?y:h)(e),b=e=>d3.nest().key(e=>e.properties&&e.properties.source_no).rollup(e=>e.length).object(e),v=d3.select("body").append("tooltip_div").attr("class","tooltip").style("opacity",0).style("display","none"),x=e=>{if(void 0!==e.properties){let t=d3.select("#language").node().value,a={valueLabel:{ro:"cazuri legate",en:"clustered cases"},cazulLabel:{ro:"Cazul",en:"Case"},maleLabel:{ro:"Bărbat",en:"Male"},femaleLabel:{ro:"Femeie",en:"Female"},unspecLabel:{ro:"Gen nespecificat",en:"Unspecified gender"},statusLabel:{ro:"Stare",en:"Status"},releasedLabel:{ro:"vindecat",en:"released"},confirmedLabel:{ro:"confirmat",en:"confirmed"},deceasedLabel:{ro:"deces",en:"deceased"},confdateLabel:{ro:"Data confirmării",en:"Confirmation date"},recoverydateLabel:{ro:"Data recuperării",en:"Recovery date"},infectionCountryLabel:{ro:"Țara de infectare",en:"Country of infection"},detailsLabel:{ro:"Detalii",en:"Details"},aiciLabel:{ro:"aici",en:"here"}},r=e.infected_persons?e.infected_persons+" "+a.valueLabel[t]+".<br />":"",s=("Bărbat"===e.properties.gender?a.maleLabel[t]:"Femeie"===e.properties.gender?a.femaleLabel[t]:a.unspecLabel[t],null!=e.properties.age&&0!=e.properties.age&&e.properties.age,null!=e.properties.county&&""!=e.properties.county?", "+e.properties.county:""),l=null!=e.properties.status?a.statusLabel[t]+": "+("Vindecat"===e.properties.status?a.releasedLabel[t]:"Confirmat"===e.properties.status?a.confirmedLabel[t]:a.deceasedLabel[t])+".<br />":"",o=null!==e.properties.diagnostic_date?a.confdateLabel[t]+": "+e.properties.diagnostic_date+".<br />":"",i=null!==e.properties.healing_date?a.recoverydateLabel[t]+": "+e.properties.healing_date+".<br />":"",n=null!==e.properties.country_of_infection&&"România"!==e.properties.country_of_infection&&"Romania"!==e.properties.country_of_infection?a.infectionCountryLabel[t]+": "+e.properties.country_of_infection+".<br />":"",d=null!==e.properties.reference&&""!==e.properties.reference?a.detailsLabel[t]+': <a href="'+e.properties.reference+'" target= "_blank">'+a.aiciLabel[t]+"</a>":"";return"<b>"+a.cazulLabel[t]+" x</b>"+s+".<br />"+r+l+o+i+n+d}return e.name},k=e=>{const t=Math.hypot(e.target.x-e.source.x,e.target.y-e.source.y);return`\n        M${e.source.x},${e.source.y}\n        A${t},${t} 0 0,1 ${e.target.x},${e.target.y}\n    `},L=(e,t,a,r,s,l)=>{a.attr("d",t=>{if("arcs"===s){if("string"==typeof t.source.name)return k(t);{let a=l.xScale(e[t.source.name].date)||0,r=l.xScale(e[t.target.name].date);return["M",a,l.yScale(e[t.source.name].dayOrder),"A",(a-r)/2,",",(a-r)/2,0,0,",",a<r?1:0,r,l.yScale(e[t.target.name].dayOrder)].join(" ")}}return k(t)}),t.attr("transform",e=>`translate(${e.x},${e.y})`),r.attr("transform",e=>`translate(${e.x},${e.y})`)},_=e=>"ro"===e?d3.scaleOrdinal(["var(--main-confirmate)","var(--main-recuperari)","var(--main-decese)"]).domain(["Confirmat","Vindecat","Decedat"]):d3.scaleOrdinal(["var(--main-confirmate)","var(--main-recuperari)","var(--main-decese)"]).domain(["Confirmed","Discharged","Deceased"]),C=d3.scaleOrdinal(["#e4588c","#35d394","#ba1ea8","#4caf1c","#1848ca","#aad42b","#9b85ff","#068400","#8b2487","#97ff8b","#d60042","#00ae87","#f94740","#48d3ff","#d17300","#5ea2ff","#cfb100","#53498f","#ffe353","#325383","#86a700","#ff9eeb","#007f30","#d9b6ff","#3b5c12","#89c2ff","#964000","#00bfbb","#ff6f54","#01aac6","#ffb65d","#008857","#ff8e90","#145f36","#952e31","#fffea6","#8e3440","#5a936f","#883d0c","#ffaf81","#34a6c2","#b09764","#458a18"]).domain(["ALBA","ARAD","ARGEȘ","BACĂU","BIHOR","BISTRIȚA-NĂSĂUD","BOTOȘANI","BRAȘOV","BRĂILA","BUCUREȘTI","BUZĂU","CARAȘ-SEVERIN","CLUJ","CONSTANȚA","COVASNA","CĂLĂRAȘI","DOLJ","DÂMBOVIȚA","GALAȚI","GIURGIU","GORJ","HARGHITA","HUNEDOARA","IALOMIȚA","IAȘI","ILFOV","NECUNOSCUT","MARAMUREȘ","MEHEDINȚI","MUREȘ","NEAMȚ","OLT","PRAHOVA","SATU MARE","SIBIU","SUCEAVA","SĂLAJ","TELEORMAN","TIMIȘ","TULCEA","VASLUI","VRANCEA","VÂLCEA"]),O=e=>"ro"===e?d3.scaleOrdinal(["var(--main-barbat)","var(--main-femeie)"]).domain(["Bărbat","Femeie"]):d3.scaleOrdinal(["var(--main-barbat)","var(--main-femeie)"]).domain(["Male","Female"]),S=d3.scaleQuantile().domain([0,100]).range(d3.schemeSpectral[10]),w=()=>{d3.select("#chart").select("svg").selectAll(".nodes").transition().duration(100).attr("fill",e=>e.is_country_of_infection?"black":e.properties?_("ro")(e.properties.status):""),R("status-legend")},I=(e,t,a,r,s)=>{const l=d3.select("#legend-div").append("div").attr("class",r).append("svg").attr("class","category-legend").attr("width",110).attr("height",t).attr("preserveAspectRatio","xMidYMid").attr("viewBox","-10, -10 120 "+a).attr("x",0).attr("y",0),o=d3.legendColor().shape("path",d3.symbol().type(d3.symbolCircle).size(150)()).shapePadding(10).title(s).titleWidth(100).labelFormat(d3.format(".0f")).labelAlign("start").scale(e);l.call(o)},R=e=>{d3.select(".county-legend").classed("hide",!0),d3.select(".status-legend").classed("hide",!0),d3.select(".gender-legend").classed("hide",!0),d3.select(".age-legend").classed("hide",!0),"county-legend"===e?d3.select(".county-legend").classed("hide",!1):"status-legend"===e?d3.select(".status-legend").classed("hide",!1):"gender-legend"===e?d3.select(".gender-legend").classed("hide",!1):"age-legend"===e&&d3.select(".age-legend").classed("hide",!1)},M=(e,t)=>{d3.select("#nRadius-value").text(e[t]),d3.select("#nRadius").property("value",e[t]),d3.select("#search-input").property("value",e[t]),d3.selectAll(".nodes").attr("r",e=>e.r),d3.select("#CO-"+e[t]).attr("r",e=>2*e.r).dispatch("mouseover")},z=e=>{d3.selectAll(".node-labels").classed("hidden",t=>"string"!=typeof t.name&&e<=1.9),d3.selectAll(".labels").classed("hidden",t=>t.r<10/e)},E=d3.zoom().scaleExtent([.2,10]).on("zoom",()=>{let e=d3.selectAll(".zoomable-group");e.attr("transform",d3.event.transform);let t=d3.event.transform.k;return t>.8&&(e.selectAll(".node-labels > text").attr("transform","scale("+1/t+")"),e.selectAll(".labels > text").attr("transform","scale("+1/t+")")),z(t)}),D=()=>{d3.select("#chart").select("svg").call(E.transform,d3.zoomIdentity.scale(.5))},B=(e,t,a,r,s)=>{"map"===t?e.forEach((function(e){const t=n([e.longitude,e.latitude]);e.x=t[0]||e.x,e.y=t[1]||e.y})):e.forEach((function(e){e.x=s.xScale(e.date)||-100,e.y=s.yScale(e.dayOrder)}));const l=d3.transition().duration(a?0:800).ease(d3.easeElastic.period(.5));L(r,d3.selectAll(".nodes").transition(l),d3.selectAll(".links").transition(l),d3.selectAll(".node-labels").transition(l),t,s)},j=(e,t,a,r)=>{let o,i,n=d3.select("svg").select(".zoomable-group").append("g").attr("class","nodes-group");const d=Array.from(new Set(e.nodes.map(e=>e.source)));n.append("defs").selectAll("marker").data(d).join("marker").attr("id",e=>`arrow-${e}`).attr("viewBox","0 -5 10 10").attr("refX",15).attr("refY",-.5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("fill","#999").attr("d","M0,-5L10,0L0,5"),o=n.append("g").attr("class","link").selectAll("path").data(e.links).join("path").attr("class",e=>`CO-links-${e.source.name}`).classed("links",!0).attr("marker-end",e=>`url(${new URL(`#arrow-${e.type}`,location.toString())})`),o.exit().remove(),i=n.append("g").attr("class","node").selectAll("g").data(e.nodes).join("g"),i.append("circle").attr("id",e=>e.properties&&`CO-${e.properties.case_no}`).attr("class",e=>e.properties&&`CO-nodes-${e.properties.source_no}`).classed("nodes",!0).attr("r",e=>e.r).on("touchmove mouseover",e=>((e,t)=>{let a=d3.event.pageX-20,r=d3.event.pageY+20,s=e.name;window.innerWidth-a<150&&(a=d3.event.pageX-40),d3.selectAll(".nodes").attr("r",e=>e.r).style("opacity",.3),d3.selectAll(".links").style("stroke","#999").style("opacity",.3),d3.selectAll(".node-labels > text").style("opacity",.3),v.transition().duration(200).style("opacity",.9),d3.select("#CO-"+s).attr("r",e=>2*e.r).style("opacity",1),d3.selectAll(".CO-labels-self-"+s).style("opacity","1"),d3.selectAll(".CO-links-"+s).style("stroke","firebrick").transition().duration(200).attr("stroke-dashoffset",0).style("opacity",1).on("end",(e,t)=>{0===t&&(d3.selectAll(".CO-nodes-"+s).style("opacity","1"),d3.selectAll(".CO-labels-"+s).style("opacity","1"))});let l=t.indexOf(s);d3.select("#nRadius-value").text(s),d3.select("#nRadius").property("value",l),v.html(x(e)).style("left",a+"px").style("top",r+"px").style("display",null)})(e,t)).on("click",e=>(e=>{let t=d3.select("#chart").select("svg");d3.event.stopPropagation(),t.transition().duration(750).call(E.transform,d3.zoomIdentity.scale(2).translate(-e.x,-e.y).translate(s/2,l/2),d3.mouse(t.node()))})(e)),i.append("g").classed("node-labels",!0).append("text").attr("class",e=>e.properties&&`CO-labels-${e.properties.source_no} CO-labels-self-${e.properties.case_no}`).attr("x",8).attr("y","0.31em").text(e=>e.name).clone(!0).lower(),i.exit().remove()};class V{constructor(e,t,a){this.parentElement=e,this.geoCounties=t,this.geojsonFeatures=a,this.initViz()}initViz(){this.height=l,this.width=s,this.g=d3.select(this.parentElement).append("g").attr("class","map-features").attr("opacity",1),this.setupData()}setupData(){this.dataFiltered=this.geoCounties,this.updateViz()}updateViz(){if(void 0!==this.dataFiltered){const e=d3.geoPath().projection(n.fitSize([this.width,this.height],this.geojsonFeatures));this.g.selectAll("path").data(this.dataFiltered).enter().append("path").attr("d",e).attr("class","land").attr("opacity",.25).append("title").text(e=>e.id)}}}class F{constructor(e,t){this.parentElement=e,this.data=t,this.initViz()}initViz(){var e=this;let t=d3.select("#language").node().value;e.height=l,e.width=s,e.g=d3.select(e.parentElement).append("g").attr("class","time-graph").attr("opacity",0),e.t=function(){return d3.transition().duration(1e3)},e.xScale=d3.scaleTime().range([0,e.width]),e.yScale=d3.scaleLinear().range([e.height,0]),e.yAxisCall=d3.axisLeft().ticks(10),e.xAxisCall=d3.axisBottom().ticks(30),e.xAxis=e.g.append("g").attr("class","time-graph-x").attr("transform",`translate(0,${e.height})`),e.yAxis=e.g.append("g").attr("class","time-graph-y"),e.xLabel=e.g.append("text").attr("y",e.height+70).attr("x",e.width/2).attr("font-size","16px").attr("text-anchor","middle").text("ro"===t?"Ziua":"Day"),e.yLabel=e.g.append("text").attr("transform","rotate(-90)").attr("y",-50).attr("x",-e.height/2).attr("font-size","20px").attr("text-anchor","middle").text("ro"===t?"Cazuri ordonate pe zi":"Ordered cases per day"),e.setupData()}setupData(){this.dataFiltered=this.data,this.updateViz()}updateViz(){var e=this;void 0!==e.dataFiltered&&(e.xScale.domain(d3.extent(e.dataFiltered,e=>e.date)),e.yScale.domain(d3.extent(e.dataFiltered,e=>e.dayOrder)),e.xAxisCall.scale(e.xScale),e.xAxis.transition(e.t()).call(e.xAxisCall.tickFormat(A)),e.yAxisCall.scale(e.yScale),e.yAxis.transition(e.t()).call(e.yAxisCall),e.xAxis.selectAll("text").attr("font-weight","bold").style("text-anchor","end").attr("dx","-.8em").attr("transform","rotate(-65)"),e.yAxis.selectAll("text").attr("font-weight","bold"))}}let U,$,T,N,G,H,Y,P,J,W,X,Z,Q,q,K,ee,te,ae,re={nodes:[],links:[]},se=d3.map(),le=!1,oe=!0,ie=!0,ne=d3.select("#positioning").node().value,de=d3.select("#language").node().value,ce="ro"===de?"data/judete_wgs84.json":"../data/judete_wgs84.json";(()=>{let a,r=document.getElementById("spinner");a=new Spinner({lines:9,length:4,width:5,radius:12,scale:1,corners:1,color:"#f40000",opacity:.25,rotate:0,direction:1,speed:1,trail:30,fps:20,zIndex:2e9,className:"spinner",shadow:!1,hwaccel:!1,position:"absolute"}).spin(r);const n=[d3.json(ce),d3.json("https://covid19.geo-spatial.org/api/statistics/getCaseRelations")];Promise.all(n).then(e=>{J=e[0],P=e[1],d(),c(),p()}).catch(e=>console.log(e));const d=()=>{Y=P.data.nodes.filter(e=>null!==e.properties.country_of_infection&&"România"!==e.properties.country_of_infection&&"Romania"!==e.properties.country_of_infection),re.nodes=P.data.nodes,re.links=P.data.links,Q=Array.from(new Set(re.nodes.map(e=>e.properties?+e.properties.case_no:""))),re.nodes=re.nodes.concat(Array.from(new Set(Y.map(e=>e.properties.country_of_infection)),e=>({name:e}))),re.links=re.links.concat(Y.map(e=>({target:e.name,source:e.properties.country_of_infection}))),W="judete_wgs84",X=topojson.feature(J,J.objects.judete_wgs84).features,Z=topojson.feature(J,{type:"GeometryCollection",geometries:J.objects.judete_wgs84.geometries}),X.forEach(e=>{let t=e.properties.county;se.set(t,{lat:e.properties.lat,lon:e.properties.lon}),e.id=t}),re.nodes=((e,t)=>{let a=d3.timeParse("%d-%m-%Y"),r=[],s=b(e),l=d3.scaleLinear().domain([0,d3.max(Object.values(s))]).range([5,25]);return e.forEach(e=>{void 0!==e.properties?(e.latitude=t.get(e.properties.county)&&t.get(e.properties.county).lat,e.longitude=t.get(e.properties.county)&&t.get(e.properties.county).lon,e.date=a(e.properties.diagnostic_date).getTime(),e.name=+e.name,e.infected_persons=s[e.properties.case_no]||0,e.r=l(e.infected_persons||1)):e.r=3}),e.sort((e,t)=>e.date-t.date),d3.nest().key(e=>e.properties&&e.properties.diagnostic_date).entries(e).forEach(e=>{let t=[...e.values].sort((e,t)=>e.name-t.name),a=t.map(e=>(e.dayOrder=t.indexOf(e)+1,e));r.push(...a)}),r})(re.nodes,se)},c=()=>{$=(e=>d3.forceSimulation(e.nodes).force("link",d3.forceLink(e.links).id(e=>e.name)).force("center",d3.forceCenter(s/2,l/2)).force("charge",d3.forceManyBody()).force("x",d3.forceX()).force("y",d3.forceY()).alphaDecay([.02]))(re),$.on("tick",()=>{L(H,d3.selectAll(".nodes"),d3.selectAll(".links"),d3.selectAll(".node-labels"),ne,ae)}),$.force("link").links(re.links),U=d3.select("#chart").append("svg").attr("class","chart-group").attr("preserveAspectRatio","xMidYMid").attr("width",o).attr("height",i).attr("viewBox","0, 0 "+s+" "+l).on("click",()=>{d3.selectAll(".nodes").style("opacity",1),d3.selectAll(".link").style("opacity",1),d3.selectAll(".node-labels > text").style("opacity","1"),d3.selectAll(".nodes").attr("r",e=>e.r),v.transition().duration(200).style("opacity",0)}),G=U.append("g").attr("class","zoomable-group").attr("transform",`translate(${t}, ${e})`).style("transform-origin","50% 50% 0"),te=new V(".zoomable-group",X,Z),ae=new F(".zoomable-group",re.nodes),H=(e=>{let t={};return e.nodes.forEach(e=>t[e.name]=e),t})(re)},p=()=>{I(_(de),300,300,"status-legend",(e=>"ro"===e?"Stare":"Status")(de)),I(C,900,1100,"county-legend",(e=>"ro"===e?"Județ":"County")(de)),I(O(de),200,200,"gender-legend",(e=>"ro"===e?"Gen":"Gender")(de)),I(S,400,400,"age-legend",(e=>"ro"===e?"Vârstă":"Age")(de)),T=d3.scaleTime().domain(d3.extent(re.nodes,e=>e.date)).range([0,s]),N=d3.scaleLinear().domain(d3.extent(re.nodes,e=>e.dayOrder)).range([i,0]),d3.select("#zoom-in").on("click",()=>U.transition().call(E.scaleBy,2)),d3.select("#zoom-out").on("click",()=>U.transition().call(E.scaleBy,.5)),d3.select("#reset-zoom").on("click",()=>D()),U.call(E),D(),d3.select("#show-map").on("click",()=>((e,t,a,r)=>{d3.select("#positioning").attr("value","map"),t.stop(),D(),d3.selectAll(".nodes-group").style("opacity",1),d3.selectAll(".land").attr("opacity",1),d3.selectAll(".time-graph").attr("opacity",0),d3.selectAll(".pack-group").attr("transform","translate(-10000,-10000)"),B(e.nodes,"map",0,a,r)})(re,$,H,ae)),d3.select("#show-graph").on("click",()=>(e=>{d3.select("#positioning").attr("value","diagram"),e.alpha(1).restart(),setTimeout(()=>{e.stop()},5e3),D(),d3.selectAll(".nodes-group").style("opacity",1),d3.selectAll(".land").attr("opacity",.25),d3.selectAll(".time-graph").attr("opacity",0),d3.selectAll(".pack-group").attr("transform","translate(-10000,-10000)")})($)),d3.select("#show-arcs").on("click",()=>((e,t,a,r)=>{d3.select("#positioning").attr("value","arcs"),t.stop(),D(),d3.selectAll(".nodes-group").style("opacity",1),d3.selectAll(".land").attr("opacity",.25),d3.selectAll(".time-graph").attr("opacity",1),d3.selectAll(".pack-group").attr("transform","translate(-10000,-10000)"),B(e.nodes,"arcs",0,a,r)})(re,$,H,ae)),d3.select("#color-counties").on("click",()=>(d3.select("#chart").select("svg").selectAll(".nodes").transition().duration(100).attr("fill",e=>e.is_country_of_infection?"black":e.properties?C(e.properties.county):""),void R("county-legend"))),d3.select("#color-status").on("click",()=>w()),d3.select("#color-gender").on("click",()=>(d3.select("#chart").select("svg").selectAll(".nodes").transition().duration(100).attr("fill",e=>e.is_country_of_infection?"black":e.properties?null===e.properties.gender?"var(--main-null)":O("ro")(e.properties.gender):""),void R("gender-legend"))),d3.select("#color-age").on("click",()=>(d3.select("#chart").select("svg").selectAll(".nodes").transition().duration(100).attr("fill",e=>e.is_country_of_infection?"black":e.properties?null===e.properties.age?"var(--main-null)":S(e.properties.age):""),void R("age-legend")));d3.select("#legend-div").classed("hide",!0),d3.select("#toggle-legend").on("click",()=>{!0===le?(d3.select("#legend-div").classed("hide",!0),le=!1):(d3.select("#legend-div").classed("hide",!1),le=!0)}),d3.select("#search-case").on("click",()=>{!0===ie?(d3.select("#search-input").classed("hide",!1),ie=!1):(d3.select("#search-input").classed("hide",!0),ie=!0)}),d3.select("#search-input").on("input",(function(){var e;Q.includes(+this.value)&&(e=+this.value,d3.select("#CO-"+e).dispatch("mouseover"))})),d3.select("#show-info").on("click",()=>oe=((e,t)=>(!0===e?(v.transition().duration(200).style("opacity",.9),v.html((e=>"ro"===e?"<strong>Relația cazurilor confirmate. Fiecare punct reprezintă un om.</strong><br/><br/>Date de pe covid19.geo-spatial.org<br/>Situaţia până la data în care s-au raportat oficial aceste informaţii.<br/>Dați click în afara cercului pentru a deselecta.":"<strong>Relationship between confirmed cases. Each point represents a person.</strong><br/><br/>Data from covid19.geo-spatial.org<br/>The status until the date this information has been officially reported.<br/>Click outside the circle to clear the selection.")(t)).style("left",s/2+"px").style("top",l/2+"px").style("display",null),e=!1):(v.transition().duration(200).style("opacity",0),e=!0),e))(oe,de)),d3.select("#play-cases").on("click",()=>{d3.select("#play-cases").classed("hide",!0),d3.select("#pause-cases").classed("hide",!1),e()}),d3.select("#pause-cases").on("click",()=>{d3.select("#pause-cases").classed("hide",!0),d3.select("#play-cases").classed("hide",!1),t()});const e=()=>{U.call(E.scaleTo,.5),ee=d3.select("#nRadius").node().value,+ee==+Q.length-1&&(ee=0),q=setInterval(()=>{K=Q[ee],void 0!==K?(M(Q,ee),ee++):ee=0},200)},t=()=>{clearInterval(q)};d3.select("#nRadius").on("input",(function(){M(Q,+this.value)})),d3.select("#nRadius").property("max",Q.length-1),M(Q,Q.length-1),ae.setupData(),te.setupData(),j(re,Q),w(),z(1),setTimeout(()=>{$.stop(),a.stop(),d3.select("tooltip_div").classed("tooltip-abs",!0),d3.select("#CO-"+d3.max(Q)).attr("r",e=>2*e.r).dispatch("mouseover")},5e3)}}).call(void 0)}();
//# sourceMappingURL=bundle.js.map