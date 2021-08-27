import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledKillingScoreButtons = styled.div`
  display: flex;
  justify-content: center;
  a {
    padding: 10px 20px;
    margin: 30px;
    font-size: 20px;
    text-decoration: none;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    border: 2px solid #fff;
  }
`;

const KillingScoreButtons = () => {
  const authUser = useTypedSelector((state) => state.auth);

  return (
    <StyledKillingScoreButtons>
      <Link to="/DEATH-NOTE/killing-start">재시도</Link>
      {authUser && <Link to="/DEATH-NOTE/ranking">랭킹 보기</Link>}
    </StyledKillingScoreButtons>
  );
};

export default KillingScoreButtons;
