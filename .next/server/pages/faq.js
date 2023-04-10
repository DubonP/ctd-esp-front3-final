"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Faqs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowForwardIosSharp"
const ArrowForwardIosSharp_namespaceObject = require("@mui/icons-material/ArrowForwardIosSharp");
var ArrowForwardIosSharp_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIosSharp_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/faqs/faqsData.ts
const faqsData = [
    {
        id: 1,
        question: "Quantos comics eles t\xeam?",
        answer: "Atualmente temos toda a cole\xe7\xe3o Marvel. Algumas c\xf3pias podem ter pouca ou nenhuma disponibilidade no momento. Para mais informa\xe7\xf5es voc\xea pode acessar https://marvel.com"
    },
    {
        id: 2,
        question: "Podemos reservar novos lan\xe7amentos?",
        answer: "Infelizmente nosso site ainda n\xe3o aceita reservas antecipadas. Mas estamos trabalhando nessa funcionalidade. Siga nosso twitter para ficar por dentro das novidades."
    },
    {
        id: 3,
        question: "Quanto tempo demoram as entregas?",
        answer: "Todas as nossas entregas s\xe3o enviadas atrav\xe9s da DH-Express, que chega a todo o pa\xeds em 24 horas."
    },
    {
        id: 4,
        question: "Que m\xe9todos de pagamento est\xe3o dispon\xedveis?",
        answer: "Apenas cart\xf5es de cr\xe9dito Visa e Mastercard s\xe3o aceitos. No momento n\xe3o aceitamos pagamentos em dinheiro ou outros meios."
    },
    {
        id: 5,
        question: "Aceitamos devolu\xe7\xf5es?",
        answer: "Nossas compras aceitam devolu\xe7\xf5es desde que o quadrinho esteja em sua embalagem original, caso contr\xe1rio perdem o valor de revenda. Caso deseje devolv\xea-lo e ele estiver nas mesmas condi\xe7\xf5es em que foi enviado, entre em contato com 11-5555-0001 para resolver a devolu\xe7\xe3o."
    }, 
];

;// CONCATENATED MODULE: ./pages/faq.page.tsx






function accordionData({ question , answer  }) {
    const { 0: expanded , 1: setExpanded  } = (0,external_react_.useState)(false);
    const handleChange = ()=>{
        setExpanded(expanded === false ? question : false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Accordion, {
        expanded: expanded === question,
        onChange: handleChange,
        sx: {
            backgroundColor: "#1976d2"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionSummary, {
                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIosSharp_default()), {
                    sx: {
                        color: "white"
                    }
                }),
                "aria-controls": "panel1bh-content",
                id: "panel1bh-header",
                sx: {
                    color: "white"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        color: "white"
                    },
                    children: question
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionDetails, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    sx: {
                        color: "white"
                    },
                    children: answer
                })
            })
        ]
    });
}
function Faqs() {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        maxWidth: "lg",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
            sx: {
                width: "100%",
                marginTop: "50px"
            },
            children: faqsData.map((faq, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        marginTop: "3px"
                    },
                    children: accordionData(faq)
                }, index))
        })
    });
};


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_exports__ = (__webpack_exec__(567));
module.exports = __webpack_exports__;

})();