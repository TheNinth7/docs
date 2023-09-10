"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8864],{5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),l=t(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,s),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>w});var n=t(7462),l=t(7294),i=t(6010),s=t(2466),o=t(6550),r=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function d(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,r._X)(i),(0,l.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=d(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[r,c]=h({queryString:t,groupId:n}),[p,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,u.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),v=(()=>{const e=r??p;return m({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,i]),tabValues:i}}var v=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:o,selectValue:r,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const a=e.currentTarget,t=u.indexOf(a),n=c[t].value;n!==o&&(p(a),r(n))},m=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function b(e){const a=y(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},l.createElement(g,(0,n.Z)({},e,a)),l.createElement(k,(0,n.Z)({},e,a)))}function w(e){const a=(0,v.Z)();return l.createElement(b,(0,n.Z)({key:String(a)},e))}},3262:(e,a,t)=>{t.d(a,{ZP:()=>o});var n=t(7462),l=(t(7294),t(3905));t(8209);const i={toc:[]},s="wrapper";function o(e){let{components:a,...t}=e;return(0,l.kt)(s,(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"Sponsor Token Required",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"More information on \ud83d\udc9a evcc Sponsorship can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"here"),".")))}o.isMDXComponent=!0},6590:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=t(7462),l=(t(7294),t(3905)),i=(t(8209),t(4866),t(5162),t(3262));const s={sidebar_position:3},o="Vehicles",r={unversionedId:"devices/vehicles",id:"devices/vehicles",title:"Vehicles",description:"To limit vehicle charging to a given State of Charge (SoC), which most Chargers do not have the capability to read,",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/en/docs/devices/vehicles",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Meters / Site",permalink:"/en/docs/devices/meters"},next:{title:"Referenz",permalink:"/en/docs/reference/"}},c={},u=[{value:"Aiways",id:"aiways",level:2},{value:"Audi",id:"audi",level:2},{value:"BMW",id:"bmw",level:2},{value:"Citro\xebn",id:"citro\xebn",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Jeep",id:"jeep",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"CupraConnect Gen3 (Ateca, Leon, Formentor)",id:"cupraconnect-gen3-ateca-leon-formentor",level:3},{value:"CupraConnect Gen4 (Born)",id:"cupraconnect-gen4-born",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Enyaq",id:"enyaq",level:3},{value:"Others",id:"others",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"legacy",id:"legacy",level:3},{value:"Generic support",id:"generic-support",level:2},{value:"Custom",id:"custom",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"ISO15118",id:"iso15118",level:3},{value:"mazda2mqtt",id:"mazda2mqtt",level:3},{value:"mg2mqtt",id:"mg2mqtt",level:3},{value:"Offline",id:"offline",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"PSA Car Controller",id:"psa-car-controller",level:3},{value:"TeslaMate",id:"teslamate",level:3},{value:"Tronity \ud83d\udc9a",id:"tronity-",level:3},{value:"Scooter",id:"scooter",level:2},{value:"NIU E-Scooter",id:"niu-e-scooter",level:3}],p={toc:u},d="wrapper";function m(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vehicles"},"Vehicles"),(0,l.kt)("p",null,"To limit vehicle charging to a given State of Charge (SoC), which most Chargers do not have the capability to read,\nevcc can directly communicate with the Vehicle, usually via its manufacturer."),(0,l.kt)("p",null,"The configuration is formatted as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: ev\n    type: ...\n")),(0,l.kt)("p",null,"All of the Vehicles listed on this page are supported by evcc.\nOnce you have adapted the code samples to suit your Vehicle(s) in ",(0,l.kt)("inlineCode",{parentName:"p"},"evcc.yaml"),", you can test the connection using the ",(0,l.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," command, which returns the current status of all connected vehicles.\nIf you just want to test one meter at a time, use ",(0,l.kt)("inlineCode",{parentName:"p"},"evcc vehicle --name my_swanky_ev"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The availability and general quality of Vehicle data can vary greatly by manufacturer. If you have persistent issues updating your Vehicle data, please open a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"GitHub discussion"),".")),(0,l.kt)("h2",{id:"aiways"},"Aiways"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: aiways\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"audi"},"Audi"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WAUZZZ... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"bmw"},"BMW"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WBMW... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"citro\xebn"},"Citro\xebn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"dacia"},"Dacia"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"ds"},"DS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"fiat"},"Fiat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: ZFAE... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional)\n    pin: # optional \n")),(0,l.kt)("h2",{id:"ford"},"Ford"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WF0FXX... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"hyundai-bluelink"},"Hyundai Bluelink"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional)\n    language: en # 'en' for English and 'de' for German (optional) \n")),(0,l.kt)("h2",{id:"jaguar"},"Jaguar"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"jeep"},"Jeep"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: ZFAE... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional)\n    pin: # optional \n")),(0,l.kt)("h2",{id:"kia-bluelink"},"Kia Bluelink"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional)\n    language: en # 'en' for English and 'de' for German (optional) \n")),(0,l.kt)("h2",{id:"land-rover"},"Land Rover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"mini"},"Mini"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WBMW... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"nissan"},"Nissan"),(0,l.kt)("h3",{id:"leaf"},"Leaf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"leaf-pre-2019"},"Leaf (pre 2019)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"opel"},"Opel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WP0... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"peugeot"},"Peugeot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"porsche"},"Porsche"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"renault"},"Renault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WREN... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"seat"},"Seat"),(0,l.kt)("h3",{id:"cupraconnect-gen3-ateca-leon-formentor"},"CupraConnect Gen3 (Ateca, Leon, Formentor)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"cupraconnect-gen4-born"},"CupraConnect Gen4 (Born)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"skoda"},"Skoda"),(0,l.kt)("h3",{id:"enyaq"},"Enyaq"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"others"},"Others"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"smart-eq"},"Smart EQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"tesla"},"Tesla"),(0,l.kt)("p",null,"You need to generate an ",(0,l.kt)("inlineCode",{parentName:"p"},"access")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"refresh")," token for communicating with the Tesla API."),(0,l.kt)("p",null,"The following apps allow to create these tokens:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone"},"Auth app for Tesla (iOS)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens"},"Tesla Tokens (Android)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/adriankumpf/tesla_auth"},"Tesla Auth (macOS, Linux)"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Will be displayed in the user interface (optional)\n    accessToken: # See https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # See https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"volkswagen"},"Volkswagen"),(0,l.kt)("h3",{id:"we-connect-legacy"},"We Connect (legacy)"),(0,l.kt)("p",null,"older Models like e-Up, e-Golf, etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WVWZZZ... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"we-connect-id"},"We Connect ID"),(0,l.kt)("p",null,"ID.3, ID.4 (also works for e-Golf, e-Up)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: WVWZZZ... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"volvo"},"Volvo"),(0,l.kt)("h3",{id:""}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo-connected\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional)\n    vccapikey: # Volvo developer portal VCC API Key, see https://github.com/evcc-io/evcc/discussions/3677#discussioncomment-4106300 \n")),(0,l.kt)("h3",{id:"legacy"},"legacy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h2",{id:"generic-support"},"Generic support"),(0,l.kt)("h3",{id:"custom"},"Custom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: custom\n    title: My Car # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n")),(0,l.kt)("h3",{id:"evnotify"},"evNotify"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Will be displayed in the user interface (optional)\n    akey:\n    token:\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"iso15118"},"ISO15118"),(0,l.kt)("p",null,"Only supported if the vehicle can provided the state of charge (Soc) to the connected wallbox."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: iso15118\n    title: # Will be displayed in the user interface (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"mazda2mqtt"},"mazda2mqtt"),(0,l.kt)("p",null,"Required MQTT broker configuration and a mazda2mqtt installation ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/C64Axel/mazda2mqtt"},"https://github.com/C64Axel/mazda2mqtt"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mazda2mqtt\n    title: # Will be displayed in the user interface (optional)\n    vin: W... # Required\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"mg2mqtt"},"mg2mqtt"),(0,l.kt)("p",null,"Required MQTT broker configuration and a SAIC/MQTT Gateway (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway"},"https://github.com/SAIC-iSmart-API/saic-python-mqtt-gateway")," or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SAIC-iSmart-API/saic-java-client"},"https://github.com/SAIC-iSmart-API/saic-java-client"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mg2mqtt\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    vin: W... # Required if you own multiple vehicles of the same brand\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"offline"},"Offline"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: offline\n    title: # Will be displayed in the user interface (optional)\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"open-vehicle-monitoring-system"},"Open Vehicle Monitoring System"),(0,l.kt)("p",null,"Support for all vehicles via ODB2 adapter in the vehicle. More info at ",(0,l.kt)("a",{parentName:"p",href:"http://api.openvehicles.com/"},"Open Vehicle Monitoring System"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Will be displayed in the user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    vehicleid:\n    capacity: 12 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"psa-car-controller"},"PSA Car Controller"),(0,l.kt)("p",null,"Remote Control of PSA car ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/flobz/psa_car_controller"},"https://github.com/flobz/psa_car_controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: flobz\n    title: # Will be displayed in the user interface (optional)\n    url: http://192.0.2.2\n    vin: W... # Required\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"teslamate"},"TeslaMate"),(0,l.kt)("p",null,"Open source Tesla data logger ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/adriankumpf/teslamate"},"https://github.com/adriankumpf/teslamate"),". MQTT broker required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: teslamate\n    title: # Will be displayed in the user interface (optional)\n    id: 1 # optional\n    capacity: 50 # Battery capacity in kWh (optional) \n")),(0,l.kt)("h3",{id:"tronity-"},"Tronity \ud83d\udc9a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Will be displayed in the user interface (optional)\n    clientid: # Setup at https://app.tronity.tech\n    clientsecret: # Setup at https://app.tronity.tech\n    vin: W... # Required if you own multiple vehicles of the same brand (optional)\n    capacity: 10 # Battery capacity in kWh (optional) \n")),(0,l.kt)(i.ZP,{mdxType:"SponsorshipRequired"}),(0,l.kt)("h2",{id:"scooter"},"Scooter"),(0,l.kt)("h3",{id:"niu-e-scooter"},"NIU E-Scooter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Will be displayed in the user interface (optional)\n    icon: scooter # Icon as shown in user interface (optional)\n    user: # User account (e.g. email address, user id, etc.)\n    password: # Password of the user account (use single quotes in case of leading zeros)\n    serial:\n    capacity: 4 # Battery capacity in kWh (optional) \n")))}m.isMDXComponent=!0}}]);