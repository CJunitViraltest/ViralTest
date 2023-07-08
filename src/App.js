import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import styles from './App.css';




function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }; //모바일용 세로 크기 고려

  useEffect(() => {
    setVh();

    function onResize() {
      setVh();
    }

    window.addEventListener("resize", onResize);
  }, []); //리렌더링시마다 함수 호출

    const questionList = [
    {
      q: [ "두근두근… 오늘은 드디어 CJ UNIT 에 들어와 첫 발대식 날이다." ],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: [ "반가워요 UNIT 여러분~! 우선 모두 지정석에 앉아주세요. \n 각 자리엔 저희가 여러분께 선물로 드릴 웰컴키트가 놓여있습니다. 자유롭게 열어보세요" ],
      p: ["담당자님"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: [ "어 이게 웰컴키트인가?" ],
      p: ["나"],
      a: [
        { type: "picture" , text: "두근두근 지금 바로 열어봐야지~!" },
        { text: "아니야 집가서 조심스럽게 소중히 열어봐야지!" }
      ],
    },
    {
      q: [ "우와.. UNIT 에 들어가면 이런것도 주는구나.. 너무좋아 !! ><" ],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: [ "아직 발대식 시작까지 시간이 조금 남았다. 시간이 남았을 때 나는?" ],
      p: ["나"],
      a: [
        { type: "I", text: "한학기동안 함께 할 사람들이니, 옆에 앉아 있는 같은 팀원에게 용기내어 말 걸어보자!" },
        { type: "E", text: "같은 팀원이랑만 친해지는걸론 부족하지~ 다른 조 팀원들한테도 한번 말 걸어봐야지" },
      ],
    },
  
    {
      q: [ "OOO님 안녕하세요 ~ CJ UNIT 담당자입니다. 저희가 n/n에 제주도로 첫수업 현장지원을 갈 예정인데 일정 괜찮으신가요?" ],
      p: ["담당자님"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["OOO님 안녕하세요 ~ CJ UNIT 담당자입니다. 저희가 n/n에 제주도로 첫수업 현장지원을 갈 예정인데 일정 괜찮으신가요?"],
      p: ["담당자님"],
      a: [
        { type: "E", text: "완전 가능합니다 !! (애들을 대면으로 만날 수 있는 기회에 내가 되다니 너무 신난다 ! 애들이랑 만나서 많이 친해지고 와야지 ~)" },
        { type: "I", text: "네.. !! 시간 괜찮습니다. (내가 현장지원에 나가게 되다니 너무 설렌다. 그런데 낯가리는데 애들이랑 잘 친해질 수 있을까?)" },
      ],
    },
    {
      q: ["드디어 현장지원을 가는날! 제주도로 가는 비행기를 탔다. 비행기 이륙전 나는?"],
      p: ["나"],
      a: [
        { type: "S", text: "비행하는 동안 뭐하면서 시간을 보낼지 생각한다." },
        { type: "N", text: "비행기 어떻게 대피하는지 살펴본다." },
      ],
    },
    {
      q: ["현장지원 끝나고 일주일 뒤"],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["교육 첫번째 날"],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["여러분 드디어 이번주는 첫번째 유닛중학교 수업이에요!!"],
      p: ["담당자님"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["비대면 SW교육 봉사를 위해 CJ 올리브네트웍스 사옥에 수업시간 1시간 전까지 와주세요~!"],
      p: ["담당자님"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["드디어 기다리던 첫번째 수업이다..!!! "],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["늦지않게 가야할텐데… 어떻게할까??"],
      p: ["나"],
      a: [
        { type: "J", text: "준비하는데 30분정도 걸리고, 버스 배차간격이 20분.. 사람이 많을 수도 있으니깐… 최소 1시간 반 전에는 집에서 나가야겠다!" },
        { type: "P", text: "가는데 1시간이면 충분할거야. 1시간 전쯤에 집에서 출발해야지~" },
      ],
    },
    {
      q: ["드디어 수업을 한다~! 기대된다"],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["수업 준비"],
      p: ["나"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["짝꿍아 수업열심히 해보자"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["~~ 수업 중 ~~"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["여러분 드디어 레고 조립까지 완료했어요 이제 코딩을 통해 로봇을 움직여볼까요?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["선생님.. ㅠㅠ 저만 레고가 움직이지 않아요.. 왜 저만 이러는거죠? 속상해요 ㅠ"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["선생님.. ㅠㅠ 저만 레고가 움직이지 않아요.. 왜 저만 이러는거죠? 속상해요 ㅠ"],
      p: ["화자"],
      a: [
        { type: "F", text: "에구 ㅠㅠ 레고 실행이 안 되서 속상했구나.. 시간은 충분하니까 다시 차근차근 해결해보자! 선생님이 도와줄게! 할 수 있어!" },
        { type: "T", text: "흐음.. 그래? 레고 조립에 문제가 생겼을까 아님 코드에 문제가 생겼을까? 우선 줌화면을 공유해줘! 코드문제인지 선생님이 확인해볼게" },
      ],
    },
    {
      q: ["이 부분이 잘못됐네!  여기만 고치면 이제 잘 될거야"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["우와! 잘 작동해요! 감사합니다 선생님 >_<"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["여러분~!  벌써 수업을 마칠 시간이에요!"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["오늘  잘 참여해줘서 고마웠어요! 우리 다음 주에 또 만나요 안녕🖐"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["첫번째 수업을 잘 마무리했다~ 다른 팀원들은 어땠는지 물어보자! "],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["우리는 수업 중간에 집중을 잘 못하는 친구들이 있는거 같아...."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["다음 수업부턴 어떻게 진행해야 아이들이 더 집중할 수 있을까?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["다음 수업부턴 어떻게 진행해야 아이들이 더 집중할 수 있을까?"],
      p: ["화자"],
      a: [
        { type: "F", text: "음..재밌는 소재를 들고 와서 학생들의 흥미를 끌어보는 건 어떨까?" },
        { type: "T", text: "반장을 뽑아서 집중 못하는 친구들의 참여를 유도해보면 좋지 않을까?" },
      ],
    },
    {
      q: ["유닛중 학생들 너무 귀엽지 않아? 비대면이라 어색할텐데 재밌게 잘 따라와줘서 애들한테 항상 너무 고마워❤"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["맞아! 너무 귀여워 ><"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["나는 비대면 교육인데도 너무 재밌어~!! 창캐미 너는 어때?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["창캐미 너는 이렇게 비대면으로 교육봉사 해본 적 있어? 나는 이번이 처음인데 비대면 교육봉사도 좋은 거 같아!"],
      p: ["화자"],
      a: [
        { type: "E", text: "학생들을 실제로 만나고 싶지만 나는 비대면도 새롭고 좋은 거 같아!" },
        { type: "I", text: "소회의실 열어서 잘 못 따라오는 친구들도 직접 봐줄 수 있고, 다방면으로 비대면이 좋은 거 같아!" },
      ],
    },
    {
      q: ["자, 이제 사진 찍고 마무리할게요! 오늘은 어떤 포즈로 찍으실건가요?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["오늘은 어떻게 찍을까?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["오늘은 어떻게 찍을까?"],
      p: ["화자"],
      a: [
        { type: "J", text: "혹시 몰라 챙겨운 소품과 미리 사진첩에 저장해놓은 단체사진 포즈를 팀원들에게 보여준다." },
        { type: "P", text: "급하게 재밌는 단체사진 포즈를 검색해본다." },
      ],
    },
    {
      q: ["오늘도 수업 수고하셨어요! 수업 후기는 수업 종료 후 4일 안으로 제출해주세요!"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["네! 다음주에 뵙겠습니다~~"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["휴우… 오늘도 열심히 수업했더니 기운이 없다.. ㅎㅎ 수업후기는 언제 작성할까?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["휴우… 오늘도 열심히 수업했더니 기운이 없다.. ㅎㅎ 수업후기는 언제 작성할까?"],
      p: ["화자"],
      a: [
        { type: "J", text: "피곤하지만 까먹을수도 있고 뒤에 일정이 생길 수도 있지! 지금 바로 적는다!" },
        { type: "P", text: "마감까지 한참 남았으니까.. 오늘은 일단 쉬고 내일 적는다!" },
      ],
    },
    {
      q: ["1달 후.. "],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["오늘도 어김없이 봉사활동을 잘 끝내고 집으로 돌아왔다 그런데 핸드폰을 확인해보니 팀원에게 문자가 왔다"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["수업을 진행한지 벌써 1달이나 지났어!","학생들이 점점 익숙해지는 것 같은데 수업방식에 변화를 줘야 할까?", "네 생각은 어때?"
      ],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["흠… 어떻게 할까?"],
      p: ["화자"],
      a: [
        { type: "N", text: "기존과 다른, 새로운 수업방식을 생각해보자! 변화된 수업으로 진행하면 학생들이 좋아하지 않을까? " },
        { type: "S", text: "변화보다는 지금까지 해왔던 수업방식을 유지하자!" },
      ],
    },
    {
      q: ["CJ UNIT 에선 다음 기수가 사용할 교육 커리큘럼을 제작하는 하기에, 이를 위해 팀원들끼리 각자 주제를 정해오기로 했다. 그런데 한 팀원이 생각해온 주제의 방향성이 옳지 않은 것 같다."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["내가 커리큘럼 한번 짜와봤는데 어때 ?"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["커리큘럼이 조금 부족한 것 같아.   그냥 수정하자고 할까? 아니면..  만들어온 성의가 있으니 우선 설명을 더 들어볼까?"],
      p: ["화자"],
      a: [
        { type: "T", text: "만드느라 고생했어! 그런데 이부분은 조금 수정해보자~ 그게 더 우리의 방향성에 맞을 것 같아." },
        { type: "F", text: "만드느라 고생했어!  혹시 이렇게 의도한 것에 대해서 조금 더 설명을 들어보고 싶은데 설명해줄 수 있어?" },
      ],
    },
    {
      q: ["어느덧 CJ UNIT 을 시작한지 1달이 지나가고, CJ UNIT TF 팀 활동 모집이 시작되었다."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: [" 여기서 잠깐 !”TF 팀” 이 뭔지 잘 모를 사람들을 위해 창캠박사가 설명해주러 왔다네."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["TF 팀은  교육봉사, 홍보콘텐츠 발굴 외에도 다재다능한 대학생들이 모여 참여할 수 있는 특별한 경험을 가질 수 있는 활동이라네 !"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["8기에서는 바이럴테스트, chat gpt를 활용한 커리큘럼 개발, 홍보, 스마트 시티 제작, 메타버스 TF 가 있었지! "],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["... 지원서 작성중 ..."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["다 썼다 !! 이제 제출하고 결과를 기다려야지"],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["며칠 후, 합격자 명단이 올라왔고 창캐미는 자신의의 이름이 있는걸 발견했다."],
      p: ["화자"],
      a: [
        { text: "다음" },
      ],
    },
    {
      q: ["야호 !! 내가 지원했던 TF팀에 선정되었다 !! 이때 드는 생각은?"],
      p: ["화자"],
      a: [
        { type: "N", text: "시도해보고싶은것과 새로운 아이디어들이 마구마구 떠오른다 !!" },
        { type: "E", text: "다른 조 사람들이랑도 만날 수 있겠다 !!너무 기대되는걸?" },
        { type: "I", text: "새로운 사람들과 친해질 수 있을지 기대보단 걱정이 앞선다.." },
      ],
    },
  ];


  const [mbtiList, setMbtiList] = useState([
    { name: "I", count: 0 },
    { name: "E", count: 0 },
    { name: "S", count: 0 },
    { name: "N", count: 0 },
    { name: "F", count: 0 },
    { name: "T", count: 0 },
    { name: "P", count: 0 },
    { name: "J", count: 0 },
  ]);

  

  const handleCkAnswer = (type, idx) => {
      console.log("idx:", idx);
      console.log("type:", type);
    let ls = mbtiList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }
    setMbtiList(ls);
    if (
      (idx === 2 && type === "picture") ||
      (idx === 4 && type === "I") ||
      (idx === 6 && type === "E") ||
      (idx === 7 && type === "S") ||
      (idx === 13 && type === "J") ||
      (idx === 20 && type === "F") ||
      (idx === 28 && type === "F") ||
      (idx === 32 && type === "E") ||
      (idx === 35 && type === "J") ||
      (idx === 39 && type === "J") ||
      (idx === 43 && type === "N") ||
      (idx === 46 && type === "T") ||
      (idx === 54 && type === "N")
    ) {
      setPage(page + 100);
    } else if (
      (idx === 4 && type === "E") ||
      (idx === 6 && type === "I") ||
      (idx === 7 && type === "N") ||
      (idx === 13 && type === "P") ||
      (idx === 20 && type === "T") ||
      (idx === 28 && type === "T") ||
      (idx === 32 && type === "I") ||
      (idx === 35 && type === "P") ||
      (idx === 39 && type === "P") ||
      (idx === 43 && type === "S") ||
      (idx === 46 && type === "F") ||
      (idx === 54 && type === "E")
    ) {
      setPage(page + 200);
    }else if (
       (idx === 54 && type === "I")
    ) {
      setPage(page + 200)
    }
    else {
      setPage(page + 1);
    }

    if (idx + 1 === questionList.length) {
      setMBTI();
    }
  };
  const [page, setPage] = useState(0);


  const [mbtiContents, setmbtiContents] = useState([]);

  function setMBTI() {
    let mc = [
      { mbti: "ENTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISTJ", contents: ["설명1", "설명2", "설명3"] },
    ];

    let IorE =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "I";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "E";
      }).count
        ? "I"
        : "E";
    let SorN =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "S";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "N";
      }).count
        ? "S"
        : "N";
    let ForT =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "F";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "T";
      }).count
        ? "F"
        : "T";
    let PorJ =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "P";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "J";
      }).count
        ? "P"
        : "J";

    let mbti = IorE + SorN + ForT + PorJ;

    setmbtiContents(mc.filter((val) => val.mbti === mbti)[0]);
  }
 const CustomPage = ({ question, answer }) => {
   const handleClickNextHund = () => {
     setPage(page - 99);
   };

   const handleClickNextTwoHund = () => {
     setPage(page - 199);
   };

   const handleClickNext =
     page < 200 ? handleClickNextHund : handleClickNextTwoHund;
    
return (
  <div className="questionLayout">
    <div className="questionAnswerLayout">
      <div className="questionList">
  
          {page < 200 ? (
            <div className="questionItemlayout">
              <div className="chatListLayout">
                <div className="chatBox">
                  <div></div>
                  <div>{question}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="questionItemlayout">
              <div className="chatListLayout">
                <div className="chatBox">
                  <div></div>
                  <div>{question}</div>
                </div>
              </div>
            </div>
          )}
    

        <div className="answerItemLayout">
          <div className="answerBox" onClick={handleClickNext}>
            다음
          </div>
        </div>
      </div>
    </div>
  </div>
);

 };



  return (
    <div className="mbtilayout">
      {page === 0 ? (
        <div className="startPageLayout">
          <button onClick={() => setPage(1)} className="startButton">
            테스트 시작하기
          </button>
        </div>
      ) :page === 103 ? (
        <div className = "welcomekitLayout">
        <div>웰컴키트 사진들1</div>
        <button onClick={()=>{setPage(1103)}}>카드선택</button>
        <button onClick={()=>{setPage(104)}}>다음</button></div>
      ) :page === 1103 ? (
        <div>
        <div>웰컴키트 카드 확대</div>
        <button onClick={()=>{setPage(103)}}>이전</button></div>
      ) :page === 104 ? (
        <div>
        <div>웰컴키트 사진들2</div>
        <button onClick={()=>{setPage(1104)}}>이름표선택</button>
        <button onClick={()=>{setPage(page - 100)}}>다음</button></div>
      ) :page === 1104 ? (
        <div>
        <div>이름표 카드 확대</div>
        <button onClick={()=>{setPage(104)}}>이전</button></div>
      ) : page === 205 ? (
        <div className = "firstQuestionLayout">
          <CustomPage question={"와~ 다른조지만 이렇게 인사하게 되니 너무 반갑네요 ! 같은 조로 활동은 못하겠지만, 종종 밥도 먹으며 한학기동안 우리만의 색을 찾아보아요 ~!"} answer={"질문"} />
        </div>
      ) : page === 105 ? (
        <div className = "firstQuestionLayout">
          <CustomPage question={"안녕하세요 ! 같은조로 만나게 되어서 너무 반갑네요 ㅎㅎ 한학기동안 우리만의 색을 찾아보아요 ~!"}/>
          </div>
  
        
      ) : page === 107 ? (
          <div className = "firstQuestionLayout">
          <CustomPage question={"학생들 전부랑 친해져야지~!~!"} />
          </div>

      ) : page === 207 ? (
        <div className = "firstQuestionLayout">
        <CustomPage question={"그래 이 기회에 열심히 친해져야겠다!"} />
        </div>
      ) : page === 108 ? (
          <div className = "airplaneLayout">
          <CustomPage question={"이 영화 관심있게 봤었는데 비행기에서 봐야겠다!"} answer={"이건 뭐지(재민)"} />
          </div>
     
      ) : page === 208 ? (
        <div className = "airplaneLayout">
          <CustomPage question={"여기서 비상구까지 거리가 꽤 되네.. 안내방송 열심히 들어야겠다.."} answer={"질문"} />
          </div>
   
      ) : page === 114 ? (
        <div className="officeLayout">
          <CustomPage question={"그래도 여유있게 도착했다!   팀원들 커피사서 올라가야지~"} answer={"질문"} />
        </div>
      ) : page === 214 ? (
        <div className="officeLayout">
          <CustomPage question={"헉헉..아슬아슬하게 도착..! 뛰었더니 너무 힘드네.."} answer={"질문"} />
       </div>
      ) : page === 121 ? (
        <div className="officeLayout">
          <CustomPage question={"학생이 속상하지 않게 달래면서 오류를 찾아야지!"} answer={"질문"} />
        </div>
       
      ) : page === 221 ? (
        <div className="officeLayout">
          <CustomPage question={"최대한 빠르게 오류를 찾자"} answer={"질문"} />
        </div>
        
      ) : page === 129 ? (
        <div className = "office2Layout">
          <CustomPage question={"오호 그런 방법이 있구나! 그러면 재밌는 게임을 만들어서 학생들과 같이 해봐야겠다! 고마워>_<"} answer={"질문"} />
       </div>
      ) : page === 229 ? (
        <div className = "office2Layout">
          <CustomPage question={"오호 그런 방법이 있구나! 그럼 다음부터는 반장을 뽑아서 진행해봐야겠다! 고마워>_<"} answer={"질문"} />
       </div>
      ) : page === 133 ? (
        <div className="officeLayout">
          <CustomPage question={"대면으로 하는 날이 왔으면 좋겠다!"} answer={"질문"} />
          </div>
        
      ) : page === 233 ? (
        <div className="officeLayout">
          <CustomPage question={"비대면 방법을 적극 활용하면 더 알차게 가르칠 수 있는 것 같아"} answer={"질문"} />
          </div>
     
      ) : page === 136 ? (
        <div className="office3Layout">
          <CustomPage question={"대박! 소품 너무 귀여워>_<  우리 이거 사용해서 찍어보자!!!"} answer={"질문"} />
        </div>
      ) : page === 236 ? (
        <div className = "officeLayout">
          <CustomPage question={"방금 전에 찾아봤는데 이 포즈가 좋은 거 같아!"} answer={"질문"} />
          </div>
        
      ) : page === 140 ? (
        <div className = "officeLayout">
          <CustomPage question={"휴 작성 다했다!"} answer={"질문"} />    
          </div>    
      ) : page === 240 ? (
        <div className = "officeLayout">
          <CustomPage question={"내일 설마 잊어버리지는 않겠지?"} answer={"질문"} />
          </div>
      
      ) : page === 144 ? (
        <div className = "homeLayout">
          <CustomPage question={"그래 학생들도 변화된 교육과정이 좋아할거야!"} answer={"질문"} />
          </div>
        
      ) : page === 244 ? (
        <div className = "homeLayout">
          <CustomPage question={"변화를 주면 학생들이 이해하기 힘들 수 있을것 같아 기존의 수업방식으로 하자!"} answer={"질문"} />
          </div>
        
      ) : page === 147 ? (
        <div className = "office4Layout">
          <CustomPage question={"생각해보니 조금 수정하면 좋겠다! 피드백 해줘서 고마워 ~"} answer={"질문"} />
        </div>
      ) : page === 247 ? (
        <div className = "office4Layout">
          <CustomPage question={"(커리큘럼에 대한 설명중 . . .) 이런 의도로 만들어왔어~  막상 설명하다보니 이부분을 조금 수정하면 좋을 것 같다! 다같이 조금 수정해보자 ~ "} answer={"질문"} />
        </div>
      ) : page === 155 ? (
          <div className="home2Layout">
          <CustomPage question={"지원 전부터 합격하면 해보고싶은 아이디어들이 마구마구 떠올랐는데, 이제 합격도 했으니 얼른 결과물로 만들.. 어? 또 생각났다! 메모해둬야지지"} answer={"질문"} />
          </div>
      ) : page === 255 ? (
        <div className="home3Layout">
          <CustomPage question={"다른 조원분들과는 친해질 기회가 없어서 아쉬웠는데 이번에 친해져서 좋다! 얼른 만나고싶어 >_<"} answer={"질문"} />
          </div>
     
      ) : page === 256 ? (
        <div className="home4Layout">
          <CustomPage question={"원하던 활동이였지만, 걱정이 조금 앞서기도 해 ㅠㅠ... 그치만 멋진 UNIT 분들과 함께라면 뭐든 잘 해낼 수 있을거야 !"} answer={"질문"} />
          </div>
      
      ) : page === 260 ? (
       
          <CustomPage question={"세번째 질문 조건페이지"} answer={"질문"} />
     
      ) : page <= questionList.length ? (
        <div className="questionLayout">
          <div className="mbtiTitle">
            <div>MBTI TEST</div>
            <button onClick={() => setPage(page-1)} className="returnButton">
              뒤로가기
            </button>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>

          <div className="questionAnswerLayout">
            {questionList.map((val, idx) => (
              <div
                className="questionList"
                
                style={{
                  display: page === idx + 1 ? "flex" : "none",
                  backgroundImage: `url(${
                    idx === 0 ? require("./image/발대식.png"):
                    idx === 1 ? require("./image/발대식+담당자.png"):
                    idx === 2 ? require("./image/발대식+가방.png"):
                    idx < 5 ? require("./image/발대식.png"):
                    idx === 5 ? require("./image/발대식+담당자.png") :
                    idx === 6 ? require("./image/발대식+담당자흐림.png") :
                    idx < 8 ? require("./image/비행기내부.png") : 
                    idx < 10 ? require("./image/본사배경.png") :
                    idx < 12 ? require("./image/본사+담당자.png") :
                    idx === 12 ? require("./image/집+결심.png") :
                    idx === 13 ? require("./image/집+고민.png") :
                    idx === 14 ? require("./image/본사+기쁜.png") :
                    idx === 16 ? require("./image/본사+기쁜.png") :
                    idx === 15 ? require("./image/본사배경.png") :
                    idx === 18 ? require("./image/본사+창캐미.png") :
                    idx === 21 ? require("./image/본사+깨달은창캐미.png") :
                    idx === 23 ? require("./image/본사+창캐미.png") :
                    idx === 24 ? require("./image/본사+기쁜.png") :
                    idx < 25 ? require("./image/본사배경.png") :
                    idx === 25 ? require("./image/본사+창캐미.png") :
                    idx === 26 ? require("./image/본사+고민.png") : 
                    idx === 27 ? require("./image/본사+결심.png") : 
                    idx === 28 ? require("./image/본사+결심흐림.png") :
                    idx === 29 ? require("./image/본사+기쁜.png") :
                    idx < 32 ? require("./image/본사+팀원.png") : 
                    idx === 32 ? require("./image/본사+팀원흐림.png") :
                    idx === 33 ? require("./image/본사+담당자.png") :
                    idx === 34 ? require("./image/본사+팀원2.png") :
                    idx === 35 ? require("./image/본사+팀원2흐림.png") :
                    idx === 36 ? require("./image/본사+담당자.png") :
                    idx === 38 ? require("./image/본사+고민.png") :
                    idx === 39 ? require("./image/본사+고민흐림.png") :
                    idx < 40 ? require("./image/본사배경.png") : 
                    idx === 42 ? require("./image/집+문자.png") :
                    idx === 43 ? require("./image/집흐림.png") : 
                    idx < 44 ? require("./image/집.png") : 
                    idx === 45 ? require("./image/본사+팀원.png") :
                    idx === 47 ? require("./image/집.png") :
                    idx < 47 ? require("./image/본사배경.png") : 
                    idx < 51 ? require("./image/집+박사.png") :
                    idx === 53 ? require("./image/집+합격.png") :
                    idx < 55 ? require("./image/집.png") : ""
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                key={idx}
              >
                <div className="questionItemlayout">
                <div className="answerItemLayout">
                  {val.a.map((aval, aidx) => (
                    <div
                      key={aidx}
                      className="answerBox"
                      onClick={() => handleCkAnswer(aval.type, idx)}
                    >
                      {" "}
                      {aval.type}
                      {aval.text}
                    </div>
                  ))}
                </div>
                <div className="personListLayout">
                {val.p.map((pval, pidx) => (
                 <div key={pidx} className="personBox">
                <div className="personText">{pval}</div>
                 </div>
                   ))}
                </div>
                  <div className="chatListLayout">
                    <div className="questionItemlayout">
                      <div className="chatListLayout">
                        {val.q.map((qval, qidx) => (
                          <div key={qidx} className="rectangle1">
                            <div></div> <div className="text">{qval} </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                


              </div>
            ))}

          </div>
        </div>
      ) : (
        <div className="questionLayout">
          <div className="mbtiTitle">
            <div>MBTI TEST</div>
            <button onClick={() => setPage(page-1)} className="returnButton">
              뒤로가기
            </button>
            <div onClick={() => window.location.reload()}>다시하기</div>
          </div>

          <div>
            <div className="questionList" style={{ display: "flex" }}>
              <div className="questionItemlayout">
                <div className="chatListLayout">
                  <div className="chatBox">
                    <div></div>
                    <div>당신의 mbti는 {mbtiContents.mbti} 입니다.</div>
                  </div>

                  <div className="chatBox">
                    <div></div>
                    <div>{mbtiContents.mbti} 는</div>
                  </div>

                  {mbtiContents.contents.map((val, idx) => (
                    <div className="chatBox" key={idx}>
                      <div></div>
                      <div>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
