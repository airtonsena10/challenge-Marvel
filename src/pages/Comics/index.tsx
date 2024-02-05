import { CardSection } from "../../components/CardSection";
import { Header } from "../../components/Header";
import { ComicsContainer } from "./styles";

import thorUrl from "../../assets/images/hqs/thorVikings.svg";
import silverSurferUrl from "../../assets/images/hqs/silverSurfer.svg";
import wolverineUrl from "../../assets/images/hqs/wolverine.svg";
import americanasUrl from "../../assets/images/americanasIcon.svg";
import amazonUrl from "../../assets/images/amazonIcon.svg";

const comicsList = [
  {
    name: "Thor: Vikings",
    about:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    availableIn: [americanasUrl, amazonUrl],
    rating: 5,
    image: thorUrl,
  },
  {
    name: "Surfista Prateado: Parábola",
    about:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    availableIn: [americanasUrl, amazonUrl],
    rating: 4,
    image: silverSurferUrl,
  },
  {
    name: "Wolverine: Origens",
    about: `Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.`,
    availableIn: [americanasUrl, amazonUrl],
    rating: 3,
    image: wolverineUrl,
  },
];

export default function Comics() {
  return (
    <>
      <Header />
      <ComicsContainer>
        <CardSection list={comicsList} />
      </ComicsContainer>
    </>
  );
}
