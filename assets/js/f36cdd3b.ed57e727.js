"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[95269],{88368:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return p}});var s=a(83117),i=a(80102),o=(a(67294),a(3905)),r=a(13904),l=["components"],n={title:"Plagiarism API",documentationDraft:!0,tags:["API","Plagiarism"]},d=void 0,u={unversionedId:"apis/subsystems/plagiarism",id:"apis/subsystems/plagiarism",title:"Plagiarism API",description:"Overview",source:"@site/docs/apis/subsystems/plagiarism.md",sourceDirName:"apis/subsystems",slug:"/apis/subsystems/plagiarism",permalink:"/devdocs/docs/apis/subsystems/plagiarism",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/plagiarism.md",tags:[{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"Plagiarism",permalink:"/devdocs/docs/tags/plagiarism"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1655888803,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"Plagiarism API",documentationDraft:!0,tags:["API","Plagiarism"]},sidebar:"docs",previous:{title:"Output API",permalink:"/devdocs/docs/apis/subsystems/output"},next:{title:"Roles API",permalink:"/devdocs/docs/apis/subsystems/roles"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Supported Modules",id:"supported-modules",level:2},{value:"More information",id:"more-information",level:2}],c={toc:p};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,(0,s.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Plagiarism API is a core set of functions that all Moodle code can use to send user submitted content to Plagiarism Prevention systems"),(0,o.kt)("p",null,"A typical user story:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When Plagiarism tools are enabled, every module that allows it will have a group of settings added to allow management of sending the user content to a plagiarism service."),(0,o.kt)("li",{parentName:"ol"},"A user enters some content/submits a file inside a module that a teacher/Admin has configured the tool to be used."),(0,o.kt)("li",{parentName:"ol"},"An Event is triggered which contains details about the user, module and submission they have made"),(0,o.kt)("li",{parentName:"ol"},"Event handlers in the Plagiarism plugin are triggered and process anything required."),(0,o.kt)("li",{parentName:"ol"},"Hooks for displaying information returned from the Plagiarism tools to both the user and teacher (controlled by the plugin)")),(0,o.kt)("h2",{id:"supported-modules"},"Supported Modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assignment"),(0,o.kt)("li",{parentName:"ul"},"Forum"),(0,o.kt)("li",{parentName:"ul"},"Workshop")),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Developing_a_Plagiarism_Plugin"},"How to Develop a new Plagiarism Plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/How_to_add_support_for_a_Plagiarism_Plugin_to_my_activity_module"},"How to add support for a Plagiarism Plugin to my activity module"))))}g.isMDXComponent=!0}}]);