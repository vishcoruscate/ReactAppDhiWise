import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const WhatsNewPage = () => {
  return (
    <Column
      className="whatsnew"
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
        className="copy20"
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
          className="whatsnewina"
          layoutGravity={33}
          gravity={4}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={917}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_what_s_new_in_a"] || ""}
        </Text>
        <Text
          className="youknowautol"
          layoutGravity={33}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={820.88}
          isExpanded={0}
          left={0}
          right={96.119995}
        >
          {STRINGS["msg_you_know_auto_l"] || ""}
        </Text>
        <Button
          className="nextlink2"
          layoutGravity={33}
          gravity={9}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={280}
          isExpanded={0}
          left={0}
          right={637}
        >
          {STRINGS["lbl_get_started"] || ""}
        </Button>
      </Column>
    </Column>
  );
};

export default WhatsNewPage;
