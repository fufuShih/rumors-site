import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import step1A from './images/line-step-1-1.png';
import step2A from './images/line-step-2-1.png';
import step2B from './images/line-step-2-2.png';
import step3A from './images/line-step-3-1.png';
import step3B from './images/line-step-3-2.png';
import step4A from './images/line-step-4-1.png';
import step5A from './images/line-step-5-1.png';
import step5B from './images/line-step-5-2.png';

import LinePreview from './LinePreview';
import Accordion from './Accordion';

const data = [
  {
    id: 0,
    title: 'Line 上收到可疑訊息',
    content:
      '熱心的親朋好友常常分享各種訊息時，但看完後心中或許有些困惑，不知道裡面的內容真實性有多少？ ',
    images: [step1A],
  },
  {
    id: 1,
    title: '分享轉傳訊息到「真的假的」機器人',
    content:
      '此時你可以把可疑訊息分享給我們的「真的假的」聊天機器人，我們的機器人會收錄新謠言到我們的網站平台，並比對有沒有類似的查核回應',
    images: [step2A, step2B],
  },
  {
    id: 3,
    title: '收錄到「真的假的」共享平台',
    content:
      '被收錄到平台後，所有人都可以到 cofacts 網站上檢視可疑訊息，並參與討論查核訊息',
    images: [step3A, step3B],
  },
  {
    id: 4,
    title: '編輯志工在平台上查核提供意見',
    content:
      '每一個網友志工都可以登入平台，提供自己查核的結果，查核過程中必須附上相關出處，佐證自己的查核結果。',
    images: [step4A],
  },
  {
    id: 5,
    title: '機器人自動回應群眾的消息',
    content:
      '被查核的結果就可以在聊天機器人中出現，讓廣大網友查詢使用了，如果你覺得查核回應不夠好，可以自己也新增一個查核回應。',
    images: [step5A, step5B],
  },
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    maxWidth: 1024,
    margin: '0 auto',
  },
  linePreview: {
    width: 417,
  },
  accordion: {
    width: 404,
    paddingTop: 6,
  },
}));

const LineTutorial = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickStep = index => {
    setActiveIndex(index);
  };

  return (
    <div className={classes.root}>
      <LinePreview
        className={classes.linePreview}
        images={data[activeIndex].images}
      />
      <Accordion
        className={classes.accordion}
        data={data}
        activeIndex={activeIndex}
        onClick={onClickStep}
      />
    </div>
  );
};

export default LineTutorial;
