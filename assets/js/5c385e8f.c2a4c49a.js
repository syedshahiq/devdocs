"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[22542],{86489:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=t(83117),i=t(80102),s=(t(67294),t(3905)),r=t(13904),a=["components"],l={title:"File Converters",tags:["File","core_file","file_converter","API","PDF","Conversion","Document"]},c=void 0,d={unversionedId:"apis/subsystems/files/converter",id:"apis/subsystems/files/converter",title:"File Converters",description:"Users are able to submit a wide range of files, and it is a common requirement to convert these to alternative formats.",source:"@site/docs/apis/subsystems/files/converter.md",sourceDirName:"apis/subsystems/files",slug:"/apis/subsystems/files/converter",permalink:"/devdocs/docs/apis/subsystems/files/converter",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/files/converter.md",tags:[{label:"File",permalink:"/devdocs/docs/tags/file"},{label:"core_file",permalink:"/devdocs/docs/tags/core-file"},{label:"file_converter",permalink:"/devdocs/docs/tags/file-converter"},{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"PDF",permalink:"/devdocs/docs/tags/pdf"},{label:"Conversion",permalink:"/devdocs/docs/tags/conversion"},{label:"Document",permalink:"/devdocs/docs/tags/document"}],version:"current",lastUpdatedBy:"Eloy Lafuente",lastUpdatedAt:1655888803,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"File Converters",tags:["File","core_file","file_converter","API","PDF","Conversion","Document"]},sidebar:"docs",previous:{title:"File Browser API",permalink:"/devdocs/docs/apis/subsystems/files/browsing"},next:{title:"File API internals",permalink:"/devdocs/docs/apis/subsystems/files/internals"}},p={},u=[{value:"Using the file converter API",id:"using-the-file-converter-api",level:2},{value:"Polling for updates on an existing conversion",id:"polling-for-updates-on-an-existing-conversion",level:3},{value:"Checking status of a conversion",id:"checking-status-of-a-conversion",level:3},{value:"Fetching the target file",id:"fetching-the-target-file",level:3},{value:"See also",id:"see-also",level:2}],v={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,(0,o.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Users are able to submit a wide range of files, and it is a common requirement to convert these to alternative formats."),(0,s.kt)("p",null,"The most obvious example of this in Moodle core is in the ",(0,s.kt)("inlineCode",{parentName:"p"},"assignfeedback_editpdf")," plugin which allows for conversion from a variety of document types into PDF to facilitate annotation."),(0,s.kt)("p",null,"The file converters distributed with Moodle currently are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Unoconv"),(0,s.kt)("li",{parentName:"ul"},"Google Drive")),(0,s.kt)("p",null,"The file converter API allows for conversion via multiple plugins and will automatically fallback to another suitable plugin upon failure."),(0,s.kt)("p",null,"The API is designed to be called asynchronously as many cloud services offering document conversion offer an asynchronous API themselves."),(0,s.kt)("h2",{id:"using-the-file-converter-api"},"Using the file converter API"),(0,s.kt)("p",null,"A file conversion is performed by the ",(0,s.kt)("inlineCode",{parentName:"p"},"core_files\\converter")," API and a single conversion is represented by the ",(0,s.kt)("inlineCode",{parentName:"p"},"core\\files\\conversion")," class."),(0,s.kt)("p",null,"Individual file conversions should always be accessed by the ",(0,s.kt)("inlineCode",{parentName:"p"},"core_files\\converter")," API."),(0,s.kt)("p",null,"A file conversion is fetched or created by calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_conversion")," function on the converter API and passing in an existing ",(0,s.kt)("inlineCode",{parentName:"p"},"stored_file")," record, along with the target format."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Starting a new conversion"',title:'"Starting',a:!0,new:!0,'conversion"':!0},"$converter = new \\core_files\\converter();\n$conversion = $converter->start_conversion($file, 'pdf');\n")),(0,s.kt)("p",null,"If an existing file conversion matching the file and target format exists, the conversion record for this file will be returned, otherwise a new conversion is created and returned."),(0,s.kt)("p",null,"To force a fresh conversion, a third boolean parameter can be passed, though this should not normally be necessary."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Forcing a conversion to be performed again"',title:'"Forcing',a:!0,conversion:!0,to:!0,be:!0,performed:!0,'again"':!0},"$converter = new \\core_files\\converter();\n$conversion = $converter->start_conversion($file, 'pdf', true);\n")),(0,s.kt)("h3",{id:"polling-for-updates-on-an-existing-conversion"},"Polling for updates on an existing conversion"),(0,s.kt)("p",null,"When the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_conversion")," function is called, it automatically polls for any update on the conversion so it should not normally be necessary to poll the status separately."),(0,s.kt)("p",null,"It is however possible to do so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Polling the API for the status of a conversino"',title:'"Polling',the:!0,API:!0,for:!0,status:!0,of:!0,a:!0,'conversino"':!0},"$converter = new \\core_files\\converter();\n$conversion = $converter->start_conversion($file, 'pdf');\n$converter->poll_conversion($conversion);\n")),(0,s.kt)("h3",{id:"checking-status-of-a-conversion"},"Checking status of a conversion"),(0,s.kt)("p",null,"File conversions can have one of four states:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"STATUS_PENDING")," - The conversion has not yet started;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"STATUS_IN_PROGRESS")," - A conversion has been picked up by a file converter and is currently in progress;"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"STATUS_COMPLETE")," - The conversion was successful and the converted file is available; and"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"STATUS_FAILED")," - All attempts to convert the file have failed.")),(0,s.kt)("p",null,"The conversion API provides a way to check the status of the conversion with the ",(0,s.kt)("inlineCode",{parentName:"p"},"$conversion->get_status()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Fetching status"',title:'"Fetching','status"':!0},"$converter = new \\core_files\\converter();\n$conversion = $converter->start_conversion($file, 'pdf');\n\nswitch ($conversion->get_status()) {\n    case \\core_files\\conversion::STATUS_COMPLETE:\n        // The file is ready. Do something with it.\n    case \\core_files\\conversion::STATUS_PENDING:\n    case \\core_files\\conversion::STATUS_IN_PROGRESS:\n        // Conversion still ongoing. Display spinner to the user.\n    case \\core_files\\conversion::STATUS_FAILED:\n        // Permanent failure - handle to the user.\n}\n")),(0,s.kt)("h3",{id:"fetching-the-target-file"},"Fetching the target file"),(0,s.kt)("p",null,"Following a conversion, the target file is stored as a ",(0,s.kt)("inlineCode",{parentName:"p"},"stored_file")," record and can be fetched for consumption elsewhere in your API:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Fetching the new file"',title:'"Fetching',the:!0,new:!0,'file"':!0},"if ($conversion->get_status() === \\core_files\\conversion::STATUS_COMPLETE) {\n    $file = $conversion->get_destfile();\n}\n")),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Creating a new ",(0,s.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/plugintypes/fileconverter/"},"file converter plugin"))))}f.isMDXComponent=!0}}]);