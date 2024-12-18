import React, { useState } from 'react';

const ProgressStatus = () => {
  return (
    <div className="">
      <div className="grid card col-6 mgt-base">
        {/* COMPONENT 영역 S */}
        <div className="card-item all">
          <dl className="card-header">
            <dt className="card-title">전체</dt>
            <dd className="card-desc">전체 진행 건수</dd>
          </dl>
          <div className="card-cont">
            <span className="num">1000</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}

        {/* COMPONENT 영역 S */}
        <div className="card-item">
          <dl className="card-header">
            <dt className="card-title">변경신청</dt>
            <dd className="card-desc">주간 결제 승인 건수</dd>
          </dl>
          <div className="card-cont">
            <span className="num">9</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}

        {/* COMPONENT 영역 S */}
        <div className="card-item">
          <dl className="card-header">
            <dt className="card-title">개발/변경</dt>
          </dl>
          <div className="card-cont">
            <span className="num">9</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}

        {/* COMPONENT 영역 S */}
        <div className="card-item">
          <dl className="card-header">
            <dt className="card-title">통합테스트</dt>
          </dl>
          <div className="card-cont">
            <span className="num">19</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}

        {/* COMPONENT 영역 S */}
        <div className="card-item">
          <dl className="card-header">
            <dt className="card-title">배포 예정</dt>
          </dl>
          <div className="card-cont">
            <span className="num">139</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}

        {/* COMPONENT 영역 S */}
        <div className="card-item complete">
          <dl className="card-header">
            <dt className="card-title">완료</dt>
            <dd className="card-desc">주간 완료 건수</dd>
          </dl>
          <div className="card-cont">
            <span className="num">999</span>건
          </div>
        </div>
        {/* // COMPONENT 영역 E */}
      </div>

      <div className="desc-box mgt-base">
        <p className="text-date">2024-11-14 기준</p>
      </div>
    </div>
  );
};

export default ProgressStatus;
