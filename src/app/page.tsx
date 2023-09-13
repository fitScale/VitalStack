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
    gen.push(<Box config={{ red: i < num - 4, blink: num - 4 === i }} />);
  }
  return gen;
};

const Page = () => {
  return (
    <>
      <main>
        <div className={style.header}>
          <ImageContainer imageContainerConfig={JBCImage} />
        </div>
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
        <div style={{ margin: "0px 24px" }}>
          <div className={style.cta}>CLICK TO HERE LEARN “THE SECRET” </div>
        </div>
        <div className={style.hook}>
          <p>
            Read Below to Discover Two{" "}
            <span className="highlightCopy">The 'Secret Weapons'</span> for Men
            Are Using to Get a Massive T-Boost in Just 12 Days!
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
              ❌ Lack of Muscle Growth
              <br />
              <br />
              Struggles at the gym with no visible gains, impacting self-esteem
              and body image.
              <br />
              <br />
              ❌ Depressive Mood
              <br />
              <br />
              A persistent low mood that strains relationships and affects
              overall quality of life.
              <br />
              <br />
              ❌ Reduced Libido
              <br />
              A significant decrease in sexual desire, creating emotional
              distance in intimate relationships.
              <br />
              <br />
              ❌ Limited Family Engagement
              <br />
              <br />
              Lack of energy to spend quality time with your family, resulting
              in missed memories and experiences.
              <br />
              <br />
              ❌ Low Motivation
              <br />
              <br />A sudden loss of drive and ambition, making even small tasks
              feel insurmountable.
              <br />
              <br />❌ Difficulty Losing Weight
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
                Read Below to Discover Two{" "}
                <span className="highlightCopy">The 'Secret Weapons'</span> for
                Men Are Using to Get a Massive T-Boost in Just 12 Days!
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
            <div className={style.cta}>YES, TRANSFORM MY FITNESS NOW!</div>
          </div>
        </div>
        <div
          style={{ marginTop: "25px", height: "2px", backgroundColor: "black" }}
        ></div>
        <div className={style.text2}>
          <h2>
            {"since launching We have transformed the lives of thousands! ".toUpperCase()}
          </h2>
          <p>
            From everyday guys, to the ranks to elite athletes, Purus Labs has
            helped men from all walks of life take back control!
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
        <div className={style.offer}>
          <p>SO, HERES'S THE DEAL: 🤝</p>
          <h1>
            FOR A LIMITED TIME, SEIZE A MASSIVE{" "}
            <span className="highlightCopy">30% DISCOUNT</span>
          </h1>
          <p>
            On our best-selling,
            <span style={{ fontWeight: "700" }}>
              high-performing test-boosters—D-pol and Recycle!
            </span>{" "}
          </p>
          <div className={style.productImage}>
            <ImageContainer imageContainerConfig={pack} />
          </div>
          <p>
            That's Not All! We're Committed to Rewarding Men Who TAKE ACTION and
            Own Their Lives.
            <br />
            <br />
            So for Those Who Order in the Next Hour Only, We're Offering 100%
            FREE SHIPPING on your purchase.
          </p>
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
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
        <div className={style.limited}>
          <h2>
            <span style={{ textDecoration: "underline" }}>WARNING:</span> READ
            THIS BEFORE YOU JOIN...
          </h2>
          <p>
            Because our coaching program is so in-depth and integrated, we can
            only take on a limited number of clients each month.
            <br />
            <br />
            The indicator below will show if we have any openings left this
            month. If it's empty, we apologize—you'll have to wait until next
            month to apply. 😞
            <br />
            <br />
            But if it shows there are still spots available, act fast to secure
            yours before it's too late!
          </p>
          <hr />
          <p className={style.capacity}>
            WE ARE ALMOST TO CAPACITY... ACT FAST!
          </p>
          <div className={style.boxContainer}> {generateBoxes(16)}</div>
          <div
            className={style.cta}
            style={{ marginTop: "10px", marginBottom: "5px" }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
        <div className={style.logical}>
          <p>So, here's the deal: 🤝</p>
          <h1>TEST DRIVE EVOLV FOR AN ENTIRE WEEK...</h1>
          <div className={style.hook} style={{ marginTop: "8px" }}>
            <p></p>
            <div>
              <Svg icon="ArrowSkinnyIcon" color="white" />
              <Svg icon="ArrowSkinnyIcon" color="white" />
              <Svg icon="ArrowSkinnyIcon" color="white" />
            </div>
          </div>
        </div>
        <div>
          <div className={style.imageTextBox}>
            <h2>{"Expertise That Speaks Volumes:".toUpperCase()}</h2>
            <p>
              This isn't some cookie-cutter program designed by a wannabe guru.
              <br />
              <br />
              EVOLV is the brainchild of Jason Brown—an exercise science
              maestro, published author, and combat veteran with a whopping
              10,000+ hours of hands-on program design. 
              <br />
              <br />
              We're not just focused on results; we're obsessed with them.
            </p>
            <div style={{ width: "100%", aspectRatio: "1920/1080" }}></div>
            <ImageContainer imageContainerConfig={banbner2} />
          </div>
          <div
            className={style.cta}
            style={{
              margin: "20px 24px",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <div className={style.imageTextBox}>
            <h2>{"Life-Enhancing, Not Life-Consuming:".toUpperCase()}</h2>
            <p>
              We get you—you're juggling a lot, and 'free time' sounds like a
              foreign concept.
              <br />
              <br />
              That's where EVOLV steals the show.
              <br />
              <br />
              Our laser-focused training sessions are power-packed into just 60
              minutes, a few times a week.
              <br />
              <br />
              But don't let the short time frame fool you; we're talking
              full-body strength and aerobic conditioning that will leave you
              buzzing with energy.
              <br />
              <br />
              The best part? EVOLV bends to your schedule, not the other way
              around. Tailor the program to fit your life, without dialing down
              on results.
            </p>
            <div style={{ width: "100%", aspectRatio: "1920/1080" }}></div>
            <ImageContainer imageContainerConfig={banbner4} />
          </div>
          <div
            className={style.cta}
            style={{
              margin: "25px 24px",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <div className={style.imageTextBox}>
            <h2>Community? More like a Fitness Family:</h2>
            <p>
              Imagine diving into live Q&A sessions, exclusive content, and a
              network of fitness enthusiasts who are as committed to their goals
              as you are to yours.
              <br />
              <br />
              Building community is crucial to us! In a world where to most
              trainers you are just a number on a screen, we see each of our
              clients as family!
            </p>
            <div style={{ width: "100%", aspectRatio: "1920/1080" }}></div>
            <ImageContainer imageContainerConfig={banbner3} />
          </div>
          <div
            className={style.cta}
            style={{
              margin: "25px 24px",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
        <div className={style.teen}>
          <h2>
            {"15 Reasons you need to take action today and join the EVOLV revolution:".toUpperCase()}
          </h2>
          <div className={style.hook} style={{ marginTop: "5px" }}>
            <p></p>
            <div>
              <Svg icon="ArrowSkinnyIcon" color="white" />
              <Svg icon="ArrowSkinnyIcon" color="white" />
              <Svg icon="ArrowSkinnyIcon" color="white" />
            </div>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🏋️ Rapid Gains, No Drain</h2>
              <p>
                Maximize muscle and minimize time with efficient 60-minute
                full-body strength sessions.
              </p>
            </div>
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <h2>📈 Stay Ahead of Father Time:</h2>
              <p>
                Our program evolves with you, helping you fend off age-related
                physical decline.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🎯 Train Smart, Not Hard:</h2>
              <p>
                Our aerobic conditioning isn't a wear-and-tear approach. It’s
                strategic to enhance your strength gains and overall heart
                health.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>⏳ Your Time, Your Terms:</h2>
              <p>
                Can't fit in 6 sessions a week? No worries. Our flexible
                schedule lets you get fit on your clock.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🤝 We've Got Your Back:</h2>
              <p>
                Become a part of Team EVOLV Community and never feel alone on
                your fitness journey again.
              </p>
            </div>
          </div>{" "}
          <div
            className={style.cta}
            style={{
              marginTop: "20px",
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🎥 Never Second Guess:</h2>
              <p>
                With our Demo Videos, you know exactly how to perform each
                exercise for optimal results.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🧠 Expert Eyes on You:</h2>
              <p>
                Got a question? Our JBC Expert Coaches are here to guide you
                every step of the way.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>📲 Tech-Savvy Training:</h2>
              <p>
                Our partnership with TrainHeroic provides you with a world-class
                online training experience.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🛠️ Gym or No Gym:</h2>
              <p>
                Whether you have a home gym or prefer CrossFit, our program fits
                your environment.
              </p>
            </div>
          </div>{" "}
          <div
            className={style.cta}
            style={{
              marginTop: "20px",
            }}
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
          <div className={style.cards}>
            <div className={style.card}>
              <h2>❓ Your Queries, Answered</h2>
              <p>
                Live Q&A sessions to solve your training riddles and keep you on
                the right track.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🤲 Grab & Go:</h2>
              <p>
                All you need is basic equipment like a barbell, dumbbells,
                kettlebells, and you’re all set to go.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>👨‍⚕️ Longevity Locked In:</h2>
              <p>Make informed health decisions with real-time analytics.</p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>📜 Proven Success:</h2>
              <p>Just check out our verified athlete testimonials!</p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>🔁 Never Stale, Always Fresh:</h2>
              <p>
                With fresh programming weekly, bid goodbye to monotonous
                routines.
              </p>
            </div>
          </div>{" "}
          <div className={style.cards}>
            <div className={style.card}>
              <h2>💡 More Than Just Workouts:</h2>
              <p>
                Learn the WHY behind each exercise and become your own best
                trainer.
              </p>
            </div>
            <div
              className={style.cta}
              style={{
                marginTop: "0px",
              }}
            >
              YES, TRANSFORM MY FITNESS NOW!
            </div>
          </div>
        </div>
        <div className={style.offer}>
          <p>Spots are filling up fast! ⏳</p>
          <h1>If you’re ready to change your life, act now!</h1>
          <p>
            Dont miss our, test drive EVOLV absolutely FREE. That’s 7 days of
            full access, no strings attached.
          </p>
          <div className={style.productImage}>
            <ImageContainer imageContainerConfig={pack} />
          </div>
          <p className={style.capacity}>
            WE ARE ALMOST TO CAPACITY... ACT FAST!
          </p>
          <div className={style.boxContainer} style={{ margin: "15px 0px" }}>
            {" "}
            {generateBoxes(16)}
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
          >
            YES, TRANSFORM MY FITNESS NOW!
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Page;
