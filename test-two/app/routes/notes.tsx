import { json, redirect } from '@remix-run/node';
import { Link, Links, Meta, Scripts, useCatch, useLoaderData } from '@remix-run/react';
import MainNavigation from '~/components/main-navigation';
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
  const notes = await getStoredNotes();
  // if (!notes || !notes.length) {
  //   throw json(
  //     { message: 'No notes found' },
  //     {
  //       status: 404,
  //       statusText: 'Not Found',
  //     }
  //   );
  // }

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
  return redirect('/notes');
};

export const CatchBoundary = ({ error }: { error: Error }) => {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || 'Data not found';
  return (
    <main>
      <h1>Something went wrong (from /notes catchboundary)</h1>
      <p>{message}</p>
      <p>Back to <Link to='/'>Safety</Link></p>
      <Scripts />
    </main>
  );
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <main>
      <h1>Something went wrong (from /notes)</h1>
      <p>{error.message}</p>
      <p>Back to <Link to='/'>Safety</Link></p>
      <Scripts />
    </main>
  );
};

export const links = () => [
  ...noteLinks(),
];