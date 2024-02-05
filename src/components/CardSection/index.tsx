import { useState } from "react";
import { CardSectionSlide } from "./styles";
import { Card } from "../Card";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ItemProps } from "./types";

export const CardSection = ({ list }: { list: ItemProps[] }) => {
  const [inFocus, setInFocus] = useState<number | null>(null);

  return (
    <>
      <CardSectionSlide inFocus={inFocus}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={100}
          slidesPerView={3}
          breakpoints={{
            1440: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 50,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {list.map(
            ({ name, about, movies, availableIn, rating, image }, index) => (
              <SwiperSlide
                key={index}
                style={{ zIndex: inFocus === index ? "60" : "-1" }}
              >
                <Card
                  name={name}
                  about={about}
                  movies={movies}
                  availableIn={availableIn}
                  rating={rating}
                  image={image}
                  index={index}
                  inFocus={inFocus}
                  setInFocus={setInFocus}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="swiper-button-prev"
          onClick={() => setInFocus(null)}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="swiper-button-next"
          onClick={() => setInFocus(null)}
        />
      </CardSectionSlide>
    </>
  );
};
