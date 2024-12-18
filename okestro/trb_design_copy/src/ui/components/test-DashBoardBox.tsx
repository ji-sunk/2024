import React, { useState } from 'react';

const DashBoardBox1 = () => {
  const [activeTab, setActiveTab] = useState('weekly'); // 기본 활성화 탭: 'weekly'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // 클릭한 탭 ID로 상태를 업데이트
  };

  return (
    <div className="dashboard-wrap">
      {/* COMPONENT 영역 S */}
      <div className="dashboard-title">
        <div className="tit-area">
          <h1>개발진행현황</h1>
        </div>
        <div className="elem-area">
          {/* switch 버튼 S */}
          <div className="btn-box switch">
            <button
              type="button"
              className={activeTab === 'weekly' ? 'active' : ''}
              onClick={() => handleTabClick('weekly')}
            >
              <span>주간</span>
            </button>
            <button
              type="button"
              className={activeTab === 'monthly' ? 'active' : ''}
              onClick={() => handleTabClick('monthly')}
            >
              <span>월간</span>
            </button>
          </div>
          {/* // switch 버튼 E */}
        </div>
      </div>
      {/* // COMPONENT 영역 E */}
    </div>
  );
};

export default DashBoardBox1;
