export interface BookType {
  name: string;
  author: string;

  released: number;
  type: "Lyrika" | "Epika" | "Drama" | "Lyricko-epický";
  genre: string;
  theme: string;
  motives: string;
  timespace: string;
  composition: "Chronologická" | "Retrospektivní";
  compositionNote?: string;

  narrator: "Ich" | "Er" | "Lyrický subjekt";
  narratorNote?: string;
  tellingMeans: string;
  speechType: string;
  verse?: string;

  lexMeans: string;
  figures: string;

  meta: {
    file: string;
    url: string;
    updated: string;
    created: string;
  };
}
