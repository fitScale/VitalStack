"use client";

import ImageContainer, {
  ImageContainerProps,
} from "@/components/ImageContainer/ImageContainer.componenet";
import style from "./page.module.css";
import Svg from "../../public/svgs/svgComponent/svg.component";

import FeaturedIconBox, {
  FeaturedIconBoxProps,
} from "@/components/FeaturedIconBox/FeaturedIconBox.component";
import Box from "@/components/Box/Box.component";
import Footer from "@/components/Footer/Footer.component";
import MuxPlayer from "@mux/mux-player-react";
import { BREAK } from "graphql";
import Countdown from "react-countdown";
import { CartClientServices } from "@/shopify/services/client/cart.services.client";
import {
  addCartItemMutation,
  applyDiscountMutation,
  createCartMutation,
} from "@/shopify/graphql/mutations/cart.mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import va from "@vercel/analytics";

import { useState } from "react";
import CssLoader from "@/components/CssLoader/CssLoader.component";

const JBCImage: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1687827725/Purus%20Labs/Logos/Red_Purus_xgruxk.png",
  alt: "",
  aspectRatio: "1355/183",
};

const JasonBoard: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694544619/Purus%20Labs/Product%20Images/Testfafd_i5t676.jpg",
  alt: "",
  aspectRatio: "1920/1080",
  className: style.heroimage,
};

const background: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694635099/ProSupps/banners/Faber5_opkkcb.jpg",
  alt: "",
  aspectRatio: "862/1292",
};

const FG: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694467534/JBC/Misc/JBFront-min_arxiqx.png",
  alt: "",
  aspectRatio: "1081/1350",
};

const banbner: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694546177/Purus%20Labs/Logos/FinalShot_vzrllm.png",
  alt: "",
  aspectRatio: "1297/846",
};

const banbner2: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694531392/JBC/Logo/Thebest_xiypo9.jpg",
  alt: "",
  aspectRatio: "1920/1080",
};

const banbner4: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694532024/JBC/Logo/Thelast_b71lsz.jpg",
  alt: "",
  aspectRatio: "1920/1080",
};

const banbner3: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694531607/JBC/Logo/Banner3_kpvnen.jpg",
  alt: "",
  aspectRatio: "1920/1080",
};

const pack: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694636727/Purus%20Labs/Product%20Images/D-pol_efgsa7.jpg",
  alt: "",
  aspectRatio: "1080/1080",
};

const logo1: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694526682/JBC/Logo/Althelte_y1sjwa.png",
  alt: "",
  aspectRatio: "700/138",
};

const logo2: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694526682/JBC/Logo/Whiteone_gwubuu.png",
  alt: "",
  aspectRatio: "304/100",
};

const logo3: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694526682/JBC/Logo/DrLogo_xs43bz.png",
  alt: "",
  aspectRatio: "223/38",
};

const recycle: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694644670/Purus%20Labs/Product%20Images/Recycle-min_gkf7ur.png",
  alt: "",
  aspectRatio: "1/1",
};

const dpol: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694644670/Purus%20Labs/Product%20Images/D-pol-min_di21co.png",
  alt: "",
  aspectRatio: "1/1",
};

const logo4: ImageContainerProps = {
  src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694526682/JBC/Logo/Army_szundu.png",
  alt: "",
  aspectRatio: "2032/336",
};

const iconBox: FeaturedIconBoxProps = {
  heading:
    "Click here to see all my credentials (Trust me, it's an impressive list).",
  subtext: "",
  information: "",
  darkTheme: true,
  minWidth: "100%",
};

const tests: ImageContainerProps[] = [
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694473897/JBC/Misc/Test3_uwl2lc.jpg",
    alt: "",
    aspectRatio: "1080/1250",
  },
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694473930/JBC/Misc/Test2_hgukgg.png",
    alt: "",
    aspectRatio: "1080/1250",
  },
  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694473929/JBC/Misc/Test1_vkbnfu.png",
    alt: "",
    aspectRatio: "1080/1250",
  },

  {
    src: "https://res.cloudinary.com/dod9nbjke/image/upload/v1694473891/JBC/Misc/Test4_vc0eom.jpg",
    alt: "",
    aspectRatio: "1080/1250",
  },
];

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({
  hours,
  minutes,
  seconds,
  completed,
}: {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
};

const generateImages = (images: ImageContainerProps[]) => {
  const gen = [];
  for (let i = 0; i < images.length; i++) {
    gen.push(
      <div className={style.image}>
        <ImageContainer imageContainerConfig={images[i]} />
      </div>
    );
  }
  return gen;
};

const generateBoxes = (num: number) => {
  const gen = [];
  for (let i = 0; i < num; i++) {
    gen.push(<Box config={{ red: i < num - 14, blink: num - 14 === i }} />);
  }
  return gen;
};

const Page = () => {
  const [moving, SetMoving] = useState(true);

  const [createCart] = useMutation(createCartMutation);
  const [addCart] = useMutation(addCartItemMutation);
  const [discountCode] = useMutation(applyDiscountMutation);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
    SetMoving(false);
    va.track("Checkout");

    const cart = await CartClientServices.createCart(createCart, {
      merchandiseId: "gid://shopify/ProductVariant/42062880964844",
      quantity: 1,
    });

    console.log(cart);

    const finalCart = await CartClientServices.addCartItem(
      addCart,
      createCart,
      {
        cartId: cart.cart.id,
        merchandiseId: "gid://shopify/ProductVariant/57765711627",
        quantity: 1,
      }
    );

    const discount = await CartClientServices.applyDiscount(discountCode, {
      cartId: finalCart.cart.id!,
      codes: ["VITALSTACK"],
    });

    router.push(finalCart.cart.checkoutUrl!);
  };

  const scrollToElement = (elementId: any) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={style.header}>
        <ImageContainer imageContainerConfig={JBCImage} />
      </div>
      <main className={style.main}>
        {loading && (
          <div className={style.spinner}>
            <CssLoader />
          </div>
        )}
        <div className={style.hero}>
          <p>DISCOVER EXACTLY HOW...</p>
          <h1>
            MEN JUST LIKE YOU ARE NATURALLY BOOSTING THEIR T-LEVELS{" "}
            <span
              style={{
                color: "var(--primaryBright)",
                textDecoration: "underline",
              }}
            >
              IN JUST 12 DAYS…*
            </span>
          </h1>
        </div>
        <ImageContainer imageContainerConfig={JasonBoard} />
        <div className={style.science}>
          <div>
            <Svg icon="verifiedIcon" color="black" />
            <p>*Science Backed By University of Memphis</p>
          </div>
          <p>
            <span style={{ fontWeight: "900", color: "black" }}>
              Reference:
            </span>{" "}
            Bloomer, Richard J, et al. Cardiorespiratory/Metabolic Laboratory,
            Department of Health and Sport Sciences, Memphis, TN, 2015, pp.
            1–17, Influence of a D-Aspartic Acid/Sodium Nitrate Dietary
            Supplement on Physiological Parameters in Middle-Aged Men: A Pilot
            Study.
          </p>
        </div>
        <div style={{ margin: "0px 24px" }}>
          <div
            className={style.cta}
            onClick={() => {
              scrollToElement("test");
            }}
          >
            CLICK TO HERE LEARN “THE SECRET”{" "}
          </div>
        </div>
        <div className={style.hook} id="test">
          <p>
            Read Below to Discover{" "}
            <span className="highlightCopy">The 'Secret Weapons'</span> For
            Boosting T-Levels in Just 12 Days!
          </p>
          <div>
            <Svg icon="ArrowSkinnyIcon" color="black" />
            <Svg icon="ArrowSkinnyIcon" color="black" />
            <Svg icon="ArrowSkinnyIcon" color="black" />
          </div>
        </div>
        <div className={style.imageTextBox}>
          <h2>REMEMBER WHEN YOU WERE UNSTOPPABLE?</h2>
          <p>
            When the gym was your playground and weights felt like feathers.
            <br />
            <br />
            Your evenings? Dominating driveway basketball with your kids and
            having enough gas in the tank to wow your partner later that night.
          </p>
          <div style={{ width: "100%", aspectRatio: "1297/846" }}></div>
          <ImageContainer imageContainerConfig={banbner} />
        </div>
        <div className={style.infoBlock}>
          <h2>LIKE A CRUEL PLOT TWIST, AGE SNUCK UP ON YOU.</h2>
          <p>
            The weights started feeling like boulders.
            <br />
            <br />
            The gains came at a snail's pace.
            <br />
            <br />
            And let's be honest, your energy level for each workout feels like
            it's running on fumes.
          </p>
          <div>
            <p>
              ❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Lack of Muscle Growth
              </span>
              <br />
              <br />
              Struggles at the gym with no visible gains, impacting self-esteem
              and body image.
              <br />
              <br />❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Depressive Mood
              </span>
              <br />
              <br />
              A persistent low mood that strains relationships and affects
              overall quality of life.
              <br />
              <br />❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Reduced Libido
              </span>
              <br />
              <br />
              A significant decrease in sexual desire, creating emotional
              distance in intimate relationships.
              <br />
              <br />❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Limited Family Engagement
              </span>
              <br />
              <br />
              Lack of energy to spend quality time with your family, resulting
              in missed memories and experiences.
              <br />
              <br />❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Low Motivation
              </span>
              <br />
              <br />A sudden loss of drive and ambition, making even small tasks
              feel insurmountable.
              <br />
              <br />❌{" "}
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                Difficulty Losing Weight
              </span>
              <br />
              <br />
              An inability to shed excess pounds despite best efforts, affecting
              health and well-being.
            </p>
          </div>
        </div>
        <div className={style.intro}>
          <div>
            <h2>
              A FEW YEARS AGO, WE NOTICED THIS CRISIS AND SPRANG INTO ACTION.
            </h2>
            <p>
              {" "}
              We crafted solutions that naturally boost testosterone, helping
              men worldwide reclaim their mojo!{" "}
            </p>
            <p>
              Achieving better energy,{" "}
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                better sleep, better gym sessions, and a rekindled libido!
              </span>
            </p>
            <div className={style.hook}>
              <p>
                Play the Video Below to See{" "}
                <span className="highlightCopy">The 'Secret Weapon'</span> For
                Boosting T-levels in Just 12 Days!
              </p>
              <div>
                <Svg icon="ArrowSkinnyIcon" color="black" />
                <Svg icon="ArrowSkinnyIcon" color="black" />
                <Svg icon="ArrowSkinnyIcon" color="black" />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}></div>
            <MuxPlayer
              streamType="on-demand"
              playbackId="02cOK01G9ANjbppkQJ94odVzfF6FvDvO9Qe5KbDCCVRK00"
              metadataVideoTitle="Placeholder (optional)"
              metadataViewerUserId="Placeholder (optional)"
              primaryColor="#FFFFFF"
              secondaryColor="#000000"
              poster="https://image.mux.com/02cOK01G9ANjbppkQJ94odVzfF6FvDvO9Qe5KbDCCVRK00/animated.gif"
              style={{ border: "2px solid black" }}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              className={style.cta}
              onClick={() => {
                checkout();
              }}
            >
              YES, TRANSFORM MY FITNESS NOW!
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "25px", height: "2px", backgroundColor: "black" }}
        ></div>
        <div className={style.text2}>
          <h2>
            {"since launching We have transformed the lives of thousands! ".toUpperCase()}
          </h2>
          <p style={{ fontWeight: "700" }}>
            From everyday guys, to the ranks to elite athletes, Purus Labs has
            helped men from all walks of life{" "}
            <span className="highlightCopy">take back control!</span>
          </p>
        </div>
        <div className={style.proxyContainer}>
          <div className={style.container}>
            <ImageContainer imageContainerConfig={background} />
            <div>
              <div className={style.verified}>
                <Svg icon="verifiedIcon" color="white" />
                <h2 style={{ fontSize: "16px" }}>TRUSTED BY URIJAH FABER</h2>
              </div>
              <p style={{ fontSize: "16px", fontStyle: "italic" }}>
                Professional UFC® Fighter
              </p>
              <div style={{ marginTop: "20px" }}>
                <div
                  className={style.cta}
                  style={{ border: "1px solid white" }}
                  onClick={() => {
                    checkout();
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "12.5px",
                      fontWeight: "800",
                    }}
                  >
                    YES, TRANSFORM MY FITNESS NOW!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.banner}>
          <p>
            We want to make it as easy as possible to completely change your
            life...
          </p>
        </div>
        <div className={style.offer} id="offer">
          <p>SO, HERES'S THE DEAL: 🤝</p>
          <h1>
            FOR A LIMITED TIME, SEIZE A MASSIVE{" "}
            <span className="highlightCopy">30% DISCOUNT </span> ON THE VITAL
            STACK
          </h1>
          <p>
            The Vital Stack is our two best-selling,
            <span style={{ fontWeight: "700" }}>
              high-performing test-boosters—D-pol and Recycle!
            </span>{" "}
          </p>
          <div className={style.productImage}>
            <ImageContainer imageContainerConfig={pack} />
          </div>
          <p>
            <span style={{ fontSize: "15px", fontWeight: "700" }}>
              <br />
              That's Not All!
              <br />
              <br />
              We're Committed to Rewarding Men Who{" "}
              <span style={{ fontWeight: "900", textDecoration: "underline" }}>
                TAKE ACTION
              </span>{" "}
              and Own Their Lives.
            </span>
            <br />
            <br />
            So for Those Who Order in the{" "}
            <span style={{ fontWeight: "800" }}>Next Hour Only</span>, We're
            Offering{" "}
            <span style={{ fontWeight: "700", textDecoration: "underline" }}>
              100% FREE SHIPPING on your purchase.
            </span>
          </p>
          <p className={style.capacity} style={{ marginTop: "20px" }}>
            FREE SHIPPING EXPIRES IN...{" "}
            {moving && (
              <Countdown
                date={Date.now() + 3600000}
                renderer={renderer}
                precision={3}
              />
            )}
          </p>
          <div className={style.boxContainer} style={{ margin: "15px 0px" }}>
            {" "}
            {moving && generateBoxes(16)}
          </div>
          <div className={style.box}>
            <h2>Here’s what your getting:</h2>
            <p>RECYCLE ( 30 SERV. ) ~ Value: $39.99</p>
            <p>D-POL ( 30 SERV. ) ~ Value: $39.99</p>
            <p className={style.bonus} style={{ color: "red" }}>
              LIMITED TIME BOUNUS:
            </p>

            <p>✅ FREE SHIPPING ~ Value: $8.78</p>

            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Total Package Value: $88.72
            </p>
            <hr />
            <p
              className={style.final}
              style={{ fontSize: "16px", marginTop: "10px" }}
            >
              TODAY’S SPECIAL PRICE: $59.99
            </p>
            <div className={style.save}>LIMITED TIME SAVE $28.72!</div>
            <div className={style.grid}>
              <div>
                <ImageContainer imageContainerConfig={dpol} />
                <p>D-POL</p>
                <p>THE ULTIMATE TEST BOOSTER</p>
                <div>Tablets</div>
              </div>
              <div>
                <ImageContainer imageContainerConfig={recycle} />
                <p style={{ fontWeight: "800", fontSize: "14px" }}>RECYCLE</p>
                <p>THE ULTIMATE TEST OPTIMIZER</p>
                <div>Tablets</div>
              </div>
            </div>
          </div>
          <div className={style.hook}>
            <p>
              Click the button below to
              <span className="highlightCopy">
                {" "}
                take control of your life
              </span>{" "}
              with these game-changing products, that have already helped
              thousands!
            </p>
            <div>
              <Svg icon="ArrowSkinnyIcon" color="black" />
              <Svg icon="ArrowSkinnyIcon" color="black" />
              <Svg icon="ArrowSkinnyIcon" color="black" />
            </div>
          </div>
          <div
            className={style.cta}
            style={{ marginTop: "25px", marginBottom: "5px" }}
            onClick={() => {
              checkout();
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <p
            style={{ fontSize: "12px", fontWeight: "800", fontStyle: "italic" }}
          >
            Think about it, that's just $2 a day. Less than your daily coffee,
            but for life-changing results.
          </p>
        </div>
        <div className={style.guarantee}>
          <div>
            <Svg color="black" icon="verifiedIcon" />
            <p>THE PURUS GUARANTEE</p>
          </div>
          <p>
            <span style={{ fontWeight: "600" }}>
              We've Transformed the Lives of Thousands of Men and{" "}
              <span style={{ fontWeight: "700", textDecoration: "underline" }}>
                We're Betting You'll Be Next!
              </span>
            </span>
            <br />
            <br />
            So Confident in Fact That We're Putting Our Money Where Our Mouth
            Is.
            <br />
            <br />
            <span
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
            >
              {" "}
              If You're Anything But Absolutely Thrilled with Your Purchase,
              Just Send It Back Within 30 Days of Receiving.
            </span>
            <br />
            <br />
            And we'll Speedily{" "}
            <span
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                color: "red",
              }}
            >
              Refund Every Single Penny, Directly to Your Bank Account
            </span>
            —No Questions Asked.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "grey",
            padding: "30px 24px",
            fontWeight: "800",
            fontSize: "22px",
            borderTop: "2px solid black",
          }}
        >
          BUT WHAT MAKES THESE PRODUCTS SO EFFECTIVE?
        </div>{" "}
        <div className={style.logical}>
          <h1 style={{ fontSize: "18px" }}>Here's the surprising truth...</h1>
          <div className={style.hook} style={{ marginTop: "10px" }}>
            <p></p>
            <div style={{ marginBottom: "15px" }}>
              <Svg icon="ArrowSkinnyIcon" color="black" />
              <Svg icon="ArrowSkinnyIcon" color="black" />
              <Svg icon="ArrowSkinnyIcon" color="black" />
            </div>
          </div>
          <p>
            For years, people thought the only way to solve the problem was to
            use artificial testosterone. <br />
            <br />
            While that does work for some—
            <span
              style={{
                fontWeight: "800",
                color: "red",
                textDecoration: "underline",
              }}
            >
              the real magic is often overlooked.
            </span>
            <br />
            <br />
            While everyone's busy talking about 'boosting' testosterone, there's
            hardly any discussion about{" "}
            <span
              style={{
                fontWeight: "800",
                textDecoration: "underline",
              }}
            >
              how to make your natural system more efficient.
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                fontWeight: "900",
                fontSize: "16px",
              }}
            >
              {" "}
              Enter D-POL & Recycle!
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              They goes beyond simply 'boosting' your testosterone levels; they
              supercharges your body's own hormone-making machinery.
            </span>{" "}
          </p>
        </div>
        <div
          className={style.cta}
          style={{
            margin: "25px 24px",
            marginTop: "20px",
            marginBottom: "5px",
          }}
          onClick={() => {
            checkout();
          }}
        >
          YES, TRANSFORM MY FITNESS NOW!
        </div>
        <div className={style.theBoxes}>
          <p>{"still skeptical?".toUpperCase()}</p>
          <h2 style={{ color: "black" }}>
            {"let’s break-down the science!".toUpperCase()}
          </h2>

          <div className={style.thecoolbox}>
            <p>RECYCLE: THE ADVANCED HORMONE OPTIMIZER...</p>
            <ImageContainer imageContainerConfig={recycle} />
            <div className={style.theContainer}>
              <div>
                <Svg color="black" icon="MoleculeIcon" />
                <p>Hormonal Blend:</p>
              </div>
              <p>
                Think of this herbal blend as your body's tuning kit.
                <br />
                <br />
                📈 It ramps up key hormones like testosterone and adrenaline so
                you can feel more energized and focused throughout the day.
                <br />
                <br />
                ❤️‍🔥 It also acts like a bodyguard, blocking excess estrogen,
                improving blood flow, and fine-tuning your reproductive system
                for a better love life.
              </p>
            </div>

            <div className={style.theContainer}>
              <div>
                <Svg color="black" icon="MoleculeIcon" />
                <p>Hormonal Blend:</p>
              </div>
              <p>
                DHT Blockers Blend:
                <br />
                <br />
                🗺️ Directing the hormonal "traffic" along the right paths and
                detouring away from problematic routes.
                <br />
                <br />
                ✅ It ensures that your testosterone doesn't take a wrong turn
                and become something undesirable like DHT, while also guiding
                your system to produce the 'good' kinds of estrogen.
                <br />
                <br />
                💪 The result? You feel better, with more energy and an improved
                mood, allowing you to be more present in your relationships and
                more effective at work and the gym.
              </p>
            </div>
            <div className={style.theContainer}>
              <div>
                <Svg color="black" icon="MoleculeIcon" />
                <p>Absorption Amplifiers Blend:</p>
              </div>
              <p>
                This is the turbocharger for all the other ingredients.
                <br />
                <br />⚡ Imagine your body like a sponge; this makes that sponge
                super absorbent, so you get the most out of every dose.
              </p>
            </div>
          </div>
          <div
            className={style.cta}
            style={{
              margin: "20px 0px",
            }}
            onClick={() => {
              checkout();
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <div className={style.thecoolbox}>
            <p>D-POL: The ULTIMATE TEST BOOSTER...</p>
            <ImageContainer imageContainerConfig={dpol} />
            <div className={style.theContainer}>
              <div>
                <Svg color="black" icon="MoleculeIcon" />
                <p>D-Aspartic Acid:</p>
              </div>
              <p>
                Think of D-Aspartic Acid (DAA) as your body's personal coach.
                <br />
                <br />
                Training your system to create and release the hormones you need
                to feel and perform better.
                <br />
                <br />
                Studies have shown that it's like a power-up for your
                testosterone levels, coaching your system to help you feel more
                like your energetic self within just 12 days.
              </p>
            </div>
            <div className={style.theContainer}>
              <div>
                <Svg color="black" icon="MoleculeIcon" />
                <p>Nitrate (NO3-T):</p>
              </div>
              <p>
                Nitrate, or in our specific case, NO3-T, is like your gym buddy
                who motivates you to push beyond your limits.
                <br />
                <br />
                Studies suggest that having nitrate by your side can help you
                endure longer workouts, allowing you to lift more or go the
                extra mile during your fitness sessions.
              </p>
            </div>
          </div>
          <div
            className={style.cta}
            style={{
              margin: "20px 0px",
            }}
            onClick={() => {
              checkout();
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
        <div className={style.offer} style={{ borderTop: "2px solid black" }}>
          <p style={{ fontSize: "15px" }}>
            {"free shipping expires soon!⏳".toUpperCase()}
          </p>
          <h1 style={{ fontSize: "19px" }}>
            {"If you’re ready to change your life, act now!".toUpperCase()}
          </h1>
          <p></p>
          <div className={style.productImage}>
            <ImageContainer imageContainerConfig={pack} />
          </div>
          <p>
            We're Committed to Rewarding Men Who TAKE ACTION and Own Their
            Lives.
            <br />
            <br />
            So for Those Who Order in the Next Hour Only, We're Offering 100%
            FREE SHIPPING on your purchase.
          </p>
          <p className={style.capacity} style={{ marginTop: "20px" }}>
            FREE SHIPPING EXIRES IN...{" "}
            {moving && (
              <Countdown
                date={Date.now() + 3600000}
                renderer={renderer}
                precision={3}
              />
            )}
          </p>
          <div className={style.boxContainer} style={{ margin: "15px 0px" }}>
            {" "}
            {moving && generateBoxes(16)}
          </div>

          <div className={style.box}>
            <h2>Here’s what your getting:</h2>
            <p>✅ Core EVOLV Program ~ Value: $29.99 / mo.</p>
            <p className={style.bonus}>BOUNUS #1:</p>

            <p>✅ Private Community Access~ Value: $97.00</p>
            <p className={style.bonus}>BOUNUS #2:</p>
            <p className={style.total}>
              ✅ Direct 1-1 coaching ~ Value: $297.00
            </p>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Total Package Value: $423.99
            </p>
            <hr />
            <p
              className={style.final}
              style={{ fontSize: "16px", marginTop: "10px" }}
            >
              TODAY’S SPECIAL PRICE: $0.00
            </p>
            <div className={style.save}>LIMITED TIME SAVE $423.99!</div>
          </div>
          <div
            className={style.cta}
            style={{ marginTop: "25px", marginBottom: "5px" }}
            onClick={() => {
              checkout();
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
