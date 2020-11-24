(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{503:function(a,t,s){"use strict";s.r(t);var n=s(1),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-ckan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-ckan"}},[a._v("#")]),a._v(" Working with CKAN")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://colab.research.google.com/drive/1NrInE94OamiLGmlAlGQ6kmwwGmnA5iav",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),s("OutboundLink")],1)]),a._v(" "),s("blockquote",[s("p",[a._v("Status: "),s("strong",[a._v("EXPERIMENTAL")])])]),a._v(" "),s("p",[a._v("Frictionless supports reading and writing CKAN datasets.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" frictionless"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ckan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"reading-from-ckan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-from-ckan"}},[a._v("#")]),a._v(" Reading from CKAN")]),a._v(" "),s("p",[a._v("You can read a CKAN dataset:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Package\n\npackage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("from_ckan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("base_url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<base_url>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" dataset_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<dataset_id>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" api_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<api_key>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" resource "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("read_rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"wriring-to-ckan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wriring-to-ckan"}},[a._v("#")]),a._v(" Wriring to CKAN")]),a._v(" "),s("p",[a._v("You can write a dataset to CKAN:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Package\n\npackage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path/to/datapackage.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\npackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("to_ckan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("base_url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<base_url>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" dataset_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<dataset_id>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" api_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<api_key>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"configuring-ckan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-ckan"}},[a._v("#")]),a._v(" Configuring CKAN")]),a._v(" "),s("blockquote",[s("p",[a._v("CKAN dialect is not yet available")])])])}),[],!1,null,null,null);t.default=r.exports}}]);