"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[97004],{81469:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),n=["components"],l={title:"Moodle 3.5.3",tags:["Release notes","Moodle 3.5"],sidebar_position:3,moodleVersion:"3.5.3"},m=void 0,d={unversionedId:"releases/3.5/3.5.3",id:"releases/3.5/3.5.3",title:"Moodle 3.5.3",description:"Release date: 12 November 2018",source:"@site/general/releases/3.5/3.5.3.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.3",permalink:"/devdocs/general/releases/3.5/3.5.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1655888803,formattedLastUpdatedAt:"22/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 3.5.3",tags:["Release notes","Moodle 3.5"],sidebar_position:3,moodleVersion:"3.5.3"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.2",permalink:"/devdocs/general/releases/3.5/3.5.2"},next:{title:"Moodle 3.5.4",permalink:"/devdocs/general/releases/3.5/3.5.4"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 12 November 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.3"),"."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For sites using a custom theme or login form, from 3.5.3 onwards, the login form must include a new login token field. For details of required changes, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Login_token"},"Login token"),"."))),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62563"},"MDL-62563")," - Data deletion of existing deleted users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62558"},"MDL-62558")," - Provide a data registry configuration summary (read-only)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63726"},"MDL-63726"),' - Option to remove the "Data retention summary" link in the footer'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62491"},"MDL-62491")," - HTML data request export format"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63401"},"MDL-63401")," - User expiry improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63619"},"MDL-63619")," - Data purpose and category inheritance improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62560"},"MDL-62560")," - Different data retention strategies for different roles in a purpose"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62554"},"MDL-62554")," - Ability to configure data registry to use module type defaults"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63818"},"MDL-63818")," - Possibility to override repository capabilities in activity contexts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63116"},"MDL-63116")," - Data requests bulk actions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63009"},"MDL-63009")," - Site mentioned in email notifications of data requests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62904"},"MDL-62904")," - Delete account link on profile page")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62319"},"MDL-62319")," - iOS 11.3 Moodle assignment grading interface fix"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62738"},"MDL-62738")," - iOS mobile browsers TinyMCE editor fix"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63403"},"MDL-63403")," - Glossary filter performance improvement"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35788"},"MDL-35788")," - Edited forum post timestamp fix"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63194"},"MDL-63194")," - Moving questions between sections in quiz fix"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63421"},"MDL-63421")," - Environment check for version not supporting PHP 7.3"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63542"},"MDL-63542")," - Web service core_course_get_course_contents should return stealth activities"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63267"},"MDL-63267")," - Assignment rubrics should consider the fillings table"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62139"},"MDL-62139")," - Boost: Gear icon accessibility improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63746"},"MDL-63746")," - Boost: Gear icon focus improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62145"},"MDL-62145")," - Boost: custommenuitems accessibility improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62144"},"MDL-62144")," - Boost: user profile menu accessibility improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62920"},"MDL-62920")," - Uploading deleted user then adding to cohort ignores the user, instead of resulting in a fatal error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62960"},"MDL-62960")," - Drag and drop of course events should take into account the course start date")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=378731"},"MSA-18-0020")," Login CSRF vulnerability in login form")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.3"},"Notes de mise \xe0 jour de Moodle 3.5.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.3"},"Notas de Moodle 3.5.3"))))}k.isMDXComponent=!0}}]);