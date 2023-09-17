"use client";

import Image from "next/image";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import style from "./Footer.module.css";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { getProductSingleQuery } from "@/shopify/graphql/queries/product.queries";

const Footer = () => {
  const imageContainerConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1688766061/VZN/Logos/VZN_Logo_white_Small-min_dtefej.png",
    alt: "VZN Nutrition Logo",
    aspectRatio: "352/157",
    height: "25px",
  };

  const { data } = useQuery(getProductSingleQuery, {
    variables: { productId: "" },
  });

  return (
    <footer className={style.footer}>
      <div className={style.mobileFooter}>
        <div className={style.aboutSection}>
          <p style={{ color: "white" }}>Disclaimer:</p>
          <p style={{ color: "white" }}>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
      </div>
      <div className={style.desktopFooter}>
        <div className={style.aboutSection}>
          <p style={{ color: "white" }}>Disclaimer:</p>
          <p style={{ color: "white" }}>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
      </div>
      <p className={style.fitScale}>
        Website Powered By{" "}
        <span className={`underline ${style.brandName}`}>FitScale</span>
      </p>
    </footer>
  );
};

export default Footer;
