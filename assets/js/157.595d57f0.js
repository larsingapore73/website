(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{518:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-text-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-text-data"}},[t._v("#")]),t._v(" Working with Text Data")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://colab.research.google.com/drive/1mdpneGQU5vMdEZI5AqlOUIfIDd37eZ30",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Status: "),s("strong",[t._v("CORE / STABLE")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" frictionless\n")])])]),s("h2",{attrs:{id:"reading-text-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-text-data"}},[t._v("#")]),t._v(" Reading Text Data")]),t._v(" "),s("p",[t._v("You can read Text Data using "),s("code",[t._v("Package/Resource")]),t._v(" or "),s("code",[t._v("Table")]),t._v(" API, for example:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text://id,name\\n1,english\\n2,german'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("pre",[s("code",[t._v("[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', 'german')])]\n")])]),t._v(" "),s("h2",{attrs:{id:"writing-text-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-text-data"}},[t._v("#")]),t._v(" Writing Text Data")]),t._v(" "),s("p",[t._v("The same is actual for writing Text Data:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat table.new.csv\n")])])]),s("h2",{attrs:{id:"configuring-text-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-text-data"}},[t._v("#")]),t._v(" Configuring Text Data")])])}),[],!1,null,null,null);a.default=e.exports}}]);