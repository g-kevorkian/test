"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[5416],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},l="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),l=c(a),u=i,m=l["".concat(p,".").concat(u)]||l[u]||g[u]||r;return a?n.createElement(m,o(o({ref:e},d),{},{components:a})):n.createElement(m,o({ref:e},d))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[l]="string"==typeof t?t:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44853:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:9},o="Integration of Consumer IdPs",s={unversionedId:"project-panel/expert/integrate-consumers-idp/README",id:"project-panel/expert/integrate-consumers-idp/README",title:"Integration of Consumer IdPs",description:"In this part of the Expert Features you will learn how to integrate Consumer IdPs (Identity Providers) like Azure Active Directory. As we did not explicitly set up a dedicated Consumer IdP in our SaaS sample scenario, in this chapter we will just briefly highlight some possible approaches.",source:"@site/docs/project-panel/4-expert/integrate-consumers-idp/README.md",sourceDirName:"project-panel/4-expert/integrate-consumers-idp",slug:"/project-panel/expert/integrate-consumers-idp/",permalink:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"HDI Container Administration",permalink:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/hdi-container-administration/"},next:{title:"Local and hybrid development",permalink:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/local-hybrid-development/"}},p={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Provider-driven integration",id:"2-provider-driven-integration",level:2},{value:"2a. Central SAP IAS tenant",id:"2a-central-sap-ias-tenant",level:3},{value:"2b. Consumer SAP IAS tenant",id:"2b-consumer-sap-ias-tenant",level:3},{value:"3. Consumer-driven integration",id:"3-consumer-driven-integration",level:2},{value:"3a. Integration with SAP IAS",id:"3a-integration-with-sap-ias",level:3},{value:"3b. Integration with SAP XSUAA",id:"3b-integration-with-sap-xsuaa",level:3},{value:"4. Further Information",id:"4-further-information",level:2}],d={toc:c},l="wrapper";function g(t){let{components:e,...r}=t;return(0,i.kt)(l,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-of-consumer-idps"},"Integration of Consumer IdPs"),(0,i.kt)("p",null,"In this part of the ",(0,i.kt)("strong",{parentName:"p"},"Expert Features")," you will learn how to integrate Consumer IdPs (Identity Providers) like Azure Active Directory. As we did not explicitly set up a dedicated Consumer IdP in our SaaS sample scenario, in this chapter we will just briefly highlight some possible approaches. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#integration-of-consumer-idps"},"Integration of Consumer IdPs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-introduction"},"1. Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-Provider-driven-integration"},"2. Provider-driven integration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2a-central-sap-ias-tenant"},"2a. Central SAP IAS tenant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2b-consumer-sap-ias-tenant"},"2b. Consumer SAP IAS tenant")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-consumer-driven-integration"},"3. Consumer-driven integration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3a-integration-with-sap-ias"},"3a. Integration with SAP IAS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3b-integration-with-sap-xsuaa"},"3b. Integration with SAP XSUAA")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-further-information"},"4. Further Information"))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"We highly appreciate your feedback/input/problems/issues in case you try to set up such a scenario yourself. ")),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"In a SaaS scenario with just a handful of users, the In-App User Management is a very convenient access management solution. Nevertheless, things will change when your SaaS application is used by an increasing number of users or when acting in a B2B context. "),(0,i.kt)("p",null,"Most of your SaaS consumers (especially in B2B scenarios) will have their own user base managed by respective Identity Providers (like Azure Active Directory). Using the In-App User Management would cause a lot of double maintenance. Therefore, your SaaS consumers will probably ask for options to integrate their own Identity Providers with your SaaS solution. "),(0,i.kt)("p",null,"In the following, we will discuss different approaches to how such an integration can be achieved. These scenarios are also depicted in the following architecture diagram. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/CIAS_Architecture.png&quot; width=&quot;500&quot; /&gt;",src:a(27611).Z,width:"2686",height:"1904"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"All approaches will require coding changes in the application logic, as the current implementation relies on the In-App User Management to create users in SAP IAS and/or Shadow Users in SAP XSUAA. ")),(0,i.kt)("h2",{id:"2-provider-driven-integration"},"2. Provider-driven integration"),(0,i.kt)("p",null,"Provider-driven integrations (as we call it in this sample - no official term) are based on consumers wishing to use their Identity Provider with an SAP IAS tenant owned by the SaaS Provider. This is useful for scenarios in which a Consumer doesn't have an SAP BTP Global Account or hesitates additional maintenance effort. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important")," - The ",(0,i.kt)("strong",{parentName:"p"},"Provider-driven integration")," approaches will make the existing In-App User Management obsolete. Make sure to understand the implications of integrating Consumer IdPs and adapt the application logic accordingly!"),(0,i.kt)("h3",{id:"2a-central-sap-ias-tenant"},"2a. Central SAP IAS tenant"),(0,i.kt)("p",null,"A convenient integration pattern makes use of so-called ",(0,i.kt)("strong",{parentName:"p"},"Corporate Identity Providers")," in the central SAP IAS tenant managed by the Provider. Corporate Identity Providers let you integrate Consumer Identity Providers (like Azure Active Directory), with SAP IAS. By doing so, you can federate all or selected authentication requests to the Consumer Identity Providers. "),(0,i.kt)("p",null,"As the SaaS users will no longer be maintained in the In-App User Management, the role assignments need to be handled via Group Mappings. This means, once consumers authenticated using their own IdPs, they will pass through SAP IAS (acting as a proxy) and are automatically created as shadow users in SAP XSUAA. If configured correctly, you will find required ",(0,i.kt)("strong",{parentName:"p"},"Group")," assignments in the SAML metadata. These Group assignments are done by your SaaS consumers in their own IdPs. The groups need to be mapped to SAP XSUAA role collections. For Azure Active Directory Groups (using GUIDs), this looks like the following. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/CIAS_RolColMap.png&quot; width=&quot;400&quot; /&gt;",src:a(66016).Z,width:"970",height:"574"})),(0,i.kt)("p",null,"Instead of an In-App User Management, you can e.g., provide your consumers an option to maintain Group Mappings between SAP XSUAA Role Collections and their Active Directory Groups from within the SaaS application. Furthermore, you have to think about a logic to assign ",(0,i.kt)("strong",{parentName:"p"},"Member")," users to projects properly. As users are not maintained within the SaaS application anymore, you can e.g., pass the project assignment as an additional attribute in the SAML assertion. Alternatively, you can still maintain the assignments in a separate table and offer administrators an option to select from all available SAP XSUAA Shadow Users. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"When a user authenticates using a Consumer IdP and the central SAP IAS tenant (acting as a proxy), a Shadow User will be automatically created in SAP XSUAA. ")),(0,i.kt)("p",null,"Keeping potential code changes in mind, this is the first option to outsource the user management and role assignment to the consumers and their existing Identity Providers. "),(0,i.kt)("p",null,"A great step-by-step guide on how to set up a ",(0,i.kt)("strong",{parentName:"p"},"Corporate Identity Provider")," in SAP IAS can be found in the Tutorial Navigator (",(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cp-ias-azure-ad.html"},"click here"),") or in the SAP HANA Academy (",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4qo8acsxRgU"},"click here"),"). Further details on the integration of SAP BTP with Microsoft Azure Active Directory can be found in the official Microsoft documentation (",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/scenario-azure-first-sap-identity-integration"},"click here"),")."),(0,i.kt)("p",null,"Below you can find screenshots showing a respective setup process and a sample Group Mapping. Please be aware, that the below setup is very simplified and e.g., claims have to be configured differently in a production scenario."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"center"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD01.png&quot; width=&quot;250&quot;/&gt;",src:a(61283).Z,width:"1507",height:"836"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD02.png&quot; width=&quot;250&quot;/&gt;",src:a(47333).Z,width:"1283",height:"821"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD03.png&quot; width=&quot;250&quot;/&gt;",src:a(66023).Z,width:"1505",height:"826"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD04.png&quot; width=&quot;250&quot;/&gt;",src:a(43424).Z,width:"1275",height:"791"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD05.png&quot; width=&quot;250&quot;/&gt;",src:a(96286).Z,width:"1216",height:"700"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD06.png&quot; width=&quot;250&quot;/&gt;",src:a(13068).Z,width:"1325",height:"471"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD07.png&quot; width=&quot;250&quot;/&gt;",src:a(45349).Z,width:"1266",height:"567"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD08.png&quot; width=&quot;250&quot;/&gt;",src:a(22269).Z,width:"1508",height:"744"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD09.png&quot; width=&quot;250&quot;/&gt;",src:a(79387).Z,width:"1275",height:"719"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD10.png&quot; width=&quot;250&quot;/&gt;",src:a(28456).Z,width:"1508",height:"751"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD11.png&quot; width=&quot;250&quot;/&gt;",src:a(50645).Z,width:"1508",height:"830"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD12.png&quot; width=&quot;250&quot;/&gt;",src:a(15240).Z,width:"1265",height:"786"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD13.png&quot; width=&quot;250&quot;/&gt;",src:a(50028).Z,width:"1287",height:"815"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD14.png&quot; width=&quot;250&quot;/&gt;",src:a(88278).Z,width:"1507",height:"760"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD15.png&quot; width=&quot;250&quot;/&gt;",src:a(83108).Z,width:"1497",height:"895"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD16.png&quot; width=&quot;250&quot;/&gt;",src:a(76935).Z,width:"1698",height:"699"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD17.png&quot; width=&quot;250&quot;/&gt;",src:a(979).Z,width:"1340",height:"649"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD18.png&quot; width=&quot;250&quot;/&gt;",src:a(44970).Z,width:"1284",height:"830"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD19.png&quot; width=&quot;250&quot;/&gt;",src:a(28954).Z,width:"1590",height:"751"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD20.png&quot; width=&quot;250&quot;/&gt;",src:a(9453).Z,width:"1268",height:"865"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD21.png&quot; width=&quot;250&quot;/&gt;",src:a(81044).Z,width:"1506",height:"732"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD22.png&quot; width=&quot;250&quot;/&gt;",src:a(7540).Z,width:"1587",height:"803"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD23.png&quot; width=&quot;250&quot;/&gt;",src:a(32348).Z,width:"1236",height:"896"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD23.png&quot; width=&quot;250&quot;/&gt;",src:a(32348).Z,width:"1236",height:"896"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD25.png&quot; width=&quot;250&quot;/&gt;",src:a(8876).Z,width:"1591",height:"757"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD26.png&quot; width=&quot;250&quot;/&gt;",src:a(29782).Z,width:"1194",height:"735"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD27.png&quot; width=&quot;250&quot;/&gt;",src:a(42150).Z,width:"1391",height:"757"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD28.png&quot; width=&quot;250&quot;/&gt;",src:a(85815).Z,width:"1237",height:"556"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/IAS_AD29.png&quot; width=&quot;250&quot;/&gt;",src:a(39699).Z,width:"1043",height:"337"})),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h3",{id:"2b-consumer-sap-ias-tenant"},"2b. Consumer SAP IAS tenant"),(0,i.kt)("p",null,"Similar to using a central SAP IAS tenant to manage the users and Corporate Identity Providers of all consumers, you can also create separate SAP IAS Tenants for each Consumer. This is an alternative option for consumers with concerns to store their users in a central SAP IAS tenant managed by the SaaS Provider. "),(0,i.kt)("p",null,"Compared to a central SAP IAS instance, you can give your SaaS Consumer access to the consumer-specific SAP IAS tenant. This allows your SaaS Consumer to manage Corporate Identity Providers, groups, and users themselves. When setting up the respective Consumer SAP BTP Subaccounts, make sure to select the consumer-specific SAP IAS tenant when setting up the SAP XSUAA - SAP IAS trust.  "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"You are charged a fee for additional SAP IAS tenants, which you will need to cross-charge your SaaS consumer!")),(0,i.kt)("p",null,"Once you requested an additional consumer-specific SAP IAS tenant, the required implementation steps are similar to - ",(0,i.kt)("a",{parentName:"p",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/#2a-central-sap-ias-tenant"},"Central SAP IAS tenant")," - and also respective coding changes are required in this scenario as the provided In-App User Management cannot be used anymore."),(0,i.kt)("h2",{id:"3-consumer-driven-integration"},"3. Consumer-driven integration"),(0,i.kt)("p",null,"Consumer-driven integrations (as we call it in this sample - no official term) are based on consumers wishing to use their own SAP IAS tenants or consumers preferring to directly integrate their own Identity Providers with SAP XSUAA. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important")," - As with the ",(0,i.kt)("strong",{parentName:"p"},"Provider driven integration")," approaches, also ",(0,i.kt)("strong",{parentName:"p"},"Consumer driven integration")," approaches will make the existing In-App User Management obsolete. Make sure to understand the implications of integrating Consumer IdPs and adapt the application logic accordingly!"),(0,i.kt)("h3",{id:"3a-integration-with-sap-ias"},"3a. Integration with SAP IAS"),(0,i.kt)("p",null,"The integration of a consumer's own SAP IAS tenant (! requested by the Consumer !) is similar to - ",(0,i.kt)("a",{parentName:"p",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/#2a-central-sap-ias-tenant"},"Central SAP IAS tenant"),". The major difference is, that your SaaS consumers are not using the central SAP IAS tenant managed by you as a SaaS Provider anymore, but use their own SAP IAS tenants (assigned to their own SAP CRM customer numbers). "),(0,i.kt)("p",null,"When a SAP IAS tenant is mapped to a different SAP CRM customer number, it will not appear in the ",(0,i.kt)("strong",{parentName:"p"},"Establish Trust")," dropdown list of your subaccounts. Therefore, you need to establish the trust manually and integrate the consumer-owned SAP IAS instances using the respective SAML metadata exchange. The other steps remain the same - like creating a ",(0,i.kt)("strong",{parentName:"p"},"Corporate Identity Provider"),", setting up Group Mappings in SAP XSUAA, and re-thinking the assignment of users to projects. "),(0,i.kt)("h3",{id:"3b-integration-with-sap-xsuaa"},"3b. Integration with SAP XSUAA"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,i.kt)("p",{parentName:"admonition"},"The direct integration between SAP XSUAA and Consumer IdPs should not be your preferred solution. If possible, make use of a (central/consumer) SAP Identity Authentication Service tenant acting as a proxy. ")),(0,i.kt)("p",null,"A variation of - ",(0,i.kt)("a",{parentName:"p",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/#3a-integration-with-sap-ias"},"Integration with SAP IAS")," - is to completely skip SAP IAS and directly federate SAP XSUAA authentication requests to the Consumer Identity Providers. Therefore, you need to set up a SAML trust between the Consumer Subaccounts and the Consumer Identity Providers (e.g., Azure Active Directory). While no SAP IAS tenant and Corporate Identity Provider configuration is required anymore, you still need to establish a Group Mapping and again, re-think the assignment of ",(0,i.kt)("strong",{parentName:"p"},"Member")," users to projects. "),(0,i.kt)("p",null,"Check the following blog post (",(0,i.kt)("a",{parentName:"p",href:"https://blogs.sap.com/2019/03/07/how-to-integrate-azure-ad-with-sap-cloud-platform-cloud-foundry/"},"click here"),") or SAP HANA Academy tutorial (",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=KvAzoGHKPA0"},"click here"),") to find detailed instructions on how to directly integrate an Identity Provider (in this case Azure Active Directory) with SAP XSUAA. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,i.kt)("p",{parentName:"admonition"},"Also the blog post is targeting Cloud Foundry environments, the same approach holds true for Kyma based scenarios. ")),(0,i.kt)("p",null,"Below you can find screenshots showing a respective trust setup and sample Group Mapping between SAP XSUAA and a Consumer IdP (in this case Azure Active Directory). For further screenshots also check ",(0,i.kt)("a",{parentName:"p",href:"/test/@171132206_g-kevorkian-local-pr/project-panel/expert/integrate-consumers-idp/#2a-central-sap-ias-tenant"},"Central SAP IAS tenant")," as most process steps are similar. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"center"}),(0,i.kt)("th",{parentName:"tr",align:"center"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD01.png&quot; width=&quot;250&quot;/&gt;",src:a(24500).Z,width:"1336",height:"863"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD02.png&quot; width=&quot;250&quot;/&gt;",src:a(20097).Z,width:"1252",height:"719"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD03.png&quot; width=&quot;250&quot;/&gt;",src:a(15817).Z,width:"1302",height:"793"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD04.png&quot; width=&quot;250&quot;/&gt;",src:a(30143).Z,width:"1547",height:"779"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD05.png&quot; width=&quot;250&quot;/&gt;",src:a(11032).Z,width:"1544",height:"791"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD06.png&quot; width=&quot;250&quot;/&gt;",src:a(58232).Z,width:"957",height:"561"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD07.png&quot; width=&quot;250&quot;/&gt;",src:a(62351).Z,width:"1240",height:"675"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD08.png&quot; width=&quot;250&quot;/&gt;",src:a(62345).Z,width:"914",height:"733"})),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"&lt;img src=&quot;./images/XSUAA_AD09.png&quot; width=&quot;250&quot;/&gt;",src:a(4774).Z,width:"1539",height:"447"}))))),(0,i.kt)("h2",{id:"4-further-information"},"4. Further Information"),(0,i.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/33832e58695345eea2cd91a2cc8ab24c.html?locale=en-US"},"SAP Help - Configure Trust with SAML 2.0 Corporate Identity Provider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4qo8acsxRgU"},"SAP HANA Academy - Azure AD as IdP and SAP Identity Authentication Service as SAML Federation Proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=KvAzoGHKPA0"},"SAP HANA Academy - Using Azure AD as Identity Provider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/cp-ias-azure-ad.html"},"SAP Tutorial Navigator - Connect Azure Active Directory to Identity Authentication Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2019/03/07/how-to-integrate-azure-ad-with-sap-cloud-platform-cloud-foundry/"},"SAP Blog - How to integrate Azure AD with SAP BTP, Cloud Foundry environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/active-directory/saas-apps/sap-hana-cloud-platform-identity-authentication-tutorial"},"Microsoft Documentation - Azure Active Directory single sign-on (SSO) integration with SAP Cloud Identity Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2ON6NKyKsSY"},"SAP HANA Academy - Cloud Identity Services Identity Authentication"))))}g.isMDXComponent=!0},27611:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/CIAS_Architecture-65ad735460972166e8d148b52e7af612.png"},66016:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/CIAS_RolColMap-c273f891251c6c83325612fa89511585.png"},61283:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD01-fbbe40223fd68dfcbefd1effb68a797b.png"},47333:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD02-18dc548b14364aaa836cd81da4df16ea.png"},66023:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD03-063f2389eb1f6cb6a9655fbc1cb7e5d2.png"},43424:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD04-d049a2e0f3f2510adfb79164c56952c7.png"},96286:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD05-e7f834f32ee5997285a7d474a4077c1e.png"},13068:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD06-b834296131681ebaf7108e130fa82165.png"},45349:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD07-75de024c53fab47aeac620a4e9514838.png"},22269:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD08-460e722901a1fc3a34527cbe3cda9691.png"},79387:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD09-d4b413350131c38f0596db087d953e14.png"},28456:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD10-6baab286e3536bf413d332d1448bd9a1.png"},50645:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD11-ceed6a573ea284b2f34da8209e699c7b.png"},15240:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD12-80cfddee7581aa764b653f43a1ca65b1.png"},50028:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD13-6d916c9b5223289059550a00c9dfdb0b.png"},88278:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD14-660afa4edecc0df0a7e4ee578afb516a.png"},83108:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD15-94947eb17ac84ef95f61dc7b410dbb42.png"},76935:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD16-8072b82e6a193fa1a9a9d9fe29d200f3.png"},979:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD17-43ec64aa342a6ab365ff45b46ade844b.png"},44970:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD18-132bd839101fa83ce235f93acf451536.png"},28954:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD19-be5574b4f6441f059fc474e8bd2d1de2.png"},9453:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD20-62b0c082da63ef76a25b5ab0ebce9201.png"},81044:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD21-fa53e2a50c7578acc4414e3057e8c86a.png"},7540:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD22-9f3c9826e86527d2196b1a620fa2680e.png"},32348:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD23-2459c365b6053c606e8bb93ff28a5a85.png"},8876:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD25-49b43486b4f80f013623f32f1aeb8db5.png"},29782:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD26-a73e2ffee55029f93555fa3a1f92c774.png"},42150:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD27-4b2c4b87ec342b719efad9793d02b83b.png"},85815:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD28-943b36026951aef6da10abb481fb33b3.png"},39699:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/IAS_AD29-1dd183c0ec7ff078080bae9c5e24e2af.png"},24500:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD01-edfe7f3e91f7c57adccb0158b4c714f8.png"},20097:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD02-1b72020566112c4a54b316be1557ddb5.png"},15817:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD03-918a3363056dc24f6905d6e82e509669.png"},30143:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD04-a7e52cba9ae9303b40e5c6550a446230.png"},11032:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD05-9b65c15d9bdbe739c2dcb5fabbf45799.png"},58232:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD06-3bc143616f97cd8b4dd18d1b1da4983d.png"},62351:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD07-3ec8d54e7dfe38821fab843857d8ac4b.png"},62345:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD08-795c610f6816c6c880748703e853f475.png"},4774:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/XSUAA_AD09-d7d8f049e08b11c7fcc143ea10a7ed65.png"}}]);