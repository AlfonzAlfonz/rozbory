import * as React from "react";
import { BookType } from "types/book";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import Head from "next/head";

interface Props {
  book: BookType;
}

const Title: React.FC<Props> = ({ book }) => (
  <div className={"mt-n-3"}>
    <Head>
      <title>{book.name} - MaturitniRozbory.cz</title>
      <meta
        name="description"
        content={`Autor: ${book.author} | Žánr: ${book.genre} | ${
          book.timespace
        }`}
      />

      <meta
        name="og:title"
        property="og:title"
        content={book.name + " (MaturitniRozbory.cz)"}
      />
      <meta
        name="og:title"
        property="og:description"
        content={`Autor: ${book.author} | Žánr: ${book.genre} | ${
          book.timespace
        }`}
      />
    </Head>
    <Link href="/" passHref>
      <Button as="a">Zpět</Button>
    </Link>
    <h1>{book.name}</h1>
    <h2>{book.author}</h2>
  </div>
);

export default Title;
