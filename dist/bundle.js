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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_wordlist_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/wordlist.json */ \"./src/data/wordlist.json\");\n\nconst words = _data_wordlist_json__WEBPACK_IMPORTED_MODULE_0__;\n// HTML要素の取得\nconst wordElement = document.getElementById('word');\nconst spellElement = document.getElementById('spell');\nconst inputElement = document.getElementById('input');\nconst scoreElement = document.getElementById('score');\nconst timeElement = document.getElementById('time');\nconst startButton = document.getElementById('start');\nconst transitionButton = document.getElementById('topButton');\nconst gameScreen = document.getElementById(\"game\");\n// ゲーム状態\nlet score = 0;\nlet time = 30;\nlet currentWord = { name: '', spell: '' };\nlet timer;\n// ランダムな単語を取得\nfunction getRandomWord() {\n    return words[Math.floor(Math.random() * words.length)];\n}\n// 新しい単語を表示\nfunction setNewWord() {\n    currentWord = getRandomWord();\n    wordElement.textContent = currentWord.name;\n    inputElement.value = '';\n}\n// スペルを表示\nfunction setNewSpell() {\n    spellElement.textContent = currentWord.spell;\n}\n// スコアを更新\nfunction updateScore() {\n    score++;\n    scoreElement.textContent = `スコア: ${score}`;\n}\n// 時間をカウントダウン\nfunction countdown() {\n    timer = setInterval(() => {\n        time--;\n        timeElement.textContent = `残り時間: ${time}秒`;\n        if (time <= 0) {\n            clearInterval(timer);\n            endGame();\n        }\n    }, 1000);\n}\n// ゲーム終了\nfunction endGame() {\n    alert(`ゲーム終了！最終スコア: ${score}`);\n    resetGame();\n}\n// ゲームリセット\nfunction resetGame() {\n    score = 0;\n    time = 30;\n    scoreElement.textContent = 'スコア: 0';\n    timeElement.textContent = '残り時間: 30秒';\n    wordElement.textContent = '';\n    spellElement.textContent = '';\n    inputElement.value = '';\n    inputElement.disabled = true;\n    startButton.disabled = false;\n}\n// ゲーム開始\nfunction startGame() {\n    score = 0;\n    time = 30;\n    startButton.disabled = true;\n    inputElement.disabled = false;\n    setNewWord();\n    setNewSpell();\n    updateScore();\n    countdown();\n}\n// 入力チェック\ninputElement.addEventListener('input', () => {\n    if (inputElement.value.trim() === currentWord.spell) {\n        updateScore();\n        setNewWord();\n        setNewSpell();\n    }\n});\n// イベントリスナーの設定\nif (startButton) {\n    startButton.addEventListener('click', startGame);\n}\ngameScreen.classList.toggle('hidden');\ngameScreen.classList.add('hidden'); // 非表示にする\ntransitionButton.addEventListener(\"click\", () => {\n    gameScreen.classList.toggle('hidden');\n});\n\n\n//# sourceURL=webpack://typinggame/./src/index.ts?");

/***/ }),

/***/ "./src/data/wordlist.json":
/*!********************************!*\
  !*** ./src/data/wordlist.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"name\":\"レガレイラ\",\"spell\":\"regaleira\",\"difficulty\":\"easy\"},{\"name\":\"武豊\",\"spell\":\"taakeyutaka\",\"difficulty\":\"easy\"},{\"name\":\"ウマ娘\",\"spell\":\"umamusume\",\"difficulty\":\"easy\"},{\"name\":\"掛かる\",\"spell\":\"kakaru\",\"difficulty\":\"easy\"},{\"name\":\"気性難\",\"spell\":\"kishounan\",\"difficulty\":\"easy\"}]');\n\n//# sourceURL=webpack://typinggame/./src/data/wordlist.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;