import React from 'react';
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
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterMetadataBigDiv>
            <FooterMetadataFirstDiv>
              <FooterLogo>
                <FooterCompanyIcon src='./assets/logo.png' alt='logo' />
                <FooterDelta>Delta</FooterDelta>
              </FooterLogo>
              <FooterAddressDiv>
                <FooterAddressP>69 Street, Delta Building, US</FooterAddressP>
                <FooterAddressP>Road, Los Angeles 123</FooterAddressP>
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
          </FooterMetadataBigDiv>
          <DividerDiv />
          <CorporationP>Delta © 2021</CorporationP>
        </FooterContainer>
      </FooterSection>
    </>
  );
};
export default Footer;
