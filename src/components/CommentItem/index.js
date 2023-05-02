import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {details, deleteComment, likedComment} = props
  const {name, comment, date, isLike, profileBg, id} = details
  const postedTime = formatDistanceToNow(date)

  function onDeleteComment() {
    deleteComment(id)
  }

  function likeTheComment() {
    likedComment(id)
  }

  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedText = isLike ? 'liked-text' : null

  return (
    <li className="comment-list">
      <div className="date-profile-name-container">
        <p className={`profile-icon ${profileBg}`}>{name.slice(0, 1)}</p>
        <div>
          <p className="name">{name}</p>
          <p className="comment">{comment}</p>
        </div>

        <p className="date">{postedTime}</p>
      </div>

      <div className="like-delete-container">
        <div className="like-container">
          <button
            className="delete-button"
            type="button"
            onClick={likeTheComment}
          >
            <img src={likeImage} alt="like" className="like-icon" />
          </button>

          <p className={`like-text ${likedText}`}>Like</p>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
