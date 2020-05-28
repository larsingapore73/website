(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{445:function(e,a,t){"use strict";t.r(a);var o=t(1),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://www.jailbreak.paris/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jailbreak"),t("OutboundLink")],1),e._v(" is a French company founded by former employees of "),t("a",{attrs:{href:"https://www.etalab.gouv.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Etalab"),t("OutboundLink")],1),e._v(", the national open data agency, and "),t("a",{attrs:{href:"https://www.easter-eggs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Easter-eggs"),t("OutboundLink")],1),e._v(", GNU/Linux experts since 1997.")]),e._v(" "),t("h1",{attrs:{id:"open-data-quality-the-case-of-france"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-data-quality-the-case-of-france"}},[e._v("#")]),e._v(" Open Data Quality: The case of France")]),e._v(" "),t("p",[e._v("The issue of open data quality has been a prominent subject of discussion for years past. These articles covers more discussion on it. "),t("a",{attrs:{href:"https://blog.okfn.org/2014/09/30/why-the-open-definition-matters-for-open-data-quality-compatibility-and-simplicity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why the Open Definition Matters for Open Data: Quality, Compatibility and Simplicity"),t("OutboundLink")],1),e._v(" and more recently "),t("a",{attrs:{href:"https://blog.okfn.org/2017/05/31/open-data-quality-the-next-shift-in-open-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open data quality – the next shift in open data?"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Since 2017, "),t("a",{attrs:{href:"http://www.opendatafrance.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenDataFrance"),t("OutboundLink")],1),e._v(" has made it a top priority to help open data producers, mainly local governments, improve the quality of their open data.")]),e._v(" "),t("p",[e._v("Jailbreak joined the team tasked to find solutions to that problem. We proposed to start with data validation as a way to point out quality problems in datasets, and choose "),t("a",{attrs:{href:"https://goodtables.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Goodtables"),t("OutboundLink")],1),e._v(" as a basis for that. We developed a new UI with adaptations and localization for French users, as well as some custom checks to tackle specific errors which are common in French datasets. This has given birth to a validator tool called "),t("a",{attrs:{href:"https://go.validata.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validata"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Like Goodtables, it checks tabular data sources for structural problems, such as blank rows, but where it really shines is when you give it a schema to validate your data.")]),e._v(" "),t("h2",{attrs:{id:"schemas-as-standards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schemas-as-standards"}},[e._v("#")]),e._v(" Schemas as Standards")]),e._v(" "),t("p",[e._v("A schema is a file describing the way the data should be formatted. For example, if a column exists for dates, the schema is where it would be specified. This way, the validator can automatically check that all the cells in that column contain dates.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://frictionlessdata.io/specs/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table Schemas"),t("OutboundLink")],1),e._v(" are perfect for open data, which is often just tabular data such as CSV or XLSX files. They’re also really easy to write and, if enough people use them, they can become "),t("em",[e._v("de facto")]),e._v(" standards for datasets.")]),e._v(" "),t("p",[e._v("Spearheaded by OpenDataFrance, the French open data community has created 8 common open data schemas as part of a so-called “Socle commun des données locales” (Common Ground of Local Data). These are now the standards to publish datasets on subjects like grants given to non-profits, decisions voted in local assemblies or stations for electric vehicles.")]),e._v(" "),t("p",[e._v("What we learned with Validata is that the s"),t("strong",[e._v("chemas and tools we created in order to improve open data quality are only as good as their popularity")]),e._v(". If only a few are using the schemas to publish their data, nobody else will follow these schemas and, immediately, the validator tool is not as useful anymore. The quality is not improving if the “standards” are not used. But, most importantly, "),t("strong",[e._v("a standard cannot be self-proclaimed.")])]),e._v(" "),t("h2",{attrs:{id:"where-are-all-the-schemas-we-need-catalog-s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-are-all-the-schemas-we-need-catalog-s"}},[e._v("#")]),e._v(" Where are all the schemas? We need catalog(s)")]),e._v(" "),t("p",[e._v("A few months ago, Etalab has launched "),t("a",{attrs:{href:"https://schema.data.gouv.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),t("OutboundLink")],1),e._v(", an official open data schema catalog specific to France. The idea is now to go next-level and start "),t("strong",[e._v("a community-run schema catalog which would be both inclusive and international")]),e._v(". First to share Table Schemas but it could also be open to other schemas such as "),t("a",{attrs:{href:"https://frictionlessdata.io/specs/data-package/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Package Schemas"),t("OutboundLink")],1),e._v(" or even others.")]),e._v(" "),t("p",[e._v("For schemas to become standards, they must be easily found and usable. They must be shared. We propose to open a new chapter for Table Schemas with "),t("a",{attrs:{href:"https://schemas.frictionlessdata.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("schemas.frictionlessdata.io"),t("OutboundLink")],1),e._v(" as the place to catalog them.")]),e._v(" "),t("p",[e._v("Each schema page could have link tools, calling users to appropriate actions ; for example “Validate a file” with Goodtables or Validata, “Create a file” with "),t("a",{attrs:{href:"https://github.com/etalab/csv-gg",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSV Good Generator"),t("OutboundLink")],1),e._v(" developed by Etalab or "),t("a",{attrs:{href:"https://gitlab.com/healthdatahub/tsfaker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tsfaker"),t("OutboundLink")],1),e._v(", or “Download a template” with "),t("a",{attrs:{href:"https://framagit.org/opendataschema/table-schema-resource-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("table-schema-resource-template"),t("OutboundLink")],1),e._v(", etc.")]),e._v(" "),t("p",[e._v("The website for the catalog should have all the features needed such as full-text search and filtered search (by country, etc.). It should also have an API to make use of the catalog within other tools, for example, an open data portal proposing schemas when people upload a data package. This is an idea already experimented by ODI with "),t("a",{attrs:{href:"https://octopub.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Octopub"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Those are some ideas that need to be expanded. We have to give schemas their chance to shine!")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Situation: Poor quality of open data")]),e._v(" "),t("p",[e._v("Question: How to improve the quality of open data?")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Problem: Standardization of common datasets"),t("br"),e._v("\nSolution: Table Schemas"),t("br"),e._v("\nExample: A schema for the names of babies born in a city in a given year.")])]),e._v(" "),t("li",[t("p",[e._v("Problem: Checking the quality of datasets"),t("br"),e._v("\nSolution: Goodtables"),t("br"),e._v("\nExample: "),t("a",{attrs:{href:"https://go.validata.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Validata"),t("OutboundLink")],1),e._v(", an adaptation of Goodtables for French open data.")])]),e._v(" "),t("li",[t("p",[e._v("Problem: Sharing open data standards"),t("br"),e._v("\nSolution: Schema Catalog"),t("br"),e._v("\nExample: "),t("a",{attrs:{href:"https://scdl.opendatafrance.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SCDL"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://Schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schema.data.gouv.fr"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"http://Schemas.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schemas.frictionlessdata.io"),t("OutboundLink")],1)])])])]),e._v(" "),t("p",[e._v("There’s an ongoing conversation about this project on "),t("a",{attrs:{href:"https://github.com/frictionlessdata/forum/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictionless Data Forum"),t("OutboundLink")],1),e._v(" and it’s open to feedback and contribution.")])])}),[],!1,null,null,null);a.default=r.exports}}]);