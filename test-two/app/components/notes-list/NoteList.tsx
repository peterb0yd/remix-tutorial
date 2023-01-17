import { Link } from "@remix-run/react";
import { Note } from "~/data/notes";

const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <Link to={note.id ?? ''}>
          <li key={note.id}>
            <p>{note.title}</p>
            <p>{note.content}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NoteList;