import React from "react";
import { STRINGS } from "../../constants/string";
import { Row } from "../../components/Row";
import { Column } from "../../components/Column";
import { Text } from "../../components/Text";
import { TablesStep3 } from "../../components/TablesStep3";
import { Example1Step2 } from "../../components/Example1Step2";
import { Table } from "../../components/Table";
import { List } from "../../components/List";
import { Image } from "../../components/Image";

const TablesPage = () => {
  const data = [
    {
      photo: "img_photo_4.png",
      writerdangerous: STRINGS["lbl_1"],
      pedropawson: STRINGS["lbl_pedro_pawson"],
      cuddles: STRINGS["lbl_cuddles"],
      montserrat: STRINGS["lbl_montserrat"],
    },
    {
      photo: "img_photo_4.png",
      writerdangerous: STRINGS["lbl_1"],
      pedropawson: STRINGS["lbl_pedro_pawson"],
      cuddles: STRINGS["lbl_cuddles"],
      montserrat: STRINGS["lbl_montserrat"],
    },
    {
      photo: "img_photo_4.png",
      writerdangerous: STRINGS["lbl_1"],
      pedropawson: STRINGS["lbl_pedro_pawson"],
      cuddles: STRINGS["lbl_cuddles"],
      montserrat: STRINGS["lbl_montserrat"],
    },
    {
      photo: "img_photo_4.png",
      writerdangerous: STRINGS["lbl_1"],
      pedropawson: STRINGS["lbl_pedro_pawson"],
      cuddles: STRINGS["lbl_cuddles"],
      montserrat: STRINGS["lbl_montserrat"],
    },
    {
      photo: "img_photo_4.png",
      writerdangerous: STRINGS["lbl_1"],
      pedropawson: STRINGS["lbl_pedro_pawson"],
      cuddles: STRINGS["lbl_cuddles"],
      montserrat: STRINGS["lbl_montserrat"],
    },
  ];
  const columns = [
    {
      id: "Riseprivate",
      className: "class2",
      Header: () => {
        return (
          <>
            <Text
              className="class"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={0}
              isExpanded={0}
              left={0}
              right={0}
            >
              {STRINGS["lbl"] || ""}
            </Text>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <Row
              className="group106"
              layoutGravity={11}
              gravity={0}
              mainAxisAlignment={"start"}
              crossAxisAlignment={"center"}
              width={124}
              isExpanded={0}
              left={0}
              right={0}
            >
              <Image
                src={data.photo}
                alt="Photo"
                className="photo5"
                layoutGravity={11}
                gravity={0}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={64}
                left={0}
                right={0}
              />
              <Text
                className="b110"
                layoutGravity={10}
                gravity={1}
                mainAxisAlignment={""}
                crossAxisAlignment={""}
                width={28}
                isExpanded={true}
                left={32}
                right={0}
              >
                {data.writerdangerous}
              </Text>
            </Row>
          </>
        );
      },
    },
    {
      id: "Name",
      className: "name2",
      Header: () => {
        return (
          <>
            <Text
              className="name"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={0}
              isExpanded={true}
              left={32}
              right={0}
            >
              {STRINGS["lbl_name"] || ""}
            </Text>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <Text
              className="pedropawson2"
              layoutGravity={10}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={270.67}
              isExpanded={true}
              left={32}
              right={0}
            >
              {data.pedropawson}
            </Text>
          </>
        );
      },
    },
    {
      id: "Likes",
      className: "likes2",
      Header: () => {
        return (
          <>
            <Text
              className="likes"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={0}
              isExpanded={true}
              left={32}
              right={0}
            >
              {STRINGS["lbl_likes"] || ""}
            </Text>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <Text
              className="cuddles"
              layoutGravity={10}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={270.67}
              isExpanded={true}
              left={32}
              right={0}
            >
              {data.cuddles}
            </Text>
          </>
        );
      },
    },
    {
      id: "Location",
      className: "location2",
      Header: () => {
        return (
          <>
            <Text
              className="location"
              layoutGravity={11}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={0}
              isExpanded={true}
              left={31.989868}
              right={0}
            >
              {STRINGS["lbl_location"] || ""}
            </Text>
          </>
        );
      },
      Cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <Text
              className="montserrat"
              layoutGravity={10}
              gravity={1}
              mainAxisAlignment={""}
              crossAxisAlignment={""}
              width={270.67}
              isExpanded={true}
              left={31.989868}
              right={0}
            >
              {data.montserrat}
            </Text>
          </>
        );
      },
    },
  ];

  const Group105 = ({ children }) => {
    return (
      <>
        <List className="group105">{children}</List>
      </>
    );
  };

  const HeaderRow = ({ children }) => {
    return <>{children}</>;
  };

  return (
    <Row
      className="tables"
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
        className="copy15"
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
          className="nestedautolay3"
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
          className="andheresane"
          layoutGravity={12}
          gravity={1}
          mainAxisAlignment={""}
          crossAxisAlignment={""}
          width={340}
          isExpanded={0}
          left={0}
          right={0}
        >
          {STRINGS["msg_and_here_s_an_e"] || ""}
        </Text>
        <Column
          className="steps3"
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
            children1={STRINGS["msg_select_all_laye"] || ""}
          />
          <Example1Step2 children1={STRINGS["msg_now_press_cmd_c"] || ""} />
          <TablesStep3 />
        </Column>
      </Column>
      <Table
        RowWrapper={Group105}
        ReaderWrapper={HeaderRow}
        headerClass={"headerrow"}
        data={data}
        columns={columns}
      ></Table>
    </Row>
  );
};

export default TablesPage;
