import { Column } from "../Column";
import { Text } from "../Text";
import { Image } from "../Image";

import { STRINGS } from "../../constants/string";

export const Alignmentcopy = (props) => {
  return (
    <Column
      className="copy"
      layoutGravity={4}
      gravity={0}
      mainAxisAlignment={"start"}
      crossAxisAlignment={"start"}
      width={340}
      isExpanded={0}
      left={0}
      right={0}
    >
      <Text
        className="alignment"
        layoutGravity={33}
        gravity={1}
        mainAxisAlignment={""}
        crossAxisAlignment={""}
        width={340}
        isExpanded={0}
        left={0}
        right={0}
      >
        {props?.children}
      </Text>
      <Text
        className="whiledistribut"
        layoutGravity={33}
        gravity={1}
        mainAxisAlignment={""}
        crossAxisAlignment={""}
        width={340}
        isExpanded={0}
        left={0}
        right={0}
      >
        {props?.children1}
      </Text>
      <Column
        className="image"
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
          className="image1"
          layoutGravity={12}
          gravity={0}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={240}
          left={0}
          right={0}
          src={props?.src}
          alt={props?.alt}
        />
      </Column>
    </Column>
  );
};

Alignmentcopy.defaultProps = {
  children: STRINGS["lbl_alignment2"] || "",
  children1: STRINGS["msg_while_distribut"] || "",
  src: "img_image1.png",
  alt: "image1",
};
