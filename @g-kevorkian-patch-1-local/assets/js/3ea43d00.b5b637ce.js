"use strict";(self.webpackChunkpaa_doc=self.webpackChunkpaa_doc||[]).push([[917],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=c(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:e},l),{},{components:a})):n.createElement(h,i({ref:e},l))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48512:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:2},i="Backup SAP HANA Cloud Database Containers",s={unversionedId:"project-panel/expert/backup-database-containers/README",id:"project-panel/expert/backup-database-containers/README",title:"Backup SAP HANA Cloud Database Containers",description:"This topic will be refactored! Some screenshots or features might appear different based on latest version updates.",source:"@site/docs/project-panel/4-expert/backup-database-containers/README.md",sourceDirName:"project-panel/4-expert/backup-database-containers",slug:"/project-panel/expert/backup-database-containers/",permalink:"/test/@g-kevorkian-patch-1-local/project-panel/expert/backup-database-containers/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Navya khurana",lastUpdatedAt:1693289879,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Expert Features",permalink:"/test/@g-kevorkian-patch-1-local/project-panel/expert/introduction-expert-features/"},next:{title:"SaaS Consumer Extensibility",permalink:"/test/@g-kevorkian-patch-1-local/project-panel/expert/consumer-extensibility/"}},p={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Prerequisites",id:"2-prerequisites",level:2},{value:"3. Export an existing container",id:"3-export-an-existing-container",level:2},{value:"4. Import into an existing container",id:"4-import-into-an-existing-container",level:2},{value:"5. Dependencies and privileges",id:"5-dependencies-and-privileges",level:2},{value:"6. Further Information",id:"6-further-information",level:2}],l={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup-sap-hana-cloud-database-containers"},"Backup SAP HANA Cloud Database Containers"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")),(0,o.kt)("p",{parentName:"admonition"},"This topic will be refactored! Some screenshots or features might appear different based on latest version updates. ")),(0,o.kt)("p",null,"This part of the ",(0,o.kt)("strong",{parentName:"p"},"Expert Features")," explains how to export and import SAP HANA Cloud HDI (HANA Deployment Infrastructure) containers in a SaaS scenario. This can be useful to back up your Subscriber data on a regular basis. Please be aware that the import process will overwrite the content of your target container. For this reason also make sure, not to apply incompatible database changes between the backup and import of a container. "),(0,o.kt)("p",null,"Before approaching this part of the ",(0,o.kt)("strong",{parentName:"p"},"Expert Features"),", please make sure to set up a new HDI Container Group Administrator first as described in the following part of the Expert Features (",(0,o.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-patch-1-local/project-panel/expert/manage-tenant-containers/"},"Manage Tenant Database Containers"),") and use the respective user for the steps below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#backup-sap-hana-cloud-database-containers"},"Backup SAP HANA Cloud Database Containers"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-introduction"},"1. Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2-prerequisites"},"2. Prerequisites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3-export-an-existing-container"},"3. Export an existing container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#4-import-into-an-existing-container"},"4. Import into an existing container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#5-dependencies-and-privileges"},"5. Dependencies and privileges")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#6-further-information"},"6. Further Information"))))),(0,o.kt)("p",null,"In this sample use-case we assume the following backup scenario. If your scenario is different from the following assumptions, please test your requirements in a sandbox system first, before deleting any Tenant database containers! In general, we recommend testing all backup-related steps before applying them in a productive environment!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You did a database container backup of Tenant ABC"),(0,o.kt)("li",{parentName:"ol"},"You unsubscribed Tenant ABC or removed the Consumer Subaccount"),(0,o.kt)("li",{parentName:"ol"},"You create a new subaccount and subscribe Tenant ABC again"),(0,o.kt)("li",{parentName:"ol"},"You want to load the backup into the new and empty database container of Tenant ABC")),(0,o.kt)("p",null,"So the important assumption is, that the target container for the import of the backup ",(0,o.kt)("strong",{parentName:"p"},"already exists")," and is part of the ordinary Tenant database container lifecycle managed by the Service Manager. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,o.kt)("p",{parentName:"admonition"},"In case you don't want to overwrite the target container (e.g. due to incompatible database changes), you can also import the exported container into a new database schema instead of overwriting the target schema. After the import, you can manually insert the required backups into the target container. ")),(0,o.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,o.kt)("p",null,"Creating and storing backups of database containers is a very critical process from a data security perspective. As a SaaS provider, you need to ensure this process is well aligned with your SaaS customers and that only a very limited group of people has permissions to access, export, and import customer database containers. "),(0,o.kt)("p",null,"As an alternative to a manual export, please also consider an automated technical approach (using respective SQL commands) that includes strong encryption of exported containers in a secure location. Containers can also be exported to Cloud Sources like Azure Storage or AWS S3. Please find the required steps in the respective SAP Help documents (see ",(0,o.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-patch-1-local/project-panel/expert/backup-database-containers/#6-further-information"},"Further Information"),")."),(0,o.kt)("h2",{id:"2-prerequisites"},"2. Prerequisites"),(0,o.kt)("p",null,"Before approaching this part of the ",(0,o.kt)("strong",{parentName:"p"},"Expert Features"),", please make sure to set up a new HDI Container Group Administrator first as described in the following part of the Expert Features (",(0,o.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-patch-1-local/project-panel/expert/manage-tenant-containers/"},"Manage Tenant Database Containers"),"). "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The tables in the schema of the exported container must not be larger than 2GB."),(0,o.kt)("li",{parentName:"ul"},"The exporting user needs to be an Admin of your container's HDI Container Group. "),(0,o.kt)("li",{parentName:"ul"},"Dependent objects need to be imported first (e.g., a shared database container)."),(0,o.kt)("li",{parentName:"ul"},"The Object Owner (#OO) of the targeted import container needs all required permissions (e.g., for a shared database container).")),(0,o.kt)("p",null,"Especially for the last prerequisite, please check the ",(0,o.kt)("a",{parentName:"p",href:"#5-Dependencies-and-privileges"},"Dependencies and privileges")," chapter! "),(0,o.kt)("h2",{id:"3-export-an-existing-container"},"3. Export an existing container"),(0,o.kt)("p",null,"3.1. Find the ID of the Consumer Tenant of which you want to export using the Subscription Management Dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_010.png&quot; width=&quot;500&quot; /&gt;",src:a(95832).Z,width:"1917",height:"918"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_020.png&quot; width=&quot;500&quot; /&gt;",src:a(25314).Z,width:"1447",height:"867"})),(0,o.kt)("p",null,"3.2. Find the related Tenant database container within your Service Manager instance by checking the labels. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_030.png&quot; width=&quot;500&quot; /&gt;",src:a(71198).Z,width:"1650",height:"821"})),(0,o.kt)("p",null,"3.3. Open the existing service key, to identify the schema name of the container you want to export. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_040.png&quot; width=&quot;500&quot; /&gt;",src:a(32823).Z,width:"1598",height:"663"})),(0,o.kt)("p",null,"3.4. Go to SAP HANA Database Explorer and log in with an HDI Container (Group) Admin of the database container you want to export (see Prerequisites section). "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_050.png&quot; width=&quot;500&quot; /&gt;",src:a(77681).Z,width:"1920",height:"960"})),(0,o.kt)("p",null,"3.5. Right-click the root of this user's database connection and select ",(0,o.kt)("strong",{parentName:"p"},"Export HDI Container"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_060.png&quot; width=&quot;500&quot; /&gt;",src:a(12826).Z,width:"771",height:"965"})),(0,o.kt)("p",null,"3.6. Search for the schema name which you identified in the service key of the corresponding Service Manager container instance. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_070.png&quot; width=&quot;500&quot; /&gt;",src:a(35252).Z,width:"1920",height:"960"})),(0,o.kt)("p",null,"3.7. Select the schema from the result list and click on ",(0,o.kt)("strong",{parentName:"p"},"Prepare HDI Container for Download")," to start the process. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_090.png&quot; width=&quot;500&quot; /&gt;",src:a(80874).Z,width:"1920",height:"962"})),(0,o.kt)("p",null,"3.8. Select ",(0,o.kt)("strong",{parentName:"p"},"Prepare")," in the next popup."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_100.png&quot; width=&quot;500&quot; /&gt;",src:a(32970).Z,width:"1920",height:"958"})),(0,o.kt)("p",null,"3.9. Click the refresh button in the Background Activities pane, until your export job is in status ",(0,o.kt)("strong",{parentName:"p"},"SUCCESS"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_110.png&quot; width=&quot;500&quot; /&gt;",src:a(9001).Z,width:"1193",height:"563"})),(0,o.kt)("p",null,"3.10. ",(0,o.kt)("strong",{parentName:"p"},"Double-click")," on your export job, to open the download popup and download your exported container content. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_120.png&quot; width=&quot;500&quot; /&gt;",src:a(6267).Z,width:"1609",height:"771"})),(0,o.kt)("p",null,"3.11. After downloading, you can delete the temporary database table again which was created for the export. "),(0,o.kt)("p",null,"3.12. Therefore, select your export job by clicking on the checkbox and hitting the ",(0,o.kt)("strong",{parentName:"p"},"trash icon"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_130.png&quot; width=&quot;500&quot; /&gt;",src:a(21282).Z,width:"1168",height:"911"})),(0,o.kt)("p",null,"3.13. You can now delete the background activity and/or the temporary table by selecting the option of your choice. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/export_140.png&quot; width=&quot;500&quot; /&gt;",src:a(16378).Z,width:"1534",height:"771"})),(0,o.kt)("h2",{id:"4-import-into-an-existing-container"},"4. Import into an existing container"),(0,o.kt)("p",null,"4.1. Go to SAP HANA Database Explorer and log in with an HDI Container (Group) Admin of the container you want to restore your backup in. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")," "),(0,o.kt)("p",{parentName:"admonition"},"The database container in which you want to restore your backup, already has to exist before doing the following steps! Also, check the next chapter to learn about pre-import prerequisites in case of cross-container-access scenarios!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_005.png&quot; width=&quot;500&quot; /&gt;",src:a(68021).Z,width:"1920",height:"960"})),(0,o.kt)("p",null,"4.2. Right-click the root of this user's database connection and select ",(0,o.kt)("strong",{parentName:"p"},"Import HDI Container"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_010.png&quot; width=&quot;500&quot; /&gt;",src:a(3331).Z,width:"1231",height:"740"})),(0,o.kt)("p",null,"4.3. Click on ",(0,o.kt)("strong",{parentName:"p"},"Browse")," to select the archived database container content from your hard disk."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_020.png&quot; width=&quot;500&quot; /&gt;",src:a(97220).Z,width:"1170",height:"839"})),(0,o.kt)("p",null,"4.4. Select the archive file which you previously exported. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_030.png&quot; width=&quot;500&quot; /&gt;",src:a(208).Z,width:"1520",height:"753"})),(0,o.kt)("p",null,"4.5. Click on ",(0,o.kt)("strong",{parentName:"p"},"Upload File"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_040.png&quot; width=&quot;500&quot; /&gt;",src:a(31725).Z,width:"1163",height:"828"})),(0,o.kt)("p",null,"4.6. Confirm the upload in the popup window. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_050.png&quot; width=&quot;500&quot; /&gt;",src:a(86786).Z,width:"1530",height:"660"})),(0,o.kt)("p",null,"4.7. Wait until the upload has finished."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Hint")," "),(0,o.kt)("p",{parentName:"admonition"},"As of today, you can only import to a new database container using the user interface, but it's not possible to import data into an existing database container. Therefore, an SQL command needs to be executed instead of clicking on ",(0,o.kt)("strong",{parentName:"p"},"Import HDI Container"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_060.png&quot; width=&quot;500&quot; /&gt;",src:a(71232).Z,width:"1168",height:"829"})),(0,o.kt)("p",null,"4.8. Refresh the schema content of your HDI Container Group Admin. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_070.png&quot; width=&quot;500&quot; /&gt;",src:a(10520).Z,width:"1919",height:"932"})),(0,o.kt)("p",null,"4.9. Check the tables for the database container backup stored in a temporary table.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_080.png&quot; width=&quot;500&quot; /&gt;",src:a(8326).Z,width:"1920",height:"925"})),(0,o.kt)("p",null,"4.10. Open a new SQL console using the HDI Container Admin of the targeted import container."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_090.png&quot; width=&quot;500&quot; /&gt;",src:a(20194).Z,width:"1920",height:"906"})),(0,o.kt)("p",null,"4.11. Copy and paste the following SQL command and change the parameters as described. Then click on ",(0,o.kt)("strong",{parentName:"p"},"Run")," or hit ",(0,o.kt)("strong",{parentName:"p"},"F8"),". "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Just pull the table into your SQL command window to make your life a bit easier. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_100.png&quot; width=&quot;500&quot; /&gt;",src:a(55255).Z,width:"1920",height:"900"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SQL Code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CALL _SYS_DI#BROKER_CG.IMPORT_CONTAINER_FOR_COPY( -- BROKER_CG = Broker Container Group\n    'ABC123DGH456HIJ789KLM123NOP456QRS789',  -- Target schema to import container data\n    CURRENT_SCHEMA, -- Schema containing uploaded container\n    '.SAP.HRTT.ImportHDI.99991231.125959.abc-...-xyz', -- Table name containing uploaded container\n    _SYS_DI.T_NO_PARAMETERS, -- Can remain default\n    ?, ?, ? -- Can remain default\n); \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CALL _SYS_DI#BROKER_CG.IMPORT_CONTAINER_FOR_COPY(\n    'A12F6AC586D24B4B805A3E2587DAF10D', \n    CURRENT_SCHEMA, \n    '.SAP.HRTT.ImportHDI.20220811.144424.38b0386c-f99c-48e3-a994-5041120c7bf6', \n    _SYS_DI.T_NO_PARAMETERS, \n    ?, ?, ?\n); \n")),(0,o.kt)("p",null,"4.12. Check the logs to see if the import was successful. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_110.png&quot; width=&quot;500&quot; /&gt;",src:a(75760).Z,width:"1920",height:"933"})),(0,o.kt)("p",null,"4.13. You can now delete the temporary container backup table from your HDI Container Group Admin schema. Do a right-click on your table and choose ",(0,o.kt)("strong",{parentName:"p"},"Delete"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"&lt;img src=&quot;./images/import_120.png&quot; width=&quot;500&quot; /&gt;",src:a(39780).Z,width:"1633",height:"614"})),(0,o.kt)("h2",{id:"5-dependencies-and-privileges"},"5. Dependencies and privileges"),(0,o.kt)("p",null,"All external objects referenced in the imported container (e.g., if the imported container is accessing a shared database container) must already be available in the database and accessable to the object owner (#OO-user) of the targeted import container when starting the import process. So, if necessary, grant the object owner of the target container required privileges for accessing these objects of a shared container."),(0,o.kt)("p",null,"If a shared container exposes a role for cross-container access, this role must be granted (before the import) to the object owner (#OO-user) of the import target container. The role can be granted to the #OO-user either by a role administrator (ROLE ADMIN) or by using the HDI Container API for role assignment. "),(0,o.kt)("p",null,"Sample SQL command to assign a role using the SAP HDI Container API: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LOCAL TEMPORARY COLUMN TABLE #ROLES LIKE _SYS_DI.TT_SCHEMA_ROLES;\nINSERT INTO #ROLES ( ROLE_NAME, PRINCIPAL_SCHEMA_NAME, PRINCIPAL_NAME ) VALUES ( 'COM_EXTERNAL_ACCESS#', '', 'IMPORT_TARGET_CONTAINER#OO' );\nCALL SHARED_CONTAINER#DI.GRANT_CONTAINER_SCHEMA_ROLES(#ROLES, _SYS_DI.T_NO_PARAMETERS, ?, ?, ?);\nDROP TABLE #ROLES;\n")),(0,o.kt)("p",null,"For more details, check the links provided in the ",(0,o.kt)("a",{parentName:"p",href:"/test/@g-kevorkian-patch-1-local/project-panel/expert/backup-database-containers/#6-further-information"},"Further Information")," section."),(0,o.kt)("h2",{id:"6-further-information"},"6. Further Information"),(0,o.kt)("p",null,"Please use the following links to find further information on the topics above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/36a5547af0304ee29e964abf27468f52.html?locale=en-US"},"SAP Help - Export an SAP HDI Container for Copy Purposes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/8f8501c09a4342069ee377bfc53d48e4.html?locale=en-US"},"SAP Help - Export an SAP HDI Container for Copy Purposes to a Cloud Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/905a7b383a5a472f9d712fa3fb8d14ee.html?locale=en-US"},"SAP Help - Import an SAP HDI Container for Copy Purposes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/0f76f6ee4d7c4051b6cf797c1852ea3f.html?locale=en-US"},"SAP Help - Import an SAP HDI Container for Copy Purposes from a Cloud Store")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/6574d8eb496c4f2f9f023237abb6c87a.html?locale=en-US"},"SAP Help - Grant a User a Role from the SAP HDI Container's Schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/docs/HANA_CLOUD_DATABASE/c2cc2e43458d4abda6788049c58143dc/bb47fc06c27841449017d055302a4074.html?locale=en-US"},"SAP Help - Revoke a Role from the SAP HDI Container's Schema"))))}d.isMDXComponent=!0},95832:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_010-38632d2774014cbd983c1f2508923e5b.png"},25314:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_020-ce70bc18c5873be4d47d6bab1c181ca9.png"},71198:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_030-972586796c2404a420437555fae200e0.png"},32823:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_040-2d0abd24ecbd25b7b97a28dc4efd45d6.png"},77681:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_050-f39b6baae0b3d0c4cedffc57c47de00b.png"},12826:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_060-0f67cbc6414393bec5d74aebea1022ab.png"},35252:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_070-3adb715f5b99445c90d27f10551cd054.png"},80874:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_090-d06931a7b403e4228879d77be8036e41.png"},32970:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_100-158edfcd54cf909c4a6409034fe808c2.png"},9001:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_110-fa534d91d948b699a81199308d5dea60.png"},6267:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_120-3eec5145f38fce811f116580df977fff.png"},21282:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_130-e9df2ae8f8a55d2f4897b3123312a894.png"},16378:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/export_140-a30b2a847f00819f302797cbfa9f4365.png"},68021:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_005-0adaabee886dd2449994448e20034452.png"},3331:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_010-adef615087c49baa6c80a924f9f5ea46.png"},97220:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_020-cecbf391efe965da99ab953faedbb6c1.png"},208:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_030-cdc7dcf5b53f425f01240ce57aeb0f52.png"},31725:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_040-d2dd37c6cb3dabc952cfcb4712cb2cd9.png"},86786:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_050-c5c7d1c7dfc683e74a002c1acebe85c4.png"},71232:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_060-6fcda2a2f5b1884282a3019eadad83e3.png"},10520:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_070-547b3cf2692f06b6f1a085d60610a835.png"},8326:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_080-05fcba07307f3316a33bec19e02ee967.png"},20194:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_090-69425edc2406066179d37f1287d6d20b.png"},55255:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_100-8f26d90833fa637b064940712b22cf55.png"},75760:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_110-340380ae582d56e674cd9e8f8daa0fef.png"},39780:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/import_120-651035073bb7bf139680d3e32ce23512.png"}}]);