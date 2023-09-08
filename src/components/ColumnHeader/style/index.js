"use client";

import styled from "styled-components";

export const Header = styled.div`
  color: #e7e7e7;
  font-size: ${(props) => props.fontSize || "90px"};
  font-weight: 400;
  line-height: normal;
  margin-top: ${(props) => props.mt || "0px"};
  margin-left: ${(props) => props.ml || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
`;
