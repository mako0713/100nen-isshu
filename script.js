// script.js の全コード（画面遷移修正版）

const karutaData = [
    { id: 1, kami: "後漢から/金印もらった/奴国の王", kami_yomi: "ごかんから/きんいんもらった/なこくのおう", shimo: "こんな金印/もらっていいの？", shimo_yomi: "こんなきんいん/もらっていいの", quizzes: [
        { type: "numpad", question: "奴国の王が後漢から金印をもらったのは何年？", correctAnswer: "57" },
        { type: "choice", question: "奴国の王が使いを送った国はどこ？", options: ["後漢", "前漢", "新", "隋", "唐"], correctAnswer: "後漢" },
        { type: "choice", question: "金印が発見された場所は？", options: ["志賀島(福岡県)", "江田船山古墳(熊本県)", "壱岐(長崎県)", "対馬(長崎県)", "平城京跡(奈良県)"], correctAnswer: "志賀島(福岡県)" }
    ] },
    { id: 2, kami: "親魏倭王/女王卑弥呼の/不思議な力", kami_yomi: "しんぎわおう/じょおうひみこの/ふしぎなちから", shimo: "不作知らずの 邪馬台国", shimo_yomi: "ふさくしらずの/やまたいこく", quizzes: [
        { type: "numpad", question: "卑弥呼が魏に遣使したのは何年？", correctAnswer: "239" },
        { type: "choice", question: "卑弥呼が使いを送ったのはどこの国？", options: ["魏", "呉", "蜀", "晋", "宋"], correctAnswer: "魏" },
        { type: "choice", question: "卑弥呼に授けられた称号は？", options: ["親魏倭王", "漢委奴国王", "安東大将軍倭王", "倭国大王", "邪馬台国王"], correctAnswer: "親魏倭王" }
    ] },
    { id: 3, kami: "朝貢し/宋に上表/「打倒・高句麗」", kami_yomi: "ちょうこうし/そうにじょうひょう/だとうこうくり", shimo: "武の得た品は くだらないもの", shimo_yomi: "ぶのえたしなは/くだらないもの", quizzes: [
        { type: "numpad", question: "倭王武が南朝の宋に遣使したのは何年？", correctAnswer: "478" },
        { type: "choice", question: "武が上表文で言及した、朝貢を邪魔する国は？", options: ["高句麗", "新羅", "百済", "伽耶", "隋"], correctAnswer: "高句麗" },
        { type: "choice", question: "次のうち、武が軍事権の称号を得られなかった国は？", options: ["百済", "新羅", "加羅", "秦韓", "任那"], correctAnswer: "百済" }
    ] },
    { id: 4, kami: "くだらない？/仏像めぐって/争う両氏", kami_yomi: "くだらない/ぶつぞうめぐって/あらそうりょうし", shimo: "ゴミ屋に出すの？ここに置くの？", shimo_yomi: "ごみやにだすの？/ここにおくの？", quizzes: [
        { type: "numpad", question: "仏教公伝の年は538年説と何年説がある？", correctAnswer: "552" },
        { type: "choice", question: "６世紀半ば、日本に仏像と経典をおくった国は？", options: ["百済", "新羅", "高句麗", "伽耶", "中国"], correctAnswer: "百済" },
        { type: "choice", question: "仏教の扱いをめぐって争った豪族の組み合わせで正しいものは？", options: ["蘇我氏と物部氏", "中臣氏と蘇我氏", "大伴氏と物部氏", "蘇我氏と紀氏", "物部氏と平群氏"], correctAnswer: "蘇我氏と物部氏" }
    ] },
    { id: 5, kami: "役人の/心構え説く/聖徳太子", kami_yomi: "やくにんの/こころがまえとく/しょうとくたいし", shimo: "群れよる部下に 17条", shimo_yomi: "むれよるぶかに/じゅうななじょう", quizzes: [
        { type: "numpad", question: "十七条の憲法が制定されたのは何年？", correctAnswer: "604" },
        { type: "choice", question: "十七条の憲法を制定した人物は？", options: ["聖徳太子", "推古天皇", "蘇我馬子", "用明天皇", "中大兄皇子"], correctAnswer: "聖徳太子" },
        { type: "choice", question: "聖徳太子は、誰の摂政だったか？", options: ["推古天皇", "崇峻天皇", "用明天皇", "欽明天皇", "敏達天皇"], correctAnswer: "推古天皇" }
    ] },
    { id: 6, kami: "怒り買う/「日出ずる処の天子」の/記述", kami_yomi: "いかりかう/ひいずるところの/てんしのきじゅつ", shimo: "無礼な国書の 遣隋使", shimo_yomi: "ぶれいなこくしょの/けんずいし", quizzes: [
        { type: "numpad", question: "遣隋使を派遣したのは何年？", correctAnswer: "607" },
        { type: "choice", question: "607年に派遣された遣隋使は誰？", options: ["小野妹子", "犬上御田鍬", "高向玄理", "旻", "南淵請安"], correctAnswer: "小野妹子" },
        { type: "choice", question: "国書に対して不機嫌になったという隋の皇帝は誰？", options: ["煬帝", "文帝", "高祖", "太宗", "煬堅"], correctAnswer: "煬帝" }
    ] },
    { id: 7, kami: "ロミオじゃない/残念ながら/御田鍬は", kami_yomi: "ろみおじゃない/ざんねんながら/みたすきは", shimo: "むさいオッサン 遣唐使！", shimo_yomi: "むさいおっさん/けんとうし", quizzes: [
        { type: "numpad", question: "遣唐使が派遣されたのは何年？", correctAnswer: "630" },
        { type: "choice", question: "630年から894年に廃止されるまでの間、大陸の文化を学びに派遣された使者を何という？", options: ["遣唐使", "遣隋使", "遣明使", "遣新羅使", "朝貢使"], correctAnswer: "遣唐使" },
        { type: "choice", question: "第一回遣唐使として送られた使者は誰か？", options: ["犬上御田鍬", "小野妹子", "高向玄理", "阿倍仲麻呂", "吉備真備"], correctAnswer: "犬上御田鍬" }
    ] },
    { id: 8, kami: "物陰で/一矢番えた/鎌足は", kami_yomi: "ものかげで/いっしつがえた/かまたりは", shimo: "無事故でなしたい 大化の改新", shimo_yomi: "むじこでなしたい/たいかのかいしん", quizzes: [
        { type: "numpad", question: "大化の改新の始まりとされる乙巳の変は何年？", correctAnswer: "645" },
        { type: "choice", question: "乙巳の変から始まる一連の政治改革を何という？", options: ["大化の改新", "壬申の乱", "承久の乱", "建武の新政", "平治の乱"], correctAnswer: "大化の改新" },
        { type: "choice", question: "乙巳の変を起こしたのは誰と誰？", options: ["中大兄皇子と中臣鎌足", "蘇我蝦夷と蘇我入鹿", "大海人皇子と大友皇子", "聖徳太子と蘇我馬子", "天武天皇と持統天皇"], correctAnswer: "中大兄皇子と中臣鎌足" }
    ] },
    { id: 9, kami: "亡国の/百済救けに/白村江へ", kami_yomi: "ぼうこくの/くだらたすけに/はくそんこうへ", shimo: "無理無理さ 唐と新羅が相手", shimo_yomi: "むりむりさ とうと/しらぎがあいて", quizzes: [
        { type: "numpad", question: "白村江の戦いは何年？", correctAnswer: "663" },
        { type: "choice", question: "663年、百済の要請で日本が派兵し、大敗した戦いは？", options: ["白村江の戦い", "壬申の乱", "元寇", "応仁の乱", "川中島の戦い"], correctAnswer: "白村江の戦い" },
        { type: "choice", question: "白村江の戦いで日本が戦った連合軍はどの国とどの国？", options: ["唐と新羅", "百済と高句麗", "隋と高句麗", "呉と蜀", "新羅と百済"], correctAnswer: "唐と新羅" }
    ] },
    { id: 10, kami: "跡継ぎを/巡る乱見て/人心染まる", kami_yomi: "あとつぎを/めぐるらんみて/じんしんそまる", shimo: "「【海】・【友】ろくな 2人じゃない」と", shimo_yomi: "うみともろくな/ふたりじゃないと", quizzes: [
        { type: "numpad", question: "壬申の乱は何年？", correctAnswer: "672" },
        { type: "choice", question: "672年に起こった、天智天皇の跡継ぎ争いは？", options: ["壬申の乱", "承久の乱", "保元の乱", "平治の乱", "応仁の乱"], correctAnswer: "壬申の乱" },
        { type: "choice", question: "壬申の乱に勝利し、即位後に天武天皇となる人物は？", options: ["大海人皇子", "大友皇子", "中大兄皇子", "有間皇子", "蘇我入鹿"], correctAnswer: "大海人皇子" }
    ] },
    { id: 11, kami: "大宝の/唐から学んだ/律令制は", kami_yomi: "たいほうの/とうからまなんだ/りつりょうせいは", shimo: "日本でなおいい 大きな宝", shimo_yomi: "にほんでなおいい/おおきなたから", quizzes: [
        { type: "numpad", question: "大宝律令が制定されたのは何年？", correctAnswer: "701" },
        { type: "choice", question: "大宝律令は、どこの国の律令にならったものか？", options: ["唐", "隋", "新羅", "百済", "宋"], correctAnswer: "唐" },
        { type: "choice", question: "8世紀の初めに制定された、唐にならった律令は？", options: ["大宝律令", "養老律令", "飛鳥浄御原令", "弘仁・貞観格式", "武家諸法度"], correctAnswer: "大宝律令" }
    ] },
    { id: 12, kami: "今は昔/唐に倣った/流通貨幣", kami_yomi: "いまはむかし/とうにならった/りゅうつうかへい", shimo: "名を和同開珎と いいけり", shimo_yomi: "なをわどうかいほう/といいけり", quizzes: [
        { type: "numpad", question: "和同開珎が発行されたのは何年？", correctAnswer: "708" },
        { type: "choice", question: "708年に発行された通貨を何という？", options: ["和同開珎", "富本銭", "永楽通宝", "寛永通宝", "皇朝十二銭"], correctAnswer: "和同開珎" },
        { type: "choice", question: "和同開珎はどこの国の通貨に倣ったものか？", options: ["唐", "隋", "宋", "漢", "新羅"], correctAnswer: "唐" }
    ] },
    { id: 13, kami: "京都より/南の都/つまりは南都", kami_yomi: "きょうとより/みなみのみやこ/つまりはなんと", shimo: "なんと綺麗な 平城京", shimo_yomi: "なんときれいな/へいじょうきょう", quizzes: [
        { type: "numpad", question: "平城京への遷都は何年？", correctAnswer: "710" },
        { type: "choice", question: "710年に置かれた都は？", options: ["平城京", "平安京", "長岡京", "藤原京", "難波京"], correctAnswer: "平城京" },
        { type: "choice", question: "平城京は現在の何県にある？", options: ["奈良県", "京都府", "大阪府", "滋賀県", "三重県"], correctAnswer: "奈良県" }
    ] },
    { id: 14, kami: "「あれ？」/「 Oh No！」/古事記編纂 苦戦中", kami_yomi: "あれ？おーのう！/こじきへんさん/くせんちゅう", shimo: "なかなか息の 合わない2人", shimo_yomi: "なかなかいきの/あわないふたり", quizzes: [
        { type: "numpad", question: "古事記が完成したのは何年？", correctAnswer: "712" },
        { type: "choice", question: "712年に編纂された歴史書は？", options: ["古事記", "日本書紀", "万葉集", "風土記", "続日本紀"], correctAnswer: "古事記" },
        { type: "choice", question: "古事記編纂に関わったとされる２人は誰と誰？", options: ["稗田阿礼と太安万侶", "舎人親王と藤原不比等", "柿本人麻呂と山上憶良", "聖徳太子と蘇我馬子", "天武天皇と持統天皇"], correctAnswer: "稗田阿礼と太安万侶" }
    ] },
    { id: 15, kami: "新しく/開墾した土地/永年私財", kami_yomi: "あたらしく/かいこんしたとち/えいねんしざい", shimo: "返す必要 もうなしさ", shimo_yomi: "かえすひつよう/もうなしさ", quizzes: [
        { type: "numpad", question: "墾田永年私財法が出されたのは何年？", correctAnswer: "743" },
        { type: "choice", question: "743年に制定された法は何？", options: ["墾田永年私財法", "班田収授法", "三世一身法", "公地公民制", "租庸調"], correctAnswer: "墾田永年私財法" },
        { type: "choice", question: "墾田永年私財法が制定された時の天皇は誰？", options: ["聖武天皇", "元明天皇", "桓武天皇", "天武天皇", "称徳天皇"], correctAnswer: "聖武天皇" }
    ] },
    { id: 16, kami: "感無量/最も澄んだ/空から海へ", kami_yomi: "かんむりょう/もっともすんだ/そらからうみへ", shimo: "鳴くよウグイス 平安京", shimo_yomi: "なくようぐいす/へいあんきょう", quizzes: [
        { type: "numpad", question: "平安京への遷都は何年？", correctAnswer: "794" },
        { type: "choice", question: "794年に平安京に遷都した際の天皇は誰？", options: ["桓武天皇", "聖武天皇", "嵯峨天皇", "光仁天皇", "平城天皇"], correctAnswer: "桓武天皇" },
        { type: "choice", question: "桓武天皇が手厚く保護した天台宗と真言宗の開祖は？", options: ["最澄と空海", "鑑真と道鏡", "道元と栄西", "親鸞と日蓮", "一遍と法然"], correctAnswer: "最澄と空海" }
    ] },
    { id: 17, kami: "アテルイを/降した/征夷大将軍は", kami_yomi: "アテルイを/くだしたせいい/たいしょうぐんは", shimo: "覇王になれない 田村麻呂", shimo_yomi: "はおうになれない/たむらまろ", quizzes: [
        { type: "numpad", question: "坂上田村麻呂が蝦夷のアテルイを降伏させたのは何年？", correctAnswer: "802" },
        { type: "choice", question: "802年に蝦夷のアテルイを降伏させたのは誰？", options: ["坂上田村麻呂", "文室綿麻呂", "藤原緒嗣", "桓武天皇", "空海"], correctAnswer: "坂上田村麻呂" },
        { type: "choice", question: "蝦夷討伐に際し、坂上田村麻呂に与えられていた役職は？", options: ["征夷大将軍", "鎮守府将軍", "関白", "太政大臣", "大納言"], correctAnswer: "征夷大将軍" }
    ] },
    { id: 18, kami: "内乱で/衰えし唐に/道真は", kami_yomi: "ないらんで/おとろえしとうに/みちざねは", shimo: "白紙に戻せ 遣唐使", shimo_yomi: "はくしにもどせ/けんとうし", quizzes: [
        { type: "numpad", question: "遣唐使が廃止されたのは何年？", correctAnswer: "894" },
        { type: "choice", question: "894年に何が廃止された？", options: ["遣唐使", "遣隋使", "勘合貿易", "朱印船貿易", "日宋貿易"], correctAnswer: "遣唐使" },
        { type: "choice", question: "894年に遣唐使を廃止したのは誰？", options: ["菅原道真", "藤原時平", "宇多天皇", "最澄", "円仁"], correctAnswer: "菅原道真" }
    ] },
    { id: 19, kami: "関東の/各地に残る/首塚伝承", kami_yomi: "かんとうの/かくちにのこる/くびづかでんしょう", shimo: "平将門 首三個？", shimo_yomi: "たいらのまさかど/くびさんこ？", quizzes: [
        { type: "numpad", question: "平将門の乱は何年？", correctAnswer: "935" },
        { type: "choice", question: "935年に乱を起こしたのは誰？", options: ["平将門", "藤原純友", "藤原道長", "源頼朝", "平清盛"], correctAnswer: "平将門" },
        { type: "choice", question: "平将門の乱はどこで起こった？", options: ["関東地方", "東北地方", "瀬戸内海", "京都", "九州"], correctAnswer: "関東地方" }
    ] },
    { id: 20, kami: "この世には/欠けぬ望月/などはなく", kami_yomi: "このよには/かけぬもちづき/などはなく", shimo: "遠いむかしさ 道長の世も", shimo_yomi: "とおいむかしさ/みちながのよも", quizzes: [
        { type: "numpad", question: "藤原道長が摂政になったのは何年？", correctAnswer: "1016" },
        { type: "choice", question: "「この世をば…」という歌を詠んだのは誰か？", options: ["藤原道長", "藤原頼通", "藤原実資", "清少納言", "紫式部"], correctAnswer: "藤原道長" },
        { type: "choice", question: "1016年、藤原道長は何の役職に就任したか？", options: ["摂政", "関白", "太政大臣", "内覧", "征夷大将軍"], correctAnswer: "摂政" }
    ] }
];

// ゲーム設定
const ROUND_DURATION = 14000;
const CARDS_PER_ROUND = 10;
const RANK_B_LIMIT = 1500;
const QUIZ_CORRECT_BONUS = 1;

const ranks = ['SS', 'S', 'A', 'B', 'C'];
const rankPoints = { SS: 6, S: 5, A: 4, B: 3, C: 2, D: 1, E: 0 };

// HTMLの要素を取得
const selectionContainer = document.getElementById('selection-container');
const startQuizGameBtn = document.getElementById('start-quiz-game-btn');
const startReadingGameBtn = document.getElementById('start-reading-game-btn');
const gameContainer = document.getElementById('game-container');
const resultsContainer = document.getElementById('results-container');
const kamiKuText = document.getElementById('kami-ku-text');
const shimoKuText = document.getElementById('shimo-ku-text');
const torifudaContainer = document.getElementById('torifuda-container');
const startButton = document.getElementById('start-button');
const messageEl = document.getElementById('message');
const scoreEl = document.getElementById('score');
const remainingCountEl = document.getElementById('remaining-count');
const quizModal = document.getElementById('quiz-modal');
const quizQuestion = document.getElementById('quiz-question');
const quizContentArea = document.getElementById('quiz-content-area');
const quizResult = document.getElementById('quiz-result');
const bgmAudio = document.getElementById('bgm-audio');
const sfxCardCorrect = document.getElementById('sfx-card-correct');
const sfxQuizShow = document.getElementById('sfx-quiz-show');
const sfxQuizCorrect = document.getElementById('sfx-quiz-correct');
const sfxQuizWrong = document.getElementById('sfx-quiz-wrong');
const sfxResults = document.getElementById('sfx-results');

let speechQueue = [];
let currentPoem = null;
let remainingPoems = [...karutaData];
let totalScore = 0;
let rankCounts = { SS: 0, S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
let isGameActive = false;
let answeredInRound = false;
let currentPhraseIndex = 0;
let mistakeMadeInRound = false;
let quizTimer = null;
let roundTimer = null;
let isBgmPlaying = false;

startQuizGameBtn.addEventListener('click', () => {
    selectionContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');

    if (bgmAudio) {
        bgmAudio.volume = 0.3;
        bgmAudio.play().catch(e => console.error("BGM playback failed:", e));
        isBgmPlaying = true;
    }
    
    // ゲームのスタート画面にある、見えないスタートボタンは押さない
    // document.getElementById('start-button').click(); // ★★★ この行を削除 ★★★
});

startButton.addEventListener('click', startGame);

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
}

function speak(text) {
    return new Promise((resolve) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'ja-JP';
            utterance.pitch = 1.0;
            utterance.rate = 1.0;
            speechQueue.push(utterance);
            utterance.onend = () => {
                const index = speechQueue.indexOf(utterance);
                if (index > -1) speechQueue.splice(index, 1);
                setTimeout(() => resolve(), 50);
            };
            utterance.onerror = () => {
                const index = speechQueue.indexOf(utterance);
                if (index > -1) speechQueue.splice(index, 1);
                resolve();
            };
            window.speechSynthesis.speak(utterance);
        } else {
            resolve();
        }
    });
}

function startGame() {
    if (isBgmPlaying && bgmAudio) {
        bgmAudio.pause();
    }

    if (roundTimer) clearTimeout(roundTimer);
    if (quizTimer) clearTimeout(quizTimer);
    quizModal.classList.add('hidden');
    window.speechSynthesis.cancel();
    speechQueue = [];

    if (remainingPoems.length === 0) {
        showFinalResults();
        return;
    }
    
    isGameActive = true;
    answeredInRound = false;
    mistakeMadeInRound = false;
    currentPhraseIndex = 0;
    startButton.style.display = 'none';
    messageEl.textContent = " ";
    remainingCountEl.textContent = remainingPoems.length;
    scoreEl.textContent = totalScore;
    
    const correctPoemIndex = Math.floor(Math.random() * remainingPoems.length);
    currentPoem = remainingPoems[correctPoemIndex];
    let displayCards = [currentPoem];
    let dummyPoems = karutaData.filter(p => p.id !== currentPoem.id);
    shuffleArray(dummyPoems);
    displayCards.push(...dummyPoems.slice(0, CARDS_PER_ROUND - 1));
    shuffleArray(displayCards);
    torifudaContainer.innerHTML = '';
    torifudaContainer.style.pointerEvents = 'auto';
    displayCards.forEach(poem => {
        const cardImage = document.createElement('img');
        cardImage.src = `images/tori_${String(poem.id).padStart(3, '0')}.png`;
        cardImage.classList.add('torifuda-card');
        cardImage.dataset.id = poem.id;
        cardImage.addEventListener('click', onCardClick);
        torifudaContainer.appendChild(cardImage);
    });

    readPoem();
    
    roundTimer = setTimeout(handleTimeout, ROUND_DURATION);
}

function handleTimeout() {
    if (!answeredInRound) {
        messageEl.textContent = "時間切れ！";
        rankCounts.E++;
        remainingPoems = remainingPoems.filter(p => p.id !== currentPoem.id);
    }
    startGame();
}

async function readPoem() {
    const kamiPhrases = currentPoem.kami.split('/');
    const kamiYomiPhrases = currentPoem.kami_yomi.split('/');
    const shimoPhrase = currentPoem.shimo.split('/').join(' ');
    const shimoYomiPhrase = currentPoem.shimo_yomi.split('/').join(' ');
    kamiKuText.textContent = ' ';
    shimoKuText.textContent = ' ';
    for (let i = 0; i < kamiPhrases.length; i++) {
        currentPhraseIndex = i;
        kamiKuText.textContent += kamiPhrases[i] + ' ';
        await speak(kamiYomiPhrases[i]);
    }
    
    currentPhraseIndex = 3;
    shimoKuText.textContent = shimoPhrase;
    setTimeout(() => {
        if (!answeredInRound) {
            currentPhraseIndex = 4;
        }
    }, RANK_B_LIMIT);
    await speak(shimoYomiPhrase);
    currentPhraseIndex = -1;
}

function onCardClick(event) {
    if (!isGameActive) return;
    
    const clickedCardId = parseInt(event.target.dataset.id);

    if (clickedCardId === currentPoem.id) {
        if (!answeredInRound) {
            playSound(sfxCardCorrect);
            answeredInRound = true;
            
            let rank = '';
            if (mistakeMadeInRound) { rank = 'E'; }
            else if (currentPhraseIndex === -1) { rank = 'D'; }
            else { rank = ranks[currentPhraseIndex] || 'D'; }
            
            rankCounts[rank]++;
            totalScore += rankPoints[rank];
            
            messageEl.textContent = `正解！ ランク: ${rank} (+${rankPoints[rank]}点)`;
            scoreEl.textContent = totalScore;
            
            remainingPoems = remainingPoems.filter(p => p.id !== currentPoem.id);
            
            event.target.style.boxShadow = '0 0 20px #2ecc71';
            torifudaContainer.style.pointerEvents = 'none';

            if (currentPoem.quizzes && currentPoem.quizzes.length > 0) {
                showQuiz(currentPoem, 0);
            }
        }
    } else {
        if (!answeredInRound) {
            playSound(sfxQuizWrong);
            messageEl.textContent = "お手つき！";
            mistakeMadeInRound = true;
            event.target.style.opacity = '0.5';
            event.target.style.pointerEvents = 'none';
        }
    }
}

function showQuiz(poem, quizIndex) {
    if (quizIndex > 0) {
        playSound(sfxQuizShow);
    }
    const quiz = poem.quizzes[quizIndex];
    if (!quiz) {
        quizModal.classList.add('hidden');
        return;
    }
    quizQuestion.textContent = `【第${quizIndex + 1}問】 ${quiz.question}`;
    quizContentArea.innerHTML = '';
    quizResult.textContent = '';
    if (quiz.type === 'numpad') {
        const displayContainer = document.createElement('div');
        displayContainer.id = 'numpad-display-container';
        displayContainer.innerHTML = `<div id="numpad-display"></div><span>年</span>`;
        const grid = document.createElement('div');
        grid.id = 'numpad-grid';
        quizContentArea.appendChild(displayContainer);
        quizContentArea.appendChild(grid);
        const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'クリア', '0', '年'];
        buttons.forEach(val => {
            const button = document.createElement('button');
            button.textContent = val;
            button.className = 'numpad-btn';
            button.dataset.value = val;
            grid.appendChild(button);
        });
        grid.onclick = (event) => handleNumpadClick(event, poem, quizIndex);
    } else if (quiz.type === 'choice') {
        const optionsContainer = document.createElement('div');
        optionsContainer.id = 'quiz-options';
        quizContentArea.appendChild(optionsContainer);
        const shuffledOptions = [...quiz.options].sort(() => Math.random() - 0.5);
        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'quiz-option-btn';
            button.onclick = () => checkQuizAnswer(button, option, poem, quizIndex);
            optionsContainer.appendChild(button);
        });
    }
    quizModal.classList.remove('hidden');
}

function handleNumpadClick(event, poem, quizIndex) {
    const clicked = event.target;
    if (!clicked.classList.contains('numpad-btn')) return;
    const value = clicked.dataset.value;
    const display = document.getElementById('numpad-display');
    if (value >= '0' && value <= '9') {
        if (display.textContent.length < 4) display.textContent += value;
    } else if (value === 'クリア') {
        display.textContent = '';
    } else if (value === '年') {
        checkQuizAnswer(display, display.textContent, poem, quizIndex);
    }
}

function checkQuizAnswer(element, selectedAnswer, poem, quizIndex) {
    if (quizTimer) clearTimeout(quizTimer);
    const quiz = poem.quizzes[quizIndex];
    const isCorrect = (selectedAnswer === quiz.correctAnswer);
    if (quiz.type === 'numpad') {
        document.getElementById('numpad-grid').onclick = null;
    } else {
        document.getElementById('quiz-options').childNodes.forEach(btn => btn.disabled = true);
    }
    if (isCorrect) {
        playSound(sfxQuizCorrect);
        element.classList.add('correct-anim');
        totalScore += QUIZ_CORRECT_BONUS;
        quizResult.textContent = `正解！ (+${QUIZ_CORRECT_BONUS}点)`;
        scoreEl.textContent = totalScore;
        const nextQuizIndex = quizIndex + 1;
        if (poem.quizzes[nextQuizIndex]) {
            quizTimer = setTimeout(() => showQuiz(poem, nextQuizIndex), 1500);
        } else {
            quizTimer = setTimeout(() => quizModal.classList.add('hidden'), 1500);
        }
    } else {
        playSound(sfxQuizWrong);
        element.classList.add('incorrect-anim');
        quizResult.textContent = `残念！正解は「${quiz.correctAnswer}」`;
        quizTimer = setTimeout(() => quizModal.classList.add('hidden'), 2000);
    }
}

function showFinalResults() {
    if (roundTimer) clearTimeout(roundTimer);
    gameContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    window.speechSynthesis.cancel();
    
    if (bgmAudio) {
        bgmAudio.currentTime = 0;
        bgmAudio.play();
    }
    
    playSound(sfxResults);
    const resultsContent = document.getElementById('results-content');
    let comment = '';
    const maxRankScore = rankPoints.SS * karutaData.length;
    const maxQuizScore = QUIZ_CORRECT_BONUS * karutaData.length * 3;
    const maxScore = maxRankScore + maxQuizScore;
    const perfectThreshold = maxScore * 0.95;
    const excellentThreshold = maxScore * 0.8;
    if (totalScore >= perfectThreshold) comment = "パーフェクト！完全に極めましたね！";
    else if (totalScore >= excellentThreshold) comment = "エクセレント！素晴らしいです！";
    else if (totalScore >= 80) comment = "ワンダフル！かなりの速さです";
    else if (totalScore >= 60) comment = "コングラチュレーション！十分及第点です";
    else if (totalScore >= 30) comment = "憶えてきたね！いい感じだよ！";
    else comment = "繰り返せば必ず憶えられるよ！ここから頑張ろう！";
    resultsContent.innerHTML = `
        <h1>結果発表</h1>
        <p id="results-comment">${comment}</p>
        <p id="total-score">総合得点: ${totalScore} 点</p>
        <table class="results-table">
            <tr><th>ランク</th><th>回数</th></tr>
            <tr><td>SS (6点)</td><td>${rankCounts.SS} 回</td></tr>
            <tr><td>S (5点)</td><td>${rankCounts.S} 回</td></tr>
            <tr><td>A (4点)</td><td>${rankCounts.A} 回</td></tr>
            <tr><td>B (3点)</td><td>${rankCounts.B} 回</td></tr>
            <tr><td>C (2点)</td><td>${rankCounts.C} 回</td></tr>
            <tr><td>D (1点)</td><td>${rankCounts.D} 回</td></tr>
            <tr><td>E (0点)</td><td>${rankCounts.E} 回</td></tr>
        </table>
        <button onclick="location.reload()">もう一度プレイ</button>
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}