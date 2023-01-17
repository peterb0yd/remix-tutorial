import { Note } from "~/data/notes";

const NoteList = ({ notes }: { notes: Note[] }) => { 
    return (
        <ul className="notes-list">
            {notes.map((note) => (
                <li key={note.id}>
                    <p>{note.title}</p>
                    <p>{note.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default NoteList;