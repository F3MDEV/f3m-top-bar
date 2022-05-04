

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

require('bootstrap/dist/css/bootstrap.css');
var React = require('react');
var styles = require('@mui/styles');
var Typography = require('@mui/material/Typography');
var Accordion = require('@mui/material/Accordion');
var AccordionSummary = require('@mui/material/AccordionSummary');
var AccordionDetails = require('@mui/material/AccordionDetails');
var IconButton = require('@mui/material/IconButton');
var Box = require('@mui/material/Box');
var TextField = require('@mui/material/TextField');
var MenuItem = require('@mui/material/MenuItem');
var ReportProblemIcon = require('@mui/icons-material/ReportProblem');
var EditIcon = require('@mui/icons-material/Edit');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
require('@fontsource/open-sans');
require('@fontsource/roboto');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var Accordion__default = /*#__PURE__*/_interopDefaultLegacy(Accordion);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var ReportProblemIcon__default = /*#__PURE__*/_interopDefaultLegacy(ReportProblemIcon);
var EditIcon__default = /*#__PURE__*/_interopDefaultLegacy(EditIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);

var episodes = [
    {
        value: '30/01/2021 (Internamento)',
    },
    {
        value: '21/04/2021 (Internamento)',
    }
];
var F3MTopBar = function (_a) {
    var _b = _a.barPosition, barPosition = _b === void 0 ? 'absolute' : _b, _c = _a.headerContainerClasses, headerContainerClasses = _c === void 0 ? "w-100" : _c, _d = _a.isHealthiPatientSummaryActive, isHealthiPatientSummaryActive = _d === void 0 ? false : _d, _e = _a.healthiBadgePatientPhoto, healthiBadgePatientPhoto = _e === void 0 ? React__namespace.createElement("span", { className: "badge rounded-pill bg-danger", style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1,
            bottom: -2, fontSize: '7px', textTransform: 'capitalize', width: '42px', maxHeight: '13px' } }, "Inativo") : _e, _f = _a.healthiPatientPhoto, healthiPatientPhoto = _f === void 0 ? 'https://www.looper.com/img/gallery/why-did-the-old-man-play-in-squid-game/l-intro-1633465995.jpg' : _f, healthiHandleErrorImg = _a.healthiHandleErrorImg, _g = _a.healthiPatientNickname, healthiPatientNickname = _g === void 0 ? 'Zé Andrade' : _g, _h = _a.healthiPatientName, healthiPatientName = _h === void 0 ? 'José Pereira Andrade' : _h, _j = _a.healthiPatientAge, healthiPatientAge = _j === void 0 ? '92 anos' : _j, _k = _a.healthiPatientSNS, healthiPatientSNS = _k === void 0 ? '001' : _k, _l = _a.healthiPatientEntity, healthiPatientEntity = _l === void 0 ? ' Por definir' : _l, _m = _a.healthiReportIcon, healthiReportIcon = _m === void 0 ? React__namespace.createElement(ReportProblemIcon__default["default"], { id: 'popoverbutton', "aria-owns": 'mouse-over-popover', "aria-haspopup": "true", className: "ms-4", style: { color: "#FF9800" } }) : _m, _o = _a.patientBadges, patientBadges = _o === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Box__default["default"], { component: "div", className: "text-center", sx: { width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 } }, "1"),
        React__namespace.createElement(Box__default["default"], { component: "div", className: "text-center", sx: { width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 } }, "2"),
        React__namespace.createElement(Box__default["default"], { component: "div", className: "text-center", sx: { width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#FF8882', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 } }, "3"),
        React__namespace.createElement(Box__default["default"], { component: "div", className: "text-center", sx: { width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 } }, "4"),
        React__namespace.createElement(Box__default["default"], { component: "div", className: "text-center", sx: { width: 20, height: 20, marginRight: '5px', borderRadius: '50%', background: '#04A0AA', color: '#fff', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 8, lineHeight: 2.4 } }, "5")) : _o, _p = _a.detailsContentOne, detailsContentOne = _p === void 0 ? React__namespace.createElement("div", { style: { display: 'grid', color: '#444444', gridGap: 5, fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto min-content auto' } },
        React__namespace.createElement("div", { className: "fw-bold" }, "Nacionalidade"),
        React__namespace.createElement("div", { className: "ps-2" }, "Portuguesa"),
        React__namespace.createElement("div", { className: "fw-bold" }, "N\u00BA de Benefici\u00E1rio"),
        React__namespace.createElement("div", { className: "ps-2" }, "001 | 20/08/2025"),
        React__namespace.createElement("div", { className: "fw-bold" }, "Contatos"),
        React__namespace.createElement("div", { className: "ps-2" }, "918804958 | squidOldMan@nflx.pt"),
        React__namespace.createElement("div", { className: "fw-bold" }, "CESD"),
        React__namespace.createElement("div", { className: "ps-2" }, "00000000012345678914")) : _p, _q = _a.detailsContentSecond, detailsContentSecond = _q === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Typography__default["default"], { variant: "h6", style: { fontSize: '1rem', color: '#444444' }, className: "fw-bold" }, "Benef\u00EDcios"),
        React__namespace.createElement("div", { className: "row", style: { fontSize: 14, color: '#444444' } },
            React__namespace.createElement("div", { className: "col-6 d-flex" },
                React__namespace.createElement(Typography__default["default"], { variant: "h5", style: { color: '#444444' }, className: "fw-bold pe-4" }, "R"),
                React__namespace.createElement("div", { className: "d-flex flex-column", style: { color: '#444444' } },
                    React__namespace.createElement("label", { className: "pt-1" }, "Benefici\u00E1rios do Complemento Solid\u00E1rio para Idosos (BAS)"))),
            React__namespace.createElement("div", { className: "col-6 d-flex" },
                React__namespace.createElement(Typography__default["default"], { variant: "h5", style: { color: '#444444' }, className: "fw-bold pe-4" }, "O"),
                React__namespace.createElement("div", { style: { color: '#444444' }, className: "d-flex flex-column" },
                    React__namespace.createElement("label", { className: "pt-1" }, "Doentes cr\u00F3nicos com guia")))),
        React__namespace.createElement(Typography__default["default"], { variant: "h6", style: { fontSize: '1rem', color: '#444444' }, className: "fw-bold mt-2" }, "Regimes de Exce\u00E7\u00E3o"),
        React__namespace.createElement("div", { className: "pt-2", style: { display: 'grid', gridGap: 5, color: '#444444', fontSize: 14, whiteSpace: 'nowrap', gridTemplateColumns: 'min-content auto' } },
            React__namespace.createElement("div", { className: "fw-bold" }, "V\u00EDtimas de Inc\u00EAndio"),
            React__namespace.createElement("div", { className: "" },
                "|  ",
                React__namespace.createElement("span", { className: "fst-italic" }, "In\u00EDcio"),
                ": 01/12/2016"))) : _q, _r = _a.detailsContentThird, detailsContentThird = _r === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(Typography__default["default"], { variant: "h6", style: { fontSize: '1rem', color: '#444444' }, className: "fw-bold d-inline" }, "Alergias"),
        React__namespace.createElement(IconButton__default["default"], { size: 'small', disableFocusRipple: true, disableRipple: true, style: { right: 10, zIndex: 1, position: 'absolute', marginTop: -10 }, color: "primary", "aria-label": "save" },
            React__namespace.createElement(EditIcon__default["default"], null)),
        React__namespace.createElement("div", { style: { fontSize: 14, color: '#444444' } },
            React__namespace.createElement("span", { style: { fontStyle: 'italic' } }, "Sem alergias."))) : _r, _s = _a.isDashedBoardSecondContentInserted, isDashedBoardSecondContentInserted = _s === void 0 ? true : _s, _t = _a.isDashedBoardThirdContentInserted, isDashedBoardThirdContentInserted = _t === void 0 ? true : _t, _u = _a.summaryContent, summaryContent = _u === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: "d-flex w-100" },
            React__namespace.createElement("div", { className: 'position-relative' },
                healthiBadgePatientPhoto,
                React__namespace.createElement("img", { className: "border rounded my-auto", src: healthiPatientPhoto, onError: healthiHandleErrorImg, style: { width: 45, height: 45 } })),
            React__namespace.createElement("div", { className: "d-flex flex-column px-3 text-nowrap my-auto", style: { fontFamily: 'Roboto', fontSize: 13 } },
                React__namespace.createElement("div", { className: 'd-block', style: { fontSize: 15 } },
                    React__namespace.createElement("b", null, healthiPatientNickname),
                    " (",
                    healthiPatientAge,
                    ")"),
                React__namespace.createElement("div", { className: 'd-block' }, healthiPatientName)),
            React__namespace.createElement("div", { className: "d-flex flex-column w-100 my-auto mx-4  text-nowrap ", style: { fontFamily: 'Roboto', fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis' } },
                React__namespace.createElement("div", { className: "w-100 text-nowrap", style: { overflow: 'hidden', textOverflow: 'ellipsis' } },
                    React__namespace.createElement("b", null, "SNS:"),
                    " ",
                    healthiPatientSNS,
                    " ",
                    healthiPatientEntity,
                    "  |  ",
                    React__namespace.createElement("b", null,
                        React__namespace.createElement("a", null, "Diagn\u00F3stico Principal")),
                    ": Ataque Isqu\u00EAmico Transit\u00F3... "),
                React__namespace.createElement("div", { className: "w-100 text-nowrap", style: { overflow: 'hidden', textOverflow: 'ellipsis' } },
                    React__namespace.createElement("b", null, "Gestor de Caso"),
                    ": T\u00E2nia Palma  |  ",
                    React__namespace.createElement("b", null, "C. Emerg\u00EAncia"),
                    ": 933 333 333")),
            React__namespace.createElement("div", { className: " my-auto" },
                React__namespace.createElement(TextField__default["default"], { id: "standard-select-currency", className: "mx-5", select: true, label: "Epis\u00F3dio", value: '30/01/2021 (Internamento)', 
                    /* value={episode}
                    onChange={handleChange} */
                    variant: "standard", InputLabelProps: {
                        sx: { fontWeight: 'bold', color: '#444444' }
                    } }, episodes.map(function (option) { return (React__namespace.createElement(MenuItem__default["default"], { key: option.value, value: option.value }, option.value)); }))),
            React__namespace.createElement("div", { className: "d-flex ms-auto my-auto" }, patientBadges))) : _u;
    //popover
    var healthiPatientSummary = React.useState(isHealthiPatientSummaryActive)[0];
    var isDashedBoardSecondContentActive = React.useState(isDashedBoardSecondContentInserted)[0];
    var isDashedBoardThirdContentActive = React.useState(isDashedBoardThirdContentInserted)[0];
    var _v = React.useState(false), openAccordion = _v[0], setOpenAccordion = _v[1];
    var useStyles = function () {
        return styles.createStyles({
            root: {
                '&.MuiAccordion-root': {
                    backgroundColor: '#f8f8f8',
                },
                '&.MuiFormGroup-root': {
                    maxHeight: 132,
                    display: "grid",
                    overflow: "auto"
                },
                '&.MuiTextField-root': {
                    backgroundColor: "#ffffff",
                    '& .MuiInputBase-input': {
                        backgroundColor: "#ffffff",
                    }
                },
                '& .MuiAccordionSummary-content': {
                    width: '100%'
                },
                '&.MuiAccordionDetails-root': {
                    display: 'block',
                    '& .MuiFormControl-root': {
                        '& .MuiFilledInput-root': {
                            '& .MuiSelect-filled.MuiSelect-filled': {
                                backgroundColor: "#ffffff",
                            }
                        }
                    }
                },
                '&.MuiSelect-root': {
                    backgroundColor: "#ffffff",
                }
            },
            large: {
                width: 40,
                height: 40,
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
                objectFit: 'cover'
            },
            rightZero: {
                position: 'absolute',
                right: 0,
            },
            marginIconBigHeaderDetails: {
                //marginLeft: 8,
                marginRight: 8,
            },
            paddingIconBigHeaderDetails: {
                padding: 8,
            },
            fontSize10: {
                fontSize: 11,
            },
            flex: {
                display: 'flex'
            },
            label: {
                marginBottom: 0,
                marginLeft: 0,
                maxHeight: '35px'
            },
            rootSelectForm: {
                "& .MuiFilledInput-inputMarginDense": {
                    paddingBottom: 6.6
                },
                "& .MuiInputLabel-filled.MuiInputLabel-marginDense": {
                    transform: "translate(12px, 18px) scale(1)"
                },
                "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
                    transform: "translate(12px, 8px) scale(0.75)"
                },
                "& .MuiSelect-root": {
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4
                }
            },
            rootTextField: {
                "& .MuiFilledInput-root": {
                    height: 48
                }
            },
            rootDatePickerForm: {
                "& .MuiFilledInput-root": {
                    height: 48
                }
            },
            firstButton: {
                top: 70,
            },
            thirdButton: {
                top: 335,
            },
            dashedBorder: {
                borderTop: "dashed #999999 1px",
                strokeWidth: 1
            },
            allergiesContainer: {
                display: 'grid',
                gridGap: 5,
                fontSize: 14,
                whiteSpace: 'nowrap',
                gridTemplateColumns: 'min-content min-content',
            },
            popover: {
                pointerEvents: 'none',
            },
            paper: {
                "&.MuiPopover-paper": {
                    paddingTop: 8,
                    fontSize: 12
                }
            },
            allergiesList: {
                fontSize: 12,
                paddingTop: 8,
                marginLeft: 10,
                paddingLeft: 10,
                marginRight: 10,
                paddingRight: 10,
            },
            allergiesTitle: {
                paddingLeft: 5,
                paddingTop: 15,
                marginTop: 15,
                marginLeft: 5
            },
            sticky: {
                top: 0,
                zIndex: 2,
                position: barPosition,
            },
            bigHeader: {
                marginLeft: '0 !important',
                marginRight: '0 !important',
                alignItems: 'center',
                borderBottom: '1px dashed #d2d2d2'
            },
            photoNameGroup: {
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 15
            },
            photoGroup: {
                position: 'relative',
                marginRight: 12,
                filter: 'drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.22))'
            }
        });
    };
    var classes = useStyles();
    var handleChangeAccordion = function () {
        if (openAccordion) {
            setOpenAccordion(false);
        }
        else {
            setOpenAccordion(true);
        }
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { style: { width: 'fit-content !important' }, className: "row ".concat(classes.bigHeader, " ").concat(classes.sticky, " ").concat(headerContainerClasses) },
            React__namespace.createElement(Accordion__default["default"], { className: "w-100 ".concat(classes.root), expanded: openAccordion, onChange: handleChangeAccordion },
                React__namespace.createElement(AccordionSummary__default["default"], { expandIcon: React__namespace.createElement(ExpandMoreIcon__default["default"], null), "aria-controls": "panel1a-content", className: "".concat(classes.root), id: "panel1a-header" }, healthiPatientSummary ?
                    React__namespace.createElement("div", { className: "col-sm-12 col-md-12 col-lg-9 col-xl-9 ps-0 ".concat(classes.photoNameGroup) },
                        React__namespace.createElement("div", { className: "".concat(classes.photoGroup) },
                            healthiBadgePatientPhoto,
                            React__namespace.createElement("img", { className: "".concat(classes.large, " border rounded"), src: healthiPatientPhoto, onError: healthiHandleErrorImg, alt: "Patient photo" })),
                        React__namespace.createElement("div", { className: "w-100 d-flex" },
                            React__namespace.createElement(Box__default["default"], { className: "my-auto", fontSize: 12 },
                                healthiPatientName,
                                " \u00A0 ",
                                healthiPatientAge,
                                " \u00A0\u00A0|\u00A0\u00A0",
                                React__namespace.createElement("b", null, " SNS:"),
                                " ",
                                healthiPatientSNS,
                                " \u00A0\u00A0|\u00A0\u00A0",
                                React__namespace.createElement("b", null, "Entidade:"),
                                healthiPatientEntity),
                            healthiReportIcon))
                    :
                        summaryContent),
                React__namespace.createElement(AccordionDetails__default["default"], { className: "".concat(classes.root, " pt-0") },
                    detailsContentOne,
                    isDashedBoardSecondContentActive ? React__namespace.createElement("hr", { className: "".concat(classes.dashedBorder) }) : "",
                    detailsContentSecond,
                    isDashedBoardThirdContentActive ? React__namespace.createElement("hr", { className: "".concat(classes.dashedBorder) }) : "",
                    detailsContentThird)))));
};

exports["default"] = F3MTopBar;
//# sourceMappingURL=index.js.map
