import React from "react";
import { STRINGS } from "../../constants/string";
import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { Stack } from "../../components/Stack";
import { List } from "../../components/List";
import { Button } from "../../components/Button";

const MoreLayoutOptionsPage = () => {
  return (
    <Row
      className="morelayoutopt"
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
        className="copy21"
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
          className="morelayoutopt2"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={72}
          right={72}
        >
          {STRINGS["msg_more_layout_opt"] || ""}
        </Text>
        <Text
          className="objectscannow"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={72}
          right={72}
        >
          {STRINGS["msg_objects_can_now"] || ""}
        </Text>
        <Row
          className="step16"
          layoutGravity={33}
          gravity={0}
          mainAxisAlignment={"center"}
          crossAxisAlignment={"start"}
          width={484}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Column
            className="bullet16"
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
              className="b117"
              layoutGravity={33}
              gravity={9}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={42.67}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl_1"] || ""}
            </Text>
          </Column>
          <div
            className="group138"
            layoutGravity={11}
            gravity={0}
            width={276}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            isExpanded={true}
            type="HorizontalScroll"
          >
            <Column
              className="listitem4"
              layoutGravity={1}
              gravity={0}
              mainAxisAlignment={"end"}
              crossAxisAlignment={"start"}
              width={276}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Text
                className="eachcardhasa"
                layoutGravity={12}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={286.67}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_each_card_has_a"] || ""}
              </Text>
              <Image
                src="img_image21.png"
                alt="image21"
                className="image21"
                layoutGravity={33}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={233}
                left={0}
                right={43}
              />
              <Text
                className="inadditionto"
                layoutGravity={12}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={286.67}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_in_addition_to"] || ""}
              </Text>
              <Stack
                className="frame1976"
                layoutGravity={33}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={230}
                isExpanded={0}
                left={0}
                right={46}
              >
                <Image
                  src="img_image29.png"
                  alt="image29"
                  className="image29"
                  layoutGravity={1}
                  gravity={0}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={230}
                  left={0}
                  right={0}
                />
                <Image
                  src="img_systemarrow.svg"
                  alt="SystemArrow"
                  className="systemarrow"
                  layoutGravity={6}
                  gravity={0}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={32}
                  left={56}
                  right={142}
                />
              </Stack>
            </Column>
          </div>
        </Row>
      </Column>
      <List
        className="container3"
        orientation="horizontal"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={""}
        crossAxisAlignment={""}
        width={1022}
      >
        <Column
          className="card2"
          layoutGravity={4}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"center"}
          width={240}
          isExpanded={0}
          left={119}
          right={663}
        >
          <Column
            className="content2"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={192}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Text
              className="badge"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl_free"] || ""}
            </Text>
            <Column
              className="copy22"
              layoutGravity={33}
              gravity={0}
              mainAxisAlignment={"center"}
              crossAxisAlignment={"start"}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Text
                className="b0"
                layoutGravity={33}
                gravity={3}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={192}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["lbl_0"] || ""}
              </Text>
              <Text
                className="k1teamupto3"
                layoutGravity={33}
                gravity={3}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={192}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_1_team_up_to_3"] || ""}
              </Text>
            </Column>
          </Column>
          <Button
            className="group28"
            layoutGravity={12}
            gravity={9}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={91}
            isExpanded={0}
            left={50.5}
            right={50.5}
          >
            {STRINGS["lbl_sign_up"] || ""}
          </Button>
        </Column>
        <Column
          className="content3"
          layoutGravity={9}
          gravity={0}
          mainAxisAlignment={"center"}
          crossAxisAlignment={"center"}
          width={240}
          isExpanded={0}
          left={391}
          right={391}
        >
          <Text
            className="badge2"
            layoutGravity={12}
            gravity={3}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={192}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["lbl_pro"] || ""}
          </Text>
          <Column
            className="copy23"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"center"}
            crossAxisAlignment={"start"}
            width={192}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Text
              className="d999"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl_9_99"] || ""}
            </Text>
            <Text
              className="m15teams100pr"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["msg_15_teams_100_pr"] || ""}
            </Text>
          </Column>
          <Button
            className="group29"
            layoutGravity={12}
            gravity={9}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={91}
            isExpanded={0}
            left={50.5}
            right={50.5}
          >
            {STRINGS["lbl_sign_up"] || ""}
          </Button>
        </Column>
        <Column
          className="content4"
          layoutGravity={5}
          gravity={0}
          mainAxisAlignment={"center"}
          crossAxisAlignment={"center"}
          width={240}
          isExpanded={0}
          left={663}
          right={119}
        >
          <Text
            className="badge3"
            layoutGravity={12}
            gravity={3}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={192}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["lbl_starter"] || ""}
          </Text>
          <Column
            className="copy24"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"center"}
            crossAxisAlignment={"start"}
            width={192}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Text
              className="d399"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl_3_99"] || ""}
            </Text>
            <Text
              className="upto3teamsu"
              layoutGravity={33}
              gravity={9}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={192}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["msg_up_to_3_teams_u"] || ""}
            </Text>
          </Column>
          <Button
            className="group27"
            layoutGravity={12}
            gravity={9}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={91}
            isExpanded={0}
            left={50.5}
            right={50.5}
          >
            {STRINGS["lbl_sign_up"] || ""}
          </Button>
        </Column>
      </List>
    </Row>
  );
};

export default MoreLayoutOptionsPage;
