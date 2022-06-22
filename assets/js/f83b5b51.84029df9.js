"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99105],{40127:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(83117),o=t(80102),i=(t(67294),t(3905)),l=t(13904),r=["components"],s={title:"Moodle App Plugins upgrade guide",sidebar_label:"Plugins upgrade guide",sidebar_position:7,tags:["Moodle App"]},d=void 0,p={unversionedId:"moodleapp/upgrading/plugins-upgrade-guide",id:"moodleapp/upgrading/plugins-upgrade-guide",title:"Moodle App Plugins upgrade guide",description:"Starting with version 3.9.5, the Moodle App uses Ionic 5. As usual, we tried not to change our APIs and components to prevent breaking existing plugins. Unfortunately, Ionic 5 comes with a lot of breaking changes, especially related to templates. This means that plugins need to be adapted in order to look good in the new versions of the app.",source:"@site/docs/moodleapp/upgrading/plugins-upgrade-guide.md",sourceDirName:"moodleapp/upgrading",slug:"/moodleapp/upgrading/plugins-upgrade-guide",permalink:"/devdocs/docs/moodleapp/upgrading/plugins-upgrade-guide",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/upgrading/plugins-upgrade-guide.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1655888803,formattedLastUpdatedAt:"22/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle App Plugins upgrade guide",sidebar_label:"Plugins upgrade guide",sidebar_position:7,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Remote themes upgrade guide",permalink:"/devdocs/docs/moodleapp/upgrading/remote-themes-upgrade-guide"}},u={},c=[{value:"Ionic changes",id:"ionic-changes",level:2},{value:"You can now use ES6",id:"you-can-now-use-es6",level:2},{value:"Changes in the app&#39;s code",id:"changes-in-the-apps-code",level:2},{value:"Supporting both Ionic 3 and Ionic 5",id:"supporting-both-ionic-3-and-ionic-5",level:2},{value:"Is there any example I can look at?",id:"is-there-any-example-i-can-look-at",level:2},{value:"Before 3.5",id:"before-35",level:2},{value:"See also",id:"see-also",level:2}],m={toc:c};function h(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,a.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Starting with version 3.9.5, the Moodle App uses Ionic 5. As usual, we tried not to change our APIs and components to prevent breaking existing plugins. Unfortunately, Ionic 5 comes with a lot of breaking changes, especially related to templates. This means that plugins need to be adapted in order to look good in the new versions of the app."),(0,i.kt)("p",null,"Please note that if your plugin doesn't use Ionic components nor JavaScript, it's possible that you don't have to adapt it. However, we recommend you to test the plugin with new versions of the app to check if everything works correctly."),(0,i.kt)("h2",{id:"ionic-changes"},"Ionic changes"),(0,i.kt)("p",null,"Previous versions of the app used Ionic 3, so the update involved an increase in two versions and Ionic changed a lot of their components, directives and utilities."),(0,i.kt)("p",null,"You can read the official ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/reference/migration"},"Ionic migration documentation"),". Even if your plugins are not Ionic applications themselves, you can find information about components and other changes."),(0,i.kt)("p",null,"One relevant change is that all functions related to modals are now asynchronous. This means that if your plugin is displaying a modal in JavaScript, you'll probably need to adapt your code."),(0,i.kt)("p",null,"Another important change is that text inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-item>")," should always be placed inside of an ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-label>"),", otherwise it might not look good in some cases. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Ionic 3"',title:'"Ionic','3"':!0},"<ion-item>My text</ion-item>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"<ion-item><ion-label>My text</ion-label></ion-item>\n")),(0,i.kt)("p",null,"Finally, all Ionic directives are now components, like ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-label>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-avatar>"),". This means that these directives cannot be used in combination with another component. Some common cases that will need to be modified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Ionic 3"',title:'"Ionic','3"':!0},'<ion-label core-mark-required="true">...</ion-label>\n\n<ion-avatar core-user-avatar ...>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},'<ion-label><span core-mark-required="true">...</span></ion-label>\n\n<core-user-avatar ...>\n')),(0,i.kt)("h2",{id:"you-can-now-use-es6"},"You can now use ES6"),(0,i.kt)("p",null,"The minimum platform requirements for Cordova and Ionic increased, and so it also affected the Moodle App. The new version requires Android 5.1 with WebView 61+, which means that the JavaScript for the app can now be compiled to ES6."),(0,i.kt)("p",null,"Please notice that you ",(0,i.kt)("strong",{parentName:"p"},"cannot")," use async/await, as they aren't part of ES6 and Android WebView 61 doesn't support them."),(0,i.kt)("p",null,"One issue that can break your plugin's JavaScript is extending classes. In Ionic 3, when your plugin extends a class it's actually getting a function. In Ionic 5, your plugin will receive a JavaScript class and can be extended using class syntax:"),(0,i.kt)("p",null,"Here's an example to create a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"CoreContentLinksModuleIndexHandler"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Ionic 3"',title:'"Ionic','3"':!0},"function AddonModCertificateModuleLinkHandler() {\n    that.CoreContentLinksModuleIndexHandler.call(this, that.CoreCourseHelperProvider, 'mmaModCertificate', 'certificate');\n\n    this.name = 'AddonModCertificateLinkHandler';\n}\n\nAddonModCertificateModuleLinkHandler.prototype = Object.create(this.CoreContentLinksModuleIndexHandler.prototype);\nAddonModCertificateModuleLinkHandler.prototype.constructor = AddonModCertificateModuleLinkHandler;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"class AddonModCertificateModuleLinkHandler extends this.CoreContentLinksModuleIndexHandler {\n\n    constructor() {\n        super('mmaModCertificate', 'certificate');\n\n        this.name = 'AddonModCertificateLinkHandler';\n    }\n\n}\n")),(0,i.kt)("h2",{id:"changes-in-the-apps-code"},"Changes in the app's code"),(0,i.kt)("p",null,"We've also done some changes to the code of the app. Most of these changes probably don't affect your plugin, but you should still check this out just in case:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<core-icon>")," is now deprecated, please use ",(0,i.kt)("inlineCode",{parentName:"li"},"<ion-icon>")," instead. Right now you can use font-awesome icons with ",(0,i.kt)("inlineCode",{parentName:"li"},"ion-icon"),". However, it still hasn't been decided whether font awesome will be used in Moodle 4.0 or not, so font-awesome may be removed from the app in the future."),(0,i.kt)("li",{parentName:"ul"},'To "cross out" an icon using ',(0,i.kt)("inlineCode",{parentName:"li"},"ion-icon")," you need to use ",(0,i.kt)("inlineCode",{parentName:"li"},'class="icon-slash"')," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},'slash="true"'),"."),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"syncOnSites")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreSyncBaseProvider")," now expects to receive a function with the parameters already bound:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Ionic 3"',title:'"Ionic','3"':!0},"    syncOnSites('events', this.syncAllEventsFunc.bind(this), [siteId);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Ionic 5"',title:'"Ionic','5"':!0},"    syncOnSites('events', this.syncAllEventsFunc.bind(this, force), siteId);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the delegates that previously supplied an injector parameter to its handlers no longer do that. For example, the function ",(0,i.kt)("inlineCode",{parentName:"li"},"getComponent()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreUserProfileFieldDelegate")," used to receive an injector as a parameter, but now it won't receive any parameter."),(0,i.kt)("li",{parentName:"ul"},"All the delegates that previously supplied a ",(0,i.kt)("inlineCode",{parentName:"li"},"NavController")," parameter to its handlers no longer do that. For example, the function ",(0,i.kt)("inlineCode",{parentName:"li"},"openCourse()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreCourseFormatDelegate")," no longer receive the ",(0,i.kt)("inlineCode",{parentName:"li"},"NavController")," parameter."),(0,i.kt)("li",{parentName:"ul"},"The handlers registered in ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreCourseOptionsDelegate")," now need to return the properties ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pageParams")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"component")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"componentData"),". Please notice this only affects your plugin if you're creating the handler yourself using JavaScript code."),(0,i.kt)("li",{parentName:"ul"},"The handlers registered in ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreUserDelegate")," have changed a bit. Please notice this only affects your plugin if you're creating the handler yourself using JavaScript code.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Handlers can now define a ",(0,i.kt)("inlineCode",{parentName:"li"},"cacheEnabled")," property (",(0,i.kt)("inlineCode",{parentName:"li"},"false")," by default) to cache ",(0,i.kt)("inlineCode",{parentName:"li"},"isEnabledForUser")," calls."),(0,i.kt)("li",{parentName:"ul"},"In the function ",(0,i.kt)("inlineCode",{parentName:"li"},"isEnabledForUser"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"navOptions")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"admOptions")," parameters have been removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isEnabledForUser")," is now optional and defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},"They can implement a new function called ",(0,i.kt)("inlineCode",{parentName:"li"},"isEnabledForCourse"),"; this function will receive the ",(0,i.kt)("inlineCode",{parentName:"li"},"navOptions")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"admOptions")," parameters. If it's not defined, it'll default to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"prefetchPackage")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreCourseActivityPrefetchHandlerBase")," has changed. If you were using this class to implement your own prefetch handler you might need to update its code."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CoreInitDelegate")," has been deleted. Now the initialisation of the app is done via Angular's ",(0,i.kt)("inlineCode",{parentName:"li"},"APP_INITIALIZER"),". Please notice that ",(0,i.kt)("inlineCode",{parentName:"li"},"APP_INITIALIZER")," cannot and shouldn't be used by plugins."),(0,i.kt)("li",{parentName:"ul"},"The function ",(0,i.kt)("inlineCode",{parentName:"li"},"getAdditionalDownloadableFiles")," in question types now needs to return a list of ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreWSExternalFile"),", it no longer accepts a list of strings."),(0,i.kt)("li",{parentName:"ul"},"Files stored to be uploaded later using ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreFileUploaderProvider")," no longer have an ",(0,i.kt)("inlineCode",{parentName:"li"},"offline")," property, now they're just instances of ",(0,i.kt)("inlineCode",{parentName:"li"},"FileEntry"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ionViewCanLeave")," function has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"canLeave"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"onchange")," method of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Network")," service is now called ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange"),".")),(0,i.kt)("h2",{id:"supporting-both-ionic-3-and-ionic-5"},"Supporting both Ionic 3 and Ionic 5"),(0,i.kt)("p",null,"Your plugin should still support Ionic 3 so it works on devices that haven't updated the app yet. This can be done by checking the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"appversioncode")," sent by the app. Here you can find an example applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"choicegroup")," plugin: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dpalou/moodle-mod_choicegroup/blob/ionic5/classes/output/mobile.php#L52"},"Choicegroup plugin"),"."),(0,i.kt)("p",null,'As you can see in that repository, the JS and the templates are duplicated in order to have one file to support Ionic 3 and another file to support Ionic 5. In this example, they are called "ionic3" and "latest", but you can structure this as you prefer. You can also have a single file with different HTML depending on the ',(0,i.kt)("inlineCode",{parentName:"p"},"appversioncode"),". That's up to you."),(0,i.kt)("h2",{id:"is-there-any-example-i-can-look-at"},"Is there any example I can look at?"),(0,i.kt)("p",null,"If you used the app's code as an example to build your plugin, you can do the same. There are also some plugins that have been updated, for example, you can see the following PRs on the ",(0,i.kt)("inlineCode",{parentName:"p"},"choicegroup")," plugin:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ndunand/moodle-mod_choicegroup/pull/149"},"https://github.com/ndunand/moodle-mod_choicegroup/pull/149")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ndunand/moodle-mod_choicegroup/pull/150"},"https://github.com/ndunand/moodle-mod_choicegroup/pull/150"))),(0,i.kt)("p",null,"You can also look at the ",(0,i.kt)("a",{parentName:"p",href:"../development/plugins-development-guide"},"Moodle App Plugins development guide"),", it has been updated to reflect how to write plugins for the latest version of the app."),(0,i.kt)("h2",{id:"before-35"},"Before 3.5"),(0,i.kt)("p",null,"Before 3.5, the app was written using Ionic 1 and Moodle plugins could add mobile support by writing an Angular JS/Ionic module, compiling it to a zip, and including it in the plugin."),(0,i.kt)("p",null,"Nowadays, you need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_App_Additional_Features"},"Moodle App Additional Features")," plugin to make these plugins compatible with the latest versions of Moodle."),(0,i.kt)("p",null,"You can read about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_Mobile_2_(Ionic_1)_Remote_add-ons"},"Remote add-ons")," for more details."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./remote-themes-upgrade-guide"},"Moodle App Remote themes upgrade guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../development/testing/acceptance-testing#upgrading-tests-from-an-older-version"},"Moodle App Acceptance tests upgrade guide"))))}h.isMDXComponent=!0}}]);