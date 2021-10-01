import "./styles.css";
import Card from "./card";
export default function Main(props) {
  return (
    <div className="main">
      <Card handleClick={props.handleClick} photos={props.photos} />
    </div>
  );
}
