import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { List } from "../../components/List";
import { Image } from "../../components/Image";

const Resizing1Page = () => {
  return (
    <Column
      className="resizing6"
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
        className="group98"
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
          className="copy11"
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
            className="resizing7"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["lbl_resizing3"] || ""}
          </Text>
          <Text
            className="heresareale"
            layoutGravity={12}
            gravity={1}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={340}
            isExpanded={0}
            left={0}
            right={0}
          >
            {STRINGS["msg_here_s_a_real_e"] || ""}
          </Text>
        </Column>
        <Column
          className="group97"
          layoutGravity={10}
          gravity={0}
          mainAxisAlignment={"start"}
          crossAxisAlignment={"start"}
          width={1154}
          isExpanded={true}
          left={142}
          right={0}
        >
          <List
            className="stretchshrin"
            orientation="horizontal"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={""}
            crossAxisAlignment={""}
            width={1154}
          >
            <Column
              className="postcontainer"
              layoutGravity={4}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"start"}
              width={529}
              isExpanded={0}
              left={32}
              right={593}
            >
              <Row
                className="innercontainer2"
                layoutGravity={33}
                gravity={0}
                mainAxisAlignment={"center"}
                crossAxisAlignment={"start"}
                width={529}
                isExpanded={0}
                left={0}
                right={0}
              >
                <Image
                  src="img_avatar.svg"
                  alt="Avatar"
                  className="avatar"
                  layoutGravity={11}
                  gravity={0}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={80}
                  left={0}
                  right={0}
                />
                <Column
                  className="post"
                  layoutGravity={11}
                  gravity={0}
                  mainAxisAlignment={"start"}
                  crossAxisAlignment={"start"}
                  width={369}
                  isExpanded={true}
                  left={16}
                  right={0}
                >
                  <Text
                    className="figmadesign"
                    layoutGravity={33}
                    gravity={1}
                    mainAxisAlignment={""}
                    crossAxisAlignment={""}
                    width={172}
                    isExpanded={0}
                    left={0}
                    right={197}
                  >
                    {STRINGS["lbl_figmadesign"] || ""}
                  </Text>
                  <Text
                    className="adesignplatfo2"
                    layoutGravity={33}
                    gravity={1}
                    mainAxisAlignment={""}
                    crossAxisAlignment={""}
                    width={369}
                    isExpanded={0}
                    left={0}
                    right={0}
                  >
                    {STRINGS["msg_a_design_platfo"] || ""}
                  </Text>
                  <Row
                    className="icons"
                    layoutGravity={33}
                    gravity={0}
                    mainAxisAlignment={"start"}
                    crossAxisAlignment={"start"}
                    width={369}
                    isExpanded={0}
                    left={0}
                    right={0}
                  >
                    <Row
                      className="icon"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={68}
                      isExpanded={0}
                      left={0}
                      right={0}
                    >
                      <Image
                        src="img_iconcomment.svg"
                        alt="IconComment"
                        className="iconcomment3"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="b15"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={12}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_1"] || ""}
                      </Text>
                    </Row>
                    <Row
                      className="icon2"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={79}
                      isExpanded={0}
                      left={68}
                      right={0}
                    >
                      <Image
                        src="img_iconrepost.svg"
                        alt="IconRepost"
                        className="iconrepost2"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="c112"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={23}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_11"] || ""}
                      </Text>
                    </Row>
                    <Row
                      className="icon3"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={86}
                      isExpanded={true}
                      left={68}
                      right={0}
                    >
                      <Image
                        src="img_iconlike.svg"
                        alt="IconLike"
                        className="iconlike3"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="c672"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={30}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_67"] || ""}
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Column
              className="postcontainer2"
              layoutGravity={5}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"start"}
              width={529}
              isExpanded={0}
              left={593}
              right={32}
            >
              <Row
                className="innercontainer3"
                layoutGravity={33}
                gravity={0}
                mainAxisAlignment={"center"}
                crossAxisAlignment={"start"}
                width={529}
                isExpanded={0}
                left={0}
                right={0}
              >
                <Image
                  src="img_avatar_1.svg"
                  alt="Avatar"
                  className="avatar2"
                  layoutGravity={11}
                  gravity={0}
                  mainAxisAlignment={""}
                  crossAxisAlignment={""}
                  width={80}
                  left={0}
                  right={0}
                />
                <Column
                  className="post2"
                  layoutGravity={11}
                  gravity={0}
                  mainAxisAlignment={"start"}
                  crossAxisAlignment={"start"}
                  width={369}
                  isExpanded={true}
                  left={16}
                  right={0}
                >
                  <Text
                    className="figmadesign2"
                    layoutGravity={33}
                    gravity={1}
                    mainAxisAlignment={""}
                    crossAxisAlignment={""}
                    width={172}
                    isExpanded={0}
                    left={0}
                    right={197}
                  >
                    {STRINGS["lbl_figmadesign"] || ""}
                  </Text>
                  <Text
                    className="adesignplatfo3"
                    layoutGravity={33}
                    gravity={1}
                    mainAxisAlignment={""}
                    crossAxisAlignment={""}
                    width={369}
                    isExpanded={0}
                    left={0}
                    right={0}
                  >
                    {STRINGS["msg_a_design_platfo"] || ""}
                  </Text>
                  <Row
                    className="icons2"
                    layoutGravity={33}
                    gravity={0}
                    mainAxisAlignment={"start"}
                    crossAxisAlignment={"start"}
                    width={369}
                    isExpanded={0}
                    left={0}
                    right={0}
                  >
                    <Row
                      className="icon4"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={68}
                      isExpanded={0}
                      left={0}
                      right={0}
                    >
                      <Image
                        src="img_iconcomment.svg"
                        alt="IconComment"
                        className="iconcomment4"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="b16"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={12}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_1"] || ""}
                      </Text>
                    </Row>
                    <Row
                      className="icon5"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={79}
                      isExpanded={0}
                      left={68}
                      right={0}
                    >
                      <Image
                        src="img_iconrepost.svg"
                        alt="IconRepost"
                        className="iconrepost3"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="c113"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={23}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_11"] || ""}
                      </Text>
                    </Row>
                    <Row
                      className="icon6"
                      layoutGravity={11}
                      gravity={0}
                      mainAxisAlignment={"start"}
                      crossAxisAlignment={"center"}
                      width={86}
                      isExpanded={true}
                      left={68}
                      right={0}
                    >
                      <Image
                        src="img_iconlike.svg"
                        alt="IconLike"
                        className="iconlike4"
                        layoutGravity={11}
                        gravity={0}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={48}
                        left={0}
                        right={0}
                      />
                      <Text
                        className="c673"
                        layoutGravity={10}
                        gravity={1}
                        mainAxisAlignment={""}
                        crossAxisAlignment={""}
                        width={30}
                        isExpanded={true}
                        left={8}
                        right={0}
                      >
                        {STRINGS["lbl_67"] || ""}
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Row>
            </Column>
          </List>
          <Row
            className="instructions4"
            layoutGravity={33}
            gravity={0}
            mainAxisAlignment={"center"}
            crossAxisAlignment={"start"}
            width={1154}
            isExpanded={0}
            left={0}
            right={0}
          >
            <Image
              src="img_arrow_6.svg"
              alt="Arrow"
              className="arrow8"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={39.62}
              left={0}
              right={0}
            />
            <Text
              className="trystretching2"
              layoutGravity={11}
              gravity={3}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={442}
              isExpanded={true}
              left={32}
              right={0}
            >
              {STRINGS["msg_try_stretching"] || ""}
            </Text>
            <Image
              src="img_arrow_7.svg"
              alt="Arrow"
              className="arrow9"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={39.62}
              left={32}
              right={0}
            />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default Resizing1Page;