(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{305:function(t,a,s){t.exports=s.p+"assets/img/gdp_map_example.c3bf2487.png"},416:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Joining multiple datasets on a common value or set of values is a common data wrangling task. For instance, one might have a dataset listing Gross Domestic Product (GDP) per country and a separate dataset containing geographic outlines of country borders.  If these independent datasets have a shared property (for instance, the three-letter country code as "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3",target:"_blank",rel:"noopener noreferrer"}},[t._v("defined in ISO 3166-1"),n("OutboundLink")],1),t._v("),we should be able to create one consolidated dataset to generate a map of GDP per country.  This guide will walk through this simple use case.")]),t._v(" "),n("h2",{attrs:{id:"example-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-data"}},[t._v("#")]),t._v(" Example Data")]),t._v(" "),n("p",[t._v("For this example, we are going to use two example Data Packages from our "),n("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("example data packages repository"),n("OutboundLink")],1),t._v(" with the properties described above. The first is an example of Data Package containing a GeoJSON file. "),n("a",{attrs:{href:"http://geojson.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeoJSON"),n("OutboundLink")],1),t._v(" is a format for representing geographical features in "),n("a",{attrs:{href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),n("OutboundLink")],1),t._v(".  This particular GeoJSON file lists countries on its "),n("code",[t._v("features")]),t._v(" array and specifies the country code as a property on each “feature”. In this case, the country code is stored on the key “ISO_A3” of the feature’s "),n("code",[t._v("properties")]),t._v(" object.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FeatureCollection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"features"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Feature"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ADMIN"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ukraine"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ISO_A3"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UKR"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"geometry"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Polygon"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coordinates"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        ...\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("The second Data Package is a typical "),n("router-link",{attrs:{to:"/data-package/#tabular-data-package"}},[t._v("Tabular Data Package")]),t._v(" containing a GDP measure for each country in the world for the year 2014. Country codes are stored, naturally, on the “Country Code” column.")],1),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Country Name")]),t._v(" "),n("th",[t._v("Country Code")]),t._v(" "),n("th",[t._v("Year")]),t._v(" "),n("th",[t._v("Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Ukraine")]),t._v(" "),n("td",[t._v("UKR")]),t._v(" "),n("td",[t._v("2014")]),t._v(" "),n("td",[t._v("131805126738.287")])]),t._v(" "),n("tr",[n("td",[t._v("United Arab Emirates")]),t._v(" "),n("td",[t._v("ARE")]),t._v(" "),n("td",[t._v("2014")]),t._v(" "),n("td",[t._v("401646583173.427")])]),t._v(" "),n("tr",[n("td",[t._v("United Kingdom")]),t._v(" "),n("td",[t._v("GBR")]),t._v(" "),n("td",[t._v("2014")]),t._v(" "),n("td",[t._v("2941885537461.48")])]),t._v(" "),n("tr",[n("td",[t._v("United States")]),t._v(" "),n("td",[t._v("USA")]),t._v(" "),n("td",[t._v("2014")]),t._v(" "),n("td",[t._v("17419000000000")])]),t._v(" "),n("tr",[n("td",[t._v("Uruguay")]),t._v(" "),n("td",[t._v("URY")]),t._v(" "),n("td",[t._v("2014")]),t._v(" "),n("td",[t._v("57471277325.1312")])])])]),t._v(" "),n("h2",{attrs:{id:"reading-and-joining-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reading-and-joining-data"}},[t._v("#")]),t._v(" Reading and Joining Data")]),t._v(" "),n("p",[t._v("As in our "),n("router-link",{attrs:{to:"/blog/2016/08/29/using-data-packages-in-python/"}},[t._v("Using Data Packages in Python guide")]),t._v(", the first step before joining is to read the data for each Data Package onto our computer.  We do this by importing the "),n("code",[t._v("datapackage")]),t._v(" library and passing the Data Package url to its "),n("code",[t._v("DataPackage")]),t._v(" method. We are also importing the standard Python "),n("code",[t._v("json")]),t._v(" library to read and write our GeoJSON file.")],1),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\n\ncountries_url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/geo-countries/datapackage.json'")]),t._v("\ngdp_url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/gross-domestic-product-2014/datapackage.json'")]),t._v("\n\ncountries_dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngdp_dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdp_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nworld "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_resource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countries'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw_read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("Learn more about creating data packages in Python "),n("router-link",{attrs:{to:"/blog/2016/07/21/creating-tabular-data-packages-in-python/"}},[t._v("in this tutorial")]),t._v(".")],1),t._v(" "),n("p",[t._v("Our GeoJSON data is stored as a "),n("code",[t._v("bytes")]),t._v(" object in the "),n("code",[t._v("data")]),t._v(" attribute of the first (and only) element of the Data Package "),n("code",[t._v("resources")]),t._v(" array. To create our "),n("code",[t._v("world")]),t._v(" GeoJSON dict, we first need to decode this "),n("code",[t._v("bytes")]),t._v(" object to a UTF-8 string and pass it to "),n("code",[t._v("json.loads")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("world "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countries_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_resource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'countries'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw_read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("At this point, joining the data can be accomplished by iterating through each country in the "),n("code",[t._v("world['features']")]),t._v(" array and adding a property “GDP (2014)” if “Country Code” on the "),n("code",[t._v("gdp_dp")]),t._v(" Data Package object matches “ISO_A3” on the given GeoJSON feature.  The value of “GDP (2014)” is derived from the “Value” column on the "),n("code",[t._v("gdp_dp")]),t._v(" Data Package object.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" feature "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" world"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'features'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    matches "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Value'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gdp "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" gdp_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gdp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Country Code'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" feature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ISO_A3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" matches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        feature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GDP (2014)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        feature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'properties'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GDP (2014)'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),n("p",[t._v("Finally, we can output our consolidated GeoJSON dataset into a new file called “world_gdp_2014.geojson” using "),n("code",[t._v("json.dump")]),t._v(" and create a new Data Package container for it.  For a more thorough walkthrough on creating a Data Package, please consult the"),n("br"),t._v(" "),n("router-link",{attrs:{to:"/blog/2016/07/21/creating-tabular-data-packages-in-python/"}},[t._v("Creating Data Packages in Python")]),t._v(" guide.")],1),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("new_dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'consolidated-dataset'")]),t._v("\nnew_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world_gdp_2014.geojson'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nnew_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'datapackage.zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("We can now quickly render this GeoJSON file into a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Choropleth_map",target:"_blank",rel:"noopener noreferrer"}},[t._v("chloropleth map"),n("OutboundLink")],1),t._v(" using "),n("a",{attrs:{href:"http://qgis.org/en/site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGIS"),n("OutboundLink")],1),t._v(":")]),t._v(" "),n("p",[n("img",{attrs:{src:s(305),alt:"GDP Map Example"}})]),t._v(" "),n("p",[t._v("Or we can rely on GitHub to render our GeoJSON for us.  When you click a country, it’s property list will show up featuring “ADMIN”, “ISO_A3”, and the newly added “GDP (2014)” property.")])])}),[],!1,null,null,null);a.default=e.exports}}]);