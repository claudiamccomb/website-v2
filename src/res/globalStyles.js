// This file is for the styles for some components that are being used globally
import styled from "styled-components";

// Styles for wrapper of section
export const StyledSectionWrapper = styled.div`
  &&& {
    scroll-margin: 100px;
    margin-bottom: 104px;
  }
`;

// Styles for title text of each large section / topic
export const StyledSectionText = styled.h3`
  &&& {
    margin-bottom: 16px;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #0D0C35;
    opacity: 0.8;
  }
`;

export const StyledGradientBackground = styled.div`
  &&& {
    padding-top: 56px;
    background: linear-gradient(180deg, rgba(231, 213, 208, 0.55) 0%, rgba(231, 190, 178, 0) 62.65%);
  }
`;