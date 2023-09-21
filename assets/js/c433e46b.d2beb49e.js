"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[8248],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(4996);const o={id:"relay",title:"How to Run a Relay Node",sidebar_label:"Relay Node",description:"Learn how to run an Avail relay node.",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"operate/node/relay",id:"operate/node/relay",title:"How to Run a Relay Node",description:"Learn how to run an Avail relay node.",source:"@site/docs/operate/node/0060-relay-node.md",sourceDirName:"operate/node",slug:"/operate/node/relay",permalink:"/operate/node/relay",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/node/0060-relay-node.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1694884897,formattedLastUpdatedAt:"Sep 16, 2023",sidebarPosition:60,frontMatter:{id:"relay",title:"How to Run a Relay Node",sidebar_label:"Relay Node",description:"Learn how to run an Avail relay node.",keywords:["docs","avail","node","data availability","da"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Bootstrap Node",permalink:"/operate/node/bootstrap"},next:{title:"Become a Validator",permalink:"/category/become-a-validator"}},p={},c=[{value:"Step 1: Compile the Binary",id:"step-1-compile-the-binary",level:2},{value:"Step 2: Deploy the Binary",id:"step-2-deploy-the-binary",level:2},{value:"Step 3: Create and Edit the Configuration File",id:"step-3-create-and-edit-the-configuration-file",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides a step-by-step walkthrough for setting up a relay node, which can help resolve connectivity issues between network peers."),(0,r.kt)("admonition",{title:"Before you start",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Ensure that you meet the ",(0,r.kt)("a",{parentName:"strong",href:"/operate/system-requirements"},(0,r.kt)("ins",null,"system requirements")),"."))),(0,r.kt)("h2",{id:"step-1-compile-the-binary"},"Step 1: Compile the Binary"),(0,r.kt)("p",null,"Navigate to the project directory and compile the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd avail-light-relay                 \ncargo build --release                # Compile the project in release mode\n")),(0,r.kt)("p",null,"Upon successful compilation, the binary will be located at ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release/avail-light-relay"),"."),(0,r.kt)("h2",{id:"step-2-deploy-the-binary"},"Step 2: Deploy the Binary"),(0,r.kt)("p",null,"If you've compiled the binary locally, transfer it to your server using ",(0,r.kt)("inlineCode",{parentName:"p"},"scp")," or another secure method."),(0,r.kt)("h2",{id:"step-3-create-and-edit-the-configuration-file"},"Step 3: Create and Edit the Configuration File"),(0,r.kt)("p",null,"On your server, navigate to the directory where you've placed the binary. Create and edit a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch config.yaml                    # Create a new config.yaml file\nnano config.yaml                     # Open the file in a text editor\n")),(0,r.kt)("p",null,"To avoid conflicts between nodes, especially if they are running on the same machine or network, consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"libp2p_port"),": This could potentially cause a conflict if multiple nodes are running on the same machine and trying to bind to the same port. Each node on the same machine should have a unique port.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),": If this is used for cryptographic operations like signing messages, then using the same key across different nodes could be a security risk and could also lead to logical errors in the network operation."))),(0,r.kt)("p",null,"Use the following example configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"log_level: 'INFO'                    # Logging level\nlog_format_json: false               # Log format\nsecret_key: { seed: \"unique_seed\" }  # Secret key setting\nlibp2p_port: 39000                   # libp2p port\nlibp2p_identify_protocol: '/avail_kad/id/1.0.0'  # libp2p protocol\n")),(0,r.kt)("p",null,"For more advanced configurations, consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail-light-relay#config-reference"},(0,r.kt)("ins",null,"Configuration Reference")),"."))}u.isMDXComponent=!0}}]);