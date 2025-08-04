const karutaData = [
    { id: 1, kami: "後漢から/金印もらった/奴国の王", kami_yomi: "ごかんから/きんいんもらった/なこくのおう", shimo: "こんな金印/もらっていいの？", shimo_yomi: "こんなきんいん/もらっていいの", quizzes: [
        { type: "numpad", question: "奴国の王が後漢から金印をもらったのは何年？", correctAnswer: "57", mnemonic_word: "こんな", hint: "下の句の「こんな(57)金印」が「57年」を表しているよ！" },
        { type: "choice", question: "奴国の王が使いを送った国はどこ？", options: ["後漢", "前漢", "新", "隋", "唐"], correctAnswer: "後漢", hint: "歌の始まりが「後漢から金印もらった…」だったね！" },
        { type: "choice", question: "金印が発見された場所は？", options: ["志賀島(福岡県)", "江田船山古墳(熊本県)", "壱岐(長崎県)", "対馬(長崎県)", "平城京跡(奈良県)"], correctAnswer: "志賀島(福岡県)", hint: "金印は福岡県の「志賀島」で発見されたんだ。志賀島には金印公園もあるし、金印海道もあるよ！場所もセットで憶えよう！" }
    ] },
    { id: 2, kami: "親魏倭王/女王卑弥呼の/不思議な力", kami_yomi: "しんぎわおう/じょおうひみこの/ふしぎなちから", shimo: "不作知らずの 邪馬台国", shimo_yomi: "ふさくしらずの/やまたいこく", quizzes: [
        { type: "numpad", question: "卑弥呼が魏に遣使したのは何年？", correctAnswer: "239", mnemonic_word: "不作", hint: "下の句の「不作(239)知らずの」が「239年」を表しているよ！" },
        { type: "choice", question: "卑弥呼が使いを送ったのはどこの国？", options: ["魏", "呉", "蜀", "晋", "宋"], correctAnswer: "魏", hint: "称号の「親魏倭王」にヒントがあるね！" },
        { type: "choice", question: "卑弥呼に授けられた称号は？", options: ["親魏倭王", "漢委奴国王", "安東大将軍倭王", "倭国大王", "邪馬台国王"], correctAnswer: "親魏倭王", hint: "歌の始まりが「親魏倭王、女王卑弥呼の…」だったね！" }
    ] },
    { id: 3, kami: "朝貢し/宋に上表/「打倒・高句麗」", kami_yomi: "ちょうこうし/そうにじょうひょう/だとうこうくり", shimo: "武の得た品は くだらないもの", shimo_yomi: "ぶのえたしなは/くだらないもの", quizzes: [
        { type: "numpad", question: "倭王武が南朝の宋に遣使したのは何年？", correctAnswer: "478", mnemonic_word: "品は", hint: "下の句の「品は(しなは→478)」が「478年」を表しているよ！" },
        { type: "choice", question: "武が上表文で言及した、朝貢を邪魔する国は？", options: ["高句麗", "新羅", "百済", "伽耶", "隋"], correctAnswer: "高句麗", hint: "歌の「打倒・高句麗」の部分を思い出そう！" },
        { type: "choice", question: "次のうち、武が軍事権の称号を得られなかった国は？", options: ["百済", "新羅", "加羅", "秦韓", "任那"], correctAnswer: "百済", hint: "倭王武は百済を含む朝鮮半島の軍事権を要求したんだ。でも、百済だけは認められなかった。歌の「くだらないもの」は「百済無いもの」というわけ。" }
    ] },
    { id: 4, kami: "くだらない？/仏像めぐって/争う両氏", kami_yomi: "くだらない/ぶつぞうめぐって/あらそうりょうし", shimo: "ゴミ屋に出すの？ここに置くの？", shimo_yomi: "ごみやにだすの？/ここにおくの？", quizzes: [
        { type: "numpad", question: "仏教公伝の年は538年説と何年説がある？", correctAnswer: "552", mnemonic_word: "ここに", hint: "下の句の「ここに(552)置くの？」が552年説を表しているよ。「ゴミ屋(538)」は538年説だね。日本書紀では552年ということになってるよ" },
        { type: "choice", question: "６世紀半ば、日本に仏像と経典をおくった国は？", options: ["百済", "新羅", "高句麗", "伽耶", "中国"], correctAnswer: "百済", hint: "歌の「くだらない？」は「百済」を想起するためのフレーズだよ。" },
        { type: "choice", question: "仏教の扱いをめぐって争った豪族の組み合わせで正しいものは？", options: ["蘇我氏と物部氏", "中臣氏と蘇我氏", "大伴氏と物部氏", "蘇我氏と紀氏", "物部氏と平群氏"], correctAnswer: "蘇我氏と物部氏", hint: "崇仏派(＝仏像はここに置くの！)の蘇我氏と、排仏派(いいや、ゴミ屋に出すの！)の物部氏が争ったんだ。" }
    ] },
    { id: 5, kami: "役人の/心構え説く/聖徳太子", kami_yomi: "やくにんの/こころがまえとく/しょうとくたいし", shimo: "群れよる部下に 17条", shimo_yomi: "むれよるぶかに/じゅうななじょう", quizzes: [
        { type: "numpad", question: "十七条の憲法が制定されたのは何年？", correctAnswer: "604", mnemonic_word: "群れよる", hint: "下の句の「群れよる(604)部下」が「604年」を表しているよ！群れ寄る「民」ではなく、「部下(＝役人)」の方がいいね" },
        { type: "choice", question: "十七条の憲法を制定した人物は？", options: ["聖徳太子", "推古天皇", "蘇我馬子", "用明天皇", "中大兄皇子"], correctAnswer: "聖徳太子", hint: "歌に「聖徳太子」って入っているね！" },
        { type: "choice", question: "聖徳太子は、誰の摂政だったか？", options: ["推古天皇", "崇峻天皇", "用明天皇", "欽明天皇", "敏達天皇"], correctAnswer: "推古天皇", hint: "日本初の女性天皇、推古天皇の摂政として聖徳太子は活躍したんだ。" }
    ] },
    { id: 6, kami: "怒り買う/「日出ずる処の天子」の/記述", kami_yomi: "いかりかう/ひいずるところの/てんしのきじゅつ", shimo: "無礼な国書の 遣隋使", shimo_yomi: "ぶれいなこくしょの/けんずいし", quizzes: [
        { type: "numpad", question: "遣隋使を派遣したのは何年？", correctAnswer: "607", mnemonic_word: "無礼な", hint: "下の句の「無礼な(607)」国書が「607年」を表しているよ！" },
        { type: "choice", question: "607年に派遣された遣隋使は誰？", options: ["小野妹子", "犬上御田鍬", "高向玄理", "旻", "南淵請安"], correctAnswer: "小野妹子", hint: "遣隋使といえば小野妹子！名前は女性っぽいけど男性だよ。" },
        { type: "choice", question: "国書に対して不機嫌になったという隋の皇帝は誰？", options: ["煬帝", "文帝", "高祖", "太宗", "煬堅"], correctAnswer: "煬帝", hint: "歌の「怒り買う」の相手が、隋の2代目皇帝「煬帝」だね。" }
    ] },
    { id: 7, kami: "ロミオじゃない/残念ながら/御田鍬は", kami_yomi: "ろみおじゃない/ざんねんながら/みたすきは", shimo: "むさいオッサン 遣唐使！", shimo_yomi: "むさいおっさん/けんとうし", quizzes: [
        { type: "numpad", question: "遣唐使が派遣されたのは何年？", correctAnswer: "630", mnemonic_word: "むさい", hint: "下の句の「むさいオッサン(630)」が「630年」を表しているよ！あとは、実はロミオ(630)もね" },
        { type: "choice", question: "630年から894年に廃止されるまでの間、大陸の文化を学びに派遣された使者を何という？", options: ["遣唐使", "遣隋使", "遣明使", "遣新羅使", "朝貢使"], correctAnswer: "遣唐使", hint: "歌の最後に「遣唐使！」とあるね！" },
        { type: "choice", question: "第一回遣唐使として送られた使者は誰か？", options: ["犬上御田鍬", "小野妹子", "高向玄理", "阿倍仲麻呂", "吉備真備"], correctAnswer: "犬上御田鍬", hint: "歌の「御田鍬(みたすき)」がヒントだよ！" }
    ] },
    { id: 8, kami: "物陰で/一矢番えた/鎌足は", kami_yomi: "ものかげで/いっしつがえた/かまたりは", shimo: "無事故でなしたい 大化の改新", shimo_yomi: "むじこでなしたい/たいかのかいしん", quizzes: [
        { type: "numpad", question: "大化の改新の始まりとされる乙巳の変は何年？", correctAnswer: "645", mnemonic_word: "無事故", hint: "下の句の「無事故(645)」が「645年」を表しているよ！" },
        { type: "choice", question: "乙巳の変から始まる一連の政治改革を何という？", options: ["大化の改新", "壬申の乱", "承久の乱", "建武の新政", "平治の乱"], correctAnswer: "大化の改新", hint: "歌の最後に「大化の改新」とあるね！" },
        { type: "choice", question: "乙巳の変を起こしたのは誰と誰？", options: ["中大兄皇子と中臣鎌足", "蘇我蝦夷と蘇我入鹿", "大海人皇子と大友皇子", "聖徳太子と蘇我馬子", "天武天皇と持統天皇"], correctAnswer: "中大兄皇子と中臣鎌足", hint: "歌の「鎌足」と、その協力者「中大兄皇子」をセットで憶えよう！" }
    ] },
    { id: 9, kami: "亡国の/百済救けに/白村江へ", kami_yomi: "ぼうこくの/くだらたすけに/はくそんこうへ", shimo: "無理無理さ 唐と新羅が相手", shimo_yomi: "むりむりさ とうと/しらぎがあいて", quizzes: [
        { type: "numpad", question: "白村江の戦いは何年？", correctAnswer: "663", mnemonic_word: "無理無理さ", hint: "下の句の「無理無理さ(663)」が「663年」を表しているよ！" },
        { type: "choice", question: "663年、百済の要請で日本が派兵し、大敗した戦いは？", options: ["白村江の戦い", "壬申の乱", "元寇", "応仁の乱", "川中島の戦い"], correctAnswer: "白村江の戦い", hint: "歌に「白村江へ」とあるね！" },
        { type: "choice", question: "白村江の戦いで日本が戦った連合軍はどの国とどの国？", options: ["唐と新羅", "百済と高句麗", "隋と高句麗", "呉と蜀", "新羅と百済"], correctAnswer: "唐と新羅", hint: "下の句に「唐と新羅が相手」とあるね！" }
    ] },
    { id: 10, kami: "跡継ぎを/巡る乱見て/人心染まる", kami_yomi: "あとつぎを/めぐるらんみて/じんしんそまる", shimo: "「【海】・【友】ろくな 2人じゃない」と", shimo_yomi: "うみともろくな/ふたりじゃないと", quizzes: [
        { type: "numpad", question: "壬申の乱は何年？", correctAnswer: "672", mnemonic_word: "ろくな二人", hint: "下の句の「ろくな二(672)人」が「672年」を表しているよ！" },
        { type: "choice", question: "672年に起こった、天智天皇の跡継ぎ争いは？", options: ["壬申の乱", "承久の乱", "保元の乱", "平治の乱", "応仁の乱"], correctAnswer: "壬申の乱", hint: "「人心(じんしん)」がヒントになってるよ。天智天皇の死後の跡継ぎ争いだよ。" },
        { type: "choice", question: "壬申の乱に勝利し、即位後に天武天皇となる人物は？", options: ["大海人皇子", "大友皇子", "中大兄皇子", "有間皇子", "蘇我入鹿"], correctAnswer: "大海人皇子", hint: "下の句の【海】は大海人皇子、【友】は大友皇子を表しているんだ。" }
    ] },
    { id: 11, kami: "大宝の/唐から学んだ/律令制は", kami_yomi: "たいほうの/とうからまなんだ/りつりょうせいは", shimo: "日本でなおいい 大きな宝", shimo_yomi: "にほんでなおいい/おおきなたから", quizzes: [
        { type: "numpad", question: "大宝律令が制定されたのは何年？", correctAnswer: "701", mnemonic_word: "なおいい", hint: "下の句の「なおいい(701)」が「701年」を表しているよ！" },
        { type: "choice", question: "大宝律令は、どこの国の律令にならったものか？", options: ["唐", "隋", "新羅", "百済", "宋"], correctAnswer: "唐", hint: "歌に「唐から学んだ」とあるね！" },
        { type: "choice", question: "8世紀の初めに制定された、唐にならった律令は？", options: ["大宝律令", "養老律令", "飛鳥浄御原令", "弘仁・貞観格式", "武家諸法度"], correctAnswer: "大宝律令", hint: "歌の「大宝の」がヒントだよ！" }
    ] },
    { id: 12, kami: "今は昔/唐に倣った/流通貨幣", kami_yomi: "いまはむかし/とうにならった/りゅうつうかへい", shimo: "名を和同開珎と いいけり", shimo_yomi: "なをわどうかいほう/といいけり", quizzes: [
        { type: "numpad", question: "和同開珎が発行されたのは何年？", correctAnswer: "708", mnemonic_word: "名を和", hint: "下の句の「名を和(708)」が「708年」を表しているよ！" },
        { type: "choice", question: "708年に発行された通貨を何という？", options: ["和同開珎", "富本銭", "永楽通宝", "寛永通宝", "皇朝十二銭"], correctAnswer: "和同開珎", hint: "下の句に「名を和同開珎と」とあるね！" },
        { type: "choice", question: "和同開珎はどこの国の通貨に倣ったものか？", options: ["唐", "隋", "宋", "漢", "新羅"], correctAnswer: "唐", hint: "歌に「唐に倣った」とあるね！" }
    ] },
    { id: 13, kami: "京都より/南の都/つまりは南都", kami_yomi: "きょうとより/みなみのみやこ/つまりはなんと", shimo: "なんと綺麗な 平城京", shimo_yomi: "なんときれいな/へいじょうきょう", quizzes: [
        { type: "numpad", question: "平城京への遷都は何年？", correctAnswer: "710", mnemonic_word: "なんと", hint: "下の句の「なんと(710)綺麗な」が「710年」を表しているよ！" },
        { type: "choice", question: "710年に置かれた都は？", options: ["平城京", "平安京", "長岡京", "藤原京", "難波京"], correctAnswer: "平城京", hint: "下の句に「平城京」とあるね！" },
        { type: "choice", question: "平城京は現在の何県にある？", options: ["奈良県", "京都府", "大阪府", "滋賀県", "三重県"], correctAnswer: "奈良県", hint: "平城京は京都より南、今の奈良市にあった都だよ。" }
    ] },
    { id: 14, kami: "「あれ？」/「 Oh No！」/古事編纂 苦戦中", kami_yomi: "あれ？おーのう！/こじきへんさん/くせんちゅう", shimo: "なかなか息の 合わない2人", shimo_yomi: "なかなかいきの/あわないふたり", quizzes: [
        { type: "numpad", question: "古事記が完成したのは何年？", correctAnswer: "712", mnemonic_word: "（息の合わ）ない二人", hint: "下の句の「（息の合わ）ない二人(712)」が「712年」を表しているよ！" },
        { type: "choice", question: "712年に編纂された歴史書は？", options: ["古事記", "日本書紀", "万葉集", "風土記", "続日本紀"], correctAnswer: "古事記", hint: "歌に「古事記編纂」とあるね！" },
        { type: "choice", question: "古事記編纂に関わったとされる２人は誰と誰？", options: ["稗田阿礼と太安万侶", "舎人親王と藤原不比等", "柿本人麻呂と山上憶良", "聖徳太子と蘇我馬子", "天武天皇と持統天皇"], correctAnswer: "稗田阿礼と太安万侶", hint: "歌の「あれ？」「Oh No!(オーノー)」は稗田阿礼(ひえだのあれ)と太安万侶(おおのやすまろ)を表しているんだ。" }
    ] },
    { id: 15, kami: "新しく/開墾した土地/永年私財", kami_yomi: "あたらしく/かいこんしたとち/えいねんしざい", shimo: "返す必要 もうなしさ", shimo_yomi: "かえすひつよう/もうなしさ", quizzes: [
        { type: "numpad", question: "墾田永年私財法が出されたのは何年？", correctAnswer: "743", mnemonic_word: "なしさ", hint: "下の句の「なしさ(743)」が「743年」を表しているよ！" },
        { type: "choice", question: "743年に制定された法は何？", options: ["墾田永年私財法", "班田収授法", "三世一身法", "公地公民制", "租庸調"], correctAnswer: "墾田永年私財法", hint: "歌に「開墾した土地、永年私財」とあるのがヒントだね。" },
        { type: "choice", question: "墾田永年私財法が制定された時の天皇は誰？", options: ["聖武天皇", "元明天皇", "桓武天皇", "天武天皇", "称徳天皇"], correctAnswer: "聖武天皇", hint: "奈良の大仏を造った聖武天皇の時代だよ。" }
    ] },
    { id: 16, kami: "感無量/最も澄んだ/空から海へ", kami_yomi: "かんむりょう/もっともすんだ/そらからうみへ", shimo: "鳴くよウグイス 平安京", shimo_yomi: "なくようぐいす/へいあんきょう", quizzes: [
        { type: "numpad", question: "平安京への遷都は何年？", correctAnswer: "794", mnemonic_word: "鳴くよ", hint: "あまりにも有名な「鳴くよ(794)ウグイス」のフレーズだね！" },
        { type: "choice", question: "794年に平安京に遷都した際の天皇は誰？", options: ["桓武天皇", "聖武天皇", "嵯峨天皇", "光仁天皇", "平城天皇"], correctAnswer: "桓武天皇", hint: "歌の「感無量(かんむりょう)」が桓武天皇を表しているんだ。" },
        { type: "choice", question: "桓武天皇が手厚く保護した天台宗と真言宗の開祖は？", options: ["最澄と空海", "鑑真と道鏡", "道元と栄西", "親鸞と日蓮", "一遍と法然"], correctAnswer: "最澄と空海", hint: "歌の「最も澄んだ空から海へ」が最澄と空海を表しているよ。" }
    ] },
    { id: 17, kami: "アテルイを/降した/征夷大将軍は", kami_yomi: "アテルイを/くだしたせいい/たいしょうぐんは", shimo: "覇王になれない 田村麻呂", shimo_yomi: "はおうになれない/たむらまろ", quizzes: [
        { type: "numpad", question: "坂上田村麻呂が蝦夷のアテルイを降伏させたのは何年？", correctAnswer: "802", mnemonic_word: "覇王に", hint: "下の句の「覇王に(802)なれない」が「802年」を表しているよ！" },
        { type: "choice", question: "802年に蝦夷のアテルイを降伏させたのは誰？", options: ["坂上田村麻呂", "文室綿麻呂", "藤原緒嗣", "桓武天皇", "空海"], correctAnswer: "坂上田村麻呂", hint: "下の句に「田村麻呂」とあるね！" },
        { type: "choice", question: "蝦夷討伐に際し、坂上田村麻呂に与えられていた役職は？", options: ["征夷大将軍", "鎮守府将軍", "関白", "太政大臣", "大納言"], correctAnswer: "征夷大将軍", hint: "歌に「征夷大将軍は」とあるね！" }
    ] },
    { id: 18, kami: "内乱で/衰えし唐に/道真は", kami_yomi: "ないらんで/おとろえしとうに/みちざねは", shimo: "白紙に戻せ 遣唐使", shimo_yomi: "はくしにもどせ/けんとうし", quizzes: [
        { type: "numpad", question: "遣唐使が廃止されたのは何年？", correctAnswer: "894", mnemonic_word: "白紙", hint: "下の句の「白紙(894)に戻せ」が「894年」を表しているよ！" },
        { type: "choice", question: "894年に何が廃止された？", options: ["遣唐使", "遣隋使", "勘合貿易", "朱印船貿易", "日宋貿易"], correctAnswer: "遣唐使", hint: "下の句に「遣唐使」とあるね！" },
        { type: "choice", question: "894年に遣唐使を廃止したのは誰？", options: ["菅原道真", "藤原時平", "宇多天皇", "最澄", "円仁"], correctAnswer: "菅原道真", hint: "歌に「道真は」とあるのが菅原道真のことだよ。" }
    ] },
    { id: 19, kami: "関東の/各地に残る/首塚伝承", kami_yomi: "かんとうの/かくちにのこる/くびづかでんしょう", shimo: "平将門 首三個？", shimo_yomi: "たいらのまさかど/くびさんこ？", quizzes: [
        { type: "numpad", question: "平将門の乱は何年？", correctAnswer: "935", mnemonic_word: "首三個", hint: "下の句の「首三個(くびさんこ)」が「935年」を表しているよ！首塚は東京・大手町が有名だけど、例えば埼玉・幸手(さって)にもあるんだ。「飛び去って(幸手)行った 首三個？」にしようか、大いに悩みました" },
        { type: "choice", question: "935年に乱を起こしたのは誰？", options: ["平将門", "藤原純友", "藤原道長", "源頼朝", "平清盛"], correctAnswer: "平将門", hint: "下の句に「平将門」とあるね！" },
        { type: "choice", question: "平将門の乱はどこで起こった？", options: ["関東地方", "東北地方", "瀬戸内海", "京都", "九州"], correctAnswer: "関東地方", hint: "歌の「関東の」がヒントだよ！" }
    ] },
    { id: 20, kami: "この世には/欠けぬ望月/などはなく", kami_yomi: "このよには/かけぬもちづき/などはなく", shimo: "遠いむかしさ 道長の世も", shimo_yomi: "とおいむかしさ/みちながのよも", quizzes: [
        { type: "numpad", question: "藤原道長が摂政になったのは何年？", correctAnswer: "1016", mnemonic_word: "遠い昔", hint: "下の句の「遠いむ(1016)かしさ」が「1016年」を表しているよ！" },
        { type: "choice", question: "「この世をば…」という歌を詠んだのは誰か？", options: ["藤原道長", "藤原頼通", "藤原実資", "清少納言", "紫式部"], correctAnswer: "藤原道長", hint: "下の句に「道長の世も」とあるね！" },
        { type: "choice", question: "1016年、藤原道長は何の役職に就任したか？", options: ["摂政", "関白", "太政大臣", "内覧", "征夷大将軍"], correctAnswer: "摂政", hint: "娘たちを次々と天皇の后にし、摂政として権力を握ったんだ。" }
    ] }
];

// ゲーム設定
const ROUND_DURATION = 15000;
const CARDS_PER_ROUND = 10;
const RANK_B_LIMIT = 1500;
const QUIZ_CORRECT_BONUS = 1;
const ranks = ['SS', 'S', 'A', 'B', 'C'];
const rankPoints = { SS: 6, S: 5, A: 4, B: 3, C: 2, D: 1, E: 0 };
const recallRanks = ['S', 'A', 'B', 'C', 'D'];
const recallRankPoints = { S: 5, A: 4, B: 3, C: 2, D: 1, E: 0 };
const RECALL_CARDS_PER_ROUND = 10;
const RECALL_ANIMATION_INTERVAL = 3000;
const RECALL_ROUND_TIMEOUT = 15000;

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

// ゲームの状態を管理する変数
let speechQueue = [];
let isBgmPlaying = false;
// 早押しクイズ編用の変数
let quizCurrentPoem = null;
let quizRemainingPoems = [];
let quizTotalScore = 0;
let quizRankCounts = { SS: 0, S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
let quizIsGameActive = false;
let quizAnsweredInRound = false;
let quizCurrentPhraseIndex = 0;
let quizMistakeMadeInRound = false;
let quizTimer = null;
let quizRoundTimer = null;
let quizMistakes = []; // 間違えたクイズを記録
// 想起編用の変数
let recallQuestions = [];
let recallTotalScore = 0;
let recallRankCounts = { S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
let recallAnimationTimer = null;
let recallRoundTimer = null;
let recallCurrentFrame = 1;
let recallMistakes = []; // 間違えた問題を記録

// --- イベントリスナー ---
startQuizGameBtn.addEventListener('click', () => {
    selectionContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    if (bgmAudio && bgmAudio.src) {
        bgmAudio.volume = 0.3;
        bgmAudio.play().catch(e => console.error("BGM playback failed:", e));
        isBgmPlaying = true;
    }
});
startButton.addEventListener('click', () => startGame(true));
startReadingGameBtn.addEventListener('click', () => {
    selectionContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    startRecallGame();
});


// --- 便利関数 ---
function playSound(audioElement) {
    if (audioElement && audioElement.src) {
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.error("SFX playback failed:", e));
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
            utterance.onerror = (e) => {
                console.error("SpeechSynthesis Error", e);
                const index = speechQueue.indexOf(utterance);
                if (index > -1) speechQueue.splice(index, 1);
                resolve();
            };
            window.speechSynthesis.speak(utterance);
        } else {
            console.log("Speech Synthesis not supported.");
            resolve();
        }
    });
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- 早押しかるたクイズ編 ---
function startGame(isFirstRound = false) {
    if (isFirstRound) {
        quizRemainingPoems = [...karutaData];
        quizTotalScore = 0;
        quizRankCounts = { SS: 0, S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
        quizMistakes = [];
    }
    if (isBgmPlaying && bgmAudio) bgmAudio.pause();
    if (quizRoundTimer) clearTimeout(quizRoundTimer);
    if (quizTimer) clearTimeout(quizTimer);
    quizModal.classList.add('hidden');
    window.speechSynthesis.cancel();
    speechQueue = [];
    if (quizRemainingPoems.length === 0) {
        showFinalResults("quiz");
        return;
    }
    quizIsGameActive = true;
    quizAnsweredInRound = false;
    quizMistakeMadeInRound = false;
    quizCurrentPhraseIndex = 0;
    startButton.style.display = 'none';
    messageEl.textContent = " ";
    remainingCountEl.textContent = quizRemainingPoems.length;
    scoreEl.textContent = quizTotalScore;
    const correctPoemIndex = Math.floor(Math.random() * quizRemainingPoems.length);
    quizCurrentPoem = quizRemainingPoems[correctPoemIndex];
    let displayCards = [quizCurrentPoem];
    let dummyPoems = karutaData.filter(p => p.id !== quizCurrentPoem.id);
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
    quizRoundTimer = setTimeout(forceNextRound, ROUND_DURATION);
}

function forceNextRound() {
    // 進行中のタイマーや音声を全て停止・リセット
    if (quizTimer) clearTimeout(quizTimer);
    window.speechSynthesis.cancel();
    speechQueue = [];
    quizModal.classList.add('hidden');

    // タイムアップ時点でまだ札が取られていなかった場合のみ、ペナルティを与える
    if (!quizAnsweredInRound) {
        messageEl.textContent = "時間切れ！";
        quizRankCounts.E++; // ランクEを加算
        quizMistakes.push({ poem: quizCurrentPoem, reason: '時間切れ' });
        quizRemainingPoems = quizRemainingPoems.filter(p => p.id !== quizCurrentPoem.id);
    }
    
    // 次のラウンドを開始
    // 札を取った後、クイズの途中で時間切れになった場合も、
    // この関数が呼ばれて次のラウンドへ移行します。
    proceedToNextRound();
}

async function readPoem() {
    const kamiPhrases = quizCurrentPoem.kami.split('/');
    const kamiYomiPhrases = quizCurrentPoem.kami_yomi.split('/');
    const shimoPhrase = quizCurrentPoem.shimo.split('/').join(' ');
    const shimoYomiPhrase = quizCurrentPoem.shimo_yomi.split('/').join(' ');
    kamiKuText.textContent = ' ';
    shimoKuText.textContent = ' ';
    for (let i = 0; i < kamiPhrases.length; i++) {
        if (quizAnsweredInRound) return; // 札が取られたらループを抜ける
        quizCurrentPhraseIndex = i;
        kamiKuText.textContent += kamiPhrases[i] + ' ';
        await speak(kamiYomiPhrases[i]);
    }

    if (quizAnsweredInRound) return; // 下の句を読む前にもチェック

    quizCurrentPhraseIndex = 3;
    shimoKuText.textContent = shimoPhrase;
    setTimeout(() => {
        if (!quizAnsweredInRound) quizCurrentPhraseIndex = 4;
    }, RANK_B_LIMIT);
    await speak(shimoYomiPhrase);
    quizCurrentPhraseIndex = -1;
}

function onCardClick(event) {
    if (!quizIsGameActive || quizAnsweredInRound) return;
    const clickedCardId = parseInt(event.target.dataset.id);
    if (clickedCardId === quizCurrentPoem.id) {
        playSound(sfxCardCorrect);
        quizAnsweredInRound = true;
        window.speechSynthesis.cancel(); // 読み上げを即座に停止
        
        let rank = '';
        if (quizMistakeMadeInRound) {
            rank = 'E';
            quizMistakes.push({ poem: quizCurrentPoem, reason: 'お手つき' });
        } else if (quizCurrentPhraseIndex === -1) {
            rank = 'D';
        } else {
            rank = ranks[quizCurrentPhraseIndex] || 'D';
        }
        quizRankCounts[rank]++;
        quizTotalScore += rankPoints[rank];
        messageEl.textContent = `正解！ ランク: ${rank} (+${rankPoints[rank]}点)`;
        scoreEl.textContent = quizTotalScore;
        
        quizRemainingPoems = quizRemainingPoems.filter(p => p.id !== quizCurrentPoem.id);
        event.target.classList.add('correct-card-effect');
        torifudaContainer.style.pointerEvents = 'none';
        
        if (quizCurrentPoem.quizzes && quizCurrentPoem.quizzes.length > 0) {
            // 少し待ってからクイズを表示（読み上げ停止の反映を待つため）
            setTimeout(() => showQuiz(quizCurrentPoem, 0), 100);
        } else {
            proceedToNextRound();
        }
    } else {
        if (!quizAnsweredInRound) {
            playSound(sfxQuizWrong);
            messageEl.textContent = "お手つき！";
            quizMistakeMadeInRound = true;
            event.target.style.opacity = '0.5';
            event.target.style.pointerEvents = 'none';
        }
    }
}

function showQuiz(poem, quizIndex) {
    if (quizIndex > 0) playSound(sfxQuizShow);
    const quiz = poem.quizzes[quizIndex];
    if (!quiz) {
        quizModal.classList.add('hidden');
        proceedToNextRound();
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
        quizTotalScore += QUIZ_CORRECT_BONUS;
        quizResult.textContent = `正解！ (+${QUIZ_CORRECT_BONUS}点)`;
        scoreEl.textContent = quizTotalScore;
    } else {
        playSound(sfxQuizWrong);
        element.classList.add('incorrect-anim');
        quizResult.textContent = `残念！正解は「${quiz.correctAnswer}」`;
        quizMistakes.push({ poem: poem, quiz: quiz, reason: 'クイズ不正解' });
    }
    
    const nextQuizIndex = quizIndex + 1;
    if (poem.quizzes[nextQuizIndex]) {
        quizTimer = setTimeout(() => showQuiz(poem, nextQuizIndex), 1500);
    } else {
        quizTimer = setTimeout(() => {
            quizModal.classList.add('hidden');
            proceedToNextRound();
        }, 1500);
    }
}

function proceedToNextRound() {
    if (quizRoundTimer) clearTimeout(quizRoundTimer);
    setTimeout(startGame, 1000);
}

function showFinalResults(mode) {
    if (quizRoundTimer) clearTimeout(quizRoundTimer);
    if (bgmAudio && bgmAudio.src) {
        bgmAudio.currentTime = 0;
        bgmAudio.play();
    }
    gameContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    window.speechSynthesis.cancel();
    playSound(sfxResults);
    const resultsContent = document.getElementById('results-content');
    
    let comment = '';
    const maxRankScore = rankPoints.SS * karutaData.length;
    const maxQuizScore = QUIZ_CORRECT_BONUS * karutaData.reduce((sum, poem) => sum + poem.quizzes.length, 0);
    const maxScore = maxRankScore + maxQuizScore;
    const perfectThreshold = maxScore * 0.95;
    const excellentThreshold = maxScore * 0.8;
    if (quizTotalScore >= perfectThreshold) comment = "パーフェクト！完全に極めましたね！";
    else if (quizTotalScore >= excellentThreshold) comment = "エクセレント！素晴らしいです！";
    else if (quizTotalScore >= 80) comment = "ワンダフル！かなりの速さです";
    else if (quizTotalScore >= 60) comment = "コングラチュレーション！十分及第点です";
    else if (quizTotalScore >= 30) comment = "憶えてきたね！いい感じだよ！";
    else comment = "繰り返せば必ず憶えられるよ！ここから頑張ろう！";

    let reviewHtml = '';
    if (quizMistakes.length > 0) {
        reviewHtml += '<div class="review-area"><h2>復習コーナー</h2>';
        const uniqueMistakes = [...new Map(quizMistakes.map(item => [item.quiz ? item.quiz.question : item.poem.id, item])).values()];

        uniqueMistakes.forEach(mistake => {
            const poem = mistake.poem;
            if (mistake.reason === 'クイズ不正解') {
                const quiz = mistake.quiz;
                reviewHtml += `
                    <div class="review-item">
                        <p class="review-question">Q: ${quiz.question}</p>
                        <p class="review-correct-answer">A: ${quiz.correctAnswer}</p>
                        <p class="review-hint">${quiz.hint}</p>
                    </div>`;
            } else {
                reviewHtml += `
                    <div class="review-item">
                        <p class="review-question">歌: ${poem.kami.replace(/\//g, ' ')}</p>
                        <p class="review-correct-answer">ミス: ${mistake.reason}</p>
                        <p class="review-hint">この歌をしっかり思い出せるように頑張ろう！</p>
                    </div>`;
            }
        });
        reviewHtml += '</div>';
    } else {
        reviewHtml = '<div class="review-area"><h2>復習コーナー</h2><p>すごい！ミスは一つもなかったね！完璧！</p></div>';
    }

    resultsContent.innerHTML = `<h1>結果発表</h1><p id="results-comment">${comment}</p><p id="total-score">総合得点: ${quizTotalScore} 点</p><table class="results-table"><tr><th>ランク</th><th>回数</th></tr><tr><td>SS (6点)</td><td>${quizRankCounts.SS} 回</td></tr><tr><td>S (5点)</td><td>${quizRankCounts.S} 回</td></tr><tr><td>A (4点)</td><td>${quizRankCounts.A} 回</td></tr><tr><td>B (3点)</td><td>${quizRankCounts.B} 回</td></tr><tr><td>C (2点)</td><td>${quizRankCounts.C} 回</td></tr><tr><td>D (1点)</td><td>${quizRankCounts.D} 回</td></tr><tr><td>E (0点)</td><td>${quizRankCounts.E} 回</td></tr></table> ${reviewHtml} <button onclick="location.reload()">もう一度プレイ</button>`;
}

// --- 読み上げかるた想起編 ---
function startRecallGame() {
    if (isBgmPlaying && bgmAudio) bgmAudio.pause();
    startButton.style.display = 'none';
    messageEl.textContent = " ";
    recallQuestions = [...karutaData].sort(() => Math.random() - 0.5);
    recallTotalScore = 0;
    recallRankCounts = { S: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
    recallMistakes = [];
    scoreEl.textContent = recallTotalScore;
    remainingCountEl.textContent = recallQuestions.length;
    nextRecallQuestion();
}

function nextRecallQuestion() {
    if (recallAnimationTimer) clearInterval(recallAnimationTimer);
    if (recallRoundTimer) clearTimeout(recallRoundTimer);
    if (recallQuestions.length === 0) {
        showRecallResults();
        return;
    }
    remainingCountEl.textContent = recallQuestions.length;
    const correctPoem = recallQuestions[0];
    const year = correctPoem.quizzes[0].correctAnswer;
    const questionText = `「${year}年」はどれ？`;
    kamiKuText.textContent = questionText;
    shimoKuText.textContent = "";
    speak(questionText);
    playSound(sfxQuizShow);
    let dummyPoems = karutaData.filter(p => p.id !== correctPoem.id);
    shuffleArray(dummyPoems);
    let displayPoems = [correctPoem, ...dummyPoems.slice(0, RECALL_CARDS_PER_ROUND - 1)];
    shuffleArray(displayPoems);
    torifudaContainer.innerHTML = '';
    torifudaContainer.style.pointerEvents = 'auto';
    displayPoems.forEach(poem => {
        const cardImage = document.createElement('img');
        cardImage.src = `images/yomi_${String(poem.id).padStart(3, '0')}-1.png`;
        cardImage.classList.add('torifuda-card');
        cardImage.dataset.poemId = poem.id;
        cardImage.addEventListener('click', () => checkRecallAnswer(poem, correctPoem));
        torifudaContainer.appendChild(cardImage);
    });
    recallCurrentFrame = 1;
    recallAnimationTimer = setInterval(() => {
        recallCurrentFrame++;
        if (recallCurrentFrame > 5) {
            clearInterval(recallAnimationTimer);
            return;
        }
        document.querySelectorAll('.torifuda-card').forEach(card => {
            const poemId = card.dataset.poemId;
            if (card.style.opacity !== '0.5') {
                card.src = `images/yomi_${String(poemId).padStart(3, '0')}-${recallCurrentFrame}.png`;
            }
        });
    }, RECALL_ANIMATION_INTERVAL);
    recallRoundTimer = setTimeout(() => {
        if (recallAnimationTimer) clearInterval(recallAnimationTimer);
        messageEl.textContent = "時間切れ！";
        playSound(sfxQuizWrong);
        recallRankCounts.E++;
        recallMistakes.push(correctPoem);
        scoreEl.textContent = recallTotalScore;
        recallQuestions.shift();
        setTimeout(nextRecallQuestion, 2000);
    }, RECALL_ROUND_TIMEOUT);
}

function checkRecallAnswer(clickedPoem, correctPoem) {
    if (recallAnimationTimer) clearInterval(recallAnimationTimer);
    if (recallRoundTimer) clearTimeout(recallRoundTimer);
    torifudaContainer.style.pointerEvents = 'none';
    if (clickedPoem.id === correctPoem.id) {
        playSound(sfxCardCorrect);
        const rank = recallRanks[recallCurrentFrame - 1] || 'D';
        recallRankCounts[rank]++;
        recallTotalScore += recallRankPoints[rank];
        messageEl.textContent = `正解！ ランク: ${rank} (+${recallRankPoints[rank]}点)`;
        scoreEl.textContent = recallTotalScore;
    } else {
        playSound(sfxQuizWrong);
        messageEl.textContent = `残念！`;
        recallRankCounts.E++;
        recallMistakes.push(correctPoem);
        scoreEl.textContent = recallTotalScore;
        const correctCard = Array.from(torifudaContainer.children).find(img => parseInt(img.dataset.poemId) === correctPoem.id);
        if (correctCard) {
            correctCard.classList.add('correct-card-effect');
        }
    }
    recallQuestions.shift();
    setTimeout(nextRecallQuestion, 2000);
}

function showRecallResults() {
    if (recallAnimationTimer) clearInterval(recallAnimationTimer);
    if (recallRoundTimer) clearTimeout(recallRoundTimer);
    gameContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    if (bgmAudio && bgmAudio.src) {
        bgmAudio.currentTime = 0;
        bgmAudio.play();
    }
    playSound(sfxResults);
    let comment = '';
    const maxScore = recallRankPoints.S * karutaData.length;
    if (recallTotalScore >= maxScore * 0.9) comment = "達人級！驚異的な速さです！";
    else if (recallTotalScore >= maxScore * 0.7) comment = "素晴らしい記憶力です！";
    else if (recallTotalScore >= maxScore * 0.5) comment = "お見事！しっかり憶えていますね";
    else if (recallTotalScore >= maxScore * 0.3) comment = "クリアおめでとうございます！";
    else comment = "最後までお疲れ様でした！";
    
    let reviewHtml = '';
    if (recallMistakes.length > 0) {
        reviewHtml += '<div class="review-area"><h2>復習コーナー</h2>';
        const uniqueMistakes = [...new Map(recallMistakes.map(item => [item.id, item])).values()];
        uniqueMistakes.forEach(poem => {
            const yearQuiz = poem.quizzes.find(q => q.type === 'numpad');
            if(yearQuiz){
                reviewHtml += `
                    <div class="review-item">
                        <p class="review-poem">${poem.kami.replace(/\//g, ' ')} / ${poem.shimo.replace(/\//g, ' ')}</p>
                        <p class="review-hint">「${yearQuiz.correctAnswer}年」は、下の句の「<b>${yearQuiz.mnemonic_word}</b>」で表現しているよ！</p>
                    </div>`;
            }
        });
        reviewHtml += '</div>';
    } else {
         reviewHtml = '<div class="review-area"><h2>復習コーナー</h2><p>すごい！ミスは一つもなかったね！完璧！</p></div>';
    }

    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = `
        <h1>結果発表</h1>
        <p id="results-comment">${comment}</p>
        <p id="total-score">総合得点: ${recallTotalScore} 点</p>
        <table class="results-table">
            <tr><th>ランク</th><th>回数</th></tr>
            <tr><td>S (5点)</td><td>${recallRankCounts.S} 回</td></tr>
            <tr><td>A (4点)</td><td>${recallRankCounts.A} 回</td></tr>
            <tr><td>B (3点)</td><td>${recallRankCounts.B} 回</td></tr>
            <tr><td>C (2点)</td><td>${recallRankCounts.C} 回</td></tr>
            <tr><td>D (1点)</td><td>${recallRankCounts.D} 回</td></tr>
            <tr><td>E (0点)</td><td>${recallRankCounts.E} 回</td></tr>
        </table>
        ${reviewHtml}
        <button onclick="location.reload()">もう一度プレイ</button>
    `;
}
