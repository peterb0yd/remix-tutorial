import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from './NewNote.css';

const NewNote = () => {
    const data = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    console.log({ data });
    
    return (
        <Form className="new-note" method="post">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            {data?.errors?.title && <p className="error">{data.errors.title}</p>}
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" />
            {data?.errors?.content && <p className="error">{data.errors.content}</p>}
            <button disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Adding...' : 'Save'}
            </button>
        </Form>
    );
}

export default NewNote;

export const links = () => [
    { rel: 'stylesheet', href: styles },
]