import React from 'react';
import * as S from './style';
const Footer: React.FC = () => {
  return (
    <S.FooterContainer data-test="footer-container">
      <S.FooterText data-test="footer-text">Designed by Vu</S.FooterText>
    </S.FooterContainer>
  );
};

export default Footer;
