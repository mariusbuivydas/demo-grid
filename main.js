(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/react-grid-canvas/src/index.ts":
/*!**********************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/index.ts ***!
  \**********************************************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_react_grid_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/react-grid-canvas */ "../../../libs/react-grid-canvas/src/lib/react-grid-canvas.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _lib_react_grid_canvas__WEBPACK_IMPORTED_MODULE_0__["App"]; });



/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/GridLayout.tsx":
/*!*******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/GridLayout.tsx ***!
  \*******************************************************************************************/
/*! exports provided: GridLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayout", function() { return GridLayout; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /home/marius/dev/smaply-ui/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ "../../../node_modules/nanoid/index.browser.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-grid-layout */ "../../../node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Edit */ "../../../node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Drawer */ "../../../node_modules/@mui/material/Drawer/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "../../../node_modules/@mui/material/index.js");
/* harmony import */ var _Inputs_RichTextInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Inputs/RichTextInput */ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);




const _excluded = ["className", "rowHeight", "cols", "onLayoutChange"];
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/GridLayout.tsx";
// @ts-nocheck










function generateLayout(columns) {
  return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.range(0, 25), function (item, i) {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.random(0, 12) * 1 % 8,
      y: Math.floor(i / 6) * y,
      w: 1,
      h: 1,
      i: Object(nanoid__WEBPACK_IMPORTED_MODULE_6__["nanoid"])(),
      static: Math.random() < 0.05
    };
  }); // const layout = [
  //   {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
  //   {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
  //   {i: 'c', x: 4, y: 0, w: 1, h: 2}
  // ];
  // return layout;
} // ShowcaseLayout.defaultProps = {
//   className: 'layout',
//   rowHeight: 30,
//   onLayoutChange() {},
//   cols: { lg: 8, md: 8, sm: 8, xs: 8, xxs: 8 },
//   initialLayout: generateLayout(),
// };


const GridLayout = _ref => {
  let {
    className = 'layout',
    rowHeight = 30,
    cols = 5,
    onLayoutChange = () => {}
  } = _ref,
      rest = Object(_home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  const [columns, setColumns] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(cols);
  const [itemTypes, setItemTypes] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({});
  const [layouts, setLayouts] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([...generateLayout(cols)]);
  const [breakpoint, setBreakpoint] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('lg');
  const [compactType, setCompactType] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('vertical');
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const onCompactTypeChange = () => {
    const newCompactType = compactType === 'horizontal' ? 'vertical' : compactType === 'vertical' ? null : 'horizontal';
    setCompactType(newCompactType);
  }; // const onLayoutChange = (layout, layouts) => {
  //   this.props.onLayoutChange(layout, layouts);
  // }


  const onBreakpointChange = bp => {
    setBreakpoint(bp);
  };

  const onNewLayout = () => {
    setLayouts(generateLayout(cols));
  };

  const onGridClear = () => {
    setLayouts([]);
  };

  const onColumnReset = () => {
    setColumns(cols);
  };

  const addColumn = () => {
    setColumns(columns + 1);
  };

  const onDrop = (layout, layoutItem, event) => {
    console.log(layoutItem, layouts.length, layout.length);
    const id = `new-${Object(nanoid__WEBPACK_IMPORTED_MODULE_6__["nanoid"])()}`;
    setItemTypes(prevState => {
      return Object.assign({}, prevState, {
        [id]: event.dataTransfer.getData('text')
      });
    }); // setLayouts(layout);

    const x = layout.pop();
    setLayouts(prevState => [...layout, Object.assign({}, x, {
      i: id
    })]);
  };

  const onDragStart = (layout, oldItem, newItem) => {
    console.log('onDragStart', layout, oldItem, newItem);
  };

  const onDragStop = (a, b, c) => {
    console.log('onDragStop', a, b, c);
  }; // const createElement = (el) => {
  //   const removeStyle = {
  //     position: "absolute",
  //     right: "2px",
  //     top: 0,
  //     cursor: "pointer"
  //   };
  //   const i = el.add ? "+" : el.i;
  //   return (
  //     <div key={i} data-grid={el}>
  //       {el.add ? (
  //         <span
  //           className="add text"
  //           onClick={this.onAddItem}
  //           title="You can add an item by clicking here, too."
  //         >
  //           Add +
  //         </span>
  //       ) : (
  //         <span className="text">{i}</span>
  //       )}
  //       <span
  //         className="remove"
  //         style={removeStyle}
  //         onClick={this.onRemoveItem.bind(this, i)}
  //       >
  //         x
  //       </span>
  //     </div>
  //   );
  // };


  const children = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => {
    return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(layouts, (l, i) => {
      console.log(l, i, itemTypes);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        display: "flex",
        "data-grid": Object.assign({}, l),
        className: l.static ? 'static' : '',
        children: itemTypes[l.i] === 'editor' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          flex: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Inputs_RichTextInput__WEBPACK_IMPORTED_MODULE_11__["RichTextInput"], {
            fullHeight: true,
            initialValue: {
              html: l.i.substring(0, 9)
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("span", {
          className: "text",
          children: [l.static ? 'STATIC -' : '', " ", l.i.substring(0, 9)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, undefined)
      }, l.i, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined);
    });
  }, [layouts]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
    sx: {
      display: 'flex'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
      component: "main",
      sx: {
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        style: {
          width: `${210 * columns}px`
        },
        className: className,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          sx: {
            position: 'relative',
            height: 80,
            width: '100%',
            top: 0,
            left: 0,
            p: 3
          },
          className: "controls",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
            className: "actions",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              variant: "outlined",
              sx: {
                mr: 1
              },
              onClick: onNewLayout,
              children: "Generate New Layout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              variant: "outlined",
              sx: {
                m: 1
              },
              onClick: onCompactTypeChange,
              children: "Change Compaction Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              variant: "outlined",
              sx: {
                m: 1
              },
              onClick: addColumn,
              children: "Add column"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              variant: "outlined",
              color: "error",
              sx: {
                m: 1
              },
              onClick: onGridClear,
              children: "Clear grid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Button"], {
              variant: "outlined",
              color: "error",
              sx: {
                m: 1
              },
              onClick: onColumnReset,
              children: "Reset columns"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
            sx: {
              my: 2
            },
            className: "meta",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
              fontSize: "14px",
              children: ["Columns: ", columns]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
              fontSize: "14px",
              children: ["Compaction type: ", lodash__WEBPACK_IMPORTED_MODULE_5___default.a.capitalize(compactType) || 'No Compaction']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
          sx: {
            marginTop: '40px'
          },
          className: "columns",
          children: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.range(columns).map(value => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
              className: `column-${value + 1}`,
              children: ["Col ", value + 1]
            }, Object(nanoid__WEBPACK_IMPORTED_MODULE_6__["nanoid"])(), true, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_7___default.a, Object.assign({}, rest, {
          width: 210 * columns,
          layout: layouts,
          margin: [10, 10],
          rowHeight: 200,
          cols: columns // droppingItem={{ i: `new-${nanoid()}` }}
          ,
          onBreakpointChange: onBreakpointChange,
          onLayoutChange: onLayoutChange // WidthProvider option
          ,
          measureBeforeMount: false,
          isDroppable: true,
          onDrop: onDrop,
          onDragStart: onDragStart // onDropDragover={onDropDragover}
          ,
          onDragStop: onDragStop // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          ,
          useCSSTransforms: mounted.current,
          compactType: compactType,
          preventCollision: !compactType,
          children: children
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        width: 300,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          padding: '10px',
          width: 300,
          boxSizing: 'border-box'
        },
        '& .droppable-element': {
          width: '50px',
          height: '50px',
          backgroundColor: '#EBEBEB',
          border: '1px solid #CDCFCF',
          margin: '10px 5px',
          padding: '10px',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      },
      variant: "permanent",
      anchor: "right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        fontSize: "14px",
        className: "factory",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          children: "Drag to create elements"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          onDragStart: e => e.dataTransfer.setData('text/plain', 'editor'),
          className: "droppable-element",
          draggable: true,
          unselectable: "on",
          children: ["Editor", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          onDragStart: e => e.dataTransfer.setData('text/plain', 'blank'),
          className: "droppable-element",
          draggable: true,
          unselectable: "on",
          children: "Blank"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          onDragStart: e => e.dataTransfer.setData('text/plain', 'row'),
          className: "droppable-element",
          draggable: true,
          unselectable: "on",
          children: "Row"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 172,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Icon/Icon.tsx":
/*!******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Icon/Icon.tsx ***!
  \******************************************************************************************/
/*! exports provided: ICONS, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /home/marius/dev/smaply-ui/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/SvgIcon */ "../../../node_modules/@mui/material/SvgIcon/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "../../../node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "../../../node_modules/@fortawesome/pro-solid-svg-icons/index.es.js");
/* harmony import */ var _theme_foundations_typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/foundations/typography */ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/typography.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);




const _excluded = ["iconName", "iconPrefix", "color", "fontVariant"];
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Icon/Icon.tsx";

/* eslint-disable */
// @ts-nocheck









const ICONS = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowAltCircleRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCoffee"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"], _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTimes"], _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faQuestionCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheck"], _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckDouble"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowCircleRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faInfoCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPercentage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStarOfLife"], _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faQuestionCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBold"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faItalic"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faList"], _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faExclamationCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheckCircle"]];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(...ICONS);

function getIcon(iconName, prefix = 'fas') {
  return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["findIconDefinition"])({
    iconName,
    prefix
  });
}

const Icon = _ref => {
  let {
    iconName,
    iconPrefix,
    color = 'inherit',
    fontVariant = 'inherit'
  } = _ref,
      other = Object(_home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({
    sx: Object.assign({
      color
    }, _theme_foundations_typography__WEBPACK_IMPORTED_MODULE_11__["fontVariants"][fontVariant])
  }, other, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: getIcon(iconName, iconPrefix)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Icon/IconButton.tsx":
/*!************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Icon/IconButton.tsx ***!
  \************************************************************************************************/
/*! exports provided: StyledIconButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledIconButton", function() { return StyledIconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /home/marius/dev/smaply-ui/node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../../node_modules/@nrwl/web/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ "../../../node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "../../../node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


const _excluded = ["children"];
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Icon/IconButton.tsx";




const StyledIconButton = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["styled"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"])(() => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'initial'
  }
}));
const IconButton = _ref => {
  let {
    children
  } = _ref,
      rest = Object(_home_marius_dev_smaply_ui_node_modules_nrwl_web_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledIconButton, Object.assign({}, rest, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Icon/index.ts":
/*!******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Icon/index.ts ***!
  \******************************************************************************************/
/*! exports provided: Icon, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "../../../libs/react-grid-canvas/src/lib/components/Icon/Icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton */ "../../../libs/react-grid-canvas/src/lib/components/Icon/IconButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton__WEBPACK_IMPORTED_MODULE_1__["IconButton"]; });




/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/Default/DefaultRichTextInput.tsx":
/*!**********************************************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/Default/DefaultRichTextInput.tsx ***!
  \**********************************************************************************************************************************/
/*! exports provided: DefaultRichTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRichTextInput", function() { return DefaultRichTextInput; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-quill/dist/quill.core.css */ "../../../node_modules/react-quill/dist/quill.core.css");
/* harmony import */ var react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme */ "../../../libs/react-grid-canvas/src/lib/components/theme/index.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nanoid */ "../../../node_modules/nanoid/index.browser.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "../../../node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/styles */ "../../../node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-quill */ "../../../node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Toolbar */ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/index.ts");
/* harmony import */ var _helpers_fixBlurOnPasteIssue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/fixBlurOnPasteIssue */ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/helpers/fixBlurOnPasteIssue.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/Default/DefaultRichTextInput.tsx";

/* eslint-disable */
// @ts-nocheck










const StyledTextEditor = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__["styled"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"])(({
  theme
}) => ({
  background: _theme__WEBPACK_IMPORTED_MODULE_4__["colors"].white,
  borderRadius: theme.shape.borderRadius,
  '&.Mui-error': {
    backgroundColor: theme.palette.error.light
  },
  '&:focus-within:not(.Mui-error)': {
    color: _theme__WEBPACK_IMPORTED_MODULE_4__["colors"].blue[600],
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["colors"].blue[200],
    '& .MuiInputLabel-root': {
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["colors"].blue[600]
    }
  },
  '.ql-container': Object.assign({}, theme.typography.regularS)
}));
const formats = ['bold', 'italic', 'list', 'link'];
const DefaultRichTextInput = ({
  id,
  initialValue,
  value: inputValue,
  disabled,
  fullHeight,
  onChange,
  onBlur,
  onEditorMount,
  onFocus
}) => {
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(initialValue ? initialValue.html : '');
  const editorIdRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(`${id}_${Object(nanoid__WEBPACK_IMPORTED_MODULE_5__["nanoid"])()}`);
  const toolbarId = `toolbar_${editorIdRef.current}`;
  const modules = {
    toolbar: `#${toolbarId}`
  };
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (editorRef.current) {
      const editor = editorRef.current.getEditor();
      if (onEditorMount) onEditorMount(editor);
    }
  }, [editorRef, onEditorMount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(StyledTextEditor, {
    id: editorIdRef.current,
    sx: fullHeight && {
      height: '100%'
    },
    position: "relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ml: 1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Toolbar__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], {
        id: toolbarId,
        buttonActiveClassName: "ql-active",
        buttonClassNames: {
          bold: 'ql-bold',
          italic: 'ql-italic',
          list: 'ql-list'
        },
        onDOMElementRendered: () => null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_quill__WEBPACK_IMPORTED_MODULE_9___default.a, {
      ref: editorRef,
      style: fullHeight && {
        height: '100%'
      },
      modules: modules,
      formats: formats,
      theme: null,
      value: inputValue ? inputValue.html : value,
      readOnly: disabled,
      onChange: (content, delta, source, editor) => {
        const currentValue = {
          html: content,
          text: editor.getText()
        };

        if (onChange) {
          onChange(currentValue);
        } else {
          setValue(content);
        }
      },
      onBlur: (previousRange, source, editor) => {
        Object(_helpers_fixBlurOnPasteIssue__WEBPACK_IMPORTED_MODULE_11__["fixBlurOnPasteIssue"])(editor, onBlur);
      },
      onFocus: () => {
        if (onFocus) onFocus();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/helpers/fixBlurOnPasteIssue.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/helpers/fixBlurOnPasteIssue.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: fixBlurOnPasteIssue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixBlurOnPasteIssue", function() { return fixBlurOnPasteIssue; });
// the quill editor is triggering a "blur" event when you paste text on it.
// this code prevents that to happen.
// Github issue: https://github.com/zenoamaro/react-quill/issues/276
const fixBlurOnPasteIssue = (editor, onBlur) => {
  // this is arbitrary, just time enough for quill to update the "selection"
  const timeout = 50;
  setTimeout(() => {
    // gets currently selected content
    const selection = editor.getSelection(); // if there is content selected means that was a "fake blur"
    // if there is none selected means that this is an "actual blur"

    if (!selection && onBlur) {
      const currentValue = {
        html: editor.getHTML(),
        text: editor.getText()
      };
      onBlur(currentValue);
    }
  }, timeout);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/index.ts":
/*!**********************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RichTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Default_DefaultRichTextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default/DefaultRichTextInput */ "../../../libs/react-grid-canvas/src/lib/components/Inputs/RichTextInput/Default/DefaultRichTextInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextInput", function() { return _Default_DefaultRichTextInput__WEBPACK_IMPORTED_MODULE_0__["DefaultRichTextInput"]; });



/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/StyledLayout.tsx":
/*!*********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/StyledLayout.tsx ***!
  \*********************************************************************************************/
/*! exports provided: CanvasGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGrid", function() { return CanvasGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "../../../node_modules/@mui/material/styles/index.js");
/* harmony import */ var _GridLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridLayout */ "../../../libs/react-grid-canvas/src/lib/components/GridLayout.tsx");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout/css/styles.css */ "../../../node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resizable/css/styles.css */ "../../../node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/StyledLayout.tsx";
// @ts-nocheck




 // export type ReactGridLayoutComponent = {
//   i: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
//   minW?: number;
//   minH?: number;
//   static?: boolean;
//   isDraggable?: boolean;
//   isResizeable?: boolean;
//   child: React.ReactNode;
//   icon: ReactNode;
// };


const MyComponent = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4
});
const StyledGrid = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(_GridLayout__WEBPACK_IMPORTED_MODULE_2__["GridLayout"])({
  position: 'relative',
  transition: 'height 200ms ease',
  // backgroundColor: '#eee',
  '& .factory': {
    marginLeft: 12
  },
  '& .columns': {
    display: 'flex',
    fontSize: 14,
    justifyContent: 'space-evenly',
    marginLeft: 2,
    '& [class^="column"]': {
      backgroundColor: '#EBEBEB',
      display: 'flex',
      width: 198,
      border: '1px solid #CDCFCF',
      // paddingY: 10,
      height: '45px',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  '& .react-grid-item': {
    transition: 'all 200ms ease',
    transitionProperty: 'left, top'
  },
  '& .react-grid-item img': {
    transition: 'all 200ms ease',
    transitionProperty: 'left, top'
  },
  '& .react-grid-item.cssTransforms': {
    transitionProperty: 'transform'
  },
  '& .react-grid-item.resizing': {
    zIndex: 1,
    opacity: 0.9,
    willChange: 'width, height'
  },
  '& .react-grid-item.react-draggable-dragging': {
    transition: 'none',
    zIndex: 3,
    willChange: 'transform'
  },
  '& .react-grid-item.dropping ': {
    visibility: 'hidden'
  },
  '& .react-grid-item.react-grid-placeholder': {
    backgroundColor: '#3A91F7',
    border: '2px solid #1B487B',
    borderStyle: 'dashed',
    opacity: '0.2',
    transitionDuration: '100ms',
    zIndex: 2,
    userSelect: 'none'
  },
  '& .factory .droppable-element': {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    backgroundColor: '#EBEBEB',
    border: '1px solid #CDCFCF',
    margin: '10px 0',
    padding: '10px'
  },
  '.toolbox': {
    backgroundColor: '#dfd',
    width: '100%',
    height: '120px',
    overflow: 'scroll'
  },
  '.react-grid-dragHandleExample': {
    cursor: 'grab'
  },
  '& .hide-button': {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '20px',
    top: '0px',
    right: '5px'
  },
  '.toolbox__title': {
    fontSize: 24,
    marginBottom: 5
  },
  '&. toolbox__items': {
    display: 'block'
  },
  '& .toolbox__items__item': {
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '40px',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    padding: '10px',
    margin: '5px',
    border: '1px solid black',
    backgroundColor: '#ddd'
  },
  '& .layoutJSON': {
    background: '#ddd',
    border: '1px solid black',
    marginTop: '10px',
    padding: '10px'
  },
  '& .react-grid-item:not(.react-grid-placeholder)': {
    backgroundColor: '#EBEBEB',
    border: '1px solid #CDCFCF'
  },
  '& .react-grid-item .text': {
    fontSize: '24px',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: '24px'
  } // // handle
  // '& .react-grid-item > .react-resizable-handle': {
  //   position: 'absolute',
  //   width: '20px',
  //   height: '20px',
  // },
  // '& .react-grid-item > .react-resizable-handle::after': {
  //   content: "''",
  //   position: 'absolute',
  //   right: '3px',
  //   bottom: '3px',
  //   width: '5px',
  //   height: '5px',
  //   borderRight: '2px solid rgba(0, 0, 0, 0.4)',
  //   borderBottom: '2px solid rgba(0, 0, 0, 0.4)',
  // },
  // '& .react-resizable-hide > .react-resizable-handle': {
  //   display: 'none',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-sw': {
  //   bottom: 0,
  //   left: 0,
  //   cursor: 'sw-resize',
  //   transform: 'rotate(90deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-se': {
  //   bottom: 0,
  //   right: 0,
  //   cursor: 'se-resize',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-nw': {
  //   top: 0,
  //   left: 0,
  //   cursor: 'nw-resize',
  //   transform: 'rotate(180deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-ne': {
  //   top: 0,
  //   right: 0,
  //   cursor: 'ne-resize',
  //   transform: 'rotate(270deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-w, & .react-grid-item > .react-resizable-handle.react-resizable-handle-e':
  //   {
  //     top: '50%',
  //     marginTop: '-10px',
  //     cursor: 'ew-resize',
  //   },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-w': {
  //   left: '0',
  //   transform: 'rotate(135deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-e': {
  //   right: '0',
  //   transform: 'rotate(315deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-n, & .react-grid-item > .react-resizable-handle.react-resizable-handle-s':
  //   {
  //     left: '50%',
  //     marginLeft: '-10px',
  //     cursor: 'ns-resize',
  //   },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-n': {
  //   top: 0,
  //   transform: 'rotate(225deg)',
  // },
  // '& .react-grid-item > .react-resizable-handle.react-resizable-handle-s': {
  //   bottom: 0,
  //   transform: 'rotate(45deg)',
  // },

});
const CanvasGrid = () => {
  // const onLayoutChange = (newLayouts) => {
  //   console.log('onLayoutChange called', newLayouts);
  //   setLayouts({
  //     lg: newLayouts,
  //   });
  // };
  // const onDrop = (params) => {
  //   console.log('onLayoutChange called', params);
  //   setLayouts({
  //     lg: params,
  //   });
  // };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "test",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledGrid, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/Toolbar.tsx":
/*!************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Toolbar/Toolbar.tsx ***!
  \************************************************************************************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "../../../libs/react-grid-canvas/src/lib/components/theme/index.ts");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "../../../node_modules/@mui/material/Box/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "../../../libs/react-grid-canvas/src/lib/components/Icon/index.ts");
/* harmony import */ var _useMutationObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMutationObserver */ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/useMutationObserver.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Toolbar/Toolbar.tsx";

/* eslint-disable */
// @ts-nocheck







const Bold = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    fontVariant: "boldXS",
    iconPrefix: "fas",
    iconName: "bold"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

const Italic = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    fontVariant: "boldXS",
    iconPrefix: "fas",
    iconName: "italic"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

const List = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
  className: className,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    fontVariant: "boldXS",
    iconPrefix: "fas",
    iconName: "list"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined);

const toolbarButtons = {
  bold: ({
    className
  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Bold, {
    className: className
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 48
  }, undefined),
  italic: ({
    className
  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Italic, {
    className: className
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 50
  }, undefined),
  list: ({
    className
  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(List, {
    className: className
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 48
  }, undefined)
};
const Toolbar = ({
  buttonActiveClassName,
  buttonClassNames,
  id,
  onDOMElementRendered
}) => {
  const sx = buttonActiveClassName && {
    [`.${buttonActiveClassName}`]: {
      color: _theme__WEBPACK_IMPORTED_MODULE_1__["colors"].blue[600]
    }
  };
  const ref = Object(_useMutationObserver__WEBPACK_IMPORTED_MODULE_4__["useMutationObserver"])(onDOMElementRendered);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ref,
    id: id,
    sx: sx,
    children: Object.keys(toolbarButtons).map(buttonName => {
      const Button = toolbarButtons[buttonName];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Button, {
          disableRipple: false,
          className: buttonClassNames && buttonClassNames[buttonName]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, buttonName, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/index.ts":
/*!*********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Toolbar/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar */ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/Toolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar__WEBPACK_IMPORTED_MODULE_0__["Toolbar"]; });



/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/Toolbar/useMutationObserver.ts":
/*!***********************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/Toolbar/useMutationObserver.ts ***!
  \***********************************************************************************************************/
/*! exports provided: useMutationObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutationObserver", function() { return useMutationObserver; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */
// @ts-nocheck
 // this will observe the DOM an notify when a particular DOM element is rendered.
// docs for MutationObserver: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

const setupMutationObserver = (el, onElementRendered) => {
  const observer = new MutationObserver(() => {
    if (document.contains(el)) {
      onElementRendered(el);
      observer.disconnect();
    }
  });
  observer.observe(document, {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true
  });
};

const useMutationObserver = onElementRendered => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setupMutationObserver(ref.current, onElementRendered); // eslint-disable-next-line
  }, []);
  return ref;
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/colors.ts":
/*!********************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/theme/foundations/colors.ts ***!
  \********************************************************************************************************/
/*! exports provided: mono, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mono", function() { return mono; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);

const mono = {
  white: '#ffffff',
  smoke: '#ebebeb',
  silver: '#cdcfcf',
  aluminium: '#a1a6a6',
  iron: '#6a7272',
  carbon: '#3c4646',
  onyx: '#212525',
  black: '#000000'
};
const colors = Object.assign({}, mono, {
  red: {
    200: '#fef0f0',
    300: '#fdd8d8',
    400: '#fab0b0',
    500: '#f46060',
    600: '#c34c4c',
    700: '#7a3030'
  },
  // orange: {
  //   200: '#fff3ed',
  //   300: '#fde0d2',
  //   400: '#fbc1a4',
  //   500: '#f68349',
  //   600: '#c4683a',
  //   700: '#7b4124',
  // },
  yellow: {
    200: '#fdf8e6',
    300: '#f9edc0',
    400: '#f3da80',
    500: '#e6b400',
    600: '#b89000',
    700: '#735a00'
  },
  // turquoise: {
  //   200: '#f6fafa',
  //   300: '#e7f1f1',
  //   400: '#cee2e2',
  //   500: '#9dc4c4',
  //   600: '#7d9c9c',
  //   700: '#4e6262',
  // },
  green: {
    200: '#e9f8f3',
    300: '#c6eddf',
    400: '#8ddbbf',
    500: '#1ab77f',
    600: '#149265',
    700: '#0d5b3f'
  },
  blue: {
    200: '#ecf4ff',
    300: '#cee4fd',
    400: '#9dc8fb',
    500: '#3a91f7',
    600: '#2e74c5',
    700: '#1d487b'
  } // purple: {
  //   200: '#f7f2fd',
  //   300: '#e9dff8',
  //   400: '#d3bef1',
  //   500: '#a77de2',
  //   600: '#8564b4',
  //   700: '#533e71',
  // },
  // pink: {
  //   200: '#fdeff2',
  //   300: '#f9d6df',
  //   400: '#f2adbe',
  //   500: '#e55a7c',
  //   600: '#b74863',
  //   700: '#722d3e',
  // },

});

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/typography.ts":
/*!************************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/theme/foundations/typography.ts ***!
  \************************************************************************************************************/
/*! exports provided: pxToRem, fontFamily, fontVariant, fontVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pxToRem", function() { return pxToRem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontVariant", function() { return fontVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontVariants", function() { return fontVariants; });
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "../../../node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);


const getNumberLength = n => {
  return String(Math.abs(n)).length;
};

const pxToRem = fontSizePx => {
  const baseFontSize = 10;
  const coef = 1;
  const rem = fontSizePx / baseFontSize * coef;
  return `${getNumberLength(rem) > 3 ? rem.toFixed(3) : rem}rem`;
}; // eslint-disable-next-line prettier/prettier

const fontFamily = ['Inter', 'sans-serif'].join(',');
const fontVariant = (fontWeight, fontSize, lineHeight, letterSpacing = 0) => ({
  fontSize: pxToRem(fontSize),
  lineHeight: pxToRem(lineHeight),
  letterSpacing: pxToRem(letterSpacing),
  fontWeight,
  fontFamily
}); // Typography-specs in Figma: https://www.figma.com/file/EP1yzHNFce9xRpRGhonobt/Smaply-App-Design-System

const fontVariants = {
  regularXXL: fontVariant(400, 24, 36),
  regularXL: fontVariant(400, 20, 32),
  regularL: fontVariant(400, 18, 24),
  regularM: fontVariant(400, 16, 24),
  regularS: fontVariant(400, 14, 20),
  regularXS: fontVariant(400, 13, 18),
  regularXXS: fontVariant(400, 11, 18),
  boldXXL: fontVariant(700, 24, 36),
  boldXL: fontVariant(700, 20, 32),
  boldL: fontVariant(700, 18, 24),
  boldM: fontVariant(700, 16, 24),
  boldS: fontVariant(700, 14, 20),
  boldXS: fontVariant(700, 13, 18),
  boldXXS: fontVariant(700, 11, 18, 0.55)
};

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/theme/index.ts":
/*!*******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/theme/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: K2Theme, palette, colors, mono, fontVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_k2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/k2 */ "../../../libs/react-grid-canvas/src/lib/components/theme/material/k2.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "K2Theme", function() { return _material_k2__WEBPACK_IMPORTED_MODULE_0__["K2Theme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return _material_k2__WEBPACK_IMPORTED_MODULE_0__["palette"]; });

/* harmony import */ var _foundations_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundations/colors */ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/colors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _foundations_colors__WEBPACK_IMPORTED_MODULE_1__["colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mono", function() { return _foundations_colors__WEBPACK_IMPORTED_MODULE_1__["mono"]; });

/* harmony import */ var _foundations_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundations/typography */ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/typography.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontVariants", function() { return _foundations_typography__WEBPACK_IMPORTED_MODULE_2__["fontVariants"]; });





/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/components/theme/material/k2.ts":
/*!*************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/components/theme/material/k2.ts ***!
  \*************************************************************************************************/
/*! exports provided: palette, K2Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K2Theme", function() { return K2Theme; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "../../../node_modules/@mui/material/styles/index.js");
/* harmony import */ var _foundations_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundations/typography */ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/typography.ts");
/* harmony import */ var _foundations_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../foundations/colors */ "../../../libs/react-grid-canvas/src/lib/components/theme/foundations/colors.ts");




const palette = {
  primary: 'blue',
  info: 'blue',
  success: 'green',
  warning: 'yellow',
  error: 'red',
  danger: 'red'
};
const K2Theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["createTheme"])({
  spacing: 4,
  shape: {
    borderRadius: 2
  },
  typography: Object.assign({
    fontSize: 14,
    // default font size
    htmlFontSize: 10,
    // base size adjusts to our 62.5%
    fontFamily: _foundations_typography__WEBPACK_IMPORTED_MODULE_2__["fontFamily"]
  }, _foundations_typography__WEBPACK_IMPORTED_MODULE_2__["fontVariants"], {
    button: Object.assign({}, Object(_foundations_typography__WEBPACK_IMPORTED_MODULE_2__["fontVariant"])(400, 14, 22)),
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    caption: undefined,
    overline: undefined
  }),
  components: {
    MuiTypography: {
      defaultProps: {
        color: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].onyx
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          transition: 'none'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'none'
        }
      }
    },
    MuiChip: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          fontSize: _foundations_typography__WEBPACK_IMPORTED_MODULE_2__["fontVariants"].regularXXS.fontSize
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].carbon,
          backgroundColor: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].smoke,
          padding: 12,
          maxWidth: 325,
          boxShadow: '1px 1px 10px 0 rgba(0, 0, 0, .3)'
        },
        arrow: {
          color: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].smoke
        }
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.primary][400],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.primary][500],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.primary][700],
      contrastText: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].white
    },
    secondary: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].smoke,
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].aluminium,
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].iron,
      contrastText: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].smoke
    },
    info: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.info][200],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.info][500],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.info][700]
    },
    success: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.success][200],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.success][500],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.success][700]
    },
    warning: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.warning][200],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.warning][500],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.warning][700]
    },
    error: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.error][300],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.error][600],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.error][700]
    },
    danger: {
      light: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.danger][300],
      main: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.danger][500],
      dark: _foundations_colors__WEBPACK_IMPORTED_MODULE_3__["colors"][palette.danger][700]
    }
  }
});

/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss":
/*!***********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-2!./react-grid-canvas.module.scss */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/react-grid-canvas/src/lib/react-grid-canvas.tsx":
/*!***************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/react-grid-canvas.tsx ***!
  \***************************************************************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StyledLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StyledLayout */ "../../../libs/react-grid-canvas/src/lib/components/StyledLayout.tsx");
/* harmony import */ var _react_grid_canvas_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-grid-canvas.module.scss */ "../../../libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss");
/* harmony import */ var _react_grid_canvas_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_grid_canvas_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/react-grid-canvas.tsx";




function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_StyledLayout__WEBPACK_IMPORTED_MODULE_1__["CanvasGrid"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "../../../node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/@nrwl/web/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!***************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/add-to-unscopables.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/an-object.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!***************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/export.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!**************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/fails.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!***************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/global.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/has.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!*************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/html.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/is-forced.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/is-object.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!****************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/is-pure.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-symbol.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/is-symbol.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/iterators.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-assign.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-assign.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../../node_modules/core-js/internals/to-property-key.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../../node_modules/core-js/internals/to-property-key.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!******************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!*****************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/redefine.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!*******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/set-global.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!***************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/shared.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/string-repeat.js":
/*!**********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/string-repeat.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/this-number-value.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/this-number-value.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-length.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-object.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../../../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-property-key.js":
/*!************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-property-key.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-string.js":
/*!******************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/to-string.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/uid.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/modules/es.array.iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.number.to-fixed.js":
/*!*************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/modules/es.number.to-fixed.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "../../../node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "../../../node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.assign.js":
/*!***********************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/modules/es.object.assign.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../../../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***********************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/marius/dev/smaply-ui/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!/home/marius/dev/smaply-ui/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-2!/home/marius/dev/smaply-ui/libs/react-grid-canvas/src/lib/react-grid-canvas.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_react_grid_canvas_src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/react-grid-canvas/src/index */ "../../../libs/react-grid-canvas/src/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/marius/dev/smaply-ui/apps/smaply/src/app/app.tsx";

/* eslint-disable react/react-in-jsx-scope */
 // import { Route, Link } from 'react-router-dom';



const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_libs_react_grid_canvas_src_index__WEBPACK_IMPORTED_MODULE_1__["App"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/marius/dev/smaply-ui/apps/smaply/src/main.tsx";

/* eslint-disable */
// @ts-nocheck





Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_3__["App"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marius/dev/smaply-ui/apps/smaply/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map