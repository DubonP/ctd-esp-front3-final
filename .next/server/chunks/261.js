"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 2261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pm": () => (/* binding */ getCharacter),
  "Yn": () => (/* binding */ getComic),
  "o0": () => (/* binding */ getComics)
});

// EXTERNAL MODULE: external "md5"
var external_md5_ = __webpack_require__(1490);
var external_md5_default = /*#__PURE__*/__webpack_require__.n(external_md5_);
;// CONCATENATED MODULE: ./services/marvel/marvel-auth.service.ts

const generateAuthenticationString = ()=>{
    const ts = new Date().getTime();
    const hash = external_md5_default()(`${ts}${process.env.MARVEL_API_PRIVATE_KEY}${process.env.MARVEL_API_PUBLIC_KEY}`);
    return `ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}`;
};

;// CONCATENATED MODULE: ./services/marvel/marvel.service.ts

const MARVEL_API_URL = process.env.MARVEL_API_URL;
const fetchApi = async (endpoint, urlParams)=>{
    const authString = generateAuthenticationString();
    const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ""}`;
    const response = await fetch(url);
    return await response.json();
};
const getComics = async (offset, limit)=>{
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);
    return fetchApi("comics", params.toString());
};
const getComic = async (comicId)=>{
    const data = await fetchApi(`comics/${comicId}`);
    const results = data?.data?.results;
    if (results?.length > 0) {
        const comic = results[0];
        if (`${comic.id}`.endsWith("0")) {
            comic.price = 48;
            comic.oldPrice = 48;
            comic.stock = 0;
        } else {
            comic.price = 72;
            comic.oldPrice = 87;
            comic.stock = 2;
        }
        return comic;
    } else return null;
};
const getCharacter = async (characterId)=>{
    const data = await fetchApi(`characters/${characterId}`);
    const results = data?.data?.results;
    if (results?.length > 0) return results[0];
    else return null;
};


/***/ })

};
;