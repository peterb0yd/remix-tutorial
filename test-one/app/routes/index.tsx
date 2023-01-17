import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/demo">Demo</Link>
    </div>
  );
}
