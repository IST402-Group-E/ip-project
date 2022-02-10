import{I as t,_ as e}from"./9f9f4c10.js";import{r as i,$ as a,s}from"./aa05e036.js";import{U as r}from"./243215ab.js";class o extends(t(s)){static get styles(){return[i`:host{display:block;--wikipedia-query-body-height:160px;--wikipedia-query-background-color:#f8f8f8}:host [hidden]{display:none}#result{height:var(--wikipedia-query-body-height);overflow:scroll;border:1px grey solid;padding:8px 16px}citation-element{background-color:var(--wikipedia-query-background-color);padding:16px 8px;font-size:12px}`]}constructor(){super(),this.hideTitle=!1;const t=document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en";this.language=t.split("-")[0],this.headers={cache:"force-cache"};let e=new Date(Date.now());this.__now=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()}static get tag(){return"wikipedia-query"}render(){return a` ${this.elementVisible?a` <h3 .hidden="${this.hideTitle}" part="heading-3"> ${this._title} </h3> <div id="result"></div> <citation-element creator="{Wikipedia contributors}" scope="sibling" license="by-sa" title="${this.search} --- {Wikipedia}{,} The Free Encyclopedia" source="https://${this.language}.wikipedia.org/w/index.php?title=${this.search}" date="${this.__now}"></citation-element>`:""}`}updateArticle(t,e,i){fetch(`https://${i}.wikipedia.org/w/api.php?origin=*&action=query&titles=${t}&prop=extracts&format=json`,e).then((t=>{if(t.ok)return t.json()})).then((t=>{this.handleResponse(t)}))}updated(t){t.forEach(((t,e)=>{"elementVisible"==e&&this[e]&&import("./56772143.js"),["elementVisible","search","headers","language"].includes(e)&&this.search&&this.headers&&this.elementVisible&&this.language&&(clearTimeout(this._debounce),this._debounce=setTimeout((()=>{this.updateArticle(this.search,this.headers,this.language)}),10)),"search"==e&&(this.title?this._title=this.title:this._title=this[e].replace("_"," ")+" Wikipedia article"),"title"==e&&this.title&&(this._title=this.title)}))}static get properties(){let t={};return super.properties&&(t=super.properties),{...t,title:{type:String},__now:{type:String},_title:{type:String},headers:{type:Object},hideTitle:{type:Boolean,attribute:"hide-title"},search:{type:String},language:{type:String}}}handleResponse(t){if(void 0!==t&&t.query)for(var e in t.query.pages)if(t.query.pages.hasOwnProperty(e)&&t.query.pages[e].extract){let i=t.query.pages[e].extract;i=i.replace(/<script[\s\S]*?>/gi,"&lt;script&gt;"),i=i.replace(/<\/script>/gi,"&lt;/script&gt;"),i=i.replace(/<style[\s\S]*?>/gi,"&lt;style&gt;"),i=i.replace(/<\/style>/gi,"&lt;/style&gt;"),this.shadowRoot.querySelector("#result").innerHTML=i}}haxHooks(){return{gizmoRegistration:"haxgizmoRegistration"}}haxgizmoRegistration(t){window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{namespace:"wikipedia-query.haxProperties",localesPath:new URL("./locales",import.meta.url).href,locales:["es","fr"]}})),t.validGizmoTypes.push("wikipedia"),0===t.appList.filter(((t,e)=>t.connection.url===this.language+".wikipedia.org")).length&&window.dispatchEvent(new CustomEvent("hax-register-app",{bubbles:!1,composed:!1,cancelable:!1,detail:this.haxAppDetails}))}get haxAppDetails(){return{details:{title:"Wikipedia",icon:"account-balance",color:"grey",author:"Wikimedia",description:"Encyclopedia of the world.",status:"available",tags:["content","encyclopedia","wiki"]},connection:{protocol:"https",url:this.language+".wikipedia.org",data:{action:"query",list:"search",format:"json",origin:"*"},operations:{browse:{method:"GET",endPoint:"w/api.php",pagination:{style:"offset",props:{offset:"sroffset"}},search:{srsearch:{title:"Search",type:"string"}},data:{},resultMap:{image:"https://"+this.language+".wikipedia.org/static/images/project-logos/enwiki.png",defaultGizmoType:"wikipedia",items:"query.search",preview:{title:"title",details:"snippet",id:"title"},gizmo:{_url_source:"https://"+this.language+".wikipedia.org/wiki/<%= id %>",id:"title",title:"title",caption:"snippet",description:"snippet"}}}}}}}static get haxProperties(){return new URL(`./lib/${this.tag}.haxProperties.json`,import.meta.url).href}}customElements.define(o.tag,o);class n extends s{static get tag(){return"location-from-ip"}constructor(){super(),this.UserIpInstance=new r,this.locationEndpoint="https://freegeoip.app/json/",this.long=this.getGEOIPData.longitude,this.lat=this.getGEOIPData.latitude,this.city=null,this.state=null}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.getGEOIPData()}async getGEOIPData(){const t=new r,e=await t.updateUserIP();return fetch(this.locationEndpoint+e.ip).then((t=>!!t.ok&&t.json())).then((t=>(console.log(t),this.long=t.longitude,this.lat=t.latitude,this.city=t.city,this.state=t.region_name,t)))}static get styles(){return[i`:host{display:block}iframe{height:500px;width:500px}`]}render(){const t=`https://maps.google.com/maps?q=${this.lat},${this.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;return a`<iframe title="Where you are" src="${t}"></iframe> <br> <a href="https://www.google.com/maps/@${this.lat},${this.long},15z" target="_blank">Location</a> <wikipedia-query search="${this.city}, ${this.state}"></wikipedia-query> <wikipedia-query search="${this.city}"></wikipedia-query> <wikipedia-query search="${this.state}"></wikipedia-query>`}}e(n,"properties",{locationEndpoint:{},long:{},lat:{},city:{},state:{}}),customElements.define(n.tag,n);