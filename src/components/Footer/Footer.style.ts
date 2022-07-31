import styled from 'styled-components';
import { Container, Section } from '../../globalStyle.style';

export const FooterSection = styled(Section)`
  /* width: 100vw; */
  margin: auto;
  height: 30rem;
  background-color: #071c2f;
  @media screen and (max-width: 740px) {
    height: auto;
    padding: 3rem;
    padding-bottom: 4rem;
  }
`;

export const FooterContainer = styled(Container)`
  height: 100%;
`;
export const FooterMetadataBigDiv = styled.div`
  width: 90%;
  margin: auto;
  height: 20rem;
  display: flex;
  @media screen and (max-width: 740px) {
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 2rem 0;
  }
`;

export const FooterMetadataFirstDiv = styled.div`
  flex: 1.2;
  padding-top: 7rem;
  height: 100%;
`;

export const FooterLogo = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const FooterCompanyIcon = styled.img`
  margin-right: 1rem;
  width: 2.4rem;
`;

export const FooterDelta = styled.p`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-family: Montserrat;
`;

export const FooterAddressDiv = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0.6rem 0;
`;

export const FooterAddressP = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0.6rem 0;
`;

export const FooterIconBoxDiv = styled.div`
  display: flex;
  margin: 1rem 0;
`;
export const FooterSnsIconsDiv = styled.div`
  margin-right: 1rem;
  color: white;
  font-size: 2rem;
`;
export const FooterMetadataOtherDivs = styled.div`
  flex: 1;
  padding-top: 7rem;
  height: 100%;
`;

export const OtherDivsTitleP = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  letter-spacing: 0.04rem;

  font-weight: 800;
  color: white;
`;

export const OtherDivsMetadataP = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  letter-spacing: 0.04rem;
  color: white;
`;

export const DividerDiv = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 1px;
  border-bottom: 1px solid white;
`;

export const CorporationP = styled.p`
  font-size: 0.8rem;
  color: white;
  text-align: center;
  /* margin: auto; */
`;
