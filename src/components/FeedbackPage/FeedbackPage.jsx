import BigTitle from "../BigTitle/BigTitle";
import "./FeedbackPageStyle.css";
import feedbacks from "../../data/feedback";
import Stars from "../Stars/Stars";
import feedback_1 from "../../assets/image-feedback-1.jpg";
import feedback_2 from "../../assets/image-feedback-2.jpg";
import feedback_3 from "../../assets/image-feedback-3.jpg";
import feedback_4 from "../../assets/image-feedback-4.jpg";
import feedback_5 from "../../assets/image-feedback-5.jpg";
import feedback_6 from "../../assets/image-feedback-6.jpg";
import feedback_7 from "../../assets/image-feedback-7.jpg";
import feedback_8 from "../../assets/image-feedback-8.jpg";
import feedback_9 from "../../assets/image-feedback-9.jpg";
import feedback_10 from "../../assets/image-feedback-10.jpg";
import { Helmet } from "react-helmet-async";

const feedbackImages = [feedback_7, feedback_8, feedback_9];

export default function FeedbackPage() {
  return (
    <>
      <Helmet>
        <title>Отзывы — Кофеёк</title>
        <meta
          name="description"
          content="Что говорят наши посетители? Реальные отзывы о кофейне Кофеёк от клиентов."
        />
      </Helmet>
      <div className="container-feedback-page">
        <BigTitle type="come to us"></BigTitle>
        <div className="container-image-text">
          <div className="container-image-1">
            <img src={feedback_1} alt="image" />
          </div>
          <div className="container-text main">
            {feedbacks.slice(0, 2).map((feedback) => (
              <div className="text-feedback page" key={feedback.id}>
                <>
                  <p>{feedback.text}</p>
                  <span className="name-feedback">{feedback.name}</span>
                  <Stars rating={feedback.rating}></Stars>
                </>
              </div>
            ))}
          </div>
        </div>
        <div className="container-two-images-with-lines">
          <div className="container-lines">
            <div className="v-line"></div>
            <div className="v-line"></div>
            <div className="v-line"></div>
            <div className="v-line"></div>
            <div className="v-line"></div>
            <div className="v-line"></div>
            <div className="v-line"></div>
          </div>
          <div className="images-2-3">
            <div className="container-image-2">
              <img src={feedback_2} alt="" />
            </div>
            <div className="container-image-3">
              <img src={feedback_3} alt="" />
            </div>
          </div>
        </div>
        <div className="container-image-text">
          <div className="container-text main">
            {feedbacks.slice(2, 4).map((feedback) => (
              <div className="text-feedback page" key={feedback.id}>
                <>
                  <p>{feedback.text}</p>
                  <span className="name-feedback">{feedback.name}</span>
                  <Stars rating={feedback.rating}></Stars>
                </>
              </div>
            ))}
          </div>
          <div className="container-image-1">
            <img src={feedback_4} alt="image" />
          </div>
        </div>
        <div className="container-two-images">
          <div className="container-image-5">
            <img src={feedback_5} alt="" />
          </div>
          <div className="container-image-6">
            <img src={feedback_6} alt="" />
          </div>
        </div>
        <div className="container-for-three-elements">
          {feedbacks.slice(4, 7).map((feedback, index) => (
            <div className="element" key={index}>
              <div className="container-image-7-8-9">
                <img src={feedbackImages[index]} alt="" />
              </div>
              <div className="container-text container-text-7-8-9">
                <div className="text-feedback page">
                  <p>{feedback.text}</p>
                  <span className="name-feedback">{feedback.name}</span>
                  <Stars rating={feedback.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="big-elements">
          <div className="big-image">
            <img src={feedback_10} alt="" />
          </div>
          <div className="container-text big-text">
            {feedbacks.slice(7, 10).map((feedback) => (
              <div className="text-feedback page" key={feedback.id}>
                <>
                  <p>{feedback.text}</p>
                  <span className="name-feedback">{feedback.name}</span>
                  <Stars rating={feedback.rating}></Stars>
                </>
              </div>
            ))}
          </div>
        </div>
        <BigTitle type="come to us"></BigTitle>
      </div>
    </>
  );
}
