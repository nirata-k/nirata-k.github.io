const quiz = [
  {
    question: 'ゲーム市場最も売れたゲーム機は次のうちどれ？',
    answer: [
      'スーパーファミコン',
      'プレイステーション2',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: 'Daftpunk x 松本零士で最も有名な曲といえば？',
    answer: [
      'One More Time',
      'harder better faster stronger',
      'digital love',
      'get lucky'
    ],
    correct: 'One More Time'
  }, {
    question: 'ロックマンエックスX4のゼロの声優といえば？',
    answer: [
      '緑川 光',
      '置鮎 龍太郎',
      '森久保 祥太郎',
      '伊達 政宗'
    ],
    correct: '置鮎 龍太郎'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuize = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while( buttonIndex < buttonLength ) {
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex ++;
  }
};
setupQuize();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score ++;
  } else {
    window.alert('不正解！');
  }

  quizIndex ++;
  if(quizIndex < quizLength){
    // 問題数があればこちらを実行
    setupQuize();
  } else {
    // 問題数がなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');

  }
};

// ボタンが押下された際の正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex ++;
}
