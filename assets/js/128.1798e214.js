(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{488:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),e("p",[t._v("Here described only the breaking and most significant changes. The full changelog and documentation for all released versions could be found in nicely formatted "),e("a",{attrs:{href:"https://github.com/frictionlessdata/frictionless-py/commits/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("commit history"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"v3-34"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-34"}},[t._v("#")]),t._v(" v3.34")]),t._v(" "),e("ul",[e("li",[t._v("Moved "),e("code",[t._v("frictionless.controls")]),t._v(" to "),e("code",[t._v("frictionless.plugins.*")]),t._v(" (BREAKING)")]),t._v(" "),e("li",[t._v("Moved "),e("code",[t._v("frictionless.dialects")]),t._v(" to "),e("code",[t._v("frictionless.plugins.*")]),t._v(" (BREAKING)")]),t._v(" "),e("li",[t._v("Moved "),e("code",[t._v("frictionless.exceptions.FrictionlessException")]),t._v(" to "),e("code",[t._v("frictionless.FrictionlessException")]),t._v(" (BREAKING)")]),t._v(" "),e("li",[t._v("Moved "),e("code",[t._v("excel")]),t._v(" dependencies to "),e("code",[t._v("frictionless[excel]")]),t._v(" extras (BREAKING)")]),t._v(" "),e("li",[t._v("Moved "),e("code",[t._v("json")]),t._v(" dependencies to "),e("code",[t._v("frictionless[json]")]),t._v(" extras (BREAKING)")]),t._v(" "),e("li",[t._v("Consider "),e("code",[t._v("json")]),t._v(" files to be a metadata by default (BREAKING)")])]),t._v(" "),e("p",[t._v("Code example:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Before")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pip install frictionless")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dialects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exceptions\nexcel_dialect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dialects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExcelDialect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njson_dialect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dialects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JsonDialect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexception "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exceptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FrictionlessException"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# After")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pip install frictionless[excel,json]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" FrictionlessException\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("excel "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ExcelDialect\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" JsonDialect\nexcel_dialect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dialects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExcelDialect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njson_dialect "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dialects"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JsonDialect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexception "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FrictionlessException"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"v3-33"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-33"}},[t._v("#")]),t._v(" v3.33")]),t._v(" "),e("ul",[e("li",[t._v("Implemented resource.write (#537)")])]),t._v(" "),e("h2",{attrs:{id:"v3-32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-32"}},[t._v("#")]),t._v(" v3.32")]),t._v(" "),e("ul",[e("li",[t._v("Added url parameter to SQL import/export (#535)")])]),t._v(" "),e("h2",{attrs:{id:"v3-31"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-31"}},[t._v("#")]),t._v(" v3.31")]),t._v(" "),e("ul",[e("li",[t._v("Made tables with header and no data rows valid (#534) (BREAKING: minor)")])]),t._v(" "),e("h2",{attrs:{id:"v3-30"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-30"}},[t._v("#")]),t._v(" v3.30")]),t._v(" "),e("ul",[e("li",[t._v("Various CLI improvements (#532)\n"),e("ul",[e("li",[t._v("Added autocompletion")]),t._v(" "),e("li",[t._v("Added stdin support")]),t._v(" "),e("li",[t._v("Added “extract --csv”")]),t._v(" "),e("li",[t._v("Exposed more options")])])])]),t._v(" "),e("h2",{attrs:{id:"v3-29"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-29"}},[t._v("#")]),t._v(" v3.29")]),t._v(" "),e("ul",[e("li",[t._v("Added experimental CKAN support (#528)")])]),t._v(" "),e("h2",{attrs:{id:"v3-28"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-28"}},[t._v("#")]),t._v(" v3.28")]),t._v(" "),e("ul",[e("li",[t._v("Add a “nopool” argument to validate (#527)")])]),t._v(" "),e("h2",{attrs:{id:"v3-27"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-27"}},[t._v("#")]),t._v(" v3.27")]),t._v(" "),e("ul",[e("li",[t._v("Stop sorting keyed sources as the order is now guaranteed by Python (#512) (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-26"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-26"}},[t._v("#")]),t._v(" v3.26")]),t._v(" "),e("ul",[e("li",[t._v("Added “nolookup” argument for validate_package (#515)")])]),t._v(" "),e("h2",{attrs:{id:"v3-25"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-25"}},[t._v("#")]),t._v(" v3.25")]),t._v(" "),e("ul",[e("li",[t._v("Add transform functionality (#505)")]),t._v(" "),e("li",[t._v("Methods "),e("code",[t._v("schema.get/remove_field")]),t._v(" now raise if not found (#505) (BREAKING)")]),t._v(" "),e("li",[t._v("Methods "),e("code",[t._v("package.get/remove_resource")]),t._v(" now raise if not found (#505) (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-24"}},[t._v("#")]),t._v(" v3.24")]),t._v(" "),e("ul",[e("li",[t._v("Lower case resource.scheme/format/hashing/encoding/compression (#499) (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-23"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-23"}},[t._v("#")]),t._v(" v3.23")]),t._v(" "),e("ul",[e("li",[t._v("Support “header_case” option for dialects (#488)")])]),t._v(" "),e("h2",{attrs:{id:"v3-22"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-22"}},[t._v("#")]),t._v(" v3.22")]),t._v(" "),e("ul",[e("li",[t._v("Added suppport for DB2 format (#485)")])]),t._v(" "),e("h2",{attrs:{id:"v3-21"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-21"}},[t._v("#")]),t._v(" v3.21")]),t._v(" "),e("ul",[e("li",[t._v("Improved SPSS plugin (#483)")]),t._v(" "),e("li",[t._v("Improved BigQuery plugin (#470)")])]),t._v(" "),e("h2",{attrs:{id:"v3-20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-20"}},[t._v("#")]),t._v(" v3.20")]),t._v(" "),e("ul",[e("li",[t._v("Added support for SQL Views (#466)")])]),t._v(" "),e("h2",{attrs:{id:"v3-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-19"}},[t._v("#")]),t._v(" v3.19")]),t._v(" "),e("ul",[e("li",[t._v("Rebased AwsLoader on streaming (#460)")])]),t._v(" "),e("h2",{attrs:{id:"v3-18"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-18"}},[t._v("#")]),t._v(" v3.18")]),t._v(" "),e("ul",[e("li",[t._v("Added "),e("code",[t._v("hashing")]),t._v(" parameter to "),e("code",[t._v("describe/describe_package")])]),t._v(" "),e("li",[t._v("Removed "),e("code",[t._v("table.onerror")]),t._v(" property (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-17"}},[t._v("#")]),t._v(" v3.17")]),t._v(" "),e("ul",[e("li",[t._v("Added timezone for datetime/time parsing (#457) (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-16"}},[t._v("#")]),t._v(" v3.16")]),t._v(" "),e("ul",[e("li",[t._v("Fixed metadata.to_yaml (#455)")]),t._v(" "),e("li",[t._v("Removed the "),e("code",[t._v("expand")]),t._v(" argument from "),e("code",[t._v("metadata.to_dict")]),t._v(" (BREAKING)")])]),t._v(" "),e("h2",{attrs:{id:"v3-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-15"}},[t._v("#")]),t._v(" v3.15")]),t._v(" "),e("ul",[e("li",[t._v("Added native schema support to SqlParser (#452)")])]),t._v(" "),e("h2",{attrs:{id:"v3-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-14"}},[t._v("#")]),t._v(" v3.14")]),t._v(" "),e("ul",[e("li",[t._v("Make Resource the main internal interface (#446) (BREAKING: for plugin authors)")]),t._v(" "),e("li",[t._v("Move Resource’s stats to "),e("code",[t._v("resource.stats")]),t._v(" (BREAKING)")]),t._v(" "),e("li",[t._v("Rename "),e("code",[t._v("on_error")]),t._v(" to "),e("code",[t._v("onerror")]),t._v(" (BREAKING)")]),t._v(" "),e("li",[t._v("Added "),e("code",[t._v("resource.stats.fields")])])]),t._v(" "),e("h2",{attrs:{id:"v3-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-13"}},[t._v("#")]),t._v(" v3.13")]),t._v(" "),e("ul",[e("li",[t._v("Add an "),e("code",[t._v("on_error")]),t._v(" argument to Table/Resource/Package (#445)")])]),t._v(" "),e("h2",{attrs:{id:"v3-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-12"}},[t._v("#")]),t._v(" v3.12")]),t._v(" "),e("ul",[e("li",[t._v("Added streaming to the extract functions (#442)")])]),t._v(" "),e("h2",{attrs:{id:"v3-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-11"}},[t._v("#")]),t._v(" v3.11")]),t._v(" "),e("ul",[e("li",[t._v("Added experimental BigQuery support (#424)")])]),t._v(" "),e("h2",{attrs:{id:"v3-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-10"}},[t._v("#")]),t._v(" v3.10")]),t._v(" "),e("ul",[e("li",[t._v("Added experimental SPSS support (#421)")])]),t._v(" "),e("h2",{attrs:{id:"v3-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-9"}},[t._v("#")]),t._v(" v3.9")]),t._v(" "),e("ul",[e("li",[t._v("Rebased on a "),e("code",[t._v("goodtables")]),t._v(" successor versioning")])]),t._v(" "),e("h2",{attrs:{id:"v3-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-8"}},[t._v("#")]),t._v(" v3.8")]),t._v(" "),e("ul",[e("li",[t._v("Add support SQL/Pandas import/export  (#31)")])]),t._v(" "),e("h2",{attrs:{id:"v3-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-7"}},[t._v("#")]),t._v(" v3.7")]),t._v(" "),e("ul",[e("li",[t._v("Add support for custom JSONEncoder classes (#24)")])]),t._v(" "),e("h2",{attrs:{id:"v3-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-6"}},[t._v("#")]),t._v(" v3.6")]),t._v(" "),e("ul",[e("li",[t._v("Normalize header terminology")])]),t._v(" "),e("h2",{attrs:{id:"v3-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-5"}},[t._v("#")]),t._v(" v3.5")]),t._v(" "),e("ul",[e("li",[t._v("Initial public version")])])])}),[],!1,null,null,null);a.default=r.exports}}]);