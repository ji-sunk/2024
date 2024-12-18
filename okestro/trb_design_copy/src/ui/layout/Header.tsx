import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // useNavigate는 컴포넌트 내부에서 호출

  const handleNavigate = () => {
    navigate('/dashboard'); // 버튼 클릭 등에서 호출 가능
  };

  return (
    <>
      <header className="gnb" id="gnb">
        <div className="gnb-wrap">
          <h1 className="title">TROMBONE</h1>
          <sub>®</sub>
        </div>
      </header>
    </>
  );
};

export default Header;
