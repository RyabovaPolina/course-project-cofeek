import "./FeedbackStyle.css";
import feedbacks from "../../data/feedback";
import Stars from "../Stars/Stars";

export default function Feedback() {
  return (
    <section className="container-feedback">
      <h2 className="title">отзывы</h2>
      <div className="container-feedback-text">
        {feedbacks.map((feedback, index) => {
          if (index < 6) {
            return (
              <div
                key={feedback.id}
                className={`text-feedback ${
                  feedback.id % 3 === 0 ? `empty` : ``
                }`}
              >
                {index !== 2 && index !== 5 && (
                  <>
                    <p>{feedback.text}</p>
                    <span className="name-feedback">{feedback.name}</span>
                    <Stars rating={feedback.rating}></Stars>
                  </>
                )}
              </div>
            );
          }
        })}
      </div>
      <hr />
    </section>
  );
}
