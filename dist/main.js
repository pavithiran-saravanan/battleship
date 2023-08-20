/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/computer.js":
/*!************************************!*\
  !*** ./src/javascript/computer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getComputer)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/javascript/gameboard.js\");\n\n\nfunction getComputer() {\n  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  function placeShips() {\n    gameBoard.placeShipsRandom();\n  }\n\n  function getCoordinates() {\n    // Listen for a click event on the dom DOM Board\n    // Return the selected cell's position\n    // For now let the selection be randomly generated\n    const row = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    const col = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    return { row, col };\n  }\n\n  function play() {\n    return getCoordinates();\n  }\n\n  return {\n    gameBoard,\n    placeShips,\n    play,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/computer.js?");

/***/ }),

/***/ "./src/javascript/gameboard.js":
/*!*************************************!*\
  !*** ./src/javascript/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getGameBoard),\n/* harmony export */   randNum: () => (/* binding */ randNum)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/javascript/ship.js\");\n\n\nfunction createCell() {\n  return {\n    isHit: false,\n    hasShip: false,\n    ship: undefined,\n  };\n}\n\nfunction createBoard() {\n  const board = [];\n  for (let i = 0; i < 10; i += 1) {\n    const row = [];\n    for (let j = 0; j < 10; j += 1) {\n      row.push(createCell());\n    }\n    board.push(row);\n  }\n  return board;\n}\n\nfunction getShips() {\n  return [(0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5), (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4), (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3), (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2)];\n}\n\nfunction randNum() {\n  return Math.floor(Math.random() * 10);\n}\n\nfunction getGameBoard() {\n  const ships = getShips();\n  const placement = Array(5).fill(null);\n  const board = createBoard();\n\n  // Returns the name of ship given the Ship Id\n  // function getShipName(id) {\n  //   switch (id) {\n  //     case 0:\n  //       return \"Carrier\";\n  //     case 1:\n  //       return \"Battleship\";\n  //     case 2:\n  //       return \"Cruiser\";\n  //     case 3:\n  //       return \"Submarine\";\n  //     case 4:\n  //       return \"Destroyer\";\n  //     default:\n  //       return \"Ship\";\n  //   }\n  // }\n\n  // Check if given postition lies on board\n  function isOnBoard(row, col) {\n    if (row < 0 || col < 0 || row > 9 || col > 9) return false;\n    return true;\n  }\n\n  // Check if the requested placement is valid\n  function isPlacementValid(row, col, axis, length) {\n    if (axis === \"x\") {\n      for (let i = col; i < col + length; i += 1) {\n        if (!isOnBoard(row, i) || board[row][i].hasShip) return false;\n      }\n    } else {\n      for (let i = row; i < row + length; i += 1) {\n        if (!isOnBoard(i, col) || board[i][col].hasShip) return false;\n      }\n    }\n    return true;\n  }\n\n  // Place a given ship at specified position along specified direction\n  function placeShip(id, row, col, axis) {\n    if (!isPlacementValid(row, col, axis, ships[id].length)) return false;\n    placement[id] = { row, col, axis };\n    if (axis === \"x\") {\n      for (let i = col; i < col + ships[id].length; i += 1) {\n        board[row][i].hasShip = true;\n        board[row][i].ship = id;\n      }\n    } else {\n      for (let i = row; i < row + ships[id].length; i += 1) {\n        board[i][col].hasShip = true;\n        board[i][col].ship = id;\n      }\n    }\n    return true;\n  }\n\n  // Place all ships at random positions\n  function randDir() {\n    return Math.floor(Math.random() * 2) === 1 ? \"x\" : \"y\";\n  }\n\n  function placeShipsRandom() {\n    ships.forEach((ship, shipId) => {\n      while (true) {\n        if (placeShip(shipId, randNum(), randNum(), randDir())) break;\n      }\n    });\n  }\n\n  // Receive Attack\n  function receiveAttack(row, col) {\n    const cell = board[row][col];\n    if (cell.isHit) return false;\n    cell.isHit = true;\n    if (cell.hasShip) {\n      const shipId = cell.ship;\n      ships[shipId].hit();\n    }\n    return true;\n  }\n\n  // Check if all ships have been sunk\n  function allShipsSunk() {\n    for (let i = 0; i < ships.length; i += 1) {\n      if (!ships[i].isSunk()) return false;\n    }\n    return true;\n  }\n\n  return {\n    board,\n    ships,\n    placeShip,\n    placeShipsRandom,\n    receiveAttack,\n    allShipsSunk,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/gameboard.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ \"./src/javascript/computer.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/javascript/player.js\");\n\n\n\nconst player = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst computer = (0,_computer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nplayer.placeShips();\ncomputer.placeShips();\nlet turns = 1;\n\nconsole.log(player.gameBoard.board, computer.gameBoard.board);\n\nfunction computerAttacks() {\n  let target = player.play();\n  while (!computer.gameBoard.receiveAttack(target.row, target.col))\n    target = player.play();\n  return target;\n}\n\nfunction playerAttacks() {\n  let target = computer.play();\n  while (!player.gameBoard.receiveAttack(target.row, target.col))\n    target = computer.play();\n  return target;\n}\n\nfunction shipsSunk(obj) {\n  return obj.gameBoard.ships.filter((ship) => ship.isSunk()).length;\n}\n\nwhile (true) {\n  console.log(`TURN ${turns}`);\n\n  // Player's turn\n  const playerTarget = playerAttacks();\n  console.log(`Player's Turn (${playerTarget.row}, ${playerTarget.col})`);\n  console.log(`Comp Ships Sunk: ${shipsSunk(computer)}`);\n  if (computer.gameBoard.allShipsSunk()) {\n    console.log(\"*** GAME OVER. PLAYER WON ***\");\n    break;\n  }\n\n  // Computer's turn\n  const computerTarget = computerAttacks();\n  console.log(`Computer's Turn (${computerTarget.row}, ${computerTarget.col})`);\n  console.log(`Player Ships Sunk: ${shipsSunk(player)}`);\n  if (player.gameBoard.allShipsSunk()) {\n    console.log(\"*** GAME OVER. COMPUTER WON ***\");\n    break;\n  }\n\n  console.log(\"--------------------------------------------------------\");\n  turns += 1;\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/player.js":
/*!**********************************!*\
  !*** ./src/javascript/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPlayer)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/javascript/gameboard.js\");\n\n\nfunction getPlayer() {\n  const gameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  function placeShips() {\n    gameBoard.placeShipsRandom();\n  }\n\n  function getCoordinates() {\n    // Listen for a click event on the dom DOM Board\n    // Return the selected cell's position\n    // For now let the selection be randomly generated\n    const row = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    const col = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.randNum)();\n    return { row, col };\n  }\n\n  function play() {\n    return getCoordinates();\n  }\n\n  return {\n    gameBoard,\n    placeShips,\n    play,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/player.js?");

/***/ }),

/***/ "./src/javascript/ship.js":
/*!********************************!*\
  !*** ./src/javascript/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getShip)\n/* harmony export */ });\nfunction getShip(len) {\n  function hit() {\n    if (this.hits < this.length) this.hits += 1;\n    if (this.hits === this.length) this.sunk = true;\n  }\n\n  function isSunk() {\n    return this.sunk;\n  }\n\n  return {\n    length: len,\n    hits: 0,\n    sunk: false,\n    hit,\n    isSunk,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/javascript/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;