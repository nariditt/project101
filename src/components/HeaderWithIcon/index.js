import SVG from "react-inlinesvg";
import { Stack } from "@mui/material";
import { NumberedList, Header } from "./style";

export default function HeaderWithIcon({
  number,
  numberMB,
  numberColor,
  header,
  headerMB = "21px",
  headerLineHeight,
  headerFontSize,
  src,
  svgML = "0px",
  svgWidth,
  svgHeight,
  mr = "10px",
}) {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: headerMB,
      }}
    >
      <Stack
        style={{
          marginTop: "5px",
          marginRight: mr,
        }}
      >
        <NumberedList color={numberColor} mb={numberMB}>
          {number}
        </NumberedList>
        <SVG
          src={src}
          width={svgWidth}
          height={svgHeight}
          style={{ marginLeft: svgML }}
        />
      </Stack>
      <Header fontSize={headerFontSize} lineHeight={headerLineHeight}>
        {header}
      </Header>
    </div>
  );
}
