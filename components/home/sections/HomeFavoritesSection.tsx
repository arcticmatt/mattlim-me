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
  Restaurants = "restaurants",
  Shows = "shows",
  Songs = "songs",
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
  artists: [],
  restaurants: [],
  shows: [],
  songs: [],
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
      item={item}
      selectedFavorite={selectedFavorite}
      setSelectedFavorite={setSelectedFavorite}
    />
  ));

  // If i want to center the list
  // https://perishablepress.com/css-center-align-list-left-align-text/

  return (
    <div className={classes(styles.container, containerStyles.container)}>
      <div className={containerStyles.innerContainer}>
        <HomeSectionTitle title="Favorites" />
        <div className={styles.favoriteItemButtons}>
          Here are my favorite{" "}
          {intersperse(favoriteItemButtons, ", ", ", and ")}.
        </div>
        <ul>
          {FAVORITES[selectedFavorite].map((info) => (
            <li>
              <FavoriteItem
                extraText={info.extraText}
                link={info.link}
                title={info.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
