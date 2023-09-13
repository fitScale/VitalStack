"use client";

import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./FeaturedIconBox.module.css";
import { useState } from "react";
import DialogueBox, {
  DialogueBoxProps,
} from "../DialogueBox/DialogueBox.component";

export interface FeaturedIconBoxProps {
  heading: string;
  subtext: string;
  information: string;
  darkTheme: boolean;
  minWidth?: string;
  smallHeading?: boolean;
  bold?: boolean;
  className?: string;
}

const FeaturedIconBox = ({
  featuredIconBoxConfig,
}: {
  featuredIconBoxConfig: FeaturedIconBoxProps;
}) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const dark = featuredIconBoxConfig.darkTheme;
  const themeTextColor = featuredIconBoxConfig.darkTheme ? "white" : "black";

  const dialogueBoxConfig: DialogueBoxProps = {
    Heading: featuredIconBoxConfig.heading,
    text: featuredIconBoxConfig.information,
    icon: "InfoIcon",
    darkTheme: dark,
    closeFn: setInfoOpen,
    smallHeading: featuredIconBoxConfig.smallHeading,
  };

  return (
    <>
      <div
        className={`${style.container} ${featuredIconBoxConfig.className} ${
          dark ? style.dark : style.light
        }`}
        style={{
          ...BoxThemes("outer", dark),
          minWidth: featuredIconBoxConfig.minWidth,
          border: featuredIconBoxConfig.bold
            ? "2px solid black"
            : "1px solid white",
          marginTop: "10px",
        }}
        onClick={() => {
          setInfoOpen(true);
        }}
      >
        <div className={style.headingContainer}>
          <p
            style={{
              color: themeTextColor,
              fontWeight: "500",
              fontSize: "13px",
            }}
          >
            <span style={{ fontWeight: "700" }}>
              <span style={{ fontWeight: "900", textDecoration: "underline" }}>
                Click here
              </span>{" "}
              to see all my credentials
            </span>{" "}
            <br />
            <span style={{ color: "lightgrey" }}>
              (Trust me, it's an impressive list).
            </span>
          </p>
        </div>
        <p className={style.subtext}>{featuredIconBoxConfig.subtext}</p>
      </div>
      {infoOpen && <DialogueBox dialogueBoxConfig={dialogueBoxConfig} />}
    </>
  );
};

export default FeaturedIconBox;
