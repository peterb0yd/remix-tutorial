import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <h1>My Notes</h1>
      <Link to="/notes">Notes</Link>
    </main>
  );
}
