"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[19],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),i=t(7294),r=t(6010),l=t(2466),s=t(6550),u=t(1980),d=t(7392),o=t(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=g({queryString:t,groupId:a}),[c,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,o.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=u??c;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var h=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=o.indexOf(n),a=d[t].value;a!==s&&(c(n),u(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>o.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},i.createElement(b,(0,a.Z)({},e,n)),i.createElement(v,(0,a.Z)({},e,n)))}function w(e){const n=(0,h.Z)();return i.createElement(N,(0,a.Z)({key:String(n)},e))}},6698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=t(7462),i=(t(7294),t(3905)),r=(t(5657),t(4866)),l=t(5162);const s={sidebar_position:5},u="Manuell (inkl. Windows) und Upgrade/Downgrade",d={unversionedId:"installation/manual",id:"installation/manual",title:"Manuell (inkl. Windows) und Upgrade/Downgrade",description:"Diese manuelle Installation erfordert fortgeschrittene PC Kenntnisse, vor allem auch im Umgang mit einem Terminal/Eingabeaufforderung.",source:"@site/docs/installation/manual.mdx",sourceDirName:"installation",slug:"/installation/manual",permalink:"/docs/installation/manual",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/manual.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/installation/docker"},next:{title:"Tipps und FAQ",permalink:"/docs/guides/"}},o={},c=[{value:"Erstinstallation",id:"erstinstallation",level:2},{value:"Aktualisierung/Downgrade",id:"aktualisierungdowngrade",level:2},{value:"evcc als Service",id:"evcc-als-service",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows 10",id:"windows-10",level:3}],m={toc:c},p="wrapper";function g(e){let{components:n,...s}=e;return(0,i.kt)(p,(0,a.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manuell-inkl-windows-und-upgradedowngrade"},"Manuell (inkl. Windows) und Upgrade/Downgrade"),(0,i.kt)("p",null,"Diese manuelle Installation erfordert fortgeschrittene PC Kenntnisse, vor allem auch im Umgang mit einem Terminal/Eingabeaufforderung."),(0,i.kt)("h2",{id:"erstinstallation"},"Erstinstallation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\xd6ffne im Browser die Release Webseite unter ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/releases/latest"},"https://github.com/evcc-io/evcc/releases/latest")),(0,i.kt)("li",{parentName:"ul"},"W\xe4hle die f\xfcr dein System passende Version nach dem hier angegebenen Namens-Schema:")),(0,i.kt)(r.Z,{groupId:"manual",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- 64-Bit Intel CPU: evcc_X.XX_linux_amd64.tar.gz\n- 64-Bit ARM CPU: evcc_X.XX_linux_arm64.tar.gz\n- 32-Bit ARM CPU (e.g. Raspberry Pi 32-Bit OS): evcc_X.XX_linux_armv6.tar.gz\n"))),(0,i.kt)(l.Z,{value:"macos",label:"macOS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- 64-Bit ARM oder Intel CPU: evcc_X.XX_macOS_all.tar.gz\n"))),(0,i.kt)(l.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- 64-Bit Intel CPU: evcc_X.XX_windows_amd64.zip\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lade die entsprechende Datei auf dein System herunter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Entpacke die heruntergeladene Datei (z.B. per Doppelklick auf die Datei)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Es gibt nun einen neuen Ordner mit der dem Programm ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal/Eingeabeaufforderung und gehe in den Ordner mit dem Programm ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Fortgeschrittene Anwender (z.B. mit evcc Erfahrung oder technischem Know-How) k\xf6nnen auch alternativ folgenden Aufruf verwenden:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,i.kt)("p",{parentName:"admonition"},"Dieser Modus bietet weitere (technisch fortgeschrittene) Einstellm\xf6glichkeiten.")))),(0,i.kt)("h2",{id:"aktualisierungdowngrade"},"Aktualisierung/Downgrade"),(0,i.kt)("p",null,"F\xfchre die obigen Schritte aus und ersetze die evcc Programmdatei mit der neuen bzw. vorherigen Version. Die Konfiguration muss nicht erneut durchgef\xfchrt werden."),(0,i.kt)("h2",{id:"evcc-als-service"},"evcc als Service"),(0,i.kt)("p",null,"Sobald die Konfiguration und das Testen erfolgreich abgeschlossen sind, kann die Installation von evcc nun abgeschlossen werden. Folge diesen Schritten um evcc als Systemdienst einzurichten, welcher daf\xfcr sorgt dass evcc beim Start des Computers ausgef\xfchrt wird und im Fehlerfall ebenfalls automatisch neu startet."),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Diese Dokumentation geht davon aus, dass Linux ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," unterst\xfctzt.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F\xfchre folgenden Befehl aus um einen Editor mit einer neuen Datei f\xfcr den Dienst zu erstellen und zu \xf6ffnen:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/evcc.service\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kopiere den folgenden Inhalt in die Datei"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=evcc\nRequires=network-online.target\nAfter=syslog.target network.target network-online.target\nWants=network-online.target\nStartLimitIntervalSec=10\nStartLimitBurst=10\n\n[Service]\nExecStart=/usr/local/bin/evcc\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",{parentName:"li"},"Passe den Pfad der ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc")," Datei in ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart")," an, falls die Datei in einem anderen Verzeichnis abgelegt ist.\nDies geht auch davon aus, dass die Konfigurationsdatei ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/evcc.yaml")," zu finden ist. Falls dies nicht der Fall ist, muss in ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart")," am Ende der Text ",(0,i.kt)("inlineCode",{parentName:"p"},"-c /yourpath/evcc.yaml")," hinzugef\xfcgt werden. Der Text ",(0,i.kt)("inlineCode",{parentName:"p"},"yourpath")," muss mit dem entsprechenden Verzeichnis ersetzt werden.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Teste den Dienst:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\nsudo systemctl start evcc\nsudo systemctl status evcc\n")),(0,i.kt)("p",{parentName:"li"},"Die Ausgabe sollte bei Erfolg folgenden Text beinhalten ",(0,i.kt)("inlineCode",{parentName:"p"},"Active: active (running)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Konfiguriere den Dienst so, dass er beim Rechnerstart automatisch startet:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable evcc.service\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fertig :)"))),(0,i.kt)("p",null,"evcc l\xe4uft nun als Systemdienst im Hintergrund. Mit folgenden Befehlen kann dieser Dienst in Zukunft gesteuert werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status evcc # zeigt den Status\nsudo systemctl start evcc # startet den Dienst\nsudo systemctl stop evcc # stoppt den Dienst\nsudo systemctl restart evcc # startet den Dienst neu\nsudo systemctl enable evcc # aktiviert den Dienst\nsudo systemctl disable evcc # deaktiviert den Dienst\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Achtung:")," Bei Umstellung auf die ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc")," Releases \xfcber ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," ",(0,i.kt)("em",{parentName:"p"},"muss")," der angelegte Service wieder entfernt werden. Anderenfalls kommt es zu Konflikten und Fehlern beim Start von ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc"),"."),(0,i.kt)("h3",{id:"windows-10"},"Windows 10"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Diese Dokumentation geht davon aus, dass evcc in ",(0,i.kt)("inlineCode",{parentName:"p"},"c:\\evcc")," liegt.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beginnt in der Suchleiste von Windows 10 mit der Eingabe des Wortes ",(0,i.kt)("inlineCode",{parentName:"li"},"Aufgabenplanung"),". Bereits nach wenigen Buchstaben sollte diese als Treffer mit der h\xf6chsten \xdcbereinstimmung angezeigt werden und kann auf der rechten Seite mit ",(0,i.kt)("inlineCode",{parentName:"li"},"Als Administrator ausf\xfchren")," gestartet werden:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Windows 10 Aufgabenplanung",src:t(5367).Z,width:"728",height:"596"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nach dem starten der Aufgabenplanung obliegt es Euch, ob Ihr den neuen Service in einem eigenen Ordner oder der allgemeinen Aufgabenplanungsbibliothek anlegt. F\xfcr dieses Beispiel wird ein eigener Ordner ",(0,i.kt)("inlineCode",{parentName:"li"},"evcc"),' angelegt. Hierzu muss zun\xe4chst der Ordner "Aufgabenplanungsbibliothek angew\xe4hlt werden um dann mit der rechten Maustaste das PopUp Men\xfc zu starten. Hier w\xe4hlen wir ',(0,i.kt)("inlineCode",{parentName:"li"},"Neuer Ordner")," und benennen diesen evcc:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Aufgabenplanungsbibliothek",src:t(280).Z,width:"346",height:"133"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nun w\xe4hlen wir den neuen Ordner ",(0,i.kt)("inlineCode",{parentName:"li"},"evcc oder die allgemeine Aufgabenplanungsbibliothek")," aus und \xf6ffnen erneut mit der rechten Maustaste das PopUp Men\xfc, dort w\xe4hlen wir nun ",(0,i.kt)("inlineCode",{parentName:"li"},"Aufgabe erstellen"),":")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Neue Aufgabe erstellen",src:t(1214).Z,width:"365",height:"307"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Als Name ",(0,i.kt)("inlineCode",{parentName:"li"},"evcc")," und zur besseren Zuordnung sollte eine kurze Beschreibung mit angegeben werden. Da wir den Service als Systemdienst laufen lassen, \xf6ffnen wir die Userverwaltung \xfcber 'Benutzer oder Gruppe \xe4ndern' und tippen dort ",(0,i.kt)("inlineCode",{parentName:"li"},"system"),". Nach einem Klick auf ",(0,i.kt)("inlineCode",{parentName:"li"},"User \xfcberpr\xfcfen"),", sollte der Account angezeigt und der Dialog kann mit OK geschlossen werden:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Allgemein",src:t(8010).Z,width:"633",height:"484"})," ",(0,i.kt)("img",{alt:"Systemnutzer setzen",src:t(5605).Z,width:"458",height:"255"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstellungen des Reiters: ",(0,i.kt)("inlineCode",{parentName:"li"},"Trigger")),(0,i.kt)("li",{parentName:"ul"},'Aufgabe starten \xe4ndern auf "Beim Start" und pr\xfcfen, dass die Aufgabe aktiviert ist:')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Trigger",src:t(871).Z,width:"740",height:"526"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstellungen des Reiters: ",(0,i.kt)("inlineCode",{parentName:"li"},"Aktionen")),(0,i.kt)("li",{parentName:"ul"},'"Programm starten" belassen und \xfcber Durchsuchen die Datei "evcc.exe" ausw\xe4hlen. Es empfiehlt sich den Pfad zus\xe4tzlich in ',(0,i.kt)("inlineCode",{parentName:"li"},"Starten in")," anzugeben, somit wird die dort abgelegte Konfigurationsdatei direkt gefunden:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Aktionen",src:t(9431).Z,width:"636",height:"505"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstellungen des Reiters: ",(0,i.kt)("inlineCode",{parentName:"li"},"Bedingungen")),(0,i.kt)("li",{parentName:"ul"},"Diese Einstellungen k\xf6nnen im Default belassen werden. Da evcc l\xe4nger laufen sollte als es der Akkubetrieb gew\xe4hrleisten w\xfcrde."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tipp"),": Da z.B. der SMA Home Manager \xfcber WLAN Probleme bereiten kann, sollte optional der Haken bei ",(0,i.kt)("inlineCode",{parentName:"li"},"Netzwerk")," gesetzt und eine entsprechende Verbindung ausgew\xe4hlt werden.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bedingungen",src:t(4604).Z,width:"637",height:"482"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstellungen des Reiters: ",(0,i.kt)("inlineCode",{parentName:"li"},"Einstellungen")),(0,i.kt)("li",{parentName:"ul"},"Den Haken bei ",(0,i.kt)("inlineCode",{parentName:"li"},"Aufgabe so schnell wie m\xf6glich ...")," setzen."),(0,i.kt)("li",{parentName:"ul"},"Unbedingt den Haken bei ",(0,i.kt)("inlineCode",{parentName:"li"},"Aufgabe beenden, falls Ausf\xfchrung l\xe4nger als:")," entfernen, sonst wundert ihr Euch, das evcc auf einmal nicht mehr l\xe4uft.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Einstellungen",src:t(4339).Z,width:"635",height:"486"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fertig :-)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Die Aufgabe kann nun manuell gestartet oder \xfcber einen Reboot getestet werden. Zur Kontrolle mit dem Browser von einem anderen System auf ",(0,i.kt)("inlineCode",{parentName:"p"},"IP des Windows 10 Rechners:7070")," zugreifen."))))}g.isMDXComponent=!0},5367:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-1-3c55ddae87672b83295cbdf05c95aa8b.png"},280:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-2-a21bb794bb7daba2f194d2a21e82976e.png"},1214:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-3-2d6cd5ecc1abfa9272f01a6d77655df8.png"},8010:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-4-d76fa41a5b6d56c7b357430a99e2dfc4.png"},5605:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-5-283810ae9b749cb0cc1bf619ece9bc8f.png"},871:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-6-6995e66ea709b8e1845071eb82ec079c.png"},9431:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-7-612e2932f6ef4422450e6ff7bfd7521c.png"},4604:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-8-0ffaaedea4d6e2de473aeed89ea2e939.png"},4339:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/win10-srv-9-441b59f54cea8b063361c994f9e1cc84.png"}}]);