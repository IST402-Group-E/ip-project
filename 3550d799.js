import{s as t,r as e,$ as s}from"./aa05e036.js";import{U as i}from"./137ea483.js";class o extends t{static get tag(){return"location-from-ip"}constructor(){super(),this.UserIpInstance=new i,this.locationEndpoint="https://freegeoip.app/json/",this.long=10.305385,this.lat=77.923029}static get properties(){return{}}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.getGEOIPData()}async getGEOIPData(){const t=new i,e=await t.updateUserIP();return fetch(this.locationEndpoint+e.ip).then((t=>!!t.ok&&t.json())).then((t=>(console.log(t),t)))}static get styles(){return[e`:host{display:block}iframe{height:500px;width:500px}`]}render(){const t=`https://maps.google.com/maps?q=${this.long},${this.lat}&t=&z=15&ie=UTF8&iwloc=&output=embed`;return s`<iframe title="Where you are" src="${t}"></iframe> `}}customElements.define(o.tag,o);