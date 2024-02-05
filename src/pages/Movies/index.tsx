import { CardSection } from "../../components/CardSection";
import { Header } from "../../components/Header";
import { MoviesContainer, Filter, Choose, Option } from "./styles";

import ironmanUrl from "../../assets/images/movies/ironman.svg";
import ironman2Url from "../../assets/images/movies/ironman2.svg";
import thorUrl from "../../assets/images/movies/thor.svg";
import captainAmericaUrl from "../../assets/images/movies/captainAmerica.svg";
import captainMarvelUrl from "../../assets/images/movies/captainMarvel.svg";
import disneyUrl from "../../assets/images/disneyPlus.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const moviesList = [
  {
    name: "Homem de Ferro",
    about:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    availableIn: [disneyUrl],
    rating: 3,
    image: ironmanUrl,
    chronology: 3,
    date: 2008,
  },
  {
    name: "Homem de Ferro 2",
    about:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
    availableIn: [disneyUrl],
    rating: 4,
    image: ironman2Url,
    chronology: 4,
    date: 2010,
  },
  {
    name: "Thor",
    about: `Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.`,
    availableIn: [disneyUrl],
    rating: 3,
    image: thorUrl,
    chronology: 5,
    date: 2011,
  },
  {
    name: "Capitão América",
    about: `Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.`,
    availableIn: [disneyUrl],
    rating: 4,
    image: captainAmericaUrl,
    chronology: 1,
    date: 2011 + 0.5,
  },
  {
    name: "Capitã Marvel",
    about: `Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.`,
    availableIn: [disneyUrl],
    rating: 4,
    image: captainMarvelUrl,
    chronology: 2,
    date: 2019,
  },
];

export default function Movies() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  if (selected === "Cronologia") {
    moviesList.sort((a, b) => a.chronology - b.chronology);
  } else {
    moviesList.sort((a, b) => a.date - b.date);
  }

  return (
    <>
      <Header />
      <MoviesContainer>
        <Filter open={open}>
          <Choose onClick={() => setOpen(!open)}>
            {selected !== "" ? selected : "Filtrar por"}
            <FontAwesomeIcon icon={faChevronDown} />
          </Choose>
          <Option
            open={open}
            onClick={() => {
              setSelected("Lançamento");
              setOpen(!open);
            }}
          >
            Lançamento
          </Option>
          <Option
            open={open}
            onClick={() => {
              setSelected("Cronologia");
              setOpen(!open);
            }}
          >
            Cronologia
          </Option>
        </Filter>
        <CardSection list={moviesList} />
      </MoviesContainer>
    </>
  );
}
