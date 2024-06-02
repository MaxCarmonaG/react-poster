import { FC } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../../components/Modal';

const NewPost: FC = () => {
  const navigate = useNavigate();
  const cancelHandler = () => navigate('..');

  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <div className={classes.formRow}>
          <label htmlFor="body">Text</label>
          <textarea
            name="body"
            id="body"
            rows={3}
          />
        </div>
        <div className={classes.formRow}>
          <label htmlFor="author">Your Name</label>
          <input
            type="text"
            id="author"
            name="author"
            required
          />
        </div>
        <div className={`${classes.actions} ${classes.formRow}`}>
          <button type="button" onClick={cancelHandler}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;
