"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[177],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4527:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:4},l="Credential rotation",u={unversionedId:"operator-configuration/credential-rotation",id:"operator-configuration/credential-rotation",isDocsHomePage:!1,title:"Credential rotation",description:"To order a DBMS to regenerate the credentials for a Database resource, apply the following annotation to the Database resource:",source:"@site/docs/operator-configuration/credential-rotation.md",sourceDirName:"operator-configuration",slug:"/operator-configuration/credential-rotation",permalink:"/kubernetes-dbaas/docs/operator-configuration/credential-rotation",editUrl:"https://github.com/bedag/kubernetes-dbaas/edit/main/website/docs/operator-configuration/credential-rotation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DatabaseClass",permalink:"/kubernetes-dbaas/docs/operator-configuration/databaseclasses"},next:{title:"Logging & troubleshooting",permalink:"/kubernetes-dbaas/docs/operator-configuration/logging-monitoring"}},s=[],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"credential-rotation"},"Credential rotation"),(0,a.kt)("p",null,"To order a DBMS to regenerate the credentials for a Database resource, apply the following annotation to the Database resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'dbaas.bedag.ch/rotate: "true"\n')),(0,a.kt)("p",null,"The Operator will attempt to rotate the credentials immediately. The Operator will remove the annotation once the\noperation has completed successfully."),(0,a.kt)("p",null,"Credential rotation can be triggered also when a Secret resource generated during a create operation is deleted by the\nuser."))}d.isMDXComponent=!0}}]);