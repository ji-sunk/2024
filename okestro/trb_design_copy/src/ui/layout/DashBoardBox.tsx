import DashBoardTitle from '@/ui/components/DashBoardTitle';
import ProgressStatus from '@/ui/components/ProgressStatus';

const DashBoardBox = () => {
  return (
    <div className="dashboard-wrap">
      <DashBoardTitle />
      <ProgressStatus />
    </div>
  );
};

export default DashBoardBox;
