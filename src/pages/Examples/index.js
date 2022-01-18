import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const ExamplesPage = () => {
  return (
    <Column
      className="examples"
      layoutGravity={0}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"start"}
      width={1920}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Column
        className="copy27"
        layoutGravity={33}
        gravity={0}
        mainAxisAlignment={"center"}
        crossAxisAlignment={"start"}
        width={1920}
        isExpanded={0}
        left={0}
        right={0}
      >
        <Text
          className="examples2"
          layoutGravity={33}
          gravity={4}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={615}
          isExpanded={0}
          left={0}
          right={205.88}
        >
          {STRINGS["lbl_examples"] || ""}
        </Text>
        <Text
          className="wevecreatede"
          layoutGravity={33}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={820.88}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_we_ve_created_e"] || ""}
        </Text>
        <Button
          className="nextlink3"
          layoutGravity={33}
          gravity={9}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={320}
          isExpanded={0}
          left={0}
          right={500.88}
        >
          {STRINGS["lbl_see_examples"] || ""}
        </Button>
      </Column>
    </Column>
  );
};

export default ExamplesPage;
