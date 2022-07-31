import React, { useEffect, useState } from 'react';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Container } from '../../globalStyle.style';
import {
  CorporationP,
  DividerDiv,
  FooterContainer,
  FooterMetadataBigDiv,
  FooterMetadataFirstDiv,
  FooterMetadataOtherDivs,
  FooterSection,
  FooterCompanyIcon,
  FooterLogo,
  OtherDivsMetadataP,
  OtherDivsTitleP,
  FooterDelta,
  FooterAddressDiv,
  FooterIconBoxDiv,
  FooterSnsIconsDiv,
  FooterAddressP,
} from './Footer.style';

const Footer = () => {
  const [innerWidth, setInnerWidth] = useState<number>(1080);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
    console.log(innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterMetadataBigDiv>
            {innerWidth > 740 ? (
              <>
                <FooterMetadataFirstDiv>
                  <FooterLogo>
                    <FooterCompanyIcon src='./assets/logo.png' alt='logo' />
                    <FooterDelta>Gamma</FooterDelta>
                  </FooterLogo>

                  <FooterAddressDiv>
                    <FooterAddressP>
                      69 Street, Gamma Building, UK
                    </FooterAddressP>
                    <FooterAddressP>Road, London 1234</FooterAddressP>
                    <FooterIconBoxDiv>
                      {footerSocialData.map((value, index) => {
                        return (
                          <FooterSnsIconsDiv key={index}>
                            {value.icon}
                          </FooterSnsIconsDiv>
                        );
                      })}
                    </FooterIconBoxDiv>
                  </FooterAddressDiv>
                </FooterMetadataFirstDiv>

                {footerData.map((value, index) => {
                  return (
                    <FooterMetadataOtherDivs key={index}>
                      <OtherDivsTitleP>{value.title}</OtherDivsTitleP>
                      <OtherDivsMetadataP>{value.links[0]}</OtherDivsMetadataP>
                      <OtherDivsMetadataP>{value.links[1]}</OtherDivsMetadataP>
                      <OtherDivsMetadataP>{value.links[2]}</OtherDivsMetadataP>
                      <OtherDivsMetadataP>{value.links[3]}</OtherDivsMetadataP>
                    </FooterMetadataOtherDivs>
                  );
                })}
              </>
            ) : (
              <>
                <FooterLogo>
                  <FooterCompanyIcon src='./assets/logo.png' alt='logo' />
                  <FooterDelta>Gamma</FooterDelta>
                </FooterLogo>
              </>
            )}
          </FooterMetadataBigDiv>
          <DividerDiv />
          <CorporationP>Gamma © 2021</CorporationP>
        </FooterContainer>
      </FooterSection>
    </>
  );
};
export default Footer;
