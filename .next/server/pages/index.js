"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/layouts/body/single/body-single.tsx




const BodySingle = ({ title , containerProps , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
        maxWidth: "xl",
        ...containerProps,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
            direction: "column",
            display: "flex",
            justifyContent: "center",
            children: [
                title && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h2",
                    my: 2,
                    textAlign: "center",
                    fontSize: 28,
                    fontWeight: 600,
                    children: title
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const body_single = (BodySingle);

// EXTERNAL MODULE: ./services/marvel/marvel.service.ts + 1 modules
var marvel_service = __webpack_require__(2261);
;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardActions"
const CardActions_namespaceObject = require("@mui/material/CardActions");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardMedia"
const CardMedia_namespaceObject = require("@mui/material/CardMedia");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Button"
const Button_namespaceObject = require("@mui/material/Button");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/cardHome/cardHome.tsx









function cardHome({ title , image , id  }) {
    const { push  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        sx: {
            maxWidth: "345px",
            height: "450px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                component: "img",
                height: "200px",
                image: image,
                alt: "green iguana",
                sx: {
                    objectFit: "contain",
                    objectPosition: "center"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    gutterBottom: true,
                    variant: "h5",
                    component: "div",
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActions_default()), {
                sx: {
                    display: "flex",
                    justifyContent: "space-around",
                    bottom: "0px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        size: "medium",
                        onClick: ()=>push(`/checkout/${id}`),
                        children: "Buy"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        variant: "contained",
                        size: "medium",
                        onClick: ()=>push(`/comic/${id}`),
                        children: "Details"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/index.page.tsx






function Home({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Home"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(body_single, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        sx: {
                            marginTop: "20px"
                        },
                        container: true,
                        spacing: 2,
                        children: data?.map((comic)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 4,
                                sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    height: "100%"
                                },
                                children: cardHome({
                                    title: comic.title,
                                    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                                    id: comic.id
                                })
                            }, comic.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                        variant: "contained",
                        size: "medium",
                        id: "load-more",
                        children: "Load more"
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    const { data: comics  } = await (0,marvel_service/* getComics */.o0)(0, 12);
    const data = comics.results;
    return {
        props: {
            data: data
        }
    };
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 1490:
/***/ ((module) => {

module.exports = require("md5");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [261], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();