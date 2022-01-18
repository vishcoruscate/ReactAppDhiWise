import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import { Alignmentcopy } from "../../components/Alignmentcopy";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";

const AlignmentPage = () => {
  return (
    <Column
      className="alignment5"
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
        className="group118"
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
          className="instructions8"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"center"}
          width={484}
          isExpanded={0}
          left={0}
          right={0}
        >
          <Column
            className="group117"
            layoutGravity={12}
            gravity={0}
            mainAxisAlignment={"start"}
            crossAxisAlignment={"start"}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Stack
              className="group116"
              layoutGravity={33}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={340}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Alignmentcopy />
              <Image
                src="img_arrow_14.svg"
                alt="Arrow"
                className="arrow18"
                layoutGravity={7}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={194.52}
                left={132.56}
                right={12.919983}
              />
            </Stack>
            <Text
              className="usetheinterac"
              layoutGravity={33}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={314}
              isExpanded={0}
              left={2}
              right={24}
            >
              {STRINGS["msg_use_the_interac"] || ""}
            </Text>
          </Column>
        </Column>
        <Column
          className="instructions9"
          layoutGravity={10}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"center"}
          width={629}
          isExpanded={true}
          left={384}
          right={0}
        >
          <Image
            src="img_actionbaradj.svg"
            alt="ActionBarAdj"
            className="actionbaradj"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={629}
            left={0}
            right={0}
          />
          <Image
            src="img_arrow_15.svg"
            alt="Arrow"
            className="arrow19"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={64.66}
            left={222.81006}
            right={341.5299}
          />
          <Text
            className="selectmeanda2"
            layoutGravity={33}
            gravity={3}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={398}
            isExpanded={0}
            left={70}
            right={161}
          >
            {STRINGS["msg_select_me_and_a2"] || ""}
          </Text>
        </Column>
      </Row>
    </Column>
  );
};

export default AlignmentPage;
