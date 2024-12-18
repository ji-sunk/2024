import SwitchButton from '@/ui/components/SwitchButton';

const DashBoardTitle = () => {
  return (
    <div className="dashboard-title">
      <div className="tit-area">
        <h1>개발진행현황</h1>
      </div>
      <SwitchButton />
      <i className="ico-zoom">
        <span className="hide">zoomin</span>
      </i>
    </div>
  );
};

export default DashBoardTitle;
