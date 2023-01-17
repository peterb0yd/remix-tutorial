import { DataFunctionArgs, MetaFunction, Request, json } from '@remix-run/node';
import { Link, Params, useLoaderData } from '@remix-run/react';
import { getNoteById } from '~/data/notes';

export default function NoteDetailsPage() {
  const note = useLoaderData();


  return (
    <main>
      <p>Back to <Link to='/notes'>Notes</Link></p>
      <h1>Note Details</h1>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
    </main>
  );
}

export const loader = async ({ params }: DataFunctionArgs) => {
  console.log(params);
  const noteId = params.noteId;

  if (!noteId) {
    throw json({ message: 'Note not found', status: 404, statusText: 'Not Found' });
  } 

  return getNoteById(noteId);
}

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `Note Page - ${data?.title}`,
    description: 'This is the note page'
  }
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <main>
      <h1>Something went wrong (from /notes/$noteId ErrorBoundary)</h1>
      <p>{error.message}</p>
      <p>Back to <Link to='/'>Safety</Link></p>
    </main>
  );
}