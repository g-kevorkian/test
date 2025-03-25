"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[1372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},26777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/",sidebar_position:1},i="OVERVIEW",l={unversionedId:"overview",id:"overview",title:"OVERVIEW",description:"Develop a multi-tenant Software as a Service application in SAP BTP using CAP",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/test/@171132206_g-kevorkian-local-pr/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Gabriel Kevorkian",lastUpdatedAt:1742906617,formattedLastUpdatedAt:"Mar 25, 2025",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"PROJECT PANEL",permalink:"/test/@171132206_g-kevorkian-local-pr/category/project-panel"}},p={},s=[{value:"Develop a multi-tenant Software as a Service application in SAP BTP using CAP",id:"develop-a-multi-tenant-software-as-a-service-application-in-sap-btp-using-cap",level:2},{value:"Description",id:"description",level:2},{value:"Content",id:"content",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Basic Version",id:"basic-version",level:3},{value:"Advanced Features",id:"advanced-features",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"How to obtain support",id:"how-to-obtain-support",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"OVERVIEW"),(0,r.kt)("h2",{id:"develop-a-multi-tenant-software-as-a-service-application-in-sap-btp-using-cap"},"Develop a multi-tenant Software as a Service application in SAP BTP using CAP"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.reuse.software/info/github.com/SAP-samples/btp-kyma-cap-multitenant-susaas"},(0,r.kt)("img",{parentName:"a",src:"https://api.reuse.software/badge/github.com/SAP-samples/btp-kyma-cap-multitenant-susaas",alt:"REUSE status"}))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Sustainable SaaS (SusaaS)")," sample application has been built in a partner collaboration to help interested developers, partners, and customers in developing multitenant Software as a Service applications using CAP and deploying them to the SAP Business Technology Platform (SAP BTP). For this use-case, the ",(0,r.kt)("strong",{parentName:"p"},"Kyma Runtime")," was chosen. Still, you can also develop similar SaaS applications in other runtimes like ",(0,r.kt)("strong",{parentName:"p"},"Cloud Foundry")," or the SAP BTP ",(0,r.kt)("strong",{parentName:"p"},"ABAP environment"),"."),(0,r.kt)("p",null,"The example focuses on using standard frameworks and SAP BTP services for developing, deploying, and monitoring the solution like the Cloud Application Programming Model (CAP), SAP API Management, Alert Notification, and many more. "),(0,r.kt)("p",null,"The sample application has a focus on the topic of sustainability and is therefore called ",(0,r.kt)("strong",{parentName:"p"},"Sustainable SaaS")," (SuSaaS) app. It allows customers (",(0,r.kt)("strong",{parentName:"p"},"Consumer Tenants"),") of the SaaS application to extend their SAP solutions like S/4HANA with additional features developed by the SaaS vendor (",(0,r.kt)("strong",{parentName:"p"},"Provider"),"). "),(0,r.kt)("p",null,"Due to the technical and theoretical complexity of the topic, the sample application shall not be seen or used in any kind for productive scenarios. It is supposed to present ideas and approaches for putting your scenario into practice. Our goal is to cover as many topics as we can, but not in the greatest depth that might justify productive usability.  "),(0,r.kt)("p",null,"Below you can find a solution architecture diagram of the sample application. As you can see, the app contains a lot of services and tools which you will use in this tutorial (click to enlarge)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&lt;img src=&quot; docs/project-panel/4-expert/0-introduction-expert-features/images/App_Architecture_Expert.png&quot; width=&quot;600&quot; /&gt;",src:a(408).Z,width:"2686",height:"1368"})),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"To get started, we recommend to ",(0,r.kt)("strong",{parentName:"p"},"Discover")," some basic skills and learnings first. The following parts of the documentation will introduce you to the basics of this scenario, the concepts of multitenancy, and Software as a Service applications. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/discover-tutorial-target/"},"Discover the tutorial target")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/learn-basics-btp-kyma-cap/"},"Basics of SAP BTP, Kyma and CAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/partners-sap-btp-ecosystem/"},"Partners in SAP BTP ecosystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/get-idea-saas-applications/"},"Get an idea of SaaS applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/understand-btp-multitenancy/"},"Understand SAP BTP multitenancy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/discover/whats-new/"},"What's New"))),(0,r.kt)("p",null,"Continue your journey and deploy the ",(0,r.kt)("strong",{parentName:"p"},"Basic Version")," of the SaaS sample application to your SAP BTP Kyma environment, after preparing your Provider Subaccount by assigning the required entitlements. Learn about the different components used in the comprehensive SaaS sample app running in your environment now and subscribe a first Consumer Tenant. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/introduction-basic-version/"},"Introduction of the Basic Version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/understand-repo-structure/"},"Understand the repository structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/prepare-provider-subaccount/"},"Prepare the Provider Subaccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/build-your-docker-images/"},"Build your Docker images")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/deploy-saas-application/"},"Deploy the SaaS application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/subscribe-consumer-subaccount/"},"Subscribe a Consumer Subaccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/push-data-to-saas-api/"},"Push data to the SaaS API"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/test-the-application/"},"Test the SaaS application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/kyma-resources-helm/"},"Discover Helm and Kyma Resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/explore-the-components/"},"Explore the application components"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/unsubscribe-consumer-subaccount/"},"Optional - Unsubscribe Consumer Subaccounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/basic/undeploy-saas-application/"},"Optional - Undeploy the SaaS application"))),(0,r.kt)("p",null," Once you successfully deployed the Basic features of the SaaS sample application to your Kyma Cluster, feel free to enhance it with more features in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced Version"),". This includes for example a SAP API Management integration to monitor and manage your SaaS API endpoints or SAP Identity Authentication to provide a central user management without relying on SAP ID service. Furthermore, you will learn and see a sample of how to integrate a backend system like SAP S/4HANA from a SaaS Consumer perspective. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/introduction-advanced-version/"},"Introduction of the Advanced Version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/understand-repo-details/"},"Understand the repository details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/prepare-provider-subaccount/"},"Prepare the Provider Subaccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/central-user-management-ias/"},"Central user management with SAP IAS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/push-data-s4hana-system/"},"Push data from SAP S/4HANA system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/advanced/integrate-sap-api-management/"},"Integrate with SAP API Management"))),(0,r.kt)("p",null,"After adding some or all of the advanced features, the following ",(0,r.kt)("strong",{parentName:"p"},"Expert Features")," contain a variety of different topics, which will make your application and life as a SaaS developer even more convenient. You will learn about management and backup of your Tenant database containers, multi-region deployments of SaaS applications and how to tackle topics like Custom Domain usage. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")),(0,r.kt)("p",{parentName:"admonition"},"The Expert Features are Work-in-Progress. The code and documentation are subject to change. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/introduction-expert-features/"},"Introduction of the Expert Features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/feature-toggles/"},"SaaS Feature Toggles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/consumer-extensibility/"},"SaaS Consumer Extensibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/hdi-container-administration/"},"HDI container administration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/local-hybrid-development/"},"How to do local/hybrid development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/manage-tenant-containers/"},"Manage Tenant database containers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/backup-database-containers/"},"Backup database containers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/update-tenant-containers/"},"Update Tenant database containers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/custom-domain-usage/"},"Setup custom domain usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/custom-domain-for-ias/"},"Custom domain for SAP IAS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/"},"Integrate a consumer's IdP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/deploy-multiple-regions/"},"Deploy to multiple regions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/send-emails-graph-api/"},"Send email using Microsoft Graph API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/multiple-hana-cloud/"},"Multiple SAP HANA Cloud instances"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"If not yet done, for this sample application we recommend to set up a ",(0,r.kt)("strong",{parentName:"p"},"Pay-As-You-Go (PAYG)")," or ",(0,r.kt)("strong",{parentName:"p"},"CPEA")," account and use the mentioned ",(0,r.kt)("strong",{parentName:"p"},"Free (Tier) service plans"),". A tutorial how to setup a PAYG account (allowing you to use all Free Tier service plans) can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/btp-free-tier-account.html"},"Tutorial Navigator"),". "),(0,r.kt)("h3",{id:"basic-version"},"Basic Version"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Basic Version")," of the sample application requires the following set of SAP BTP entitlements in the Provider Subaccount and can be done using ",(0,r.kt)("strong",{parentName:"p"},"Free (Tier) service plans")," of ",(0,r.kt)("strong",{parentName:"p"},"PAYG")," and ",(0,r.kt)("strong",{parentName:"p"},"CPEA")," accounts."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"The Basic Version of the SaaS application can also be deployed to Kyma environments in ",(0,r.kt)("strong",{parentName:"p"},"Trial")," accounts, although we recommend to use one of the account types mentioned above. Please make sure to choose the ",(0,r.kt)("strong",{parentName:"p"},"us10")," region to use SAP HANA Cloud in this case. ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Free (Tier)  Plans"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/alert-notification?region=all"},"SAP Alert Notification service for SAP BTP")),(0,r.kt)("td",{parentName:"tr",align:null},"Free / ",(0,r.kt)("em",{parentName:"td"},"(Trial: Lite)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/application-logging-service/?region=all"},"SAP Application Logging Service")),(0,r.kt)("td",{parentName:"tr",align:null},"Lite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/authorization-and-trust-management-service?region=all&tab=feature"},"SAP Authorization and Trust Management Service")),(0,r.kt)("td",{parentName:"tr",align:null},"Broker   Application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/kyma-runtime?region=all&tab=feature"},"SAP BTP, Kyma Runtime")),(0,r.kt)("td",{parentName:"tr",align:null},"Free / ",(0,r.kt)("em",{parentName:"td"},"(Trial: Trial)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/cloud-foundry-runtime?region=all"},"SAP BTP, Cloud Foundry Runtime"),"   (Required in ",(0,r.kt)("strong",{parentName:"td"},"Trial")," only!)"),(0,r.kt)("td",{parentName:"tr",align:null},"(Trial: Standard)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/cloud-management-service/?region=all"},"SAP Cloud Management Service for SAP BTP")),(0,r.kt)("td",{parentName:"tr",align:null},"Central")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/destination?service_plan=lite&region=all&commercialModel=cloud"},"Destination Service")),(0,r.kt)("td",{parentName:"tr",align:null},"Lite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/html5-application-repository-service?region=all"},"SAP HTML5 Application Repository Service for SAP BTP")),(0,r.kt)("td",{parentName:"tr",align:null},"App-host  App-runtime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/saas-provisioning-service?service_plan=application&region=all&commercialModel=cloud"},"SAP Software-as-a-Service Provisioning service")),(0,r.kt)("td",{parentName:"tr",align:null},"Application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/sap-hana-cloud?tab=customerreference&region=all"},"SAP HANA Cloud")),(0,r.kt)("td",{parentName:"tr",align:null},"hana-free ",(0,r.kt)("em",{parentName:"td"},"(Trial: HANA)")," tools ",(0,r.kt)("em",{parentName:"td"},"(Trial: not available!)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://help.sap.com/docs/SAP_HANA_PLATFORM/3823b0f33420468ba5f1cf7f59bd6bd9/e28abca91a004683845805efc2bf967c.html?version=2.0.04&locale=en-US"},"SAP HANA Schemas & HDI Containers")),(0,r.kt)("td",{parentName:"tr",align:null},"hdi-shared")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/service-manager/?region=all"},"SAP Service Manager")),(0,r.kt)("td",{parentName:"tr",align:null},"Container   Subaccount-Admin")))),(0,r.kt)("h3",{id:"advanced-features"},"Advanced Features"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Advanced Features")," require some additional services and software components which are listed below. Please note that the ",(0,r.kt)("strong",{parentName:"p"},"SAP Identity Authentication Service")," is only available in ",(0,r.kt)("strong",{parentName:"p"},"Pay-As-You-Go (PAYG)")," and ",(0,r.kt)("strong",{parentName:"p"},"CPEA")," accounts."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,r.kt)("p",{parentName:"admonition"},"The SAP Identity Authentication service Integration cannot be conducted to Trial accounts!")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"Free (Tier)  Plans"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/integration-suite?region=all"},"SAP Integration Suite"),"  or SAP API Management"),(0,r.kt)("td",{parentName:"tr",align:null},"Free (*)   ","\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/integration-suite?region=all"},"Cloud Identity Services")),(0,r.kt)("td",{parentName:"tr",align:null},"Application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discovery-center.cloud.sap/serviceCatalog/identity-authentication?region=all&tab=feature"},"SAP Identity Authentication")),(0,r.kt)("td",{parentName:"tr",align:null},"(**)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAP S/4HANA 2021 (or newer)"),(0,r.kt)("td",{parentName:"tr",align:null},"(***)")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"*")," ",(0,r.kt)("strong",{parentName:"p"},"SAP Integration Suite")," - The ",(0,r.kt)("strong",{parentName:"p"},"free service plan")," is usable for 90 days only. Your tenant will be decommissioned after 90 days and you need to set up a new tenant if you wish to do further validations. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"*","*")," ",(0,r.kt)("strong",{parentName:"p"},"SAP Identity Authentication")," "),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"When signing up for a PAYG or CPEA account, you're entitled for a free test and productive SAP Identity Authentication Service tenant. Any further tenant can be licensed as ",(0,r.kt)("strong",{parentName:"p"},"Additional Tenant")," and will be charged according to your account type. Please also check the official SAP Help documentation (",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/93160ebd2dcb40e98aadcbb9a970f2b9.html?locale=en-US#loio93160ebd2dcb40e98aadcbb9a970f2b9__licensing_section"},"click here"),") and the following blog post (",(0,r.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2021/10/26/is-sap-cloud-identity-services-for-free/"},"click here"),") for further information. ")),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Using the ",(0,r.kt)("strong",{parentName:"p"},"Default (Application)")," plan of the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Identity Services")," offering, you can create a new SAP Identity Authentication Service if required. Please check for potentially existing tenants first, to make sure you are sticking to the free service offering limits."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"*","*","*")," ",(0,r.kt)("strong",{parentName:"p"},"SAP S/4HANA")," - An SAP S/4HANA system is required if you want to test the automated data push feature from an existing SAP On-Premise solution. While we recommend to use at least the SAP S/4HANA 2021 release, with a bit of coding effort you should be able to also integrate older releases. This guide assumes you have access to an 2021 release. Feel free to check out the SAP Cloud Appliance Library (",(0,r.kt)("a",{parentName:"p",href:"https://cal.sap.com/"},"https://cal.sap.com/"),") to get yourself a free test license. ")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automated Credential Rotation (Workaround available - 2023/06/09)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Problem"),": Users are facing a callback authentication error after successful login via SAP IAS as part of the One-Domain concept. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Issue"),": Activating the automated credential rotation of the SAP BTP Service Operator renews the X.509 certificate of the respective SAP IAS service bindings. As the Application Router caches the binding details for performance reasons, the cached X.509 certificate is not valid anymore after rotation. This results in an authentication error between Application Router and SAP IAS. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workaround"),": A restart of the Application Router after credential rotation will solve this issue and the latest X.509 certificate is being cached. This restart can be automated in a Kubernetes/Kyma CronJob, starting a new Deployment rollout according to your credential rotation cycle. You can find an example incl. roles and service accounts in the respective Expert Features (",(0,r.kt)("a",{parentName:"li",href:"docs/project-panel/4-expert/onboard-automation-domain/code/deployment-restart.yaml"},"click here"),"). Combined with an external Redis cache for Application Router session management, downtimes can be minimized or completely mitigated! Make sure to have a sufficient overlap of both, the old and new X.509 certificate (",(0,r.kt)("em",{parentName:"li"},"rotatedBindingTTL: 24h")," & ",(0,r.kt)("em",{parentName:"li"},"rotationFrequency: 48h"),"), so the cached credentials are still valid until the restart has happened!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solution"),": Issue has been addressed and a potential notification mechanism might trigger an automated update of the Application Router cache in the future (subject to change). "))),(0,r.kt)("li",{parentName:"ul"},"Consumer extension API issue (Workaround available - 2022/12/19)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Problem"),": Applying a Consumer extension currently results in the Push API not being usable by the extended Tenant anymore. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Issue"),": The current implementation has issues to read and process the CSN file of the extended SaaS CAP service. This service serves as a base for the API CAP service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workaround"),": Extensibility has been temporarily disabled for the CAP API Service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Solution"),": Issues has been addressed with the CAP product management and potential solutions will be worked on. ")))),(0,r.kt)("h2",{id:"how-to-obtain-support"},"How to obtain support"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/btp-kyma-cap-multitenant-susaas/issues"},"Create an issue")," in this repository if you find a bug or have questions about the content."),(0,r.kt)("p",null,"For additional support, ",(0,r.kt)("a",{parentName:"p",href:"https://answers.sap.com/questions/ask.html"},"ask a question in SAP Community"),"."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"If you wish to contribute code or offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request for this project. This happens in an automated fashion during the submission process. SAP uses ",(0,r.kt)("a",{parentName:"p",href:"https://developercertificate.org/"},"the standard DCO text of the Linux Foundation"),"."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the ",(0,r.kt)("a",{parentName:"p",href:"LICENSE"},"LICENSE")," file."))}m.isMDXComponent=!0},408:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/App_Architecture_Expert-b2b19061f107b465d03a4fc64bfc049b.png"}}]);