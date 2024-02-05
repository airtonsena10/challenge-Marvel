import { Header } from "../../components/Header";
import { CardSection } from "../../components/CardSection";
import { CharactersContainer } from "./styles";

import spidermanUrl from "../../assets/images/chars/spiderman.svg";
import wandaUrl from "../../assets/images/chars/wanda.svg";
import thanosUrl from "../../assets/images/chars/thanos.svg";
import hulkUrl from "../../assets/images/chars/hulk.svg";

const charactersList = [
  {
    name: "Homem-Aranha",
    about:
      "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    movies: [
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 5,
    image: spidermanUrl,
  },
  {
    name: "Wanda Maximoff",
    about:
      "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    movies: [
      "Vingadores - Era de Ultron",
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "WandaVision",
    ],
    rating: 4,
    image: wandaUrl,
  },
  {
    name: "Thanos",
    about: `A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.`,
    movies: [
      "Vingadores",
      "Guardiões da Galáxia - vol. I",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 5,
    image: thanosUrl,
  },
  {
    name: "Hulk",
    about:
      "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    movies: [
      "Vingadores",
      "Vingadores - Era de Ultron",
      "Thor - Ragnarok",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
    rating: 2,
    image: hulkUrl,
  },
];

export default function Characters() {
  return (
    <>
      <Header />
      <CharactersContainer>
        <CardSection list={charactersList} />
      </CharactersContainer>
    </>
  );
}
