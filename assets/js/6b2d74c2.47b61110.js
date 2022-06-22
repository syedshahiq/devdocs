"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[22106],{88052:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var r=a(83117),o=a(80102),i=(a(67294),a(3905)),l=a(13904),n=["components"],s={title:"Moodle App 3.9.5 release notes",sidebar_label:"Moodle App 3.9.5",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v3/v3.9.5",id:"app_releases/v3/v3.9.5",title:"Moodle App 3.9.5 release notes",description:"Release date: 27 August 2021",source:"@site/general/app_releases/v3/v3.9.5.md",sourceDirName:"app_releases/v3",slug:"/app_releases/v3/v3.9.5",permalink:"/devdocs/general/app_releases/v3/v3.9.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v3/v3.9.5.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1655888803,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"Moodle App 3.9.5 release notes",sidebar_label:"Moodle App 3.9.5",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle App 3.9.4",permalink:"/devdocs/general/app_releases/v3/v3.9.4"},next:{title:"Moodle Mobile 2.0",permalink:"/devdocs/general/app_releases/v2/v2.0"}},k={},c=[{value:"New features and improvements",id:"new-features-and-improvements",level:2},{value:"Ionic 5 upgrade",id:"ionic-5-upgrade",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"New Feature",id:"new-feature",level:3},{value:"Task",id:"task",level:3},{value:"Improvement",id:"improvement",level:3},{value:"Sub-task",id:"sub-task",level:3}],u={toc:c};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,r.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 27 August 2021"),(0,i.kt)("h2",{id:"new-features-and-improvements"},"New features and improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessibility improvements to achieve WCAG 2.1 AA compliance"),(0,i.kt)("li",{parentName:"ul"},"H5P improvements - play packages using as much screen as possible and improve the way they are embedded"),(0,i.kt)("li",{parentName:"ul"},"Moodle 3.11 student activity completion support"),(0,i.kt)("li",{parentName:"ul"},"LTI 1.3 launch support"),(0,i.kt)("li",{parentName:"ul"},"iOS ITP settings support to allow the iOS version of the app to embed content from different URLs"),(0,i.kt)("li",{parentName:"ul"},"New option in iOS for allowing a user to open a file using the system preview or a dedicated app"),(0,i.kt)("li",{parentName:"ul"},"Plagiarism information displayed in essay question types"),(0,i.kt)("li",{parentName:"ul"},"Word count support in quiz essay questions"),(0,i.kt)("li",{parentName:"ul"},"Quiz pass grade displayed on quiz front page")),(0,i.kt)("h2",{id:"ionic-5-upgrade"},"Ionic 5 upgrade"),(0,i.kt)("p",null,"In this version, we have upgraded the framework we use for building the app. Note that there are several changes which may impact plugins or sites using their own custom mobile CSS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have developed a plugin that is supported for the Moodle app please read [","[Adapt your Mobile plugins to Ionic 5|Moodle App Plugins Upgrade Guide]","]"),(0,i.kt)("li",{parentName:"ul"},"If you have a Premium app subscription and your own Moodle app theme please read ",(0,i.kt)("a",{parentName:"li",href:"/docs/moodleapp/upgrading/remote-themes-upgrade-guide"},"Ionic5 style migration guide"))),(0,i.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,i.kt)("h3",{id:"bug"},"Bug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3496"},"MOBILE-3496"),' - NOT_FOUND_ERR when uploading video for Assignment from "Photo albums" on iOS'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3563"},"MOBILE-3563")," - Workshop does not have submit button, when allowed late submissions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3567"},"MOBILE-3567")," - The app does not launch a course view event after the user self-enrol into the course"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3615"},"MOBILE-3615"),' - Button "Help" opens wrong website'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3623"},"MOBILE-3623")," - Site plugins: success message not seen if combined with goBackOnSuccess"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3670"},"MOBILE-3670")," - Navbar color and custom CSS clash on login page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3674"},"MOBILE-3674")," - Make CoreUrl.sameDomainAndPath case insensitive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3693"},"MOBILE-3693")," - Radio button: item not clickable if it contains links"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3694"},"MOBILE-3694")," - Auto-login only works in first iframe if several are displayed at the same time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3701"},"MOBILE-3701")," - iOS: SCORM package reloaded when clicking a link with href '#' and handled via JS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3704"},"MOBILE-3704")," - Page: Files with parameters not working"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3709"},"MOBILE-3709")," - SCORM does not register cmi.core.total_time APP mobile"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3713"},"MOBILE-3713")," - Cookies not sent to iframes in iOS 14 (preventing embedding external content such as H5P)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3722"},"MOBILE-3722")," - It is not possible to create events for 2022 onwards"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3724"},"MOBILE-3724")," - Fix LTI 1.3 launch in the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3789"},"MOBILE-3789")," - Assignment blind marking"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3797"},"MOBILE-3797")," - User profiles can cause infinite requests with custom course themes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3832"},"MOBILE-3832")," - Infinite scroll: infinite requests when an error happens")),(0,i.kt)("h3",{id:"new-feature"},"New Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3757"},"MOBILE-3757")," - Support new student completion")),(0,i.kt)("h3",{id:"task"},"Task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3732"},"MOBILE-3732")," - Display plagiarism information in the essay question type")),(0,i.kt)("h3",{id:"improvement"},"Improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3673"},"MOBILE-3673")," - Update target SDK to 30"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3680"},"MOBILE-3680")," - Apply essay question min/max word count in the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3698"},"MOBILE-3698")," - Review if word count changes done in MDL-70796 should be applied to the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3716"},"MOBILE-3716")," - Include the Scan QR code button in the reconnect screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3734"},"MOBILE-3734")," - Review single activity course format in Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3739"},"MOBILE-3739")," - Add a leave guard on chat"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3742"},"MOBILE-3742")," - Support links to other sites in Ionic 5 (redirect)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3754"},"MOBILE-3754")," - Pass grade not displayed on quiz front page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3758"},"MOBILE-3758")," - Update H5P library to 1.24.02"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3761"},"MOBILE-3761"),' - Show "open with" dialog when opening a file'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3762"},"MOBILE-3762")," - Recaptcha open button does not explain the function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3765"},"MOBILE-3765")," - Include a link to a permanent survey about the Moodle app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3766"},"MOBILE-3766")," - Include a link to provide feedback during beta testing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3771"},"MOBILE-3771")," - Do not display the bottom navigation menu for the H5P activity when playing a package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3783"},"MOBILE-3783")," - Release Moodle app version 3.9.5")),(0,i.kt)("h3",{id:"sub-task"},"Sub-task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3565"},"MOBILE-3565")," - Create a minimum base of the app using Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3591"},"MOBILE-3591")," - Migrate tags structure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3592"},"MOBILE-3592")," - Migrate user feature to ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3608"},"MOBILE-3608")," - Migrate blocks to ionic5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3609"},"MOBILE-3609")," - Implement split view component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3620"},"MOBILE-3620")," - Migrate filters to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3624"},"MOBILE-3624")," - Migrate badges to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3625"},"MOBILE-3625")," - Migrate blocks with module dependency to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3626"},"MOBILE-3626")," - Migrate calendar to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3627"},"MOBILE-3627")," - Migrate blog feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3628"},"MOBILE-3628")," - Migrate competency and learning plans to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3629"},"MOBILE-3629")," - Migrate course completion to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3630"},"MOBILE-3630")," - Migrate shared files to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3631"},"MOBILE-3631")," - Migrate messaging addon to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3632"},"MOBILE-3632")," - Migrate Notes to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3633"},"MOBILE-3633")," - Migrate notifications to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3634"},"MOBILE-3634")," - Migrate remote themes to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3635"},"MOBILE-3635")," - Migrate storage manager to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3636"},"MOBILE-3636")," - Migrate assign activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3637"},"MOBILE-3637")," - Migrate book activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3638"},"MOBILE-3638")," - Migrate chat activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3639"},"MOBILE-3639")," - Migrate choice activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3640"},"MOBILE-3640")," - Migrate database activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3641"},"MOBILE-3641")," - Migrate feedback activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3642"},"MOBILE-3642")," - Migrate folder activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3643"},"MOBILE-3643")," - Migrate forum activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3644"},"MOBILE-3644")," - Migrate glossary activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3645"},"MOBILE-3645")," - Migrate h5p activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3646"},"MOBILE-3646")," - Migrate IMSCP activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3647"},"MOBILE-3647")," - Migrate label activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3648"},"MOBILE-3648")," - Migrate lesson activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3649"},"MOBILE-3649")," - Migrate lti activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3650"},"MOBILE-3650")," - Migrate page activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3651"},"MOBILE-3651")," - Migrate quiz activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3652"},"MOBILE-3652")," - Migrate resource activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3653"},"MOBILE-3653")," - Migrate scorm activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3654"},"MOBILE-3654")," - Migrate survey activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3655"},"MOBILE-3655")," - Migrate url activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3656"},"MOBILE-3656")," - Migrate wiki activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3657"},"MOBILE-3657")," - Migrate workshop activity to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3658"},"MOBILE-3658")," - Migrate comments feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3659"},"MOBILE-3659")," - Migrate course feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3660"},"MOBILE-3660")," - Migrate courses feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3661"},"MOBILE-3661")," - Migrate grades feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3662"},"MOBILE-3662")," - Migrate push notifications feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3663"},"MOBILE-3663")," - Migrate rating feature to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3664"},"MOBILE-3664")," - Migrate site plugins to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3665"},"MOBILE-3665")," - Change language files placement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3666"},"MOBILE-3666")," - Migrate core H5P code to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3675"},"MOBILE-3675")," - Migrate participants and course grades tab to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3689"},"MOBILE-3689")," - Review initialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3690"},"MOBILE-3690")," - Abstract some splitview code to improve navigation and resizing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3691"},"MOBILE-3691")," - Prevent iframe navigation from taking over the app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3712"},"MOBILE-3712")," - Migrate QR scanner to Ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3720"},"MOBILE-3720")," - Review platforms support"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3738"},"MOBILE-3738")," - Migrate Behat tests to ionic 5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3744"},"MOBILE-3744")," - Improve icons labelling"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3746"},"MOBILE-3746")," - Solve iOS Visible Keyboard Focus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3749"},"MOBILE-3749")," - Increase touch target area to 44x44 at least"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3750"},"MOBILE-3750")," - Add an alternative way to horizontal scrolls"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3751"},"MOBILE-3751")," - Consistent heading design"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3752"},"MOBILE-3752")," - Table related a11y issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3753"},"MOBILE-3753")," - Improve buttons labelling"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-3759"},"MOBILE-3759")," - Review ion-badges a11y text")))}h.isMDXComponent=!0}}]);