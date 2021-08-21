"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},483:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="Operations",p={unversionedId:"dbms-configuration/operations",id:"dbms-configuration/operations",isDocsHomePage:!1,title:"Operations",description:"Supported operations",source:"@site/docs/dbms-configuration/operations.md",sourceDirName:"dbms-configuration",slug:"/dbms-configuration/operations",permalink:"/kubernetes-dbaas/docs/dbms-configuration/operations",editUrl:"https://github.com/bedag/kubernetes-dbaas/edit/main/website/docs/dbms-configuration/operations.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/kubernetes-dbaas/docs/dbms-configuration/prerequisites"},next:{title:"Samples",permalink:"/kubernetes-dbaas/docs/dbms-configuration/samples"}},d=[{value:"Supported operations",id:"supported-operations",children:[]},{value:"Design specification",id:"design-specification",children:[{value:"Create",id:"create",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Rotate",id:"rotate",children:[]}]},{value:"Notes",id:"notes",children:[{value:"MySQL/MariaDB",id:"mysqlmariadb",children:[]}]}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"operations"},"Operations"),(0,i.kt)("h2",{id:"supported-operations"},"Supported operations"),(0,i.kt)("p",null,"The Operator supports the following operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database instance creation"),(0,i.kt)("li",{parentName:"ul"},"Database instance deletion"),(0,i.kt)("li",{parentName:"ul"},"Database instance credential rotation")),(0,i.kt)("p",null,"Operations are implemented on database management systems using their native technique of creating stored procedures."),(0,i.kt)("p",null,"Each operation maps to a single stored procedure loaded in advance into the targeted DBMS."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible to have more than one\nstored procedure for each operation, if required (e.g. one for testing and one for production usage). "))),(0,i.kt)("h2",{id:"design-specification"},"Design specification"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"inputs, output result and body"),' of a stored procedure are implemented by\ncomplying to a minimal set of guidelines, i.e. the "',(0,i.kt)("strong",{parentName:"p"},"design specification"),'". This will allow the Operator to rely on the\nstored procedures for the actual implementation of the various operations, calling them whenever needed.\nSystem administrators will then be able to map inputs and outputs of the stored procedures so that the Operator will\nknow how to handle them.'),(0,i.kt)("p",null,"Stored procedures should be properly documented inside your organization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name of the stored procedure as it is stored in its DBMS (case-sensitive)."),(0,i.kt)("li",{parentName:"ul"},"Name of each input parameter (see also ",(0,i.kt)("a",{parentName:"li",href:"#Notes"},"Notes"),")."),(0,i.kt)("li",{parentName:"ul"},"List of the resulting outputs and their description.")),(0,i.kt)("p",null,"Input parameters can be supplied directly by end-users or by the infrastructure as configured by system administrators.\nThere are no hard-coded input or output parameters."),(0,i.kt)("p",null,"Every input/output value is treated as a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"TEXT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"varchar"),"...)."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Operator can be configured to supply a unique ID to stored procedures. An ID will be bound to a particular database instance.\nMake sure to always specify an input parameter acting as ID. "))),(0,i.kt)("p",null,"Stored procedures that return data, will return a row set with at least two columns, named ",(0,i.kt)("strong",{parentName:"p"},"precisely"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),". "),(0,i.kt)("p",null,"Example of output result:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"port"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dbName"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lastRotation"),(0,i.kt)("td",{parentName:"tr",align:null},"<string",">")))),(0,i.kt)("p",null,"Errors should be returned using the built-in mechanism of the DBMS involved, e.g. using exceptions. If an exception is returned,\nthe Operator will re-execute the operation again using an exponential back-off strategy."),(0,i.kt)("p",null,"Operations should be designed as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence"},"idempotent")," (even though the Operator\nwill not call an operation if not needed)."),(0,i.kt)("h3",{id:"create"},"Create"),(0,i.kt)("p",null,"The create operation generates a database instance available to end-users. If the operation succeeds, it returns the connection\ndata needed in order to connect to and manipulate the newly provisioned database instance, along with\nadditional information if desired (e.g. timestamp of the latest credential rotation)."),(0,i.kt)("h4",{id:"caveat"},"Caveat"),(0,i.kt)("p",null,"As a rule, the create operation is called only during database creation, but it can be called twice with the same ID in\nthe case of data loss about Database resources on the Kubernetes cluster.\nOf course, passwords should be stored salted in hash form, so if the create operation is called again, it should\ncall ",(0,i.kt)("a",{parentName:"p",href:"#Rotate"},"Rotate")," internally and return the updated values.  Empty strings will overwrite previously filled strings.\nAll the key-value pairs returned with the first call must be returned."),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("p",null,"The delete operation deletes a database instance.\nThe operation will return nothing if the delete operation succeeded."),(0,i.kt)("h3",{id:"rotate"},"Rotate"),(0,i.kt)("p",null,"The rotate operation rotates the Database credentials and must returns the ",(0,i.kt)("strong",{parentName:"p"},"same")," keys as the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," procedure,\nwith updated credentials. Empty strings will overwrite previously filled strings."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("h3",{id:"mysqlmariadb"},"MySQL/MariaDB"),(0,i.kt)("p",null,"Unfortunately, MySQL/MariaDB do not support supplying input parameters by name, only by position. Thus, in this case,\nthe order of the parameters matter and should be documented carefully in order of appearance in the stored procedure."))}c.isMDXComponent=!0}}]);