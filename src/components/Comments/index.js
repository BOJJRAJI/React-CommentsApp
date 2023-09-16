import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  getName = e => {
    this.setState({name: e.target.value})
  }

  getComment = e => {
    this.setState({comment: e.target.value})
  }

  addComment = () => {
    const {name, comment} = this.state
    const index = Math.ceil(
      Math.random() * (initialContainerBackgroundClassNames.length - 1),
    )
    const bgColor = initialContainerBackgroundClassNames[index]

    const commentItem = {
      id: v4(),
      isLike: false,
      name,
      comment,
      bgColor,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentItem],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filterList = commentsList.filter(item => item.id !== id)
    this.setState({commentsList: filterList})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(item => {
        if (item.id === id) {
          return {...item, isLike: !item.isLike}
        }
        return item
      }),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    console.log(commentsList)
    return (
      <div className="bg-container">
        <div className="card">
          <form className="data-container" onSubmit={this.addComment}>
            <h1 className="heading">Comments</h1>
            <p className="text">Say Something About 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="input-element"
              type="text"
              onChange={this.getName}
              value={name}
            />
            <textarea
              rows="10"
              cols="30"
              value={comment}
              className="textarea-element"
              placeholder="Your Comment"
              onChange={this.getComment}
            />
            <button className="add-comment-button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr className="line" />
        <div className="count-container">
          <button className="count-button" type="button">
            {commentsList.length}
          </button>
          <p className="text-comment">Comments</p>
        </div>
        <ul className="comments-container">
          {commentsList.map(item => (
            <CommentItem
              itemDetails={item}
              key={item.id}
              deleteComment={this.deleteComment}
              toggleLike={this.toggleLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
