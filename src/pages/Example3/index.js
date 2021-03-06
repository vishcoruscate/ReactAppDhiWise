import React from "react";
import { STRINGS } from "../../constants/string";
import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { Example1Step3 } from "../../components/Example1Step3";
import { List } from "../../components/List";
import { Image } from "../../components/Image";

const Example3Page = () => {
  return (
    <Row
      className="example3"
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
        className="copy30"
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
          className="listview"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["lbl_list_view"] || ""}
        </Text>
        <Text
          className="inthisexample3"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_in_this_example3"] || ""}
        </Text>
        <Text
          className="thingstotry3"
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
          className="steps9"
          layoutGravity={12}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"start"}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Example1Step3
            children={STRINGS["lbl_1"] || ""}
            children1={STRINGS["msg_resize_the_pare"] || ""}
          />
          <List
            className="group167"
            orientation="vertical"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
          >
            <Row
              className="step210"
              layoutGravity={1}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"start"}
              width={340}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Column
                className="bullet28"
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
                  className="b211"
                  layoutGravity={33}
                  gravity={9}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={42.67}
                  isExpanded={0}
                  left={0}
                  right={0}
                >
                  {STRINGS["lbl_2"] || ""}
                </Text>
              </Column>
              <Text
                className="explorethepad"
                layoutGravity={11}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={276}
                isExpanded={true}
                left={21.330002}
                right={0}
              >
                {STRINGS["msg_explore_the_pad"] || ""}
              </Text>
            </Row>
            <Row
              className="step42"
              layoutGravity={6}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"start"}
              width={340}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Column
                className="bullet29"
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
                  className="b38"
                  layoutGravity={33}
                  gravity={9}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={42.67}
                  isExpanded={0}
                  left={0}
                  right={0}
                >
                  {STRINGS["lbl_3"] || ""}
                </Text>
              </Column>
              <Text
                className="addanotherlin"
                layoutGravity={11}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={276}
                isExpanded={true}
                left={21.330002}
                right={0}
              >
                {STRINGS["msg_add_another_lin"] || ""}
              </Text>
            </Row>
          </List>
          <Example1Step3
            children={STRINGS["lbl_4"] || ""}
            children1={STRINGS["msg_add_additional"] || ""}
          />
        </Column>
      </Column>
      <Column
        className="list2"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={829}
        isExpanded={true}
        left={304}
        right={0}
      >
        <Text
          className="favorites"
          layoutGravity={33}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={829}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["lbl_favorites"] || ""}
        </Text>
        <List
          className="group168"
          orientation="vertical"
          layoutGravity={33}
          gravity={0}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={829}
        >
          <Row
            className="row6"
            layoutGravity={1}
            gravity={0}
            mainAxisAlignment={"end"}
            crossAxisAlignment={"center"}
            width={829}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_frame1945.svg"
              alt="Frame1945"
              className="frame1945"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={58}
              left={0}
              right={0}
            />
            <Row
              className="frame1947"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={699}
              isExpanded={true}
              left={32}
              right={0}
            >
              <Text
                className="myalerts"
                layoutGravity={10}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={627}
                isExpanded={true}
                left={0}
                right={0}
              >
                {STRINGS["lbl_my_alerts"] || ""}
              </Text>
              <Image
                src="img_frame1948.svg"
                alt="Frame1948"
                className="frame1948"
                layoutGravity={10}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={24}
                left={10}
                right={0}
              />
            </Row>
          </Row>
          <Row
            className="row7"
            layoutGravity={4}
            gravity={0}
            mainAxisAlignment={"end"}
            crossAxisAlignment={"center"}
            width={829}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_frame1945_1.svg"
              alt="Frame1945"
              className="frame19452"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={58}
              left={0}
              right={0}
            />
            <Row
              className="frame19472"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={699}
              isExpanded={true}
              left={32}
              right={0}
            >
              <Text
                className="mylocations"
                layoutGravity={10}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={627}
                isExpanded={true}
                left={0}
                right={0}
              >
                {STRINGS["lbl_my_locations"] || ""}
              </Text>
              <Image
                src="img_frame1948.svg"
                alt="Frame1948"
                className="frame19482"
                layoutGravity={10}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={24}
                left={10}
                right={0}
              />
            </Row>
          </Row>
          <Row
            className="row8"
            layoutGravity={6}
            gravity={0}
            mainAxisAlignment={"end"}
            crossAxisAlignment={"center"}
            width={829}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_frame1945_2.svg"
              alt="Frame1945"
              className="frame19453"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={58}
              left={0}
              right={0}
            />
            <Row
              className="frame19473"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={699}
              isExpanded={true}
              left={32}
              right={0}
            >
              <Text
                className="myactivity"
                layoutGravity={10}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={627}
                isExpanded={true}
                left={0}
                right={0}
              >
                {STRINGS["lbl_my_activity"] || ""}
              </Text>
              <Image
                src="img_frame1948.svg"
                alt="Frame1948"
                className="frame19483"
                layoutGravity={10}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={24}
                left={10}
                right={0}
              />
            </Row>
          </Row>
        </List>
        <Text
          className="settings2"
          layoutGravity={33}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={829}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["lbl_settings"] || ""}
        </Text>
        <Row
          className="row9"
          layoutGravity={33}
          gravity={0}
          mainAxisAlignment={"end"}
          crossAxisAlignment={"center"}
          width={829}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Image
            src="img_frame1945_3.svg"
            alt="Frame1945"
            className="frame19454"
            layoutGravity={10}
            gravity={0}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={58}
            left={0}
            right={0}
          />
          <Row
            className="frame19474"
            layoutGravity={11}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"center"}
            width={699}
            isExpanded={true}
            left={32}
            right={0}
          >
            <Text
              className="userprofiles"
              layoutGravity={10}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={627}
              isExpanded={true}
              left={0}
              right={0}
            >
              {STRINGS["lbl_user_profiles"] || ""}
            </Text>
            <Image
              src="img_frame1948.svg"
              alt="Frame1948"
              className="frame19484"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={24}
              left={10}
              right={0}
            />
          </Row>
        </Row>
      </Column>
    </Row>
  );
};

export default Example3Page;
