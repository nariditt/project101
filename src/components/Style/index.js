"use client";

import styled from "styled-components";

export const Text = styled.div`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => props.lineHeight || "28px"};
`;
