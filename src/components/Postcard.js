import "./Postcard.css";

export default function PostCard({ title, description }) {
  return (
    <div className="cardcontainer">
      <div className="title-text">{title}</div>
      <div>{description}</div>
    </div>
  );
}
