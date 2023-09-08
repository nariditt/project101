import { Header } from "./style";

export default function ColumnHeader({ header, fontSize, mt, ml, mb }) {
  return (
    <Header fontSize={fontSize} mt={mt} ml={ml} mb={mb}>
      {header}
    </Header>
  );
}
