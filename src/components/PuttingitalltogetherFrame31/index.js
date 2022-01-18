import { Row } from "../Row";
import { Image } from "../Image";
import { Text } from "../Text";

import { STRINGS } from "../../constants/string";

export const PuttingitalltogetherFrame31 = (props) => {
  return (
    <Row
      className="frame31"
      layoutGravity={33}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"center"}
      width={279}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Row
        className="frame32"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={40}
        isExpanded={0}
        left={0}
        right={0}
      >
        <Image
          className="iconcomment"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={24}
          left={0}
          right={0}
          src={props?.src}
          alt={props?.alt}
        />
        <Text
          className="b1"
          layoutGravity={11}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={8}
          isExpanded={true}
          left={8}
          right={0}
        >
          {props?.children}
        </Text>
      </Row>
      <Row
        className="frame33"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={48}
        isExpanded={0}
        left={38.329956}
        right={0}
      >
        <Image
          className="iconrepost"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={24}
          left={0}
          right={0}
          src={props?.src1}
          alt={props?.alt1}
        />
        <Text
          className="c11"
          layoutGravity={11}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={16}
          isExpanded={true}
          left={8}
          right={0}
        >
          {props?.children1}
        </Text>
      </Row>
      <Row
        className="frame34"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={"start"}
        crossAxisAlignment={"start"}
        width={52}
        isExpanded={true}
        left={38.340088}
        right={0}
      >
        <Image
          className="iconlike"
          layoutGravity={11}
          gravity={0}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={24}
          left={0}
          right={0}
          src={props?.src2}
          alt={props?.alt2}
        />
        <Text
          className="c67"
          layoutGravity={11}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={20}
          isExpanded={true}
          left={8}
          right={0}
        >
          {props?.children2}
        </Text>
      </Row>
      <Image
        className="iconshare"
        layoutGravity={10}
        gravity={0}
        mainAxisAlignment={""}
        crossAxisAlignment={""}
        width={24}
        left={38.329956}
        right={0}
        src={props?.src3}
        alt={props?.alt3}
      />
    </Row>
  );
};

PuttingitalltogetherFrame31.defaultProps = {
  src: "img_iconcomment_2.svg",
  alt: "IconComment",
  children: STRINGS["lbl_1"] || "",
  src1: "img_iconrepost_1.svg",
  alt1: "IconRepost",
  children1: STRINGS["lbl_11"] || "",
  src2: "img_iconlike_2.svg",
  alt2: "IconLike",
  children2: STRINGS["lbl_67"] || "",
  src3: "img_iconshare_2.svg",
  alt3: "IconShare",
};
