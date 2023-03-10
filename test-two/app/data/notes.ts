import fs from 'fs/promises';
import path from 'path';
const NOTES_FILE = path.join(__dirname, 'notes.json');

export type Note = {
    id?: string;
    title: string;
    content: string;
}

export async function getStoredNotes() {
    try {
        const rawFileContent = await fs.readFile(NOTES_FILE, { encoding: 'utf-8' });
        const data = JSON.parse(rawFileContent);
        const storedNotes = data.notes ?? [];
        return storedNotes;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getNoteById(id: string) {
  try {
    const notes = await getStoredNotes();
    const note = notes.find((note: Note) => note.id === id);
    return note;
  } catch (error) {
    console.log(error);
    return; 
  }
}

export async function storeNote(note: Note) {
    const notesData = await getStoredNotes();
    const notes = notesData ?? [];
    note.id = new Date().valueOf().toString();
    return fs.writeFile(NOTES_FILE, JSON.stringify({ notes: [...notes, note] || [] }));
}