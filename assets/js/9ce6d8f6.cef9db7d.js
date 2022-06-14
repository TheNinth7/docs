"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5623],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return p}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),o=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=o(r),p=i,h=g["".concat(u,".").concat(p)]||g[p]||c[p]||a;return r?t.createElement(h,s(s({ref:n},d),{},{components:r})):t.createElement(h,s({ref:n},d))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<a;o++)s[o]=r[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75300:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var t=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],l={sidebar_position:2},u="Konfiguration",o={unversionedId:"guides/setup",id:"guides/setup",title:"Konfiguration",description:"Einrichtung und Konfiguration",source:"@site/docs/guides/setup.mdx",sourceDirName:"guides",slug:"/guides/setup",permalink:"/docs/guides/setup",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/guides/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht",permalink:"/docs/guides/overview"},next:{title:"Laden",permalink:"/docs/guides/charging"}},d={},c=[{value:"Einrichtung und Konfiguration",id:"einrichtung-und-konfiguration",level:2},{value:"Etwas funktioniert nicht. Was nun?",id:"etwas-funktioniert-nicht-was-nun",level:3},{value:"Wie kann ich ein Logfile zur Fehleranalyse erstellen?",id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen",level:3},{value:"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)",id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber",level:3},{value:"Fehler: connection refused",id:"fehler-connection-refused",level:3},{value:"Fehler: i/o timeout",id:"fehler-io-timeout",level:3},{value:"Ersparnisberechnung",id:"ersparnisberechnung",level:3}],g={toc:c};function p(e){var n=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"konfiguration"},"Konfiguration"),(0,a.kt)("h2",{id:"einrichtung-und-konfiguration"},"Einrichtung und Konfiguration"),(0,a.kt)("h3",{id:"etwas-funktioniert-nicht-was-nun"},"Etwas funktioniert nicht. Was nun?"),(0,a.kt)("p",null,"Bei evcc gibt es einen ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"Community Support"),". Hier helfen sowohl Entwickler als auch Anwender bei verschiedenen Problemen. Es w\xe4re gut dabei m\xf6glichst genaue Informationen zu folgenden Bereichen mitzuteilen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Welche Ger\xe4te (Fahrzeug, Hausinstallation, Wallbox) werden verwendet."),(0,a.kt)("li",{parentName:"ul"},"Die Konfigurationsdatei ",(0,a.kt)("inlineCode",{parentName:"li"},"evcc.yaml"),",",(0,a.kt)("br",{parentName:"li"}),"d.h. deren Inhalt (",(0,a.kt)("em",{parentName:"li"},"bitte Benutzernamen, Passw\xf6rter und \xe4hnliches entfernen"),")."),(0,a.kt)("li",{parentName:"ul"},"Eine m\xf6glichst genaue Beschreibung was das Problem ist.")),(0,a.kt)("p",null,"Wir versuchen nat\xfcrlich Probleme so gut es geht zu vermeiden, aber das kann aufgrund der Komplexit\xe4t leider nicht immer gelingen."),(0,a.kt)("h3",{id:"wie-kann-ich-ein-logfile-zur-fehleranalyse-erstellen"},"Wie kann ich ein Logfile zur Fehleranalyse erstellen?"),(0,a.kt)("p",null,"evcc gibt in seiner Standard Konfiguration nur dann Fehlermeldungen aus, wenn ein Fehler auftritt (siehe auch ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/log#log"},(0,a.kt)("inlineCode",{parentName:"a"},"log"))," Parameter in der ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc.yaml"),"). "),(0,a.kt)("p",null,"Wenn evcc auf der Konsole ausgef\xfchrt wird, werden die ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," Nachrichten einfach in die normale Ausgabe geleitet. "),(0,a.kt)("p",null,"Mittels ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc charger")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc meter")," oder ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," k\xf6nnen auf der Kommandozeile die verschiedenen Ger\xe4tetype getestet werden. Dabei kommt der in ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," konfigurierte Log-Parameter (siehe oben) zum Einsatz. Will man davon abweichende Tests durchf\xfchren, kann der Log-Parameter beim Aufruf entsprechend erg\xe4nzt werden."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Beispiel: evcc -l debug meter")),(0,a.kt)("p",null,"Wird evcc als Linux Systemdienst, wie unter ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/manual#autostart"},"Linux Autostart")," beschrieben, ausgef\xfchrt, k\xf6nnen die log-Nachrichten \xfcber folgende Befehle verfolgt, bzw. aufgelistet werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kontinuierliche Anzeige der evcc log Meldungen",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"sudo journalctl -fau evcc"),"     "),(0,a.kt)("li",{parentName:"ul"},"Anzeige der evcc log Meldungen seit dem letzten Start des evcc Services (Abbruch mit Strg-c)",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"sudo journalctl -u evcc -q"),(0,a.kt)("br",{parentName:"li"}),"Speichern der Log-Ausgabe oben in eine Datei im Home-Verzeichnis",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"sudo journalctl -u evcc -q > ~/evcc.log"))),(0,a.kt)("p",null,"Weiterf\xfchrende Hilfe: ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.ubuntuusers.de/systemd/journalctl/"},"wiki.ubuntuusers.de/systemd/journalctl"),"  "),(0,a.kt)("p",null,"Im Falle einer Docker Installation kann man \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs")," die Nachrichten anzeigen lassen, siehe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/"},"Docker Dokumentation")),(0,a.kt)("h3",{id:"fehler-evcc-ui-ist-nicht-erreichbar-demo-modus-funktioniert-aber"},"Fehler: evcc UI ist nicht erreichbar (Demo Modus funktioniert aber)"),(0,a.kt)("p",null,"Es kommt immer wieder vor, dass Fehler in der Konfiguration \xfcbersehen werden und der Service gestartet wird. Dabei wird der Start von evcc abgebrochen, ohne das es daf\xfcr einen Hinweis gibt. Ergebnis ist, dass das UI nicht erreichbar ist."),(0,a.kt)("p",null,"In dem Fall sollte man evcc durch Eingabe von ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc")," auf der Kommandozeile starten. Dort werden dann auch Fehlerhinweise gegeben, die den Start des Service verhindert haben. "),(0,a.kt)("p",null,"Mittels der oben genannten Tests kann man diesen Fehlern auf den Grund gehen und beheben. Erst wenn alles fehlerfrei ist, sollte der Service gestartet werden."),(0,a.kt)("h3",{id:"fehler-connection-refused"},"Fehler: connection refused"),(0,a.kt)("p",null,"Die Verbindung zum Ger\xe4t ist prinzipiell vorhanden, jedoch wird der Verbindungsaufbau von der Gegenstelle abgewiesen. "),(0,a.kt)("p",null,"Die Gr\xfcnde daf\xfcr k\xf6nnen vielf\xe4ltig sein. Typisch sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der am Ger\xe4t freigegeben Port stimmt nicht mit dem in der Konfiguration angegebenen Port \xfcberein."),(0,a.kt)("li",{parentName:"ul"},"Der Modbus Server am Ger\xe4t ist nicht aktiviert (passiert regelm\xe4\xdfig z.B. bei Solaredge)"),(0,a.kt)("li",{parentName:"ul"},"Es besteht schon eine Modbus Verbindung mit einem anderen System")),(0,a.kt)("h3",{id:"fehler-io-timeout"},"Fehler: i/o timeout"),(0,a.kt)("p",null,"Auch hier ist eine Verbindung zum Ger\xe4t prinzipiell vorhanden, jedoch antwortet die Gegenstelle nicht innerhalb der vorgesehenen Zeit. Entweder kommt die Anfrage gar nicht beim Ger\xe4t an, oder die Antwort dauert zu lange. "),(0,a.kt)("p",null,"Typische Gr\xfcnde sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Langsame oder schlechte Netzwerkverbindung. "),(0,a.kt)("li",{parentName:"ul"},"Das Ger\xe4t ist \xfcberlastet oder ausgefallen")),(0,a.kt)("h3",{id:"ersparnisberechnung"},"Ersparnisberechnung"),(0,a.kt)("p",null,"In der evcc Oberfl\xe4che wird dir unten rechts angezeigt wieviel Prozent deiner geladenen Energie aus eigenem Sonnenstrom stammt (Beispiel: ",(0,a.kt)("strong",{parentName:"p"},"85% Sonnenenergie"),").\nBeim Klick darauf \xf6ffnet sich ein Dialog der mehr Details zur Ladenergie und deinen eingesparten Kosten zeigt.\nDamit diese Werte korrekt sind musst du deinen Energie- und Einspeisepreis in der Konfiguration hinterlegen.\nHier ein Beispiel:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    type: fixed\n    price: 0.08 # [currency]/kWh\n")),(0,a.kt)("p",null,"Mehr Details zur Konfiguration findest du in ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/tariffs"},(0,a.kt)("inlineCode",{parentName:"a"},"tariffs")),"."),(0,a.kt)("p",null,"F\xfcr die Berechnung der Einsparungen erfasst evcc grob die Gesamtmenge der geladenen Energie und die verwendeten Energiequellen (Netz, Batterie, PV)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Was ist Sonnenenergie?")),(0,a.kt)("p",null,"Die direkte PV-Nutzung und die vom Batteriesystem bereitgestellte Energie werden bei dieser Berechnung gleich behandelt.\nEvcc geht davon aus, dass der Hausspeicher prim\xe4r zur Speicherung von \xfcbersch\xfcssigem, selbstproduzierten Sonnenstrom verwendet wird.\nErf\xfcllt der Speicher auch netzdienliche Leistungen (bspw. Sonnen) oder f\xfchrt eine Kalibrierung mit Netzstrom durch, ist diese Annahme nicht immer korrekt.\nBatterieverluste durch die Umwandlung werden nicht ber\xfccksichtigt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Berechnung von Ersparnis und effektivem Energiepreis")),(0,a.kt)("p",null,"Der Algorithmus unterscheidet zwischen Netzstrom und selbst erzeugter Sonnenenergie (PV, Batterie).\nDer Kostenvorteil deiner Sonnenenergie ergibt sich aus der Differenz zwischen deinem Netzbezugspreis (z.B. 0,294 EUR/kWh) und deinem Einspeisetarif (z.B. 0,08 EUR/kWh).\nJede geladene kWh selbst produzierter Energie ist in diesem Beispiel 0,214 EUR (0,294 - 0,08 EUR) g\xfcnstiger als der Netzbezug.\nHast du 10 kWh eigene Energie geladen entspricht das einer ",(0,a.kt)("strong",{parentName:"p"},"Ersparnis")," von 2,14 EUR."),(0,a.kt)("p",null,"W\xfcrdest du dein Auto zu 100% mit eigener Sonnenenergie laden entspricht der angezeigte ",(0,a.kt)("strong",{parentName:"p"},"effektive Energiepreis")," deiner, nicht eingenommenen, Einspeiseverg\xfctung (bspw. 0,08 EUR/kWh).\nL\xe4dst du dein Auto zu 50% aus Sonnenenergie und zu 50% aus Netzstrom passt sich der Energiepreis entsprechend an (bspw. 0,187 EUR/kWh)."),(0,a.kt)("p",null,"Wenn du keine Einspeiseverg\xfctung erh\xe4lst, kannst du den Einspeisepreis auf 0 setzen.\nDie Sonnenenergie wird dann als kostenlos gerechnet.\nMusst du deine selbstgenutzte Energie versteuern kannst du den Steuersatz auf deine Einspeiseverg\xfctung aufschlagen um realistischere Zahlen zu bekommen."),(0,a.kt)("p",null,"Uns ist klar, dass diese Einsparung nicht allein evcc zuzuschreiben ist.\nSteckst du dein Auto an einem sonnigen Tag an eine Wallbox wird ein Teil der geladenen Energie auch Sonnenstrom sein.\nEvcc hilft dir aber den Anteil der geladenen Sonnenenergie zu maximieren."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Berechnung des Sonnenenergieanteils")),(0,a.kt)("p",null,"Wenn du gleichzeitig Energie aus mehreren Quellen beziehst (z.B. 50% Netz, 50% PV), wird der Algorithmus die Energiequellen gleichm\xe4\xdfig verteilen.\nEr geht davon aus, dass dein Hausverbrauch und deine aktiven Lastpunkte jeweils einen Energiemix von 50/50 verwenden.\nDas Laden des Autos wird in diesem Modell genau so behandelt wie das Verwenden der Waschmaschine."),(0,a.kt)("p",null,"Flexible Preise (Awattar, Tibber) werden f\xfcr die Ermittlung des effektiven Energiepreises ber\xfccksichtigt.\nDer Ersparnisbetrag wird allerdings immer in relation zum aktuell g\xfcltigen Energiepreis ermittelt."),(0,a.kt)("p",null,"Die Energiemengen und Einsparungen sind derzeit nicht persistent und werden nach einem Neustart des Dienstes zur\xfcckgesetzt."))}p.isMDXComponent=!0}}]);