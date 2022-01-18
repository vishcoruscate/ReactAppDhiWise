import { Row } from "../Row";
import { Column } from "../Column";
import { Text } from "../Text";

import { STRINGS } from "../../constants/string";

export const Example1Step2 = (props) => {
  return (
    <Row
      className="step2"
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
        className="bullet2"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={42.67}
        isExpanded={0}
        left={0}
        right={0}
      >
        <Text
          className="b2"
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
        className="resizetheacti"
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

Example1Step2.defaultProps = {
  children: STRINGS["lbl_2"] || "",
  children1: STRINGS["msg_resize_the_acti"] || "",
};
