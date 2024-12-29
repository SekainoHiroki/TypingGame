import wordlist from './data/wordlist.json';
// 単語リスト

type wordObject = {
  "name":string,
  "spell":string
}

const words: wordObject[] = wordlist

// HTML要素の取得
const wordElement = document.getElementById("word") as HTMLElement;
const inputElement = document.getElementById("input") as HTMLInputElement;
const scoreElement = document.getElementById("score") as HTMLElement;
const timeElement = document.getElementById("time") as HTMLElement;
const startButton = document.getElementById("start") as HTMLButtonElement;

console.log("イイ感じにbuildできていますよ！！！！")
console.log("イイ感じにgitのステータスが反映されていましたよ")

console.log('Word List:', wordlist);
// ゲーム状態
const test:wordObject = wordlist[0]

let score: number = 0;
let time: number = 30;
let currentWord: wordObject = {"name":"","spell":""};
let timer: any;

// ランダムな単語を取得
function getRandomWord(): wordObject {
  return words[Math.floor(Math.random() * words.length)];
}

// 新しい単語を表示
function setNewWord() {
  currentWord = getRandomWord();
  wordElement.textContent = currentWord.spell;
  inputElement.value = "";
}

// スコアを更新
function updateScore() {
  score++;
  scoreElement.textContent = `スコア: ${score}`;
}

// 時間をカウントダウン
function countdown() {
  timer = setInterval(() => {
    time--;
    timeElement.textContent = `残り時間: ${time}秒`;

    if (time <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

// ゲーム終了
function endGame() {
  alert(`ゲーム終了！最終スコア: ${score}`);
  resetGame();
}

// ゲームリセット
function resetGame() {
  score = 0;
  time = 30;
  scoreElement.textContent = "スコア: 0";
  timeElement.textContent = "残り時間: 30秒";
  wordElement.textContent = "";
  inputElement.value = "";
  inputElement.disabled = true;
  startButton.disabled = false;
}

// ゲーム開始
function startGame() {
  score = 0;
  time = 30;
  startButton.disabled = true;
  inputElement.disabled = false;
  setNewWord();
  updateScore();
  countdown();
}

// 入力チェック
inputElement.addEventListener("input", () => {
  if (inputElement.value.trim() === currentWord.spell) {
    updateScore();
    setNewWord();
  }
});

// スタートボタンのイベント
startButton.addEventListener("click", startGame);

