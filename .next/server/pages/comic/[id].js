"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/cardComic/cardComic.tsx







function CardComic({ title , thumbnail , price , oldPrice , stock , characters , description , id  }) {
    function getId(url) {
        const regex = /\/characters\/(\d+)/;
        const match = url.match(regex);
        if (match) {
            return match[1];
        }
        return null;
    }
    const { push  } = (0,router_.useRouter)();
    const thumb = `${thumbnail.path}.${thumbnail.extension}`;
    const Item = (0,styles_.styled)(material_.Paper)(({ theme  })=>({
            backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: "center",
            color: theme.palette.text.secondary
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        padding: "3rem",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                md: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    p: "1rem",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: thumb,
                        width: 420,
                        height: 500
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                md: 5,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    display: "flex",
                    gap: "3rem",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "h6",
                            children: [
                                "Title: ",
                                title
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "subtitle1",
                            children: [
                                "Description: ",
                                description
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "subtitle1",
                            children: "Characters: "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                            spacing: {
                                xs: 1,
                                sm: 2
                            },
                            direction: "column",
                            sx: {
                                width: 200
                            },
                            children: characters?.items.map((character)=>{
                                const characterId = character.resourceURI ? encodeURIComponent(getId(character.resourceURI)) : "";
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/character/${characterId}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                        children: `${character.name}`
                                    })
                                });
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    variant: "subtitle1",
                                    sx: {
                                        textDecoration: "line-through",
                                        color: "red"
                                    },
                                    children: [
                                        "Old Price: ",
                                        `R$${oldPrice}`
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    variant: "subtitle1",
                                    children: [
                                        "Price: ",
                                        `R$${price}`
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                    variant: "subtitle1",
                                    children: [
                                        "Stock: ",
                                        `${stock}`
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "contained",
                            onClick: ()=>push(`/checkout/${id}`),
                            disabled: stock == 0,
                            children: stock > 0 ? "Buy" : "Stock outs"
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./services/marvel/marvel.service.ts + 1 modules
var marvel_service = __webpack_require__(2261);
;// CONCATENATED MODULE: ./pages/comic/[id].page.tsx




function Index(data) {
    return /*#__PURE__*/ jsx_runtime_.jsx(CardComic, {
        ...data
    });
};
const getStaticPaths = async ()=>{
    const { data: comics  } = await (0,marvel_service/* getComics */.o0)(0, 100);
    const data = comics?.results;
    const paths = data.map((comic)=>{
        return {
            params: {
                id: comic.id.toString()
            }
        };
    });
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async (ctx)=>{
    const { params  } = ctx;
    const comic = await (0,marvel_service/* getComic */.Yn)(Number(params?.id));
    if (!comic) return;
    return {
        props: comic
    };
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1490:
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,261], () => (__webpack_exec__(7849)));
module.exports = __webpack_exports__;

})();