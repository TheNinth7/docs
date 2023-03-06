"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1827],{5478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(7462),i=(t(7294),t(3905));t(5657);const s={sidebar_position:4},l="Modbus",o={unversionedId:"reference/modbus",id:"reference/modbus",title:"Modbus",description:"Einige Ger\xe4te, wie z.b. Z\xe4hler (meters) oder Wallboxen (chargers) werden \xfcber das Modbus-Protokoll angebunden und angesprochen.",source:"@site/docs/reference/modbus.md",sourceDirName:"reference",slug:"/reference/modbus",permalink:"/docs/reference/modbus",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/modbus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/reference/plugins"},next:{title:"API",permalink:"/docs/reference/api"}},d={},a=[{value:"Physikalische Verbindung",id:"physikalische-verbindung",level:2},{value:"Serielle Verbindung (RS485)",id:"serielle-verbindung-rs485",level:3},{value:"Direkte Netzwerkverbindung",id:"direkte-netzwerkverbindung",level:3},{value:"Serielles Ger\xe4t \xfcber Netzwerkverbindung (mit Schnittstellenkonverter)",id:"serielles-ger\xe4t-\xfcber-netzwerkverbindung-mit-schnittstellenkonverter",level:3},{value:"Vordefinierte Ger\xe4te",id:"vordefinierte-ger\xe4te",level:2},{value:"Manuelle Konfiguration",id:"manuelle-konfiguration",level:2}],u={toc:a},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modbus"},"Modbus"),(0,i.kt)("p",null,"Einige Ger\xe4te, wie z.b. Z\xe4hler (",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/meters#modbus"},(0,i.kt)("inlineCode",{parentName:"a"},"meters")),") oder Wallboxen (",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/configuration/chargers"},(0,i.kt)("inlineCode",{parentName:"a"},"chargers")),") werden \xfcber das Modbus-Protokoll angebunden und angesprochen."),(0,i.kt)("p",null,"Die ",(0,i.kt)("inlineCode",{parentName:"p"},"meter")," Konfiguration besteht hierbei aus der Art der pysikalischen Verbindung (Schnittstelle), ggf. den technischen Schnittstellenparametern, dem verwendeten Modbus-Protokoll, der eindeutigen Modbus-ID des Ger\xe4tes auf dem Bus und der Nummer und Art des Registers welches letztendlich gelesen oder geschrieben werden soll."),(0,i.kt)("p",null,"Zu beachten ist, dass es drei verschiedene Modbus-Protokolle gibt: Modbus RTU, Modbus ASCII und Modbus TCP. Diese k\xf6nnen technisch auch \xfcber unterschiedliche Schnittstellentypen \xfcbertragen werden k\xf6nnen.\nDie klassische Variante ist dabei Modbus RTU \xfcber eine serielle RS485-Busschnittstelle wie sie typischerweise z. B. bei den meisten Z\xe4hlern oder manchen Wallboxen genutzt wird. Ger\xe4te mit einer Netzwerkschnittstelle (Ethernet/WiFi) hingegen werden typischerweise \xfcber das Modbus TCP-Protokoll angesprochen."),(0,i.kt)("p",null,'Soll ein entferntes RS485-Ger\xe4t aber ebenfalls \xfcber einfachte, transparente Schnittstellenkonverter via Netzwerk (Ethernet/WiFi/PowerLAN) angebunden werden kommt dabei letztendlich ein Modbus RTU Protokoll \xfcber eine TCP/IP-Verbindung zustande.\nDas Modbus RTU Protokoll wird dabei 1:1 \xfcber das Netzwerk \xfcbertragen (sprich "getunnelt"). Auch wenn der Transportweg (TCP/IP) hierbei identisch ist handelt es sich dennoch NICHT um Modbus TCP!\nHier muss sehr genau zwischen Protokoll und Transportweg unterschieden werden. "Modbus (RTU) over TCP" ist etwas anderes als Modbus TCP!'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Achtung: Es gibt auch komplexere Umsetzer die zus\xe4tzlich das Modbus-Protokoll selbst zwischen Modbus RTU und Modbus TCP umsetzen k\xf6nnen! Bei diesen Ger\xe4ten spricht dann evcc mit dem Konverter tats\xe4chlich Modbus TCP w\xe4hrend der Konverter mit dem seriellen Ger\xe4t via Modbus RTU kommuniziert und die Protokolle bidirektional \xfcbersetzt.\nHier muss man ggf. genau auf die Ger\xe4tespezifikation und Konfiguration achten sonst ist keine Kommunikation m\xf6glich!")),(0,i.kt)("p",null,"Im Falle einer Konfiguration mit einem Schnittstellenkonverter wird die serielle Buskonfiguration am Konverter festgelegt und evcc kommuniziert letztendlich via Netzwerk mit dem Konverter. Wie zuvor erw\xe4hnt ist dabei jedoch das verwendete Modbus-Protokoll korrekt zu konfigurieren."),(0,i.kt)("h2",{id:"physikalische-verbindung"},"Physikalische Verbindung"),(0,i.kt)("h3",{id:"serielle-verbindung-rs485"},"Serielle Verbindung (RS485)"),(0,i.kt)("p",null,"Wenn das Ger\xe4t direkt \xfcber einen RS485-Adapter verbunden ist (Modbus RTU), muss ",(0,i.kt)("inlineCode",{parentName:"p"},"device")," und die seriellen Kommunikationsparameter ",(0,i.kt)("inlineCode",{parentName:"p"},"baudrate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"comset")," entsprechend der Ger\xe4tekonfiguration angegeben werden.\nDazu bitte die jeweilige Betriebanleitung, Datenbl\xe4tter oder Systemeinstellungen vergleichen."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"An einem seriellen RS485-Bus lassen sich mehrere Ger\xe4te mit identischen Kommunikationsparameter betreiben wenn jedes Ger\xe4t eine eigene Modbus ID zugewiesen bekommen hat.\nLassen sich nicht alle Ger\xe4te an einem Bus auf einen einheitliche Kommunikationseinstellungen und unterschiedliche IDs konfigurieren ist eine Aufteilung auf mehrere voneinander unabh\xe4ngige Bussysteme erforderlich.")),(0,i.kt)("p",null,":::attention\nDas Mischen von Ger\xe4ten mit voneinander abweichenden seriellen Kommunikationsparametern an einem Bus ist nicht m\xf6glich und f\xfchrt zu unvorhersehbaren Kommunikationsfehlern.\n:::"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source: modbus\nid: 1\ndevice: /dev/ttyUSB0\nbaudrate: 38400\ncomset: "8E1"\n')),(0,i.kt)("h3",{id:"direkte-netzwerkverbindung"},"Direkte Netzwerkverbindung"),(0,i.kt)("p",null,"Wenn das Ger\xe4t direkt \xfcber eine native Netzwerkverbindung (Modbus TCP) angebunden ist, muss eine ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," bestehend aus HOSTNAME:PORT oder IP:PORT angegeben werden:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\nid: 1\nuri: 192.168.0.11:502\n")),(0,i.kt)("h3",{id:"serielles-ger\xe4t-\xfcber-netzwerkverbindung-mit-schnittstellenkonverter"},"Serielles Ger\xe4t \xfcber Netzwerkverbindung (mit Schnittstellenkonverter)"),(0,i.kt)("p",null,"Wird ein serielles Ger\xe4t \xfcber einen zwischengeschalteten transparenten RS485-IP-Schnittstellenkonverter (ohne Protokoll\xfcbersetzung) angeschlossen muss das Protokoll \xfcber die TCP/IP-Verbindung zus\xe4tzlich mittels ",(0,i.kt)("inlineCode",{parentName:"p"},"rtu: true")," auf Modbus RTU umgestellt werden."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\nid: 1\nuri: 192.168.0.10:502\nrtu: true # Modbus RTU over TCP\n")),(0,i.kt)("h2",{id:"vordefinierte-ger\xe4te"},"Vordefinierte Ger\xe4te"),(0,i.kt)("p",null,"Die integrierten vordefinierten Ger\xe4temodelle ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," sind identisch zu ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd/blob/master/docs/mbmd_run.md#options"},"MBMD"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ABB       ABB A/B-Series meters\n DDM       DDM18SD\n DZG       DZG Metering GmbH DVH4013 meters\n IEM3000   Schneider Electric iEM3000 series\n INEPRO    Inepro Metering Pro 380\n JANITZA   Janitza meters\n MPM       Bernecker Engineering MPM3PM meters\n ORNO1P    ORNO WE-514 & WE-515\n ORNO1P504 ORNO WE-504\n ORNO3P    ORNO WE-516 & WE-517\n SBC       Saia Burgess Controls ALE3 meters\n SDM       Eastron SDM630/120/72DMv2\n SDM220    Eastron SDM220\n SDM230    Eastron SDM230\n SDM72     Eastron SDM72\n SEMTR     SolarEdge SE-MTR-3Y\n")),(0,i.kt)("p",null,"Alle davon abweichenden ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," werden als Ger\xe4t vom Typ ",(0,i.kt)("em",{parentName:"p"},"SunSpec")," behandelt."),(0,i.kt)("p",null,"Verwende ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," um den Wert der vom Ger\xe4t gelesen werden soll zu definieren. Alle unterst\xfctzten Werte sind auf ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd/blob/master/meters/measurements.go#L28"},"MBMD")," voreingestellt."),(0,i.kt)("p",null,"Im Falle eines ",(0,i.kt)("em",{parentName:"p"},"SunSpec"),"-kompatiblen Wechselrichters oder Z\xe4hlers werden die zu lesenden Werte in der Form ",(0,i.kt)("inlineCode",{parentName:"p"},"model:[block:]point")," nach der ",(0,i.kt)("em",{parentName:"p"},"SunSpec"),"-Definition angegeben. Zum Beispiel wird die DC-Leistung auf dem zweiten String eines dreiphasigen PV-Wechselrichters (enspricht SunSpec Model 103) wie folgt abgefragt: ",(0,i.kt)("inlineCode",{parentName:"p"},"value: 103:2:W"),"."),(0,i.kt)("p",null,"Das Ger\xe4te-",(0,i.kt)("inlineCode",{parentName:"p"},"model")," und die Slave ID ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," sind immer erforderlich:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\n...\nmodel: sdm\nvalue: Power\nscale: -1 # floating point factor applied to result, e.g. for kW to W conversion\n")),(0,i.kt)("h2",{id:"manuelle-konfiguration"},"Manuelle Konfiguration"),(0,i.kt)("p",null,"Falls das Modbus-Ger\xe4t nicht direkt unterst\xfctzt wird oder von den vordefinierten Modellen abweichende Werte gelesen oder geschrieben werden sollen, k\xf6nnen die Modbus Register auch vollst\xe4ndig manuell konfiguriert werden:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"source: modbus\n...\nregister:\n  address: 40070\n  type: holding # holding or input\n  decode: int32 # int16|32|64, uint16|32|64, float32|64 and u|int32s + float32s\nscale: -1.0 # floating point factor applied to result, e.g. for kW to W conversion\ntimeout: 2s # timeout, without unit in ns\n")),(0,i.kt)("p",null,"Bei den ",(0,i.kt)("inlineCode",{parentName:"p"},"int32s/uint32s")," Dekodierungen wird die Wortreihenfolge vertauscht und sind z.B. bei E3/DC Ger\xe4ten n\xfctzlich."),(0,i.kt)("p",null,"Um ein Regsiter zu schreiben wird ",(0,i.kt)("inlineCode",{parentName:"p"},"type: writesingle")," verwendet, welches ein einzelnes 16bit Register (entweder ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),") schreibt. Die Kodierung ist hier immer ",(0,i.kt)("inlineCode",{parentName:"p"},"uint16"),"."))}c.isMDXComponent=!0}}]);