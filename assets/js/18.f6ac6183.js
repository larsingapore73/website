(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(a,t,e){a.exports=e.p+"assets/img/overview-of-data-packages.f9181de3.png"},292:function(a,t,e){a.exports=e.p+"assets/img/data-package-core-components.b5b4bcaf.png"},293:function(a,t,e){a.exports=e.p+"assets/img/tableschema-python.439ae5a1.png"},384:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("This guide introduces you to the Frictionless Data tool stack and how you can contribute to it.")]),a._v(" "),r("h2",{attrs:{id:"asking-questions-and-getting-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asking-questions-and-getting-help"}},[a._v("#")]),a._v(" Asking questions and getting help")]),a._v(" "),r("p",[a._v("If you have a question or want help the best way to get assistance is to join our public chat channel and ask there – prompt responses are guaranteed:")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://gitter.im/frictionlessdata/chat"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"example-and-test-data-packages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-and-test-data-packages"}},[a._v("#")]),a._v(" Example and Test Data Packages")]),a._v(" "),r("p",[a._v("We have prepared a variety of example and test data packages for use in development:")]),a._v(" "),r("ul",[r("li",[a._v("Standard test data packages in the Python test suite: "),r("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py/tree/master/data",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/goodtables-py/tree/master/data"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Exemplar data packages (used in tutorials): "),r("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/example-data-packages"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("Core Data Packages – variety of of high quality “real-world” reference and indicator datasets as data packages: "),r("a",{attrs:{href:"http://datahub.io/core",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"key-concepts-and-pre-requisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-concepts-and-pre-requisites"}},[a._v("#")]),a._v(" Key Concepts and Pre-requisites")]),a._v(" "),r("p",[a._v("This entity diagram gives an overview of how the main different objects fit together. The top row is a generic Data Package and the row below shows the case of Tabular Data Package.")]),a._v(" "),r("p",[a._v("This guide will focus on "),r("router-link",{attrs:{to:"/docs/tabular-data-package/"}},[a._v("Tabular Data Packages")]),a._v(" as that is the most commonly used form of Data Packages and is suited to most tools.")],1),a._v(" "),r("p",[r("img",{attrs:{src:e(291),alt:"overview of data packages and tabular data packages"}}),r("br"),a._v(" "),r("em",[a._v("overview of data packages and tabular data packages")])]),a._v(" "),r("p",[a._v("This guide will assume you already have some high-level familiarity with the "),r("a",{attrs:{href:"/data-packages"}},[a._v("Data Package family of specifications")]),a._v(". Please a take a few minutes to take a look at the "),r("a",{attrs:{href:"/data-packages"}},[a._v("overview")]),a._v(" if you are not yet familiar with those specs.")]),a._v(" "),r("h2",{attrs:{id:"implementing-a-data-package-tool-stack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-data-package-tool-stack"}},[a._v("#")]),a._v(" Implementing a Data Package Tool Stack")]),a._v(" "),r("p",[a._v("Here’s a diagram that illustrates some of the core components of a full Data Package implementation.")]),a._v(" "),r("p",[a._v("The "),r("em",[a._v("italicised items")]),a._v(" are there to indicate that this functionality is less important and is often not included in implementations.")]),a._v(" "),r("p",[r("img",{attrs:{src:e(292),alt:"core components of a full Data Package implementation"}}),r("br"),a._v(" "),r("em",[a._v("core components of a full Data Package implementation")])]),a._v(" "),r("h3",{attrs:{id:"general-introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#general-introduction"}},[a._v("#")]),a._v(" General Introduction")]),a._v(" "),r("p",[a._v("As a Developer the primary actions you want to support are:")]),a._v(" "),r("ul",[r("li",[a._v("Importing data (and metadata) in a Data Package into your system")]),a._v(" "),r("li",[a._v("Exporting data (and metadata) from your system to a Data Package")])]),a._v(" "),r("p",[a._v("Addition actions include:")]),a._v(" "),r("ul",[r("li",[a._v("Creating a Data Package from scratch")]),a._v(" "),r("li",[a._v("Validating the data in a Data Package (is the data how it says it should be)")]),a._v(" "),r("li",[a._v("Validating the metadata in a Data Package")]),a._v(" "),r("li",[a._v("Visualizing the Data Package")]),a._v(" "),r("li",[a._v("Publishing the Data Package to an online repository")])]),a._v(" "),r("h3",{attrs:{id:"programming-language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#programming-language"}},[a._v("#")]),a._v(" Programming Language")]),a._v(" "),r("p",[a._v("This is example pseudo-code for a Data Package library in a programming language like Python or Javascript.")]),a._v(" "),r("p",[r("strong",[a._v("Importing a Data Package")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('# location of Data Package e.g. URL or path on disk\nvar location = /my/data/package/\n\n# this "imports" the Data Package providing a native DataPackage object to work with\n# Note: you usually will not load the data itself\nvar myDataPackage = new DataPackage(location)\nvar myDataResource = myDataPackage.getResource(indexOrNameOfResource)\n\n# this would return an iterator over row objects if the data was in rows\n# optional support for casting data to the right type based on Table Schema\nvar dataStream = myDataResource.stream(cast=True)\n\n# instead of an iterator you may want simply to convert to native structured data type\n# for example, in R where you have a dataframe you would do something like\nvar dataframe = myDataResource.asDataFrame()\n')])])]),r("p",[r("strong",[a._v("Accessing metadata")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# Here we  access to Data Package metadata\n# the exact accessor structure is up to you - here it an attribute called\n# metadata that acts like a dictionary\nprint myDataPackage.descriptor['title']\n")])])]),r("p",[r("strong",[a._v("Exporting a Data Package")])]),a._v(" "),r("p",[a._v("A simple functional style approach that gets across the idea:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# e.g. a location on disk\nvar exportLocation = /path/to/where/data/package/should/go\nexport_data_package(nativeDataObject, exportLocation)\n")])])]),r("p",[a._v("A more object-oriented model fitting with our previous examples would be:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var myDataPackage = export_data_package(nativeDataObject)\nmyDataPackage.save(exportLocation)\n\n# if the native data is more like a table a data then you might have\nvar myDataPackage = new DataPackage()\nmyDataPackage.addResourceFromNativeDataObject(nativeDataObject)\n\n# once exported to\nmyDataPackage.saveToDisk(path)\n\n# You can also provide access to the Data Package datapackage.json\n# That way clients of your library can decide how they save this themselves\nvar readyForJSONSaving  = myDataPackage.dataPackageJSON()\nsaveJson(readyForJSONSaving, '/path/to/save/datapackage.json')\n")])])]),r("p",[r("strong",[a._v("Creating a Data Package from scratch")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var myMetadata = {\n  title: 'My Amazing Data'\n}\nvar myDataPackage = new DataPackage(myMetadata)\n")])])]),r("p",[r("strong",[a._v("Data Validation")])]),a._v(" "),r("p",[a._v("This is Tabular Data specific.")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("var resource = myDataPackage.getResource()\n# check the data conforms to the Table Schema\nresource.validate()\n\n# more explicit version might look like\nvar schema = resource.schemaAsJSON()\nvar tsValidator = new TSValidator(schema)\n# validate a data stream\nschema.validate(resource.stream())\n")])])]),r("p",[r("strong",[a._v("Validating Metadata")])]),a._v(" "),r("h3",{attrs:{id:"specific-software-and-platforms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specific-software-and-platforms"}},[a._v("#")]),a._v(" Specific Software and Platforms")]),a._v(" "),r("p",[a._v("For a particular tool or platform usually all you need is simple import or export:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# import into SQL (implemented in some language)\nimport_datapackage_into_sql(pathToDataPackage, sqlDatabaseInfo)\n\n# import into Google BigQuery\nimport_datapackage_into_bigquery(pathToDataPackage, bigQueryInfo)\n")])])]),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),r("h3",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[a._v("#")]),a._v(" Python")]),a._v(" "),r("p",[a._v("The main Python library for working with Data Packages is "),r("code",[a._v("datapackage")]),a._v(":")]),a._v(" "),r("p",[a._v("See "),r("a",{attrs:{href:"http://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://github.com/frictionlessdata/datapackage-py"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("Additional functionality such as TS and TS integration:")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/tableschema-py"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-sql-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/tableschema-sql-py"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),r("OutboundLink")],1)])]),a._v(" "),r("p",[r("code",[a._v("tabulator")]),a._v(" is a utility library that provides a consistent interface for reading tabular data:")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/frictionlessdata/tabulator-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata/tabulator-py"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("Here’s an overview of the Python libraries available and how they fit together:")]),a._v(" "),r("p",[r("img",{attrs:{src:e(293),alt:"how the different tableschema libraries in python fit together"}}),r("br"),a._v(" "),r("em",[a._v("how the different tableschema libraries in python fit together")])]),a._v(" "),r("h3",{attrs:{id:"javascript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[a._v("#")]),a._v(" Javascript")]),a._v(" "),r("p",[a._v("Following “Node” style we have partitioned the Javascript library into pieces, see this list of libraries:")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/frictionlessdata?language=javascript",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/frictionlessdata?language=javascript"),r("OutboundLink")],1)])]),a._v(" "),r("h3",{attrs:{id:"sql-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-integration"}},[a._v("#")]),a._v(" SQL Integration")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-sql-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("Here’s a walk-through"),r("OutboundLink")],1),a._v(" of the SQL integration for "),r("router-link",{attrs:{to:"/specs/table-schema/"}},[a._v("Table Schema")]),a._v(" written in python. This integration allows you to generate SQL tables, load and extract data based on "),r("router-link",{attrs:{to:"/specs/table-schema/"}},[a._v("Table Schema")]),a._v(" descriptors.")],1),a._v(" "),r("p",[a._v("Related blog post: "),r("a",{attrs:{href:"http://okfnlabs.org/blog/2017/10/05/frictionless-data-specs-v1-updates.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://okfnlabs.org/blog/2017/10/05/frictionless-data-specs-v1-updates.html"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);