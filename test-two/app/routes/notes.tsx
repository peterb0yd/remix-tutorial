import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import NewNote, { links as noteLinks } from '~/components/new-note';
import NoteList from '~/components/notes-list';
import { getStoredNotes, Note, storeNote } from '~/data/notes';

export default function NotesPage() {
    const notes = useLoaderData();

    return (
        <main>
            <h1>My Notes</h1>
            <NewNote />
            <NoteList notes={notes} />
        </main>
    );
}

export const loader = async () => {
    const notes = await getStoredNotes();
    return notes;
};

export const action = async ({ request }: any) => {
    const data = await request.formData();
    const noteData = Object.fromEntries(data) as Note;
    const errors: any = {};
    if (noteData.title.trim().length < 5) {
        errors.title = 'Title must be at least 5 characters long';
    }
    if (noteData.content.trim().length < 10) {
        errors.content = 'Content must be at least 10 characters long';
    }
    if (Object.keys(errors).length) return { errors };
    await storeNote(noteData);
};

export const links = () => [
    ...noteLinks(),
];