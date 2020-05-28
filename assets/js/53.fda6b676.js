(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{381:function(a,e,t){"use strict";t.r(e);var r=t(1),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Here’s how to publish your tabular data as [Tabular Data"),t("br"),a._v("\nPackages][tdp]. There are 4 simple steps:")]),a._v(" "),t("ol",[t("li",[a._v("Create a folder (directory) - this folder will hold your “data package”")]),a._v(" "),t("li",[a._v("Put your data into [CSV (comma-separated values)][csv]"),t("br"),a._v("\n[csv]: /blog/2018/07/09/csv/"),t("br"),a._v("\nfiles and add them to that folder")]),a._v(" "),t("li",[a._v("Add a "),t("code",[a._v("datapackage.json")]),a._v(" file to hold some information about the data"),t("br"),a._v("\npackage and the data in it e.g. a title, who created it, how other people"),t("br"),a._v("\ncan use it (licensing), etc")]),a._v(" "),t("li",[a._v("Upload the data package online")])]),a._v(" "),t("h3",{attrs:{id:"_1-create-a-directory-folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-directory-folder"}},[a._v("#")]),a._v(" 1. Create a Directory (Folder)")]),a._v(" "),t("p",[a._v("We’ll assume you know how to do this!")]),a._v(" "),t("h3",{attrs:{id:"_2-create-your-csv-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-your-csv-files"}},[a._v("#")]),a._v(" 2. Create your CSV files")]),a._v(" "),t("p",[a._v("CSV is a very common and very simple file format for storing a (single) table of"),t("br"),a._v("\ndata (for example, a single sheet in a spreadsheet). If you’ve got more than"),t("br"),a._v("\none table you can save multiple CSV files, one for each table.")]),a._v(" "),t("p",[a._v("Put the CSV files in the directory you created – we suggest putting them in a"),t("br"),a._v("\nsubdirectory called data so that your base directory does not get too cluttered"),t("br"),a._v("\nup.")]),a._v(" "),t("p",[a._v("You can produce CSV files from almost any application that handles data including"),t("br"),a._v("\nspreadsheets like Excel and databases like MySQL or Postgresql.")]),a._v(" "),t("p",[a._v("You can find out more about CSVs and how to produce them in our [guide to"),t("br"),a._v("\nCSV][csv] or by doing a quick search online for CSV + the name of your tool."),t("br"),a._v("\n[csv]: /blog/2018/07/09/csv/")]),a._v(" "),t("h3",{attrs:{id:"_3-add-a-datapackage-json-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-a-datapackage-json-file"}},[a._v("#")]),a._v(" 3. Add a datapackage.json file")]),a._v(" "),t("p",[a._v("The "),t("code",[a._v("datapackage.json")]),a._v(" is a small file in [JSON][json] format that gives a bit of"),t("br"),a._v("\ninformation about your dataset. You’ll need to create this file and then place"),t("br"),a._v("\nit in the directory you created."),t("br"),a._v("\n[json]: "),t("a",{attrs:{href:"http://en.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://en.wikipedia.org/wiki/JSON"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[t("em",[a._v("Don’t worry if you don’t know what JSON is - we provide some tools that can"),t("br"),a._v("\nautomatically create your this file for you.")])])]),a._v(" "),t("p",[a._v("There are three options for creating the "),t("code",[a._v("datapackage.json")]),a._v(":")]),a._v(" "),t("p",[t("strong",[a._v("Option 1:")]),a._v(" Use the online "),t("a",{attrs:{href:"http://create.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("datapackage.json creator tool"),t("OutboundLink")],1),a._v(" - just answer"),t("br"),a._v("\na few questions and give it your data files and it will spit out a"),t("br"),a._v("\ndatapackage.json for you to include in your project")]),a._v(" "),t("p",[t("strong",[a._v("Option 2:")]),a._v(" Do it yourself - if you’re familiar with JSON you can just create"),t("br"),a._v("\nthis yourself. Take a look at the [Data Package][dp] and [Tabular Data"),t("br"),a._v("\nFormat][tdp] specs."),t("br"),a._v("\n[dp]: /data-package/"),t("br"),a._v("\n[tdp]: /data-package/#tabular-data-package")]),a._v(" "),t("p",[t("strong",[a._v("Option 3:")]),a._v(" Use the [Python][dp-py], [JavaScript][dp-js], [PHP][dp-php], [Julia][dp-jl], [R][dp-r], [Clojure][dp-clj], [Java][dp-java], [Ruby][dp-rb] or [Go][dp-go] libraries for working with data packages.")]),a._v(" "),t("h3",{attrs:{id:"_4-put-the-data-package-online"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-put-the-data-package-online"}},[a._v("#")]),a._v(" 4. Put the data package online")]),a._v(" "),t("p",[a._v("See "),t("router-link",{attrs:{to:"/blog/2016/08/29/publish-online/"}},[a._v("Putting Your Data Package online")])],1),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"appendix-examples-of-tabular-data-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix-examples-of-tabular-data-packages"}},[a._v("#")]),a._v(" Appendix: Examples of Tabular Data Packages")]),a._v(" "),t("p",[a._v("Pay special attention to the scripts directory (and look at the commit logs!)")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://datahub.io/core/finance-vix",target:"_blank",rel:"noopener noreferrer"}},[a._v("datahub.io/core/finance-vix"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://datahub.io/core/s-and-p-500-companies",target:"_blank",rel:"noopener noreferrer"}},[a._v("datahub.io/core/s-and-p-500-companies"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://datahub.io/core/co2-fossil-global",target:"_blank",rel:"noopener noreferrer"}},[a._v("datahub.io/core/co2-fossil-global"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://datahub.io/core/imf-weo",target:"_blank",rel:"noopener noreferrer"}},[a._v("datahub.io/core/imf-weo"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive "),t("a",{attrs:{href:"/data-package"}},[a._v("Frictionless Data Field Guide")]),a._v(".")]),a._v(" "),t("p",[a._v("[[dp]: /data-package"),t("br"),a._v("\n[dp-main]: /data-package"),t("br"),a._v("\n[tdp]: /data-package/#tabular-data-package"),t("br"),a._v("\n[ts]: /table-schema/"),t("br"),a._v("\n[ts-types]: "),t("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/#field-descriptors",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://specs.frictionlessdata.io/table-schema/#field-descriptors"),t("OutboundLink")],1),t("br"),a._v("\n[csv]: /blog/2018/07/09/csv/"),t("br"),a._v("\n[json]: "),t("a",{attrs:{href:"http://en.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://en.wikipedia.org/wiki/JSON"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);