import HomeParagraph from "../HomeParagraph";
import HomeSectionTitle from "../HomeSectionTitle";
import Link from "../../Link";
import containerStyles from "../../../styles/HomeContainer.module.css";

export default function HomeAboutSection() {
  return (
    <div className={containerStyles.container}>
      <div className={containerStyles.innerContainer}>
        <HomeSectionTitle title="About" />
        <div>
          <HomeParagraph>
            Hey, I’m Matt. I'm currently working on{" "}
            <Link href="https://github.com/formfunction-hq/formfunction-monorepo">
              Formfunction
            </Link>
            , a Solana NFT marketplace made for 1/1 art and independent
            creators. Previously, I built products at{" "}
            <Link href="https://npe.fb.com/">Facebook NPE</Link>. Our team
            focused on making the world more equitable—you can check out the
            website we built at{" "}
            <Link href="https://linkstage.com/">linkstage.com</Link>. Before
            that, I worked on designing and implementing an IPC protocol for
            AR/VR devices. Although I prefer working on products—something I
            only really realized after doing systems software for a year—it was
            fun to work so close to the hardware. In addition to picking up cool
            new acronyms like &quot;MCU&quot; and &quot;SoC,&quot; I learned a
            lot about C++, TCP, FlatBuffers, and how painful it is to stand up a
            Bluetooth stack. My first team at Facebook was content integrity,
            where I built tooling and infrastructure for the thousands of
            content moderators Facebook has around the world. My projects
            included building a system that maps decisions to actions (which is
            a lot more complicated than it sounds) and making{" "}
            <Link href="https://www.fastcompany.com/90367858/facebook-is-expanding-its-tools-to-make-content-moderation-less-toxic">
              content moderation a less harrowing experience
            </Link>
            . If you want to learn more about the ins and outs of content
            moderation, I recommend the{" "}
            <Link href="https://www.wnycstudios.org/podcasts/radiolab/articles/post-no-evil">
              Post No Evil
            </Link>{" "}
            podcast by RadioLab.
          </HomeParagraph>
          <HomeParagraph>
            I graduated from Caltech in 2017, where I majored in Computer
            Science and minored in English. Most of my computer science sets are
            still on{" "}
            <Link href="https://github.com/arcticmatt/CS38">GitHub</Link>,
            although they’re mostly just{" "}
            <Link href="https://github.com/arcticmatt/CS38/blob/master/Psets/final/final.pdf">
              gibberish
            </Link>{" "}
            to me now. At least I can rest assured that I used to be able to
            write proofs. In 2016 I won{" "}
            <Link href="http://www.writing.caltech.edu/community/prizes">
              Caltech’s poetry award
            </Link>{" "}
            with a poem called{" "}
            <Link href="https://www.mattlim.me/posts/encounter">
              "Encounter"
            </Link>
            , which means that English minor was <em>definitely</em> worth it.
          </HomeParagraph>
          <HomeParagraph>
            I’ve suffered two concussions in my life, both while playing
            basketball—one as a high school senior and one as a college
            freshman. Perhaps my proudest achievement is just{" "}
            <em>getting through</em> college while dealing with post-concussion
            syndrome. Over the years I tried a lot of medications—Topiramate
            (the most effective for me), Verapamil, Amitriptyline, Innopran,
            Indomethacin, etc. I also went to quite a few different
            doctors—multiple neurologists, multiple chiropractors, an
            acupuncturist, and multiple physical therapists. Seeing a{" "}
            <Link href="http://californiaconcussioninstitute.com/erin-isanhart-dpt-2/">
              neurologic physical therapist
            </Link>{" "}
            at Stanford in 2018 helped me finally overcome my symptoms. If
            you’re suffering, or have ever suffered, from brain problems, I
            highly recommend a book called{" "}
            <Link href="https://www.amazon.com/Brain-That-Changes-Itself-Frontiers/dp/0143113100">
              <em>The Brain that Changes Itself</em>
            </Link>
            . It gave me hope when it seemed like things would never
            improve—brain plasticity is an amazing thing.
          </HomeParagraph>
          <HomeParagraph>
            In my spare time, I like to make stuff. I’ve tabled at{" "}
            <Link href="https://www.lazinefest.com/">LA Zine Fest</Link> and{" "}
            <Link href="https://www.sfzinefest.org/">SF Zine Fest</Link>
            —here are a{" "}
            <Link href="https://drive.google.com/file/d/1Xfc-c7M8YKoKNpUPDN6XpF0vxg21uUo5/view">
              couple of the t-shirts
            </Link>{" "}
            we made for LAZF (yup, we made a t-shirt with the Vim icon on it).
            I’ve also made a few songs, some of which are on{" "}
            <Link href="https://soundcloud.com/arctictern">Soundcloud</Link>. I
            use Ableton Live, in case you’re curious. Occasionally I write
            things; my <Link href="https://pencilflip.medium.com/">Medium</Link>{" "}
            has more technical content, and I try to write a{" "}
            <Link href="https://www.mattlim.me/posts/life-in-haiku">
              daily haiku
            </Link>{" "}
            and <Link href="https://www.mattlim.me/posts/til">TIL</Link> on my
            personal blog. Some of my other hobbies are bouldering, playing
            tennis, foraging for mushrooms, and playing games on my Nintendo
            Switch and Oculus Quest (Echo VR is awesome). I also read a lot—some
            of my <Link href="#favorites">favorite books</Link> are listed down
            below.
          </HomeParagraph>
        </div>
      </div>
    </div>
  );
}
