import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './NewPost.module.css';
import { PostType } from '../../types';

interface NewPostProps {
  onCancel: () => void;
  addPost: (newPost: PostType) => void
}

const NewPost: FC<NewPostProps> = ({ onCancel, addPost }) => {
  const [formData, setFormData] = useState<PostType>({ body: '', author: '', id: '' })

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value  }));
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData((prev) => ({ ...prev, id: uuidv4() }));    
    addPost(formData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formRow}>
        <label htmlFor="body">Text</label>
        <textarea
          name="body"
          id="body"
          rows={3}
          onChange={changeHandler}
          value={formData.body}/>
      </div>
      <div className={classes.formRow}>
        <label htmlFor="author">Your Name</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={changeHandler}
          required
        />
      </div>
      <div className={`${classes.actions} ${classes.formRow}`}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
