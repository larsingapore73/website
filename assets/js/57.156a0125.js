(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{382:function(a,t,e){"use strict";e.r(t);var s=e(0),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("This tutorial will show you how to install the JavaScript libraries for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.")]),a._v(" "),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[a._v("#")]),a._v(" Setup")]),a._v(" "),e("p",[a._v("For this tutorial we will need "),e("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-js",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage-js"),e("OutboundLink")],1),a._v(" which is a JavaScript library for working with Data Packages.")]),a._v(" "),e("p",[a._v("Using Node Package Manager ("),e("code",[a._v("npm")]),a._v("), install the latest version of "),e("code",[a._v("datapackage-js")]),a._v(" by entering the following into your command line:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" datapackage@latest\n")])])]),e("p",[a._v("Run the "),e("code",[a._v("datapackage --help")]),a._v(" command to find out all options available to you.")]),a._v(" "),e("h2",{attrs:{id:"creating-a-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-package"}},[a._v("#")]),a._v(" Creating a package")]),a._v(" "),e("p",[a._v("The basic building block of a data package is the "),e("code",[a._v("datapackage.json")]),a._v(" file. It contains the schema and metadata of your data collections.")]),a._v(" "),e("p",[a._v("Now that the node package for working with data packages has been installed, create a directory for your project, and use the command "),e("code",[a._v("datapackage infer path/to/file.csv")]),a._v(" to generate a schema for your dataset. To save this file in the directory for editing and sharing, simply append "),e("code",[a._v("> datapackage.json")]),a._v(" to the command above, like so:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("datapackage infer path/to/file.csv "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" datapackage.json\n")])])]),e("p",[a._v("This creates a "),e("code",[a._v("datapackage.json")]),a._v(" file in this directory.")]),a._v(" "),e("h2",{attrs:{id:"publishing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[a._v("#")]),a._v(" Publishing")]),a._v(" "),e("p",[a._v("Now that you have created your Data Package, you might want to"),e("br"),a._v(" "),e("router-link",{attrs:{to:"/docs/publish-online/"}},[a._v("publish your data online")]),a._v(" so that you can"),e("br"),a._v("\nshare it with others.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);