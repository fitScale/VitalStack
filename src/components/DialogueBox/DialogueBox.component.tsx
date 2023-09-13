import BoxThemes from "@/helpers/functions/BoxThemes";
import Svg, { SvgNames } from "../../../public/svgs/svgComponent/svg.component";
import style from "./DialogueBox.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import wait from "@/helpers/functions/wait";

export interface DialogueBoxProps {
  Heading: string;
  icon: SvgNames;
  text: string;
  darkTheme: boolean;
  closeFn: Dispatch<SetStateAction<boolean>>;
  smallHeading?: boolean;
}

const DialogueBox = ({
  dialogueBoxConfig,
}: {
  dialogueBoxConfig: DialogueBoxProps;
}) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);

  const unmount = () => {
    setFade(false);
    wait(0.2).then(() => {
      dialogueBoxConfig.closeFn(false);
    });
  };
  const dark = dialogueBoxConfig.darkTheme;
  const themeTextColor = dark ? "white" : "black";

  return (
    <div className={`${style.container} ${fade ? style.bgshow : undefined}`}>
      <div
        className={`${style.dialogueBox} ${fade ? style.scaleUp : undefined}`}
        style={BoxThemes("outer", dark)}
      >
        <div className={style.heading}>
          <h4
            style={{
              fontSize: dialogueBoxConfig.smallHeading ? "15px" : "20px",
              color: themeTextColor,
              textShadow: dark ? "var(--textOutline)" : "none",
            }}
          ></h4>
        </div>
        <p style={{ fontSize: "12px" }}>
          ✅ Published Author
          <br />
          <br />
          ✅ Certified Strength and Conditioning Specialist (CSCS), NSCA
          <br />
          <br />
          ✅ Certified Special Strengths Coach, Westside Barbell
          <br />
          <br />
          ✅ BioForce Certified Conditioning Coach (Joel Jamieson)
          <br />
          <br />
          ✅ CrossFit Certifications – Powerlifting, Mobility, Gymnastics,
          Coaches Prep, CrossFit L2, Endurance, Olympic Lifting
          <br />
          <br />
          ✅ 2500+ hours of Coaching Group CrossFit Classes
          <br />
          <br />
          ✅ Columnist, EliteFTS.com
          <br />
          <br />
          ✅ Contributor, T-Nation.com
          <br />
          <br />
          ✅ Contributor, DrJohnRusin.com
          <br />
          <br />
          ✅ Contributor, Thibarmy (Christian Thibadeau)
          <br />
          <br />
          ✅ Combat Veteran Operation Enduring Freedom 2010-2011
          <br />
          <br />
          ✅ Former Owner & Founder of CrossFit 781
          <br />
          <br />
          ✅ Certified Pain Free Performance Specialist (PPSC)
          <br />
          <br />
          ✅ Presenter, National Strength & Conditioning Association (NSCA)
          <br />
          <br />✅ Former Owner & Founder of Box Programming
        </p>
        <div
          className={style.close}
          style={BoxThemes("inner", dark)}
          onClick={() => {
            unmount();
          }}
        >
          <p>Close</p>
          <Svg icon="XIcon" color="white" />
        </div>
      </div>
    </div>
  );
};

export default DialogueBox;
