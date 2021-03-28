import HomeParagraph from "../HomeParagraph";
import HomeSectionTitle from "../HomeSectionTitle";
import Link from "../../Link";
import classes from "../../../lib/classes";
import containerStyles from "../../../styles/HomeContainer.module.css";
import styles from "../../../styles/HomeFavoritesSection.module.css";
import { useState } from "react";

enum FavoriteItemEnum {
  Books = "books",
  Poems = "poems",
  Artists = "artists",
  Albums = "albums",
  Songs = "songs",
  Restaurants = "restaurants",
  Shows = "shows",
  Movies = "movies",
}

const FAVORITES: {
  [key in FavoriteItemEnum]: Array<{
    extraText?: string;
    link: string;
    title: string | JSX.Element;
  }>;
} = {
  books: [
    {
      extraText: " by David Arora",
      link:
        "https://www.amazon.com/Mushrooms-Demystified-David-Arora/dp/0898151694",
      title: <em>Mushrooms Demystified</em>,
    },
    {
      extraText: " by Joseph Heller",
      link: "https://www.amazon.com/Catch-22-Joseph-Heller/dp/0684833395",
      title: <em>Catch-22</em>,
    },
    {
      extraText: " by Kurt Vonnegut",
      link: "https://www.amazon.com/Mother-Night-Kurt-Vonnegut/dp/0385334141",
      title: <em>Mother Night</em>,
    },
    {
      extraText: " by Ted Chiang",
      link:
        "https://www.amazon.com/Exhalation-Stories-Ted-Chiang/dp/1101947888",
      title: <em>Exhalation</em>,
    },
    {
      extraText: " by Italo Calvino",
      link:
        "https://www.amazon.com/Winters-Night-Traveler-Italo-Calvino/dp/0156439611",
      title: <em>If on a Winter's Night a Traveler</em>,
    },
    {
      extraText: " by J.K. Rowling",
      link: "https://www.amazon.com/gp/bookseries/B00CJG28U8/",
      title: <em>Harry Potter</em>,
    },
    {
      extraText: " by Kazuo Ishiguro",
      link: "https://www.amazon.com/Never-Let-Me-Kazuo-Ishiguro/dp/1400078776",
      title: <em>Never Let Me Go</em>,
    },
    {
      extraText: " by Alain de Botton",
      link:
        "https://www.amazon.com/Course-Love-Novel-Alain-Botton/dp/1501134515",
      title: <em>The Course of Love</em>,
    },
    {
      extraText: " by Norman Doidge",
      link:
        "https://www.amazon.com/Brain-That-Changes-Itself-Frontiers/dp/0143113100",
      title: <em>The Brain that Changes Itself</em>,
    },
    {
      extraText: " by Jonathan Stroud",
      link:
        "https://www.amazon.com/Bartimaeus-3-book-boxed-set-Trilogy/dp/1423136829",
      title: <em>The Bartimaeus Trilogy</em>,
    },
  ],
  poems: [
    {
      extraText: " by John Ashberry",
      link:
        "https://www.poetryfoundation.org/poems/47769/and-ut-pictura-poesis-is-her-name",
      title: '"And Ut Pictura Poesis Is Her Name"',
    },
    {
      extraText: " by Sylvia Plath",
      link:
        "https://www.poetryfoundation.org/poems/49008/morning-song-56d22ab4a0cee",
      title: '"Morning Song"',
    },
    {
      extraText: " by Kathleen Fraser",
      link:
        "https://www.poetryfoundation.org/poetrymagazine/browse?contentId=29253",
      title: '"A Child Drowns in the Sea of Its Own Imagining"',
    },
    {
      extraText: " by Anne Sexton",
      link: "https://poets.org/poem/her-kind",
      title: '"Her Kind"',
    },
    {
      extraText: " by John Berryman",
      link: "https://allpoetry.com/Dream-Song-46",
      title: '"Dream Song 46"',
    },
    {
      extraText: " by Jane Hirshfield",
      link: "https://allpoetry.com/Dream-Song-46",
      title: '"For What Binds Us"',
    },
  ],
  artists: [
    {
      link: "https://en.wikipedia.org/wiki/Belle_and_Sebastian",
      title: "Belle & Sebastian",
    },
    {
      link: "https://en.wikipedia.org/wiki/Cloud_Nothings",
      title: "Cloud Nothings",
    },
    {
      link: "https://en.wikipedia.org/wiki/Florist_(band)",
      title: "Florist",
    },
    {
      link: "https://en.wikipedia.org/wiki/Grimes_(musician)",
      title: "Grimes",
    },
    {
      link: "https://www.mac-demarco.com/",
      title: "Mac Demarco",
    },
    {
      link: "https://en.wikipedia.org/wiki/The_Mountain_Goats",
      title: "The Mountain Goats",
    },
    {
      link: "https://en.wikipedia.org/wiki/Nujabes",
      title: "Nujabes",
    },
    {
      link: "https://en.wikipedia.org/wiki/The_Shins",
      title: "The Shins",
    },
    {
      link: "https://www.streetlightmanifesto.com/",
      title: "Streetlight Manifesto",
    },
    {
      link: "https://www.taylorswift.com/",
      title: "Taylor Swift",
    },
    {
      link: "https://en.wikipedia.org/wiki/The_Tallest_Man_on_Earth",
      title: "The Tallest Man on Earth",
    },
  ],
  albums: [
    {
      extraText: " by Mac DeMarco",
      link: "https://macdemarco.bandcamp.com/album/2",
      title: <em>2</em>,
    },
    {
      extraText: " by Grimes",
      link:
        "https://www.youtube.com/watch?v=7LmBM0mTafI&list=PLZqsyBiYZFQ2U2IoBiKJVreYb77td7pOT",
      title: <em>Art Angels</em>,
    },
    {
      extraText: " by The Shins",
      link: "https://theshins.bandcamp.com/album/chutes-too-narrow",
      title: <em>Chutes Too Narrow</em>,
    },
    {
      extraText: " by Phantogram",
      link: "https://phantogram.bandcamp.com/album/eyelid-movies",
      title: <em>Eyelid Movies</em>,
    },
    {
      extraText: " by Florist",
      link: "https://florist.bandcamp.com/album/if-blue-could-be-happiness",
      title: <em>If Blue Could Be Happiness</em>,
    },
    {
      extraText: " by Logic",
      link:
        "https://www.youtube.com/watch?v=f5wjV_O0OZs&list=PLy48iUF99hDGhs-MVMzCkn9nJIxqNPZaQ",
      title: <em>The Incredible True Story</em>,
    },
    {
      extraText: " by Streetlight Manifesto",
      link: "https://www.youtube.com/watch?v=Ywgn7x5XSUE",
      title: <em>Keasbey Nights</em>,
    },
    {
      extraText: " by Belle & Sebastian",
      link:
        "https://www.youtube.com/watch?v=sIaLtfM9H94&list=PLlsZHYnNM0pbPOeUWUVOVzzPfab3z2nqh",
      title: <em>The Life Pursuit</em>,
    },
    {
      extraText: " by Ramshackle Glory",
      link: "https://www.youtube.com/watch?v=4oK-79GfA9s",
      title: <em>Live The Dream</em>,
    },
    {
      extraText: " by Nujabes",
      link: "https://www.youtube.com/watch?v=8iP3J8jFYdM",
      title: <em>Modal Soul</em>,
    },
    {
      extraText: " by Titus Andronicus",
      link:
        "https://www.youtube.com/watch?v=dFHlK8ZXgvE&list=PLMt08tQJ8P4vnK0sFiRwL-O01vuzIMjnA",
      title: <em>The Monitor</em>,
    },
    {
      extraText: " by Owl City",
      link:
        "https://www.youtube.com/watch?v=u-uWQk5EwqQ&list=PLvWlmxMSVNDsbbMb4ZCGQSJWRUTC-Y1Un",
      title: <em>Ocean Eyes</em>,
    },
    {
      extraText: " by You Won't",
      link: "https://youwont.bandcamp.com/album/skeptic-goodbye",
      title: <em>Skeptic Goodbye</em>,
    },
    {
      extraText: " by Taylor Swift",
      link:
        "https://www.youtube.com/watch?v=eyPulBsUAOs&list=PLXyy7K46bdw9rPyKnapkBBCUsVHD6aJLA",
      title: <em>Speak Now</em>,
    },
    {
      extraText: " by The Tallest Man on Earth",
      link: "https://www.youtube.com/watch?v=AIyVU-2Vdj8",
      title: <em>The Wild Hunt</em>,
    },
    {
      extraText: " by Wilco",
      link: "https://wilcohq.bandcamp.com/album/yankee-hotel-foxtrot",
      title: <em>Yankee Hotel Foxtrot</em>,
    },
    {
      extraText: " by Youth Lagoon",
      link: "https://youthlagoonfp.bandcamp.com/album/the-year-of-hibernation",
      title: <em>The Year of Hibernation</em>,
    },
  ],
  songs: [
    {
      extraText: " by Incredible Polo",
      link: "https://www.youtube.com/watch?v=FxOZAv_UPIg",
      title: '"Abissama"',
    },
    {
      extraText: " by Courtney Barnett",
      link: "https://www.youtube.com/watch?v=bcnIhzaDTd0",
      title: '"Avant Gardener"',
    },
    {
      extraText: " by Goodbye Kumiko",
      link: "https://goodbyekumiko.bandcamp.com/album/my-wild-arms",
      title: '"Bicycle Waltz"',
    },
    {
      extraText: " by Waxahatchee",
      link: "https://www.youtube.com/watch?v=yHuhABPbOaE",
      title: '"Can\'t Do Much"',
    },
    {
      extraText: " by Little Joy",
      link: "https://www.youtube.com/watch?v=o2lKjazoQ9g",
      title: '"Don\'t Watch Me Dancing"',
    },
    {
      extraText: " by Nujabes",
      link: "https://www.youtube.com/watch?v=M-BWXT3UBns",
      title: '"Feather"',
    },
    {
      link: "https://www.youtube.com/watch?v=h8A_s_PBmJA",
      title: '"FEVER HERO ED"',
    },
    {
      extraText: " by Sleeping At Last",
      link: "https://www.youtube.com/watch?v=W1iplefMjIQ",
      title: '"Her Joy Was Complete"',
    },
    {
      extraText: " by Antarctigo Vespucci",
      link: "https://www.youtube.com/watch?v=xGJWqB7aZp4",
      title: '"I Drew You Once in Art Class"',
    },
    {
      extraText: " by Neat Beats",
      link: "https://www.youtube.com/watch?v=VD8mjrq4vjw",
      title: '"I Hope I Think of Bike Riding When I\'m Dying"',
    },
    {
      extraText: " by The Middle East",
      link: "https://www.youtube.com/watch?v=68DANp3e7v4",
      title: '"Land Of The Bloody Unknown"',
    },
    {
      extraText: " by Lacrosse",
      link: "https://www.youtube.com/watch?v=KFKdS-3NOK8",
      title: '"No More Lovesongs"',
    },
    {
      extraText: " by Grimes",
      link: "https://www.youtube.com/watch?v=JtH68PJIQLE",
      title: '"Oblivion"',
    },
    {
      extraText: " by Fingers Cut Megamachine",
      link: "https://www.youtube.com/watch?v=tTSmw6fJFA8",
      title: '"Orange Barrel"',
    },
    {
      extraText: " by Penguin Cafe Orchestra",
      link: "https://www.youtube.com/watch?v=NPpRJoYISSQ",
      title: '"Perpetuum Mobile"',
    },
    {
      extraText: " by The Tallest Man on Earth",
      link: "https://www.youtube.com/watch?v=Cd1zPlBG3yY",
      title: '"Revelation Blues"',
    },
    {
      extraText: " by The Shins + RAC",
      link: "https://www.youtube.com/watch?v=X-pDwapO6GQ",
      title: '"Sleeping Lessons (RAC Mix)"',
    },
    {
      extraText: " by Winter",
      link: "https://www.youtube.com/watch?v=ov5AH_O5YCo",
      title: '"Someone Like You"',
    },
    {
      extraText: " by Watsky",
      link: "https://www.youtube.com/watch?v=ryq_NaO_eXw",
      title: '"Strong As an O-A-K"',
    },
    {
      extraText: " by The Mountain Goats",
      link: "https://www.youtube.com/watch?v=q6RQwx3r1BU",
      title: '"Transcendental Youth"',
    },
    {
      extraText: " by Atom And His Package",
      link: "https://www.youtube.com/watch?v=xjxsKtzTIyY",
      title: '"Undercover Funny"',
    },
  ],
  restaurants: [
    {
      extraText: " (Taiwan)",
      link:
        "https://www.yelp.com/biz/%E4%B8%8A%E5%BC%95%E6%B0%B4%E7%94%A2-%E4%B8%AD%E5%B1%B1%E5%8D%80",
      title: "Addiction Aquatic Development",
    },
    {
      extraText: " (Cupertino, California)",
      link: "http://ajito.us/",
      title: "Ajito",
    },
    {
      extraText: " (Oakland, California)",
      link: "https://arizmendibakery.com/",
      title: "Arizmendi Bakery",
    },
    {
      extraText: " (San Francisco, California)",
      link: "https://arsicault-bakery.com/home",
      title: "Arsicault Bakery",
    },
    {
      extraText: " (Pasadena, California)",
      link: "http://carmelaicecream.com/",
      title: "Carmela Ice Cream Co.",
    },
    {
      extraText: " (San Francisco, California)",
      link:
        "https://www.yelp.com/biz/chong-qing-xiao-mian-san-francisco?start=60",
      title: "Chong Qing Xiao Mian",
    },
    {
      extraText: " (Pasadena, California)",
      link: "https://www.yelp.com/biz/tarantinos-pizzeria-pasadena",
      title: "Tarantino's Pizzeria",
    },
    {
      extraText: " (Berkeley, California)",
      link: "http://topdoghotdogs.com/",
      title: "Top Dog",
    },
    {
      extraText: " (Pasadena, California)",
      link: "https://www.yelp.com/biz/top-restaurant-pasadena",
      title: "Top Restaurant",
    },
  ],
  shows: [
    {
      link: "https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender",
      title: <em>Avatar: The Last Airbender</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Code_Geass",
      title: <em>Code Geass</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Hunter_%C3%97_Hunter",
      title: <em>Hunter x Hunter</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/New_Girl",
      title: <em>New Girl</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Parks_and_Recreation",
      title: <em>Parks and Rec</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Samurai_Champloo",
      title: <em>Samurai Champloo</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Seinfeld",
      title: <em>Seinfeld</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Scrubs_(TV_series)",
      title: <em>Scrubs</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Samurai_Champloo",
      title: <em>That '70s Show</em>,
    },
  ],
  movies: [
    {
      link: "https://en.wikipedia.org/wiki/Frances_Ha",
      title: <em>Frances Ha</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/The_Grand_Budapest_Hotel",
      title: <em>The Grand Budapest Hotel</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Parasite_(2019_film)",
      title: <em>Parasite</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Ratatouille_(film)",
      title: <em>Ratatouille</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Wizards_(film)",
      title: <em>Wizards</em>,
    },
    {
      link: "https://en.wikipedia.org/wiki/Zoolander",
      title: <em>Zoolander</em>,
    },
  ],
};

function intersperse(
  arr: Array<any>,
  separator: any,
  lastSeparator: any
): Array<any> {
  return arr.reduce((acc, currVal, index) => {
    if (index === arr.length - 1) {
      return [...acc, lastSeparator, currVal];
    }
    if (index !== 0) {
      return [...acc, separator, currVal];
    }
    return [currVal];
  }, []);
}

type FavoriteItemButtonProps = {
  item: FavoriteItemEnum;
  selectedFavorite: FavoriteItemEnum;
  setSelectedFavorite: (item: FavoriteItemEnum) => void;
};

function FavoriteItemButton({
  item,
  selectedFavorite,
  setSelectedFavorite,
}: FavoriteItemButtonProps) {
  const isSelected = item === selectedFavorite;
  return (
    <button
      className={classes(
        styles.favoriteItem,
        isSelected ? styles.favoriteItemSelected : ""
      )}
      onClick={() => setSelectedFavorite(item)}
    >
      {item}
    </button>
  );
}

type FavoriteItemProps = {
  extraText?: string;
  link: string;
  title: string | JSX.Element;
};

function FavoriteItem({ extraText, link, title }: FavoriteItemProps) {
  return (
    <>
      <Link href={link}>{title}</Link>
      {extraText == null ? null : extraText}
    </>
  );
}

export default function HomeFavoritesSection() {
  const [selectedFavorite, setSelectedFavorite] = useState<FavoriteItemEnum>(
    FavoriteItemEnum.Books
  );

  const favoriteItemButtons = Object.values(FavoriteItemEnum).map((item) => (
    <FavoriteItemButton
      key={item}
      item={item}
      selectedFavorite={selectedFavorite}
      setSelectedFavorite={setSelectedFavorite}
    />
  ));

  // If i want to center the list
  // https://perishablepress.com/css-center-align-list-left-align-text/

  return (
    <div
      className={classes(styles.container, containerStyles.container)}
      id="favorites"
    >
      <div
        className={classes(
          styles.innerContainer,
          containerStyles.innerContainer
        )}
      >
        <HomeSectionTitle title="Favorites" />
        <HomeParagraph>
          <div className={styles.favoriteItemButtons}>
            Here are some of my favorite{" "}
            {intersperse(favoriteItemButtons, ", ", ", and ")}.{" "}
            <Link href="https://twitter.com/pencilflip">Tweet me</Link> if you
            have any recommendations!
          </div>
          <ul>
            {FAVORITES[selectedFavorite].map((info) => (
              <li key={info.link}>
                <FavoriteItem
                  extraText={info.extraText}
                  link={info.link}
                  title={info.title}
                />
              </li>
            ))}
          </ul>
        </HomeParagraph>
      </div>
    </div>
  );
}
