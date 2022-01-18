import { Row } from "../Row";
import { Column } from "../Column";
import { Text } from "../Text";

import { STRINGS } from "../../constants/string";

export const TablesStep3 = (props) => {
  return (
    <Row
      className="step3"
      layoutGravity={33}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"start"}
      width={340}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Column
        className="bullet"
        layoutGravity={11}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={42.67}
        isExpanded={0}
        left={0}
        right={0}
      >
        <Text
          className="b3"
          layoutGravity={33}
          gravity={9}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={42.67}
          isExpanded={0}
          left={0}
          right={0}
        >
          {props?.children}
        </Text>
      </Column>
      <Text
        className="selectarow"
        layoutGravity={11}
        gravity={1}
        mainAxisAlignment={""}
        crossAxisAlignment={""}
        width={276}
        isExpanded={true}
        left={21.330002}
        right={0}
      >
        {props?.children1}
      </Text>
    </Row>
  );
};

TablesStep3.defaultProps = {
  children: STRINGS["lbl_3"] || "",
  children1: STRINGS["msg_select_a_row"] || "",
};
