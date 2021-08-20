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
    >
      <div className={containerStyles.innerContainer}>
        <HomeSectionTitle title="Projects" />
        <div className={styles.projects}>
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
