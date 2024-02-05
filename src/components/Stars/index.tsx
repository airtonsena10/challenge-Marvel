import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Rate = (props: { rating: number }) => {
  const stars: JSX.Element[] = Array(5);
  stars.fill(<FontAwesomeIcon icon={faStar} size="2x" color="gray" />);
  stars.fill(
    <FontAwesomeIcon icon={faStar} size="2x" color="#FFB300" />,
    0,
    props.rating
  );

  return (
    <>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </>
  );
};
