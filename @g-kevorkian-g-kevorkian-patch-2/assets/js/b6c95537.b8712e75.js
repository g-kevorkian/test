"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:9},i="Helm Charts and Kyma resources",s={unversionedId:"project-panel/basic/kyma-resources-helm/README",id:"project-panel/basic/kyma-resources-helm/README",title:"Helm Charts and Kyma resources",description:"While our next chapter will focus on the functional perspective of the different application components like Multitenancy in Application Router, this chapter will give you a deep-dive into the resources and technology used for the deployment of our sample scenario. For your convenience and a better structure, this chapter has been split up into three parts.",source:"@site/docs/project-panel/2-basic/8-kyma-resources-helm/README.md",sourceDirName:"project-panel/2-basic/8-kyma-resources-helm",slug:"/project-panel/basic/kyma-resources-helm/",permalink:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Test the application",permalink:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/test-the-application/"},next:{title:"Components",permalink:"/test/@g-kevorkian-g-kevorkian-patch-2/category/components"}},l={},p=[{value:"Helm Charts",id:"helm-charts",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Template Details",id:"template-details",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"helm-charts-and-kyma-resources"},"Helm Charts and Kyma resources"),(0,n.kt)("p",null,"While our next chapter will focus on the functional perspective of the different application components like Multitenancy in Application Router, this chapter will give you a deep-dive into the resources and technology used for the deployment of our sample scenario. For your convenience and a better structure, this chapter has been split up into three parts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#helm-charts-and-kyma-resources"},"Helm Charts and Kyma resources"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#helm-charts"},"Helm Charts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#resource-overview"},"Resource Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#template-details"},"Template Details"))))),(0,n.kt)("p",null,"While we could write books about Helm or the various Kyma and Kubernetes resources, the main purpose of this chapter is a different one. We want to provide you with an initial introduction to those highly relevant topics in relation to our sample application. Whereas tons online documentations provide comprehensive details on all the subjects covered by this chapter, we assume that a use case related context will provide you a much better understanding. Once you have tackled the basics, and have an idea what benefits the different Helm features as well as Kyma and Kubernetes resources provide, it will be much easier to deep-dive into the official docs and adapt things according to your own requirements. "),(0,n.kt)("p",null,"So let us get started with the fundamentals of the Deployment technology used for our sample scenario which is called ",(0,n.kt)("strong",{parentName:"p"},"Helm"),". "),(0,n.kt)("h2",{id:"helm-charts"},"Helm Charts"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/HelmCharts"},"Helm Charts")," documentation!")),(0,n.kt)("p",null,"While most SAP BTP developers are familiar with Cloud Foundry deployments using a Multitarget Application Deployment Descriptor (mta.yaml), in Kyma/Kubernetes things are a bit different. As within other Kubernetes environments, Kyma makes use of various yaml files to deploy the various application resources (like Deployments, Network Policies, Horizontal Pod Autoscalers, ...) to the Cluster. "),(0,n.kt)("p",null,"To support and ease this deployment process and creation of yaml files, we are using ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," in our project, which allows a simplified and template-based generation these manifests. Helm is the de-facto industry standard and the so-called Helm Charts (which can partly be generated using CAP standard features), simplify the definition of repeatable patterns and allow the usage of centrally defined variables and smart templating approaches. This reduces the overhead of creating dozens of yaml files manually for each and every Kubernetes resource. "),(0,n.kt)("p",null,"Furthermore, Helm allows you to deploy a whole application with multiple components (in our case defined in so-called Helm Subcharts), with just one single command. The sample applies for upgrades and undeployments. So if you are new to Helm, you should definitely check out the provided documentation, to get a very first initial idea. "),(0,n.kt)("p",null,"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/HelmCharts"},"Helm Charts")," documentation!"),(0,n.kt)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/ResourceOverview"},"Resource Overview")," documentation!")),(0,n.kt)("p",null,"The SAP BTP Kyma Runtime allows developers to use a variety of native Kubernetes resources but also adds several custom Kyma objects (like API Rules) to the available toolset. Additionally, our SaaS sample application is relying on a number of so-called Istio resources, used for setting up a so-called service mesh in our Kyma Cluster. Check out the linked documentation, to get an idea what kind of resources are being used in our scenario. The provided introduction will help you understand the relation between all those resources and the sample application workloads running in your Kyma Cluster. "),(0,n.kt)("p",null,"The following visualization shows a range of resources used by our SaaS application, and briefly summarizes the provided capabilities in context our sample use case. "),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"&lt;img src=&quot;./images/KymaObjectsGeneral.png&quot; width=&quot;600&quot;/&gt;",src:a(10329).Z,width:"1516",height:"820"})),(0,n.kt)("p",null,"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/ResourceOverview"},"Resource Overview")," documentation!"),(0,n.kt)("h2",{id:"template-details"},"Template Details"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,n.kt)("p",{parentName:"admonition"},"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/TemplateDetails"},"Template Details")," documentation!")),(0,n.kt)("p",null,"Once you have gained some experience with Helm and you learned about the various Kyma and Kubernetes objects used in our sample project, feel free to join us on a little deep dive. We spared no effort and provided you an extensive overview, describing the purpose of the most relevant Helm templates used in this sample project. While most of the templates are very similar in the respective Helm Subcharts (like Authorization Policies or Service Bindings), some of the templates (or actually the resulting Kubernetes resources) have a very special job to fulfill. "),(0,n.kt)("p",null,"Therefore, feel free to follow along and to learn more about selected Helm templates, providing you with an even better understanding of what is going on under the hood, once you deployed the sample application to your Kyma Cluster. "),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"&lt;img src=&quot;./images/ResourceDetailsArch.png&quot; width=&quot;600&quot;/&gt;",src:a(40628).Z,width:"1716",height:"986"})),(0,n.kt)("p",null,"Find more details in the ",(0,n.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-g-kevorkian-patch-2/project-panel/basic/kyma-resources-helm/components/TemplateDetails"},"Template Details")," documentation!"))}m.isMDXComponent=!0},10329:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/KymaObjectsGeneral-21d4e7fc56d23fefdb216545e99a0bc9.png"},40628:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ResourceDetailsArch-413621d553782d75563c31cf33071cfd.png"}}]);