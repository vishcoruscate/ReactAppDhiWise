import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { CheckBox } from "../../components/CheckBox";
import { Image } from "../../components/Image";

const NestedAutoLayoutPage = () => {
  return (
    <Column
      className="nestedautolay"
      layoutGravity={0}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"start"}
      width={1920}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Row
        className="group101"
        layoutGravity={33}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"center"}
        width={1920}
        isExpanded={0}
        left={0}
        right={0}
      >
        <Column
          className="copy13"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={"center"}
          crossAxisAlignment={"center"}
          width={484}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Text
            className="nestedautolay2"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["msg_nested_auto_la"] || ""}
          </Text>
          <Text
            className="autolayoutfra3"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["msg_auto_layout_fra2"] || ""}
          </Text>
        </Column>
        <Column
          className="todolist"
          layoutGravity={10}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"center"}
          width={680}
          isExpanded={true}
          left={361}
          right={0}
        >
          <CheckBox
            className="group23"
            label={STRINGS["msg_finish_exportin"] || ""}
            name="Group23"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={672}
          ></CheckBox>
          <CheckBox
            className="group24"
            label={STRINGS["msg_talk_to_nadia_a"] || ""}
            name="Group24"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={672}
          ></CheckBox>
          <Row
            className="itemcomplete"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={680}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_checkboxchecke.svg"
              alt="CheckboxChecke"
              className="checkboxchecke"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={48}
              left={0}
              right={0}
            />
            <Text
              className="getsignoffon"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={620}
              isExpanded={true}
              left={12}
              right={0}
            >
              {STRINGS["msg_get_signoff_on"] || ""}
            </Text>
          </Row>
          <Row
            className="itemcomplete2"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={680}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_checkboxchecke.svg"
              alt="CheckboxChecke"
              className="checkboxchecke2"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={48}
              left={0}
              right={0}
            />
            <Text
              className="danceinthest"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={620}
              isExpanded={true}
              left={12}
              right={0}
            >
              {STRINGS["msg_dance_in_the_st"] || ""}
            </Text>
          </Row>
          <Column
            className="group1909"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"center"}
            width={527}
            isExpanded={0}
            left={76}
            right={77}
          >
            <Image
              src="img_arrow_9.svg"
              alt="Arrow"
              className="arrow12"
              layoutGravity={12}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={14.8}
              left={248}
              right={264.19995}
            />
            <Text
              className="eachnestedite"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={527}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["msg_each_nested_ite"] || ""}
            </Text>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default NestedAutoLayoutPage;