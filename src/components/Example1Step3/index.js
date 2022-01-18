import { Row } from "../Row";
import { Column } from "../Column";
import { Text } from "../Text";

import { STRINGS } from "../../constants/string";

export const Example1Step3 = (props) => {
  return (
    <Row
      className="step32"
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
        className="bullet3"
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
          className="b32"
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
        className="useyourarrow"
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

Example1Step3.defaultProps = {
  children: STRINGS["lbl_3"] || "",
  children1: STRINGS["msg_use_your_arrow"] || "",
};
