import React from "react";
import { STRINGS } from "../../constants/string";
import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const HowtouseAutoLayoutPage = () => {
  return (
    <Row
      className="howtouseauto"
      layoutGravity={0}
      gravity={0}
      mainAxisAlignment={"end"}
      crossAxisAlignment={"center"}
      width={1920}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Column
        className="copy4"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={823}
        isExpanded={true}
        left={0}
        right={0}
      >
        <Text
          className="howdoiuseau"
          layoutGravity={33}
          gravity={4}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={823}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_how_do_i_use_a"] || ""}
        </Text>
        <Text
          className="prettynewtoa"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={820.88}
          isExpanded={0}
          left={0}
          right={2.119995}
        >
          {STRINGS["msg_pretty_new_to_a"] || ""}
        </Text>
        <Button
          className="nextlink"
          layoutGravity={33}
          gravity={9}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={280}
          isExpanded={0}
          left={0}
          right={543}
        >
          {STRINGS["lbl_get_started"] || ""}
        </Button>
      </Column>
      <Column
        className="toc"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"center"}
        crossAxisAlignment={"center"}
        width={694}
        isExpanded={0}
        left={136}
        right={0}
      >
        <Text
          className="contents"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={582}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["lbl_contents"] || ""}
        </Text>
        <Column
          className="list"
          layoutGravity={12}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"start"}
          width={582}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Text
            className="whatisauto"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="whatisauto2">-> </span>
            <span className="whatisauto3">What is Auto Layout?</span>
          </Text>
          <Text
            className="autolayout"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="autolayout2">-> </span>
            <span className="autolayout3">Auto Layout Frames </span>
          </Text>
          <Text
            className="automagical"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="automagical2">-> </span>
            <span className="automagical3">Automagical</span>
          </Text>
          <Text
            className="padding"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="padding2">-> </span>
            <span className="padding3">Padding</span>
          </Text>
          <Text
            className="resizing"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="resizing2">-> </span>
            <span className="resizing3">Resizing</span>
          </Text>
          <Text
            className="nestedauto"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="nestedauto2">-> </span>
            <span className="nestedauto3">Nested Auto Layout</span>
          </Text>
          <Text
            className="responsivec"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="responsivec2">-> </span>
            <span className="responsivec3">Responsive Content</span>
          </Text>
          <Text
            className="distribution"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="distribution2">-> </span>
            <span className="distribution3">Distribution</span>
          </Text>
          <Text
            className="alignment2"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="alignment3">-> </span>
            <span className="alignment4">Alignment</span>
          </Text>
          <Text
            className="inspect"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="inspect2">-> </span>
            <span className="inspect3">Inspect</span>
          </Text>
          <Text
            className="puttingita"
            layoutGravity={33}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={582}
            isExpanded={0}
            left={0}
            right={0}
          >
            <span className="puttingita2">-> </span>
            <span className="puttingita3">Putting it all together</span>
          </Text>
        </Column>
      </Column>
    </Row>
  );
};

export default HowtouseAutoLayoutPage;
