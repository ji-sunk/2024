import React, { useState } from 'react';

const SwitchButton = () => {
  const [activeTab, setActiveTab] = useState('weekly'); // 기본 활성화 탭: 'weekly'

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // 클릭한 탭 ID로 상태를 업데이트
  };

  return (
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
  );
};

export default SwitchButton;
