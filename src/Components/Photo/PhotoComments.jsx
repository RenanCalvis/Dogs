import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments }) => {
  const [photoComments, setPhotoComments] = React.useState(() => comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, []);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {photoComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setPhotoComments={setPhotoComments} />
      )}
    </>
  );
};

export default PhotoComments;
