import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found :l</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        quo minus similique sequi voluptate beatae sunt magnam nostrum
        asperiores numquam.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
