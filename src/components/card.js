import "./styles.css";
import uniqid from "uniqid";

export default function Card(props) {
  return (
    <div className="cards">
      {props.photos.map((e) => {
        return (
          <div className="card" key={uniqid()}>
            <figure>
              <img
                onClick={props.handleClick}
                src={e.url}
                title={e.title}
                alt="pic of food"
              />
              <figcaption>{e.title}</figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
