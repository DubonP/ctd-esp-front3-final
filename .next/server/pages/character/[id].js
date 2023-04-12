"use strict";
(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 801:
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/cardHero/cardHero.tsx






function CardHero({ name , comics , thumbnail , description  }) {
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
                                "Name: ",
                                name
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "subtitle1",
                            children: [
                                "Description: ",
                                description
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "subtitle1",
                            children: [
                                "Others comics from ",
                                name,
                                ":"
                            ]
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
                            children: comics?.items.map((character)=>{
                                const characterId = character.resourceURI ? encodeURIComponent(getId(character.resourceURI)) : "";
                                return /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                                    children: `${character.name}`
                                });
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./services/marvel/marvel.service.ts + 1 modules
var marvel_service = __webpack_require__(2261);
;// CONCATENATED MODULE: ./pages/character/[id].page.tsx




function Index(data) {
    console.log(data);
    return /*#__PURE__*/ jsx_runtime_.jsx(CardHero, {
        ...data
    });
};
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};
const getStaticProps = async (ctx)=>{
    const { params  } = ctx;
    const comic = await (0,marvel_service/* getCharacter */.Pm)(Number(params?.id));
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [377,675,261], () => (__webpack_exec__(801)));
module.exports = __webpack_exports__;

})();