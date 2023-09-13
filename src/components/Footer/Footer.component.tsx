"use client";

import Image from "next/image";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import ImageContainer, {
  ImageContainerProps,
} from "../ImageContainer/ImageContainer.componenet";
import style from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  const imageContainerConfig: ImageContainerProps = {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1688766061/VZN/Logos/VZN_Logo_white_Small-min_dtefej.png",
    alt: "VZN Nutrition Logo",
    aspectRatio: "352/157",
    height: "25px",
  };

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
        <div className={style.footerMenu}>
          <p>Footer Menu</p>
          <ul>
            <li>
              <Link href="/contact-page">Contact Us</Link>
            </li>
            <li>
              <Link href="/policies/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/policies/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/policies/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <div className={style.aboutSection}>
          <p>About VZN</p>
          <p>
            Find your VZN, obsess over it, and never stop chasing it—immerse
            yourself in the pursuit, the passion, and the unwavering commitment
            to your vision. SEE THE VZN.
          </p>
        </div>
        <div className={style.dislaimer}>
          <p>Disclaimer</p>
          <p>
            † These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure or prevent any disease.
          </p>
        </div>
        <div className={style.emailAdd}>
          <p>Subscribe For VZN Updates!</p>
          <div>
            <p>Email Adress</p>
            <Svg icon="ArrowIcon" color="var(--bg600)" />
          </div>
        </div>
        <div className={style.imageContainer}>
          <div className={style.smallImage}>
            <Image
              fill
              alt={imageContainerConfig.alt}
              src={imageContainerConfig.src}
            />
          </div>
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
