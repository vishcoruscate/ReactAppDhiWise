import React from "react";
import { STRINGS } from "../../constants/string";
import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { TablesStep3 } from "../../components/TablesStep3";
import { Example1Step2 } from "../../components/Example1Step2";
import { Example1Step3 } from "../../components/Example1Step3";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Radio } from "../../components/Radio";

const Example1Page = () => {
  return (
    <Row
      className="example1"
      layoutGravity={0}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"center"}
      width={1920}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Column
        className="copy28"
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
          className="stackedbargra"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_stacked_bar_gra"] || ""}
        </Text>
        <Text
          className="inthisexample"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_in_this_example"] || ""}
        </Text>
        <Text
          className="thingstotry"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["lbl_things_to_try"] || ""}
        </Text>
        <Column
          className="steps7"
          layoutGravity={12}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"start"}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          <TablesStep3
            children={STRINGS["lbl_1"] || ""}
            children1={STRINGS["msg_select_one_of_t"] || ""}
          />
          <Example1Step2 />
          <Example1Step3 />
        </Column>
      </Column>
      <Column
        className="group156"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"center"}
        crossAxisAlignment={"start"}
        width={637}
        isExpanded={true}
        left={400}
        right={0}
      >
        <Row
          className="group161"
          layoutGravity={33}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"start"}
          width={637}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Column
            className="frame1927"
            layoutGravity={10}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"center"}
            width={211.65}
            isExpanded={true}
            left={0}
            right={0}
          >
            <Text
              className="f25046"
              layoutGravity={12}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={208.93}
              isExpanded={0}
              left={0}
              right={2.7199707}
            >
              {STRINGS["lbl_25_046"] || ""}
            </Text>
            <Stack
              className="group157"
              layoutGravity={12}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={211.64996}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Image
                src="img_iconup.svg"
                alt="IconUp"
                className="iconup"
                layoutGravity={1}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={32.67}
                left={0}
                right={178.97998}
              />
              <Text
                className="l45upfromlas"
                layoutGravity={5}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={178.99}
                isExpanded={0}
                left={32.659973}
                right={0}
              >
                <span className="l45upfromlas2">45% up</span>
                <span className="l45upfromlas3"> from last week</span>
              </Text>
            </Stack>
          </Column>
          <Column
            className="group160"
            layoutGravity={11}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={106.849976}
            isExpanded={0}
            left={43.56}
            right={0}
          >
            <Radio
              className="group33"
              label={STRINGS["lbl_walking"] || ""}
              name="Group33"
              layoutGravity={33}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={87.79}
            ></Radio>
            <Radio
              className="group34"
              label={STRINGS["lbl_running"] || ""}
              name="Group34"
              layoutGravity={33}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={89.83}
            ></Radio>
            <Radio
              className="group35"
              label={STRINGS["lbl_biking"] || ""}
              name="Group35"
              layoutGravity={33}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={74.18}
            ></Radio>
            <Radio
              className="group36"
              label={STRINGS["lbl_swimming"] || ""}
              name="Group36"
              layoutGravity={12}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={106.85}
            ></Radio>
          </Column>
        </Row>
        <Row
          className="frame1926"
          layoutGravity={33}
          gravity={0}
          mainAxisAlignment={"spaceEvenly"}
          crossAxisAlignment={"end"}
          width={637}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Text
            className="m"
            layoutGravity={11}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["lbl_m"] || ""}
          </Text>
          <Text
            className="t"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.820007}
            right={0}
          >
            {STRINGS["lbl_t"] || ""}
          </Text>
          <Text
            className="w"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.829956}
            right={0}
          >
            {STRINGS["lbl_w"] || ""}
          </Text>
          <Text
            className="t2"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.829956}
            right={0}
          >
            {STRINGS["lbl_t"] || ""}
          </Text>
          <Text
            className="f"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.829956}
            right={0}
          >
            {STRINGS["lbl_f"] || ""}
          </Text>
          <Text
            className="s"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.829956}
            right={0}
          >
            {STRINGS["lbl_s"] || ""}
          </Text>
          <Text
            className="s2"
            layoutGravity={22}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={43.56}
            isExpanded={0}
            left={40.829956}
            right={0}
          >
            {STRINGS["lbl_s"] || ""}
          </Text>
        </Row>
      </Column>
    </Row>
  );
};

export default Example1Page;
