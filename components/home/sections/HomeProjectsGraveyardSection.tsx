import HomeParagraph from "../HomeParagraph";
import HomeProject from "../HomeProject";
import HomeSectionTitle from "../HomeSectionTitle";
import Image from "next/image";
import Link from "../../Link";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeProjectsSection.module.css";

export default function HomeProjectsGraveyardSection() {
  return (
    <div
      className={classes(styles.container, containerStyles.container)}
      id="projects"
      style={{ backgroundColor: "#e6e6e6" }}
    >
      <div className={containerStyles.innerContainer}>
        <HomeSectionTitle title="Project Graveyard" />
        <HomeParagraph
          style={{
            margin: "auto",
            marginTop: 22,
            maxWidth: 750,
            textAlign: "center",
          }}
        >
          I think everyone has a few of these. These are projects I spent a
          non-trivial amount of time and effort on, but never really saw the
          light of day. This is currently an incomplete list, I&apos;ll add some
          more things here over time.
        </HomeParagraph>
        <div className={styles.projects}>
          <HomeProject
            links={{ project: "https://www.creatorinbox.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#eaffff" }}
              >
                <Image
                  alt="Creator Inbox"
                  height={28.635}
                  src="/images/projects/creator-inbox-logo.svg"
                  width={217.5}
                />
              </div>
            }
            title="Creator Inbox"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Creator Inbox was a tool that connected people with experienced
              creators. Beginners could get targeted, personal feedback, and
              experts could get paid for their expertise. We launched a beta
              version of the product, but it didn't gain traction.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{ project: "https://www.withfolio.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#FAF5F3" }}
              >
                <Image
                  alt="Folio"
                  height={160}
                  src="/images/projects/folio.png"
                  width={160}
                />
              </div>
            }
            title="Folio"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Folio was a marketplace that connected artists to companies that
              wanted to license art. We got far enough that I built basically
              the whole site with Firebase, realized Firebase has a lot of
              limitations, and then migrated it to GraphQL + Relay. Eventually,
              we stopped working on it because the market size was quite small.
            </HomeParagraph>
          </HomeProject>

          <HomeProject
            links={{ project: "https://www.withwizards.com/" }}
            media={
              <div
                className={styles.imageContainer}
                style={{ backgroundColor: "#E2FFEE" }}
              >
                <Image
                  alt="Wizards"
                  height={65}
                  src="/images/projects/wizards.svg"
                  width={190}
                />
              </div>
            }
            title="Wizards"
          >
            <HomeParagraph style={{ marginTop: 0 }}>
              Wizards was an expert network for game devs. We didn&apos;t get
              very far with this one—the landing page isn&apos;t even finished.
              I think it looks cool though.
            </HomeParagraph>
          </HomeProject>
        </div>
      </div>
    </div>
  );
}
