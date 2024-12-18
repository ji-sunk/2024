import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBox from '@/ui/components/ContentBox';
import LNB from '@/ui/layout/LNB';

const SwitchTab = () => {
  const navigate = useNavigate(); // useNavigate는 컴포넌트 내부에서 호출
  const [activeTab, setActiveTab] = useState('tab1'); // 활성화된 탭 ID를 관리

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="tab-wrap box">
        <div className="tab-list" role="tablist" aria-label="Box Tabs">
          <button
            className="tab-btn"
            role="tab"
            aria-selected={activeTab === 'tab1'}
            aria-controls="panel1"
            id="tab1"
            onClick={() => handleTabClick('tab1')}
          >
            관리자
          </button>
          <button
            className="tab-btn"
            role="tab"
            aria-selected={activeTab === 'tab2'}
            aria-controls="panel2"
            id="tab2"
            onClick={() => handleTabClick('tab2')}
          >
            사용자
          </button>
        </div>
        <div
          className="tab-panel"
          role="tabpanel"
          id="panel1"
          aria-labelledby="tab1"
          hidden={activeTab !== 'tab1'}
        >
          <ContentBox />
          <LNB />
        </div>
        <div
          className="tab-panel"
          role="tabpanel"
          id="panel2"
          aria-labelledby="tab2"
          hidden={activeTab !== 'tab2'}
        >
          <LNB />
        </div>
      </div>
    </>
  );
};

export default SwitchTab;
