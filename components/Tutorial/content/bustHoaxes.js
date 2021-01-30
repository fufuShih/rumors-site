import tutorial1 from '../images/bust-hoaxes-tutorial-1.png';
import tutorial2 from '../images/bust-hoaxes-tutorial-2.png';
import tutorial3 from '../images/bust-hoaxes-tutorial-3.png';
import tutorial4 from '../images/bust-hoaxes-tutorial-4.png';
import tutorial5 from '../images/bust-hoaxes-tutorial-5.png';
import tutorial6 from '../images/bust-hoaxes-tutorial-6.png';

export default [
  {
    title: '覺得查核太難了嗎？從覆核別人的查核回應開始吧！',
    subTitle: '想寫出好的查核訊息前，先看看別人是怎麼查核的吧！',
    content:
      '「Cofacts 真的假的」上的訊息查核，是由世界各地的網友編輯，無償自主查核貢獻的喔！但是編輯們的查核成果，不見得就是正確完整的呢！因此，需要網友編輯們來覆核評價，協助篩選出好的查核結果。新手編輯們，也可以從中學習別人是怎麼查核闢謠呢！',
    subContent: [
      {
        title: '尋找需要被覆核的回應',
        content: [
          {
            type: 'text',
            data: `「最新查核」會列出其他志工編輯查核回應，以下不同篩選能幫你篩選出——
            「還未有效查核」：目前還沒有使用者覺得好的可疑訊息，推薦使用。
            「熱門回報」：目前很多使用者想問真假的可疑訊息。
            「熱門討論」：目前很多編輯查核回應的可疑訊息。`,
          },
        ],
      },
      {
        title: '評價別人的查核回應',
        content: [
          {
            type: 'text',
            data:
              '你可以對其他人的查核回應按讚或是按踩。透過來自眾人的評價，好的查核回應會慢慢浮出水面，被更多使用者看到。在評價的過程中，請留下你為什麼覺得這篇查核是好是壞的理由，同時你也可以點擊「看理由」來觀看別人留下來的評價。',
          },
          {
            type: 'text',
            data:
              '按「查核闢謠」按鈕，可以進到訊息頁面，看看編輯所附的出處。一則查核回應要有用，出處也是很重要的唷！',
          },
        ],
      },
    ],
  },
  {
    title: '尋找需要協助闢謠的可疑文章',
    subTitle: '準備好來自己查核訊息囉',
    content: `嘗試過評價其他編輯的謠言給予建議後，是不是也想自己親自來查證看看了呢？
      首先我們要先去找到需要被查核的可疑訊息，也就是那些還沒被查過、或是過往查證不完整、不正確的訊息，都是社群上急於等待志工查證的訊息。`,
    subContent: [
      {
        title: '到「等你來答」尋找待查的訊息',
        content: [
          {
            type: 'text',
            data:
              '「等你來答」頁面彙整了被回報兩次以上、而且尚無有效查核的訊息。每則訊息左邊有目前的查核回應數、以及被回報了幾次（亦即有幾個人想知道這則訊息的真實性）。',
          },
          {
            type: 'image',
            data: tutorial1,
          },
        ],
      },
      {
        title: '篩選有興趣的主題',
        content: [
          {
            type: 'text',
            data: `如果一眼找不到有興趣回答的訊息，那麼試試主題篩選器吧！點一下主題篩選器，就會列出內容含有該主題的訊息。
            有些主題與專業比較無關，如「連署、集氣、協尋、捐贈」、「商業廣告」、「免費訊息詐騙」等等；有與公共議題相關的主題，如「優惠措施、新法規、政策宣導」、「性別議題」、「中國影響力」、「農林漁牧政策」；另外，也有留給專業人士的主題，如「跨國互動」、「COVID-19 疫情」等等。`,
          },
          {
            type: 'image',
            data: tutorial2,
          },
        ],
      },
    ],
  },
  {
    title: '分析轉傳進來的訊息',
    subTitle: '挑選要查證的謠言後，先分析哪裡是需要被查證的部分',
    content:
      '這裡的每一則訊息，都是 chatbot 使用者手動回報的，形狀千奇百怪；試試看下面這些步驟，來拆解這個訊息吧。',
    subContent: [
      {
        title: '這在查證範圍嗎？',
        content: [
          {
            type: 'text',
            data: 'TBA',
          },
        ],
      },
      {
        title: '沒頭沒尾？先找回脈絡！',
        content: [
          {
            type: 'text',
            data:
              '有些訊息特別短、沒頭沒尾的，卻有很多人回報，代表這不是單一使用者亂輸入的。',
          },
          {
            type: 'image',
            data: tutorial3,
          },
          {
            type: 'text',
            data:
              '這類訊息在通訊軟體裡，很可能是跟著影片、圖片一起分享的，只是 Cofacts 目前還不支援回報圖片與影片。此時，我們可以把文字貼去 Facebook 的搜尋，看看是不是有人公開分享相關圖文，試著把脈絡找回來。',
          },
          {
            type: 'image',
            data: tutorial4,
          },
          {
            type: 'text',
            data:
              '另外，有一些訊息可能被截斷或不完整。這些可能是從其他 chatbot 轉介過來的文字，因為技術上的字數限制而造成的。',
          },
          {
            type: 'image',
            data: tutorial5,
          },
          {
            type: 'text',
            data:
              '遇到這個狀況，我們同樣可以利用 Facebook 或 Google 來尋找訊息的全文唷。',
          },
        ],
      },
      {
        title: '框出煽情的爭議點',
        content: [
          {
            type: 'text',
            data:
              '想想看，如果你在 LINE 收到這則訊息，它最能「影響你情緒」的點有哪些呢？這通常就是 LINE 使用者最想知道的部分。以此作為開始點，想想要提供哪些資訊，才能安撫這種情緒吧。如果訊息很長、或者充滿慷慨激昂的個人意見，這樣的分析能幫助你快速抓到重點，寫出 LINE 使用者覺得有幫助的回應唷！',
          },
        ],
      },
      {
        title: '看看其他人怎麼想',
        content: [
          {
            type: 'text',
            data:
              '如果沒有頭緒，可以參考一下「回報者的補充說明」的區塊，看看回報者是否有分享自己對這則訊息的看法、或甚至是查到一半的資料唷。',
          },
          {
            type: 'image',
            data: tutorial6,
          },
        ],
      },
      {
        title: '關鍵字、以圖搜圖找相關內容，準備回應材料',
        content: [
          {
            type: 'text',
            data:
              '【社群內容打假術】Google教你深度事實查核，人人都是數位打假王',
          },
          {
            type: 'link',
            data: 'https://newslab.pts.org.tw/news/81',
          },
        ],
      },
    ],
  },
  {
    title: '依照格式撰寫好讀回應',
    subTitle: '查核完畢後，請依照建議格式寫下方便閱讀的查核結果',
    content: `辛苦準備好回應材料之後，接下來就是寫下你查核闢謠的結果了！
      為了讓你辛苦能被更多人看見，請依照建議格式寫下清晰好讀的查核結果，讓聊天機器人或是網站的使用者，能一眼看懂你的查核結果。`,
    subContent: [
      {
        title: '選擇回應分類',
        content: [
          {
            type: 'text',
            data:
              '選好了之後，簡短寫一下整段訊息裡，含有不實訊息/個人意見/真實訊息的部分在哪裡。這個部分的文字會顯示在 chatbot，建議使用「開門見山法」在第一段指出訊息哪裡錯誤、含有意見、或哪裡正確，若仍需更多說明，可以另行分段闡述。',
          },
        ],
      },
      {
        title: '填寫理由',
        content: [
          {
            type: 'text',
            data:
              '選好了之後，簡短寫一下整段訊息裡，含有不實訊息/個人意見/真實訊息的部分在哪裡。這個部分的文字會顯示在 chatbot，建議使用「開門見山法」在第一段指出訊息哪裡錯誤、含有意見、或哪裡正確，若仍需更多說明，可以另行分段闡述。',
          },
        ],
      },
      {
        title: '放上找到的資料',
        content: [
          {
            type: 'text',
            data:
              '在「參考資料」或「不同意見」欄位，貼上你找到的資料的連結們，就完成撰寫，可以送出囉！。',
          },
        ],
      },
      {
        title: '有什麼範例可以參考嗎？',
        content: [
          {
            type: 'text',
            data:
              '《編輯的奇幻旅程》紀錄了過去編輯們分享的案例，大家可以參考看看這些編輯過去面對各種不同訊息時，是怎麼進行分析與撰寫回應的唷！',
          },
          {
            type: 'link',
            data:
              'https://hackmd.io/@mrorz/B1ul5U86-/%2Fs%2FSJyNsLIpb?type=book',
          },
        ],
      },
    ],
  },
  {
    title: '我真的查不到啦～怎麼辦？',
    subTitle: '別氣餒，把你的進度留在「我想補充」裡，讓大家接力查核！',
    subContent: [
      {
        title: '使用「我要補充」功能',
        content: [
          {
            type: 'text',
            data: `請點開「我要補充」，把目前找到的資料貼進去，也簡短分享一下自己查不到的部分。
            在你送出補充之後，「回報數」會增加，吸引其他編輯點入訊息查看，從你分享的補充資料開始，接手你的查證喲！`,
          },
        ],
      },
    ],
  },
];
