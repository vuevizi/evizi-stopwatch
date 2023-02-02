import React from 'react';
import * as S from './style';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer data-test="header-container">
      <S.HeaderLogo data-test="header-logo">Stop Watch</S.HeaderLogo>
    </S.HeaderContainer>
  );
};

export default Header;
