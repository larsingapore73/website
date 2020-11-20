(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{483:function(t,e,a){"use strict";a.r(e);var o=a(1),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("GoodTables is a managed service to validate tabular data. It can check the structure of your data (e.g. all rows have the same number of columns), and its contents (e.g. all dates are valid). Internally, it uses the "),a("a",{attrs:{href:"https://github.com/frictionlessdata/data-quality-spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Quality Spec"),a("OutboundLink")],1),t._v(" for common tabular data errors. GoodTables also supports data described by "),a("router-link",{attrs:{to:"/tooling/data-package-tools/"}},[t._v("Data Package")]),t._v(" and "),a("router-link",{attrs:{to:"/tooling/table-schema-tools/"}},[t._v("Table Schema")]),t._v(".")],1),t._v(" "),a("p",[t._v("Let’s visit the "),a("a",{attrs:{href:"https://goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GoodTables"),a("OutboundLink")],1),t._v(" website and login with GitHub to start the process of validating our data.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/Mxkgsoa.png",alt:"goodtables dashboard"}})]),t._v(" "),a("p",[t._v("Add a data source in the dashboard using GitHub (Amazon S3 is also supported, but we’re only covering GitHub here):")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),a("p",[t._v("We need to create a GitHub repository to store our "),a("code",[t._v("helloworld.csv")]),t._v(" file. Make sure you use the valid CSV from our example above.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/6H7jOsf.png",alt:"adding source to goodtables"}})]),t._v(" "),a("p",[t._v("Because we have valid and well-structured data in our"),a("code",[t._v("helloworld.csv")]),t._v(", the results will come back as valid, as seen in the image below")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/cfp1Jej.png",alt:"valid data"}})]),t._v(" "),a("p",[t._v("Now, let’s change to invalid tabular data and see what the checks return:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Name,Email,,Age\nJill,jill@foo.com\nJack,jack@bar.com,33\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(",Jane,jane@foo.com, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://i.imgur.com/LIDV1OC.png",alt:"Invalid data"}})]),t._v(" "),a("p",[t._v("Of course, this build will fail because some structural errors were detected by GoodTables ("),a("strong",[t._v("“Blank Header”, “Missing value”, and “Extra Value”")]),t._v(").")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Additionally, here’s a video walkthrough of the content outlined above")])])]),t._v(" "),a("iframe",{attrs:{width:"730",height:"315",src:"https://www.youtube.com/embed/QSvbMmvhxN8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=s.exports}}]);