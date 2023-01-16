import HomeParagraph from "../HomeParagraph";
import HomeProject from "../HomeProject";
import HomeSectionTitle from "../HomeSectionTitle";
import Image from "next/image";
import Link from "../../Link";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeProjectsSection.module.css";

export default function HomeProjectsSection() {
  return (
    <div
      className={classes(styles.container, containerStyles.container)}
      id="projects"
      style={{ backgroundColor: "#ffeef2" }}
    >
      <div className={containerStyles.innerContainer}>
        <HomeSectionTitle title="Projects" />
        <div className={styles.projects}>
          <HomeProject
            links={{
              project: "https://formfunction.xyz/",
            }}
            media={
              <div
                className={styles.imageContainer}
                style={{
                  background:
                    "linear-gradient(91.96deg,#4e48f2 17.52%,#8458ff 91.27%)",
                }}
              >
                <Image
                  height={70}
                  src="/images/projects/ff-white.svg"
                  width={70}
                />
              </div>
            }
            title="Formfunction"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Formfunction is the Solana NFT marketplace made for 1/1 art and
              independent creators.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{
              project: "https://ghostwriter.boo/",
            }}
            media={
              <div
                className={styles.imageContainer}
                style={{
                  backgroundColor: "#F5F5F5",
                }}
              >
                <Image
                  height={18}
                  src="/images/projects/ghostwriter.svg"
                  width={176}
                />
              </div>
            }
            title="Ghostwriter"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Ghostwriter is a small project I made with my friend{" "}
              <Link href="https://mattgabor.me/">Matt Gabor</Link> as a way to
              play around with OpenAI and Remix. You can check out our{" "}
              <Link href="https://pencilflip.medium.com/first-impressions-of-the-remix-web-framework-1c25ec6f3abf">
                thoughts on Remix here
              </Link>
              .
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{
              project: "https://www.niftygenerator.xyz/",
            }}
            media={
              <div
                className={styles.imageContainer}
                style={{
                  background:
                    "radial-gradient(82.95% 212.36% at 0 90.67%,#fff 0,#ffb4b4 34.74%,#86aef9 100%),#86aef9",
                }}
              >
                <Image
                  height={50}
                  src="/images/projects/nifty-generator.svg"
                  width={270}
                />
              </div>
            }
            title="Nifty Generator"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Nifty Generator lets you randomly generate NFT images with
              different traits, complete with metadata—no coding needed.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{
              project: "https://mycoverse.xyz/",
            }}
            media={
              <div className={styles.imageContainer}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/images/projects/mycoverse.jpg"
                />
              </div>
            }
            title="Mycoverse"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              The Mycoverse is a collection of 999 mushroom-inspired NFTs on the
              Solana blockchain.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{
              project:
                "https://opensea.io/collection/psychedelics-anonymous-genesis",
            }}
            media={
              <div className={styles.imageContainer}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/images/projects/pa.png"
                />
              </div>
            }
            title="Psychedelics Anonymous"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Developed four ERC-721 smart contracts for the Psychedelics
              Anonymous NFT project. The four collections sold out in ~1 week
              and generated ~$10,000,000.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{ project: "https://www.niftypixels.io/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#FFF4EA" }}
              >
                <Image
                  height={469}
                  src="/images/projects/nifty-pixels.png"
                  width={773}
                />
              </div>
            }
            title="Nifty Pixels"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Nifty Pixels is an NFT marketplace that lets you create, buy, and
              sell pixel art NFTs all in one place. You can create pixel art
              using our built-in tools, mint your art as NFTs, and sell them on
              our marketplace. We're making the world's{" "}
              <Link href="https://opensea.io/collection/nifty-pixels-collection">
                largest collection
              </Link>{" "}
              of original pixel art NFTs!
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{ project: "https://www.minymon.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#CFFFF7" }}
              >
                <Image
                  height={160}
                  src="/images/projects/minymon-preview.gif"
                  width={160}
                />
              </div>
            }
            title="Minymon"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Minymons are pets that live on your website and can 💬 answer
              common questions, 👋 interact with your website visitors, and ✨
              build your brand. Check it out on{" "}
              <Link href="https://www.producthunt.com/posts/minymon">
                Product Hunt
              </Link>
              , we were the #4 product of the day!
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{ project: "https://harkenapp.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#5c61df" }}
              >
                <Image
                  className={styles.harken}
                  height={51}
                  src="/images/projects/harken.svg"
                  width={160}
                />
              </div>
            }
            title="Harken"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              I built Harken with{" "}
              <Link href="https://www.katherineliu.me/">Katherine</Link>. It's
              the best way to remember what you learn (like a better version of
              Anki).
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{
              code: "https://github.com/arcticmatt/porta-penguin-godot",
              project:
                "https://tinyshroomstudio.com/projects/porta_penguin.html",
            }}
            media={
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src="/images/projects/porta-penguin.gif"
                />
              </div>
            }
            title="Porta Penguin"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              If pooping on people like Captain Hook, Professor Umbridge, and
              Jar Jar Binks sounds like a grand old time, this is the game for
              you. It's built with Godot, an awesome game engine. I made some
              fairly popular{" "}
              <Link href="https://www.youtube.com/watch?v=3OpH4j4zpPU&t=433s">
                YouTube tutorials
              </Link>{" "}
              about how to make this game, but still haven't finished the
              series... maybe some day.
            </HomeParagraph>
          </HomeProject>
          <HomeProject
            links={{
              code: "https://github.com/arcticmatt/online-omnichord",
              project: "http://www.onlineomnichord.com/",
            }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "white" }}
              >
                <div className={styles.imageContainerSmall}>
                  <Image
                    className={styles.image}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    src="/images/projects/omnilogo.png"
                  />
                </div>
              </div>
            }
            title="Online Omnichord"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              The first time I saw/heard the Omnichord, I immediately wanted
              one. It's a truly unique instrument, and just plain fun to play.
              This website brings the Omnichord experience online—you can play
              chords, strum the harp, and even turn on rhythms. All the sounds
              were sampled from my own Omnichord.
            </HomeParagraph>
          </HomeProject>
          <HomeProject
            links={{
              code: "https://github.com/arcticmatt/dino-brick",
              project: "https://github.com/arcticmatt/dino-brick",
            }}
            media={
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src="/images/projects/dino.gif"
                />
              </div>
            }
            title="Dino Brick"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Chrome's no-WiFi dino game lazily ported to the terminal. I made
              this game with{" "}
              <Link href="https://samtay.github.io/posts/introduction-to-brick">
                brick
              </Link>
              , a Haskell library for writing terminal applications. This was
              back when I was really into Haskell.
            </HomeParagraph>
          </HomeProject>
          <HomeProject
            links={{ project: "https://moodlists.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#F9EDE5" }}
              >
                <div className={styles.imageContainerSmall}>
                  <Image
                    className={styles.image}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    src="/images/projects/moodlists.svg"
                  />
                </div>
              </div>
            }
            title="Moodlists"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              A place for sharing and discovering music based on specific moods.
              Want to listen to some songs while{" "}
              <Link href="https://moodlists.com/sitting-outside-on-a-bench-on-a-warm-and-sunny-day">
                sitting outside, on a bench, on a warm and sunny day
              </Link>
              ? Yes? Well then, check it out!
            </HomeParagraph>
          </HomeProject>
          <HomeProject
            links={{
              code: "https://github.com/arcticmatt/gradients",
              project: "https://arcticmatt.github.io/gradients/",
            }}
            media={
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  src="/images/projects/gradients.gif"
                />
              </div>
            }
            title="Gradients"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              In college{" "}
              <Link href="https://www.wampastompa.com/">my friend Matt</Link>{" "}
              picked up a small CRT TV from a thrift store in San Diego, on
              which he continually played these awesome looking gradients. This
              website is a homage to that project.
            </HomeParagraph>
          </HomeProject>
          <HomeProject
            links={{
              code: "https://github.com/arcticmatt/happy-site",
              project: "http://www.happythings.me/",
            }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#F9EDE5" }}
              >
                <Image
                  className={styles.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  src="/images/projects/happythings.gif"
                />
              </div>
            }
            title="Happy Things"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              I have a book called{" "}
              <Link href="https://www.amazon.com/14-000-Things-Happy-About/dp/0761181806/ref=sr_1_5?dchild=1&keywords=happy+things&qid=1616900815&s=books&sr=1-5">
                <em>14,000 Things to Be Happy About</em>
              </Link>
              . Every time you refresh this website, it displays three things
              from that book. I built it using{" "}
              <Link href="https://hackage.haskell.org/package/scotty">
                scotty
              </Link>
              , a Haskell framework for building websites.
            </HomeParagraph>
          </HomeProject>
        </div>
      </div>
    </div>
  );
}
