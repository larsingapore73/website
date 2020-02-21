(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{390:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("FAQs and best practice patterns for publishing data packages.")]),a._v(" "),e("p",[a._v("Complete specifications are available at "),e("router-link",{attrs:{to:"/specs/data-package/"}},[a._v("specs/data-package")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"data-package-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-package-name"}},[a._v("#")]),a._v(" Data Package Name")]),a._v(" "),e("p",[a._v("The Data Package name is used in the "),e("code",[a._v("name")]),a._v(" field of the "),e("code",[a._v("datapackage.json")]),a._v(".")]),a._v(" "),e("p",[e("em",[a._v("This name is also frequently used for the folder/directory in which the Data"),e("br"),a._v("\nPackage is stored.")])]),a._v(" "),e("p",[a._v("As per the Data Package spec The name SHOULD be:")]),a._v(" "),e("ul",[e("li",[a._v("lower-case")]),a._v(" "),e("li",[a._v("use ‘-’ for word separators")]),a._v(" "),e("li",[a._v("reasonably concise (3-4 words)")])]),a._v(" "),e("p",[e("strong",[a._v("Naming conventions")])]),a._v(" "),e("p",[a._v("For country specific datasets:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("{topic}                  # e.g. gdp\n{topic}-{2-digit-iso}    # e.g. gdp-us\n")])])]),e("p",[a._v("For time series data:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[...-]year\n[...-]quarter\n[...-]month\n[...-]day\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"resource-and-file-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource-and-file-names"}},[a._v("#")]),a._v(" Resource and File Names")]),a._v(" "),e("p",[a._v("Similar to Data Package Names:")]),a._v(" "),e("ul",[e("li",[a._v("lower-case")]),a._v(" "),e("li",[a._v("use ‘-’ for word separators")])]),a._v(" "),e("p",[a._v("Resource names SHOULD, usually, be the same as the name of the associated file"),e("br"),a._v("\non disk but without the file extension. e.g.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("gdp-quarterly     # resource name\ngdp-quarterly.csv # on disk\n")])])]),e("p",[a._v("Naming conventions of files follow that for data packages in terms of country"),e("br"),a._v("\nor time series facets.")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"descriptor-datapackage-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#descriptor-datapackage-json"}},[a._v("#")]),a._v(" Descriptor "),e("code",[a._v("datapackage.json")])]),a._v(" "),e("h3",{attrs:{id:"alignment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alignment"}},[a._v("#")]),a._v(" Alignment")]),a._v(" "),e("p",[a._v("With JSON, data is structured in a nested way through curly and squared"),e("br"),a._v("\nbrackets. Though the alignment of these structures is not relevant for computer"),e("br"),a._v("\nprograms, it makes it easier for the human reader if they are properly aligned.")]),a._v(" "),e("p",[a._v("Good alignment:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"corruption-perceptions-index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Corruption Perceptions Index (CPI)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Transparency International"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"web"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://www.transparency.org/research/cpi/overview"')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Bad alignment:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"corruption-perceptions-index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Corruption Perceptions Index (CPI)"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sources"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Transparency International"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"web"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://www.transparency.org/research/cpi/overview"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Please make sure to have your "),e("code",[a._v("datapackage.json")]),a._v(" well structured to ease the"),e("br"),a._v("\nunderstanding of your Data Package content. The "),e("a",{attrs:{href:"http://data.okfn.org/tools/create",target:"_blank",rel:"noopener noreferrer"}},[a._v("Online DataPackage.json"),e("br"),a._v("\nCreator"),e("OutboundLink")],1),a._v(" can help you create the general"),e("br"),a._v("\nstructure.")]),a._v(" "),e("h3",{attrs:{id:"contributors-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors-fields"}},[a._v("#")]),a._v(" Contributors fields")]),a._v(" "),e("p",[a._v("Add the ‘contributors’ field (original author of the package - see"),e("br"),a._v(" "),e("router-link",{attrs:{to:"/specs/data-package/"}},[a._v("specs/data-package")]),a._v(" if you wish to keep the credits for the"),e("br"),a._v("\npackage.")],1),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"data-package-folder-names-and-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-package-folder-names-and-structure"}},[a._v("#")]),a._v(" Data Package Folder Names and Structure")]),a._v(" "),e("p",[a._v("It is standard practice to use the Data Package name (from the"),e("br"),a._v(" "),e("code",[a._v("datapackage.json")]),a._v(") for the name of the folder/directory in which the Data"),e("br"),a._v("\nPackage is kept.")]),a._v(" "),e("p",[a._v("If storing in e.g. git(hub) this would also be the the name of the repository.")]),a._v(" "),e("p",[a._v("If you include scripts allowing to automate the data extraction process, these"),e("br"),a._v("\nshould be stored in a "),e("code",[a._v("script")]),a._v(" folder/directory.")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"readme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[a._v("#")]),a._v(" README")]),a._v(" "),e("p",[a._v("A README is a text file giving (human-readable) information about your dataset.")]),a._v(" "),e("p",[a._v("Data Packages SHOULD have a README.")]),a._v(" "),e("h3",{attrs:{id:"formatting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#formatting"}},[a._v("#")]),a._v(" Formatting")]),a._v(" "),e("p",[a._v("The README SHOULD be a plain text file (no word or rich text etc) and SHOULD"),e("br"),a._v("\nuse markdown to allow for formatting")]),a._v(" "),e("h3",{attrs:{id:"file-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-name"}},[a._v("#")]),a._v(" File Name")]),a._v(" "),e("p",[a._v("If markdown is used the file SHOULD be named "),e("code",[a._v("README.md")]),a._v(" and otherwise SHOULD"),e("br"),a._v("\nbe named "),e("code",[a._v("README.txt")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"sections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sections"}},[a._v("#")]),a._v(" Sections")]),a._v(" "),e("p",[a._v("You can include anything you like in your README. It is standard practice to"),e("br"),a._v("\ninclude some (if possible all) of the following sections: "),e("strong",[a._v("Introduction, Data,"),e("br"),a._v("\nPreparation, License")]),a._v(".")]),a._v(" "),e("p",[a._v("We SHOULD NOT include the title of the Data Package at the top of the README.")]),a._v(" "),e("p",[a._v("Each section other than the introduction should be headed with its name using"),e("br"),a._v("\nlevel 2 heading in markdown e.g. for the data section you would have the"),e("br"),a._v("\nfollowing markdown in your README:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("## Data\n")])])]),e("h4",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Start with a short description of the dataset (the first sentence and first"),e("br"),a._v("\nparagraph should be extractable to provide short standalone descriptions).")]),a._v(" "),e("p",[a._v("Unlike other sections "),e("strong",[a._v("this section SHOULD NOT have a heading")]),a._v(" as it starts"),e("br"),a._v("\nthe README. (i.e. you do not need the heading "),e("code",[a._v("## Introduction")])]),a._v(" "),e("h4",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[a._v("#")]),a._v(" Data")]),a._v(" "),e("p",[a._v("Put specific information about the data in a Data section. This can be things"),e("br"),a._v("\nlike information about the source of the data, the specific structure of the"),e("br"),a._v("\ndata, missing values etc.")]),a._v(" "),e("h4",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[a._v("#")]),a._v(" Preparation")]),a._v(" "),e("p",[a._v("Put information on preparing the data in a Preparation section. In particular,"),e("br"),a._v("\nany instructions about how to run any preparation and processing scripts to"),e("br"),a._v("\ngenerate the data should go here.")]),a._v(" "),e("h4",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),e("p",[a._v("Put additional information on the permissions and licensing of the data in the"),e("br"),a._v("\nData Package in the License section.")]),a._v(" "),e("p",[a._v("Since licensing information is often not clear from the data producers, the"),e("br"),a._v("\nguideline here is to license the Data Package under the Public Domain"),e("br"),a._v("\nDedication and License, and then to add any relevant information or disclaimers"),e("br"),a._v("\nregarding the source data.")]),a._v(" "),e("p",[a._v("See, for example:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://datahub.io/core/corruption-perceptions-index#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/corruption-perceptions-index#readme"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://datahub.io/core/geo-nuts-administrative-boundaries#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/geo-nuts-administrative-boundaries#readme"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("See also the following thread "),e("a",{attrs:{href:"https://discuss.okfn.org/t/copyright-on-data-sources/189",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://discuss.okfn.org/t/copyright-on-data-sources/189"),e("OutboundLink")],1)]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"validate-and-preview-your-data-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate-and-preview-your-data-package"}},[a._v("#")]),a._v(" Validate and preview your Data Package")]),a._v(" "),e("p",[a._v("Use the "),e("a",{attrs:{href:"http://create.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Package Creator"),e("OutboundLink")],1),a._v(" to check that your "),e("code",[a._v("datapackage.json")]),e("br"),a._v("\nand Data Package are good to go. Simply drop the URL to your "),e("code",[a._v("datapackage.json")]),a._v(" file in"),e("br"),a._v("\nthe input box, or upload from a local source, and press "),e("code",[a._v("Validate")]),a._v(". If everything is fine, "),e("code",[a._v("Status: Valid")]),a._v(" is"),e("br"),a._v("\nreturned.")]),a._v(" "),e("p",[a._v("Then use the "),e("a",{attrs:{href:"http://create.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Online Data Package viewer app"),e("OutboundLink")],1),a._v(" to have a preview of"),e("br"),a._v("\nyour Data Package.")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),e("p",[a._v("For examples of well-structured Data Package see:")]),a._v(" "),e("ul",[e("li",[a._v("For tabular data: "),e("a",{attrs:{href:"http://datahub.io/core/corruption-perceptions-index",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/corruption-perceptions-index"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("For geospatial data: "),e("a",{attrs:{href:"http://datahub.io/core/geo-nuts-administrative-boundaries",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://datahub.io/core/geo-nuts-administrative-boundaries"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("!! Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive "),e("a",{attrs:{href:"/field-guide"}},[a._v("Frictionless Data Field Guide")]),a._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);