"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[441],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(t),p=i,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||r;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8288:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={sidebar_position:2},s="Branching standard",c={unversionedId:"contributing/branching-standard",id:"contributing/branching-standard",isDocsHomePage:!1,title:"Branching standard",description:"Make sure you have read How to contribute first.",source:"@site/docs/contributing/branching-standard.md",sourceDirName:"contributing",slug:"/contributing/branching-standard",permalink:"/kubernetes-dbaas/docs/contributing/branching-standard",editUrl:"https://github.com/bedag/kubernetes-dbaas/edit/main/website/docs/contributing/branching-standard.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to contribute",permalink:"/kubernetes-dbaas/docs/contributing/how-to-contribute"},next:{title:"Architecture",permalink:"/kubernetes-dbaas/docs/contributing/architecture"}},d=[{value:"Quick legend",id:"quick-legend",children:[]},{value:"Main branches",id:"main-branches",children:[]},{value:"Supporting branches",id:"supporting-branches",children:[{value:"Feature branches",id:"feature-branches",children:[]},{value:"Bug branches",id:"bug-branches",children:[]},{value:"Hotfix Branches",id:"hotfix-branches",children:[]}]},{value:"Additional information",id:"additional-information",children:[]}],u={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"branching-standard"},"Branching standard"),(0,r.kt)("p",null,"Make sure you have read ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/how-to-contribute"},"How to contribute")," first."),(0,r.kt)("h2",{id:"quick-legend"},"Quick legend"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Instance"),(0,r.kt)("th",null,"Branch"),(0,r.kt)("th",null,"Description, Instructions, Notes."))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Stable"),(0,r.kt)("td",null,"stable"),(0,r.kt)("td",null,"Accepts merges from Working and Hotfixes.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Working"),(0,r.kt)("td",null,"main"),(0,r.kt)("td",null,"Accepts merges from Features/Issues and Hotfixes.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Features"),(0,r.kt)("td",null,"topic/*"),(0,r.kt)("td",null,"Always branch off HEAD of Working.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Bug fixes"),(0,r.kt)("td",null,"bugfix/*"),(0,r.kt)("td",null,"Always branch off HEAD of Working.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Hotfix"),(0,r.kt)("td",null,"hotfix/*"),(0,r.kt)("td",null,"Always branch off Stable."),"."))),(0,r.kt)("h2",{id:"main-branches"},"Main branches"),(0,r.kt)("p",null,"The main repository will always hold two evergreen branches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stable"))),(0,r.kt)("p",null,"The main branch should be considered ",(0,r.kt)("inlineCode",{parentName:"p"},"origin/main")," and will be the main branch where the source code of ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," always\nreflects a state with the latest delivered development changes for the next release. As a developer, you will be\nbranching and merging from ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("p",null,"Consider ",(0,r.kt)("inlineCode",{parentName:"p"},"origin/stable")," to always represent the latest code deployed to production. During day to day development,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," branch will not be interacted with."),(0,r.kt)("p",null,"When the source code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch is stable and has been deployed, all the changes will be merged into ",(0,r.kt)("inlineCode",{parentName:"p"},"stable"),"\nand tagged with a release number. Tagging and releasing is explained in detail in ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/ci"},"CI pipeline"),"."),(0,r.kt)("p",null,"Squash and rebase as desired; but strive to present a consistent and descriptive commit history when doing so."),(0,r.kt)("p",null,"Do not fast-forward commits to the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch; make sure to create a commit with ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-ff")," during merge."),(0,r.kt)("h2",{id:"supporting-branches"},"Supporting branches"),(0,r.kt)("p",null,"Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist\nin quickly fixing live production problems. Unlike the main branches, these branches always have a limited lifetime,\nsince they will be removed eventually."),(0,r.kt)("p",null,"The different types of supporting branches we use are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feature branches"),(0,r.kt)("li",{parentName:"ul"},"Bug branches"),(0,r.kt)("li",{parentName:"ul"},"Hotfix branches")),(0,r.kt)("h3",{id:"feature-branches"},"Feature branches"),(0,r.kt)("p",null,"No matter when the feature branch will be finished, it will always be merged back into\nthe main branch."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must branch from: ",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"Must merge back into: ",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"Branch naming convention: ",(0,r.kt)("inlineCode",{parentName:"li"},"topic/<short descriptive name>"))),(0,r.kt)("p",null,"Periodically, changes made to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," (if any) should be merged back into your feature branch."),(0,r.kt)("h3",{id:"bug-branches"},"Bug branches"),(0,r.kt)("p",null,"Bug branches differ have the same lifecycle of feature branches. Bug branches will be created when there is a bug\nthat should be fixed and merged into the next release. For that reason, a bug branch typically will not last longer\nthan one deployment cycle (where a new release is produced). No matter when the bug branch will be finished,\nit will always be merged back into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must branch from: ",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"Must merge back into: ",(0,r.kt)("inlineCode",{parentName:"li"},"main")),(0,r.kt)("li",{parentName:"ul"},"Branch naming convention: ",(0,r.kt)("inlineCode",{parentName:"li"},"bugfix/<short descriptive name>"))),(0,r.kt)("p",null,"Periodically, changes made to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," (if any) should be merged back into your bug branch."),(0,r.kt)("h3",{id:"hotfix-branches"},"Hotfix Branches"),(0,r.kt)("p",null,"A hotfix branch comes from the need to act immediately upon an undesired state of a live release version.\nAdditionally, because of the urgency, a hotfix is not required to be pushed during a scheduled release.\nDue to these requirements, a hotfix branch is always branched from a tagged ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," branch. This is done\nfor two reasons:"),(0,r.kt)("p",null,"First, development on the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch can continue while the hotfix is being addressed. Second, a tagged ",(0,r.kt)("inlineCode",{parentName:"p"},"stable"),"\nbranch still represents what is in production. At the point in time when a hotfix is needed, there could have been\nmultiple commits to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," which would then no longer represent production."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must branch from: tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")),(0,r.kt)("li",{parentName:"ul"},"Must merge back into: ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stable")),(0,r.kt)("li",{parentName:"ul"},"Branch naming convention: ",(0,r.kt)("inlineCode",{parentName:"li"},"hotfix/<short descriptive name>"))),(0,r.kt)("h4",{id:"working-with-a-hotfix-branch"},"Working with a hotfix branch"),(0,r.kt)("p",null,"When development on the hotfix is complete, a maintainer should merge changes into ",(0,r.kt)("inlineCode",{parentName:"p"},"stable")," and then the patch version\nbumped (following semantic versioning)."),(0,r.kt)("p",null,"Merge changes into ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," so not to lose the hotfix and then delete the remote hotfix branch."),(0,r.kt)("h2",{id:"additional-information"},"Additional information"),(0,r.kt)("p",null,"The branching standard was based on ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/digitaljhelms/4287848"},"this gist"),"."))}h.isMDXComponent=!0}}]);