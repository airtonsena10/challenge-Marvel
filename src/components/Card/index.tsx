import { CardContainer, CardDescription, FullCardDescription } from "./styles";
import { Rate } from "../Stars";
import { CardProps } from "./types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export const Card = (props: CardProps) => {
  return (
    <>
      <CardContainer {...props}>
        {props.inFocus === props.index ? (
          <FullCardDescription index={props.index}>
            <h2>{props.name}</h2>

            {props.movies ? (
              <h4>Aparições:</h4>
            ) : (
              <>
                <p>{props.about}</p>
                <h4>Disponível em:</h4>
                {props.availableIn ? (
                  props.availableIn.map((plataformUrl, index) => (
                    <img key={index} src={plataformUrl} />
                  ))
                ) : (
                  <p>Não disponível</p>
                )}
              </>
            )}

            <ul>
              {props.movies
                ? props.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                  ))
                : ""}
            </ul>
            <h2>Crítica</h2>
            {props.rating ? (
              <Rate rating={props.rating} />
            ) : (
              <p>Não possuí crítica</p>
            )}

            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className="closeCard"
              onClick={() => props.setInFocus(null)}
            />
          </FullCardDescription>
        ) : (
          <CardDescription>
            <h2>{props.name}</h2>
            <p>{props.about}</p>
            <p onClick={() => props.setInFocus(props.index)}>ver detalhes</p>
          </CardDescription>
        )}
      </CardContainer>
    </>
  );
};
