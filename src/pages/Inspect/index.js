import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";

const InspectPage = () => {
  return (
    <Column
      className="inspect4"
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
        className="group124"
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
          className="copy18"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={"center"}
          crossAxisAlignment={"start"}
          width={484}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Text
            className="inspect5"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["lbl_inspect2"] || ""}
          </Text>
          <Text
            className="thenewinspect"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["msg_the_new_inspect"] || ""}
          </Text>
          <Column
            className="image7"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"center"}
            width={304}
            isExpanded={0}
            left={0}
            right={36}
          >
            <Image
              src="img_image1.png"
              alt="image1"
              className="image142"
              layoutGravity={12}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={240}
              left={0}
              right={0}
            />
          </Column>
        </Column>
        <Column
          className="group123"
          layoutGravity={10}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"center"}
          width={1148}
          isExpanded={true}
          left={144}
          right={0}
        >
          <Row
            className="container2"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"center"}
            width={1148}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Button
              className="hug2"
              layoutGravity={10}
              gravity={9}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={148}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl_hug_contents"] || ""}
            </Button>
            <Column
              className="fillvertically2"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={166}
              isExpanded={0}
              left={32}
              right={0}
            >
              <Text
                className="fixedwidthfi2"
                layoutGravity={12}
                gravity={3}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={110}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_fixed_width_f"] || ""}
              </Text>
            </Column>
            <Column
              className="fillhorizontal2"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={334.5}
              isExpanded={true}
              left={33.25}
              right={0}
            >
              <Text
                className="fixedheightf2"
                layoutGravity={12}
                gravity={3}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={126}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_fixed_height"] || ""}
              </Text>
            </Column>
            <Column
              className="fillvertical3"
              layoutGravity={10}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={334.5}
              isExpanded={true}
              left={33.25}
              right={0}
            >
              <Text
                className="fillvertical4"
                layoutGravity={12}
                gravity={3}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={103}
                isExpanded={0}
                left={0}
                right={0}
              >
                {STRINGS["msg_fill_vertical"] || ""}
              </Text>
            </Column>
          </Row>
          <Column
            className="group122"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={959}
            isExpanded={0}
            left={92}
            right={97}
          >
            <Row
              className="group121"
              layoutGravity={33}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"start"}
              width={959}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Image
                src="img_arrow_16.svg"
                alt="Arrow"
                className="arrow20"
                layoutGravity={11}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={47.69}
                left={0}
                right={0}
              />
              <Image
                src="img_arrow_16.svg"
                alt="Arrow"
                className="arrow21"
                layoutGravity={11}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={47.69}
                left={212.31}
                right={0}
              />
              <Image
                src="img_arrow_17.svg"
                alt="Arrow"
                className="arrow22"
                layoutGravity={11}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={47.69}
                left={219.31006}
                right={0}
              />
              <Image
                src="img_arrow_17.svg"
                alt="Arrow"
                className="arrow23"
                layoutGravity={11}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={47.69}
                left={266.31006}
                right={0}
              />
            </Row>
            <Text
              className="tryresizingth"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={959}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["msg_try_resizing_th"] || ""}
            </Text>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default InspectPage;