import "./StarsStyle.css";

export default function Stars(props) {
  const totalStars = [0, 0, 0, 0, 0];
  const elemStars = totalStars.map((star, index) => {
    if (index < props.rating) {
      return (
        <span key={index} className="star">
          {"★"}
        </span>
      );
    } else
      return (
        <span key={index} className="star">
          {"☆"}
        </span>
      );
  });

  return <>{elemStars}</>;
}
