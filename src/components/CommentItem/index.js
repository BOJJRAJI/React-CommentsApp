import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {itemDetails, deleteComment, toggleLike} = props
  const {id, name, comment, isLike, bgColor, date} = itemDetails
  const postedTime = formatDistanceToNow(date)

  const likeImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLike ? 'active-like' : 'normal-like'

  return (
    <li className="list-item">
      <div className="profile-container">
        <p className={`${bgColor} profile-image`}>{name.slice(0, 1)}</p>
        <div className="date-comment-container">
          <p className="name">{name}</p>
          <p className="comment">{comment}</p>
        </div>
        <p>{postedTime}</p>
      </div>

      <div className="like-delete-container">
        <div className="like-container">
          <button
            className="like-button"
            type="button"
            onClick={() => toggleLike(id)}
          >
            <img src={likeImage} alt="like" className="like-image" />
          </button>
          <p className={likeText}>Like</p>
        </div>
        <button
          className="like-button"
          type="button"
          onClick={() => deleteComment(id)}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
