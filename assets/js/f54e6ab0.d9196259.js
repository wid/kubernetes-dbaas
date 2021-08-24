"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[373],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4340:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:3},s="Local development",p={unversionedId:"operator-deployment/development-deployment",id:"operator-deployment/development-deployment",isDocsHomePage:!1,title:"Local development",description:"You can try out the Operator on your local development machine and boot the Operator as a normal system process.",source:"@site/docs/operator-deployment/development-deployment.md",sourceDirName:"operator-deployment",slug:"/operator-deployment/development-deployment",permalink:"/kubernetes-dbaas/docs/operator-deployment/development-deployment",editUrl:"https://github.com/bedag/kubernetes-dbaas/edit/main/website/docs/operator-deployment/development-deployment.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vanilla",permalink:"/kubernetes-dbaas/docs/operator-deployment/vanilla-deployment"},next:{title:"Usage",permalink:"/kubernetes-dbaas/docs/usage"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"You can try out the Operator on your local development machine and boot the Operator as a normal system process. "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Go 1.16 ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"https://golang.org/doc/install")),(0,a.kt)("li",{parentName:"ul"},"Install kubectl v1.21+ ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"https://kubernetes.io/docs/tasks/tools/install-kubectl/")),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/prometheus-community/kube-prometheus-stack"},"kube-prometheus-stack")," v17.1.3 "),(0,a.kt)("li",{parentName:"ul"},"Install minikube v1.21+ ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"https://minikube.sigs.k8s.io/docs/start/")),(0,a.kt)("li",{parentName:"ul"},"Install the operator-sdk v1.6+ and its prerequisites: ",(0,a.kt)("a",{parentName:"li",href:"https://sdk.operatorframework.io/docs/installation/"},"https://sdk.operatorframework.io/docs/installation/")),(0,a.kt)("li",{parentName:"ul"},"Have the Operator configured with your endpoint list and DatabaseClasses.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the CRDs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make install\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install an example DatabaseClass")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f testdata/dbclass.yaml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the Operator as a local process")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'make run ARGS="--load-config=config/manager/controller_manager_config.yaml --enable-webhooks=false --leaderElection.leaderElect=false --debug=true"\n')))}m.isMDXComponent=!0}}]);