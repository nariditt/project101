"use client";

import styled from "styled-components";

export const NumberedList = styled.div`
  color: ${(props) => props.color || "#000"};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  margin-bottom: ${(props) => props.mb || "0px"};
`;

export const Header = styled.div`
  color: #c2c2c2;
  font-size: ${(props) => props.fontSize || "36px"};
  font-weight: 400;
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: 1.5px;
  margin-top: ${(props) => props.mt || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
`;
