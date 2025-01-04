import wordlist from './data/wordlist.json';

// 単語リストの型定義
type WordObject = {
  name: string;
  spell: string;
};

const words: WordObject[] = wordlist;

// HTML要素の取得
const wordElement = document.getElementById('word') as HTMLElement;
const spellElement = document.getElementById('spell') as HTMLElement;
const inputElement = document.getElementById('input') as HTMLInputElement;
const scoreElement = document.getElementById('score') as HTMLElement;
const timeElement = document.getElementById('time') as HTMLElement;
const startButton = document.getElementById('start') as HTMLButtonElement;
const transitionButton = document.getElementById('topButton') as HTMLButtonElement;
const top = document.getElementById("top") as HTMLElement
const gameScreen = document.getElementById("game") as HTMLElement

// ゲーム状態
let score: number = 0;
let time: number = 30;
let currentWord: WordObject = { name: '', spell: '' };
let timer: any;

// ランダムな単語を取得
function getRandomWord(): WordObject {
  return words[Math.floor(Math.random() * words.length)];
}

// 新しい単語を表示
function setNewWord() {
  currentWord = getRandomWord();
  wordElement.textContent = currentWord.name;
  inputElement.value = '';
}

// スペルを表示
function setNewSpell() {
  spellElement.textContent = currentWord.spell;
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
  scoreElement.textContent = 'スコア: 0';
  timeElement.textContent = '残り時間: 30秒';
  wordElement.textContent = '';
  spellElement.textContent = '';
  inputElement.value = '';
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
  setNewSpell();
  updateScore();
  countdown();
}


// 入力チェック
inputElement.addEventListener('input', () => {
  if (inputElement.value.trim() === currentWord.spell) {
    updateScore();
    setNewWord();
    setNewSpell();
  }
});

// イベントリスナーの設定
if (startButton) {
  startButton.addEventListener('click', startGame);
}

gameScreen.classList.toggle('hidden')
gameScreen.classList.add('hidden'); // 非表示にする

transitionButton.addEventListener("click",()=>{
  gameScreen.classList.toggle('hidden')
  transitionButton.classList.add('hidden')
  transitionButton.remove()
  top.remove()
})


