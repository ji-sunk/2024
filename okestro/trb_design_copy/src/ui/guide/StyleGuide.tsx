import React, { useState } from 'react';
// import './css/style.css';
import './css/guide.css';

const StyleGuide = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [activeTabBox, setActiveTabBox] = useState('panel1');
  const [activeTabLine, setActiveTabLine] = useState('panel11');

  const handleAccordionToggle = () => {
    setAccordionOpen(!accordionOpen);
  };

  const handleTabChange = (panelId, setActiveTab) => {
    setActiveTab(panelId);
  };

  const scrollSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const gnb = document.getElementById('gnb');
    const gnbHeight = gnb.offsetHeight;
    const targetPosition =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      gnbHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div id="guide" className="base-wrap">
      <header className="gnb" id="gnb">
        <div className="gnb-wrap">
          <h1 className="title">TROMBONE</h1>
          <sub>®</sub>
        </div>
      </header>
      <div className="base-container">
        <div className="base-lnb">
          <ul className="ui-menu">
            <li>
              <a href="#guide-font" onClick={scrollSection}>
                FONT
              </a>
            </li>
            <li>
              <a href="#guide-color" onClick={scrollSection}>
                COLOR
              </a>
            </li>
            <li>
              <a href="#guide-nav" onClick={scrollSection}>
                Navigation Bar
              </a>
            </li>
            <li>
              <a href="#guide-title" onClick={scrollSection}>
                타이틀
              </a>
            </li>
            <li>
              <a href="#guide-button" onClick={scrollSection}>
                버튼
              </a>
            </li>
            <li>
              <a href="#guide-tab" onClick={scrollSection}>
                탭(Tab)
              </a>
            </li>
            <li>
              <a href="#section4" onClick={scrollSection}>
                테이블
              </a>
            </li>
            <li>
              <a href="#section6" onClick={scrollSection}>
                textfield
              </a>
            </li>
            <li>
              <a href="#section7" onClick={scrollSection}>
                뱃지
              </a>
            </li>
            <li>
              <a href="#section8" onClick={scrollSection}>
                info(알림)
              </a>
            </li>
            <li>
              <a href="#section9" onClick={scrollSection}>
                paging
              </a>
            </li>
            <li>
              <a href="#section10" onClick={scrollSection}>
                etc
              </a>
            </li>
          </ul>
        </div>
        <main className="base-main">
          <section className="base-cont" id="guide-font">
            <div id="font">
              <p className="title">[Font]</p>
              <p className="sub-title">
                Prenendard 와 roboto 폰트를 사용하고 있습니다.
              </p>
              <div className="font-wrap">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                  <div
                    key={weight}
                    className="font-box"
                    style={{ fontWeight: weight }}
                  >
                    <p className="fn">
                      안녕하세요. 오케스트로 Trombone에 오신 걸 환영합니다.
                    </p>
                    <span>{weight}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="base-cont" id="guide-color">
            <div id="primary-color">
              <p className="title">[Color]</p>
              <p className="sub-title">
                <span className="bold">Primary Color</span> Brnad의 정의 및
                성격을 나타내는 컬러입니다. 컬러의 특성상 주요부분에만 적용하는
                것을 권장합니다.
              </p>
              <div className="comp">
                <div className="color-wrap">
                  <div className="color-box">
                    <div className="square bg-navy"></div>
                    <p>#474766</p>
                  </div>
                  <div className="color-box">
                    <div className="square bg-green"></div>
                  </div>
                  <div className="color-box">
                    <div className="square bg-yg"></div>
                  </div>
                </div>
              </div>
              <p className="sub-title">
                <span className="bold">Accent Color</span> 컬러추가 또는 수정이
                가능합니다.
              </p>
              <div className="comp">
                <div className="color-wrap">
                  <div className="color-box">
                    <div className="square bg-blue"></div>
                    <p>#63A1FF</p>
                  </div>
                  <div className="color-box">
                    <div className="square bg-purple"></div>
                  </div>
                  <div className="color-box">
                    <div className="square bg-orange"></div>
                  </div>
                  <div className="color-box">
                    <div className="square bg-red"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="base-cont" id="guide-nav">
            <p className="title">[Navigation Bar]</p>
            <div className="comp">
              <div className="divide-wrap">
                <div className="fn">
                  <div className="accordion" style={{ width: '300px' }}>
                    <div className="accordion-item">
                      <button
                        className={`accordion-header ${accordionOpen ? 'active' : ''}`}
                        onClick={handleAccordionToggle}
                      >
                        즐겨찾기
                      </button>
                      <div
                        className="accordion-content"
                        style={{ maxHeight: accordionOpen ? 'inherit' : 0 }}
                      >
                        <div className="list-favorite">
                          <p>FAQ기본</p>
                          <i className="ico-mark"></i>
                        </div>
                        <div className="list-favorite">
                          <p>1:1문의 기본</p>
                          <i className="ico-mark active"></i>
                        </div>
                        <div className="list-favorite">
                          <p>NO.1 공지사항 테스트 게시판</p>
                          <i className="ico-mark active"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fn" style={{ marginLeft: '10px' }}>
                  <ul className="lnb-menu" style={{ width: '300px' }}>
                    <li className="has-submenu active">
                      <a href="#">일반</a>
                      <ul>
                        <li className="has-submenu">
                          <a href="#">워크플로우관리</a>
                        </li>
                        <li className="has-submenu active">
                          <a href="#">게시판</a>
                          <ul>
                            <li className="has-submenu active">
                              <a href="#">게시판관리</a>
                              <ul>
                                <li className="has-mark">
                                  <a href="#">1:1문의 기본</a>
                                  <i className="ico-mark active"></i>
                                </li>
                                <li className="has-mark">
                                  <a href="#">FAQ 기본</a>
                                  <i className="ico-mark"></i>
                                </li>
                                <li className="has-mark">
                                  <a href="#">No1.공지사항 테스트 게시판</a>
                                  <i className="ico-mark"></i>
                                </li>
                              </ul>
                            </li>
                            <li className="has-mark">
                              <a href="#">게시판 설정</a>
                              <i className="ico-mark active"></i>
                            </li>
                          </ul>
                        </li>
                        <li className="has-mark">
                          <a href="#">메세지 관리</a>
                          <i className="ico-mark"></i>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">프로젝트</a>
                    </li>
                    <li className="has-mark">
                      <a href="#">sub menu 없는 1dpeth </a>
                      <i className="ico-mark active"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="base-cont" id="guide-title">
            <p className="title">[Title]</p>
            <p className="sub-title">
              <span>1.</span>타이틀 + 버튼
            </p>
            <div className="comp">
              <div className="comp-title">
                <div className="tit-area">
                  <h1>개발진행현황</h1>
                </div>
                <div className="elem-area">
                  <div className="btn-box box">
                    <button type="button">
                      <span>일주일</span>
                    </button>
                    <button type="button" className="on">
                      <span>한달</span>
                    </button>
                    <button type="button">
                      <span>분기</span>
                    </button>
                    <button type="button">
                      <span>반기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="sub-title">
              <span>2.</span>타이틀 + 부연설명
            </p>
            <div className="comp">
              <div className="comp-title">
                <div className="tit-area">
                  <h1>나의 할일</h1>
                  <div className="sub-explanation">
                    <p className="">보조문구 들어갈수 있습니다.</p>
                  </div>
                </div>
                <div className="elem-area">
                  <div className="explanation">
                    <p className="t-purple">
                      승인<span className="bold">0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="sub-title">
              <span>3.</span>타이틀 + 아이콘
            </p>
            <div className="comp">
              <div className="comp-title">
                <div className="tit-area">
                  <h1>나의 할일</h1>
                  <i className="ico message">
                    <span className="hide">알림</span>
                  </i>
                </div>
              </div>
            </div>
            <p className="sub-title">
              <span>4.</span>타이틀 + textfiled 있을경우
            </p>
          </section>
          <section className="base-cont" id="guide-button">
            <p className="title">[Button]</p>
            <p className="sub-title">
              <span>1.</span>기본형
            </p>
            <div className="comp">
              <div className="btn-box basic">
                <button type="button">
                  <span>일주일</span>
                </button>
                <button type="button" className="on">
                  <span>한달</span>
                </button>
                <button type="button">
                  <span>분기</span>
                </button>
                <button type="button">
                  <span>반기</span>
                </button>
              </div>
            </div>
            <p className="sub-title">
              <span>2.</span>박스형
            </p>
            <div className="comp">
              <div className="btn-box box">
                <button type="button">
                  <span>일주일</span>
                </button>
                <button type="button" className="on">
                  <span>한달</span>
                </button>
                <button type="button">
                  <span>분기</span>
                </button>
                <button type="button">
                  <span>반기</span>
                </button>
              </div>
            </div>
            <p className="sub-title">
              <span>3.</span>옵션형 버튼(라운드형)
            </p>
            <div className="comp">
              <div className="btn-box basic round">
                <button type="button" className="on">
                  <span>일주일</span>
                </button>
                <button type="button">
                  <span>한달</span>
                  <span className="num t-green">9</span>
                </button>
                <button type="button">
                  <span>분기</span>
                </button>
                <button type="button">
                  <span>반기</span>
                </button>
              </div>
            </div>
            <p className="sub-title">
              <span>4.</span>텍스트형
            </p>
            <div className="comp">
              <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <a href="" role="button" className="text-link icon">
                  <i className="ico-plus"></i>바로가기
                </a>
                <a href="" role="button" className="text-link icon">
                  바로가기<i className="ico-arrow"></i>
                </a>
                <a href="" role="button" className="text-link bg">
                  더보기
                </a>
                <a href="" role="button" className="text-link underline">
                  텍스트 버튼 123 abd
                </a>
              </div>
            </div>
          </section>
          <section className="base-cont" id="guide-tab">
            <p className="title">[Tab]</p>
            <p className="sub-title">
              <span>1.</span> 버튼형
            </p>
            <div className="comp">
              <div className="tab-wrap box" style={{ width: '288px' }}>
                <div className="tab-list" role="tablist" aria-label="Box Tabs">
                  <button
                    className="tab-btn"
                    role="tab"
                    aria-selected={activeTabBox === 'panel1'}
                    onClick={() => handleTabChange('panel1', setActiveTabBox)}
                  >
                    관리자
                  </button>
                  <button
                    className="tab-btn"
                    role="tab"
                    aria-selected={activeTabBox === 'panel2'}
                    onClick={() => handleTabChange('panel2', setActiveTabBox)}
                  >
                    사용자
                  </button>
                </div>
                <div
                  className="tab-panel"
                  role="tabpanel"
                  hidden={activeTabBox !== 'panel1'}
                >
                  <p>관리자 영역입니다.</p>
                </div>
                <div
                  className="tab-panel"
                  role="tabpanel"
                  hidden={activeTabBox !== 'panel2'}
                >
                  <p>사용자 영역입니다.</p>
                </div>
              </div>
            </div>

            <p className="sub-title">
              <span>2.</span> 라인형
            </p>
            <div className="comp">
              <div className="tab-wrap line" style={{ width: '500px' }}>
                <div className="tab-list" role="tablist" aria-label="Line Tabs">
                  <button
                    className="tab-btn"
                    role="tab"
                    aria-selected={activeTabLine === 'panel11'}
                    onClick={() => handleTabChange('panel11', setActiveTabLine)}
                  >
                    공지사항
                  </button>
                  <button
                    className="tab-btn"
                    role="tab"
                    aria-selected={activeTabLine === 'panel12'}
                    onClick={() => handleTabChange('panel12', setActiveTabLine)}
                  >
                    FAQ
                  </button>
                  <button
                    className="tab-btn"
                    role="tab"
                    aria-selected={activeTabLine === 'panel13'}
                    onClick={() => handleTabChange('panel13', setActiveTabLine)}
                  >
                    문의요청
                  </button>
                </div>

                <div
                  className="tab-panel"
                  role="tabpanel"
                  hidden={activeTabLine !== 'panel11'}
                >
                  <p> 여기는 공지사항이 들어가는 영역입니다.</p>
                </div>
                <div
                  className="tab-panel"
                  role="tabpanel"
                  hidden={activeTabLine !== 'panel12'}
                >
                  <p>FAQ: 자주 문의하는 질문에 대한 답변을 정리합니다.</p>
                </div>
                <div
                  className="tab-panel"
                  role="tabpanel"
                  hidden={activeTabLine !== 'panel13'}
                >
                  <p>궁금하신 사항이 있으시면 문의해주시기 바랍니다.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StyleGuide;
