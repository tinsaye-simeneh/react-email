"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "emails_stripe-welcome_tsx";
exports.ids = ["emails_stripe-welcome_tsx"];
exports.modules = {

/***/ "./emails/stripe-welcome.tsx":
/*!***********************************!*\
  !*** ./emails/stripe-welcome.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StripeWelcomeEmail\": () => (/* binding */ StripeWelcomeEmail),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-email/components */ \"@react-email/components\");\n/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_email_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : \"\";\nconst StripeWelcomeEmail = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Preview, {\n                children: \"You're now ready to make live transactions with Stripe!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Body, {\n                style: main,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Container, {\n                    style: container,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Section, {\n                        style: box,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Img, {\n                                src: `${baseUrl}/static/stripe-logo.png`,\n                                width: \"49\",\n                                height: \"21\",\n                                alt: \"Stripe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"Thanks for submitting your account information. You're now ready to make live transactions with Stripe!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"You can view your payments and a variety of other information about your account right from your dashboard.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                pX: 10,\n                                pY: 10,\n                                style: button,\n                                href: \"https://dashboard.stripe.com/login\",\n                                children: \"View your Stripe Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"If you haven't finished your integration, you might find our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs\",\n                                        children: \"docs\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"handy.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Once you're ready to start accepting payments, you'll just need to use your live\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://dashboard.stripe.com/login?redirect=%2Fapikeys\",\n                                        children: \"API keys\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"instead of your test API keys. Your account can simultaneously be used for both test and live requests, so you can continue testing while accepting live payments. Check out our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs/dashboard\",\n                                        children: \"tutorial about account basics\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"Finally, we've put together a\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://stripe.com/docs/checklist/website\",\n                                        children: \"quick checklist\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \" \",\n                                    \"to ensure your website conforms to card network standards.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: [\n                                    \"We'll be here to help you with any step along the way. You can find answers to most questions and get in touch with us on our\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                        style: anchor,\n                                        href: \"https://support.stripe.com/\",\n                                        children: \"support site\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: paragraph,\n                                children: \"— The Stripe team\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Hr, {\n                                style: hr\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_email_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                style: footer,\n                                children: \"Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Documents\\\\GitHub\\\\react-email\\\\react-email-starter\\\\.react-email\\\\emails\\\\stripe-welcome.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StripeWelcomeEmail);\nconst main = {\n    backgroundColor: \"#f6f9fc\",\n    fontFamily: '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Ubuntu,sans-serif'\n};\nconst container = {\n    backgroundColor: \"#ffffff\",\n    margin: \"0 auto\",\n    padding: \"20px 0 48px\",\n    marginBottom: \"64px\"\n};\nconst box = {\n    padding: \"0 48px\"\n};\nconst hr = {\n    borderColor: \"#e6ebf1\",\n    margin: \"20px 0\"\n};\nconst paragraph = {\n    color: \"#525f7f\",\n    fontSize: \"16px\",\n    lineHeight: \"24px\",\n    textAlign: \"left\"\n};\nconst anchor = {\n    color: \"#556cd6\"\n};\nconst button = {\n    backgroundColor: \"#656ee8\",\n    borderRadius: \"5px\",\n    color: \"#fff\",\n    fontSize: \"16px\",\n    fontWeight: \"bold\",\n    textDecoration: \"none\",\n    textAlign: \"center\",\n    display: \"block\",\n    width: \"100%\"\n};\nconst footer = {\n    color: \"#8898aa\",\n    fontSize: \"12px\",\n    lineHeight: \"16px\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2JJLGlCQUFpQjtJQUNqQlUsY0FBYztJQUNkSixPQUFPO0lBQ1BDLFVBQVU7SUFDVkksWUFBWTtJQUNaQyxnQkFBZ0I7SUFDaEJILFdBQVc7SUFDWEksU0FBUztJQUNUeEIsT0FBTztBQUNUO0FBRUEsTUFBTVUsU0FBUztJQUNiTyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsWUFBWTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtZW1haWwtY2xpZW50Ly4vZW1haWxzL3N0cmlwZS13ZWxjb21lLnRzeD8wNzgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJvZHksXG4gIEJ1dHRvbixcbiAgQ29udGFpbmVyLFxuICBIZWFkLFxuICBIcixcbiAgSHRtbCxcbiAgSW1nLFxuICBMaW5rLFxuICBQcmV2aWV3LFxuICBTZWN0aW9uLFxuICBUZXh0LFxufSBmcm9tICdAcmVhY3QtZW1haWwvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WRVJDRUxfVVJMXG4gID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcbiAgOiAnJztcblxuZXhwb3J0IGNvbnN0IFN0cmlwZVdlbGNvbWVFbWFpbCA9ICgpID0+IChcbiAgPEh0bWw+XG4gICAgPEhlYWQgLz5cbiAgICA8UHJldmlldz5Zb3UncmUgbm93IHJlYWR5IHRvIG1ha2UgbGl2ZSB0cmFuc2FjdGlvbnMgd2l0aCBTdHJpcGUhPC9QcmV2aWV3PlxuICAgIDxCb2R5IHN0eWxlPXttYWlufT5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e2NvbnRhaW5lcn0+XG4gICAgICAgIDxTZWN0aW9uIHN0eWxlPXtib3h9PlxuICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgIHNyYz17YCR7YmFzZVVybH0vc3RhdGljL3N0cmlwZS1sb2dvLnBuZ2B9XG4gICAgICAgICAgICB3aWR0aD1cIjQ5XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjIxXCJcbiAgICAgICAgICAgIGFsdD1cIlN0cmlwZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SHIgc3R5bGU9e2hyfSAvPlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuICAgICAgICAgICAgVGhhbmtzIGZvciBzdWJtaXR0aW5nIHlvdXIgYWNjb3VudCBpbmZvcm1hdGlvbi4gWW91J3JlIG5vdyByZWFkeSB0b1xuICAgICAgICAgICAgbWFrZSBsaXZlIHRyYW5zYWN0aW9ucyB3aXRoIFN0cmlwZSFcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICBZb3UgY2FuIHZpZXcgeW91ciBwYXltZW50cyBhbmQgYSB2YXJpZXR5IG9mIG90aGVyIGluZm9ybWF0aW9uIGFib3V0XG4gICAgICAgICAgICB5b3VyIGFjY291bnQgcmlnaHQgZnJvbSB5b3VyIGRhc2hib2FyZC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgcFg9ezEwfVxuICAgICAgICAgICAgcFk9ezEwfVxuICAgICAgICAgICAgc3R5bGU9e2J1dHRvbn1cbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tL2xvZ2luXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IHlvdXIgU3RyaXBlIERhc2hib2FyZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxIciBzdHlsZT17aHJ9IC8+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICBJZiB5b3UgaGF2ZW4ndCBmaW5pc2hlZCB5b3VyIGludGVncmF0aW9uLCB5b3UgbWlnaHQgZmluZCBvdXJ7JyAnfVxuICAgICAgICAgICAgPExpbmsgc3R5bGU9e2FuY2hvcn0gaHJlZj1cImh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzXCI+XG4gICAgICAgICAgICAgIGRvY3NcbiAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgaGFuZHkuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IHN0eWxlPXtwYXJhZ3JhcGh9PlxuICAgICAgICAgICAgT25jZSB5b3UncmUgcmVhZHkgdG8gc3RhcnQgYWNjZXB0aW5nIHBheW1lbnRzLCB5b3UnbGwganVzdCBuZWVkIHRvXG4gICAgICAgICAgICB1c2UgeW91ciBsaXZleycgJ31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHN0eWxlPXthbmNob3J9XG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rhc2hib2FyZC5zdHJpcGUuY29tL2xvZ2luP3JlZGlyZWN0PSUyRmFwaWtleXNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBUEkga2V5c1xuICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICBpbnN0ZWFkIG9mIHlvdXIgdGVzdCBBUEkga2V5cy4gWW91ciBhY2NvdW50IGNhbiBzaW11bHRhbmVvdXNseSBiZVxuICAgICAgICAgICAgdXNlZCBmb3IgYm90aCB0ZXN0IGFuZCBsaXZlIHJlcXVlc3RzLCBzbyB5b3UgY2FuIGNvbnRpbnVlIHRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlIGFjY2VwdGluZyBsaXZlIHBheW1lbnRzLiBDaGVjayBvdXQgb3VyeycgJ31cbiAgICAgICAgICAgIDxMaW5rIHN0eWxlPXthbmNob3J9IGhyZWY9XCJodHRwczovL3N0cmlwZS5jb20vZG9jcy9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgdHV0b3JpYWwgYWJvdXQgYWNjb3VudCBiYXNpY3NcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIC5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e3BhcmFncmFwaH0+XG4gICAgICAgICAgICBGaW5hbGx5LCB3ZSd2ZSBwdXQgdG9nZXRoZXIgYXsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBzdHlsZT17YW5jaG9yfVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvY2hlY2tsaXN0L3dlYnNpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBxdWljayBjaGVja2xpc3RcbiAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgdG8gZW5zdXJlIHlvdXIgd2Vic2l0ZSBjb25mb3JtcyB0byBjYXJkIG5ldHdvcmsgc3RhbmRhcmRzLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT5cbiAgICAgICAgICAgIFdlJ2xsIGJlIGhlcmUgdG8gaGVscCB5b3Ugd2l0aCBhbnkgc3RlcCBhbG9uZyB0aGUgd2F5LiBZb3UgY2FuIGZpbmRcbiAgICAgICAgICAgIGFuc3dlcnMgdG8gbW9zdCBxdWVzdGlvbnMgYW5kIGdldCBpbiB0b3VjaCB3aXRoIHVzIG9uIG91cnsnICd9XG4gICAgICAgICAgICA8TGluayBzdHlsZT17YW5jaG9yfSBocmVmPVwiaHR0cHM6Ly9zdXBwb3J0LnN0cmlwZS5jb20vXCI+XG4gICAgICAgICAgICAgIHN1cHBvcnQgc2l0ZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBzdHlsZT17cGFyYWdyYXBofT7igJQgVGhlIFN0cmlwZSB0ZWFtPC9UZXh0PlxuICAgICAgICAgIDxIciBzdHlsZT17aHJ9IC8+XG4gICAgICAgICAgPFRleHQgc3R5bGU9e2Zvb3Rlcn0+XG4gICAgICAgICAgICBTdHJpcGUsIDM1NCBPeXN0ZXIgUG9pbnQgQmx2ZCwgU291dGggU2FuIEZyYW5jaXNjbywgQ0EgOTQwODBcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm9keT5cbiAgPC9IdG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RyaXBlV2VsY29tZUVtYWlsO1xuXG5jb25zdCBtYWluID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjZmOWZjJyxcbiAgZm9udEZhbWlseTpcbiAgICAnLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsVWJ1bnR1LHNhbnMtc2VyaWYnLFxufTtcblxuY29uc3QgY29udGFpbmVyID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgcGFkZGluZzogJzIwcHggMCA0OHB4JyxcbiAgbWFyZ2luQm90dG9tOiAnNjRweCcsXG59O1xuXG5jb25zdCBib3ggPSB7XG4gIHBhZGRpbmc6ICcwIDQ4cHgnLFxufTtcblxuY29uc3QgaHIgPSB7XG4gIGJvcmRlckNvbG9yOiAnI2U2ZWJmMScsXG4gIG1hcmdpbjogJzIwcHggMCcsXG59O1xuXG5jb25zdCBwYXJhZ3JhcGggPSB7XG4gIGNvbG9yOiAnIzUyNWY3ZicsXG5cbiAgZm9udFNpemU6ICcxNnB4JyxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICB0ZXh0QWxpZ246ICdsZWZ0JyBhcyBjb25zdCxcbn07XG5cbmNvbnN0IGFuY2hvciA9IHtcbiAgY29sb3I6ICcjNTU2Y2Q2Jyxcbn07XG5cbmNvbnN0IGJ1dHRvbiA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAnIzY1NmVlOCcsXG4gIGJvcmRlclJhZGl1czogJzVweCcsXG4gIGNvbG9yOiAnI2ZmZicsXG4gIGZvbnRTaXplOiAnMTZweCcsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbn07XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgY29sb3I6ICcjODg5OGFhJyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbGluZUhlaWdodDogJzE2cHgnLFxufTtcbiJdLCJuYW1lcyI6WyJCb2R5IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiSGVhZCIsIkhyIiwiSHRtbCIsIkltZyIsIkxpbmsiLCJQcmV2aWV3IiwiU2VjdGlvbiIsIlRleHQiLCJSZWFjdCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlN0cmlwZVdlbGNvbWVFbWFpbCIsInN0eWxlIiwibWFpbiIsImNvbnRhaW5lciIsImJveCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaHIiLCJwYXJhZ3JhcGgiLCJwWCIsInBZIiwiYnV0dG9uIiwiaHJlZiIsImFuY2hvciIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJtYXJnaW4iLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./emails/stripe-welcome.tsx\n");

/***/ })

};
;