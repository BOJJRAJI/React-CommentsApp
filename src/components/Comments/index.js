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
  state = {commentsList: [], nameInput: '', commentInput: ''}

  getName = event => {
    this.setState({nameInput: event.target.value})
  }

  getComment = event => {
    this.setState({commentInput: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {commentsList, nameInput, commentInput} = this.state

    const backGroundColor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLike: false,
      profileBg: initialContainerBackgroundClassNames[backGroundColor],
    }

    
    this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        nameInput: '',
        commentInput: '',
      }))

    console.log(commentsList)
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(comment => comment.id !== id)

    this.setState({commentsList: filteredList})
  }

  likedComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList,nameInput, commentInput} = this.state
    const count = commentsList.length
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="form-image-container">
            <form className="form-container" onSubmit={this.addComment}>
              <h1 className="comment-heading">Comments</h1>
              <p className="text">Say Something about 4.0 TEchnologies</p>
              <input
                className="name-element"
                type="text"
                placeholder="Your Name"
                onChange={this.getName}
                value={nameInput}
              />
              <textarea
                className="comment-content"
                rows="8"
                cols="33"
                placeholder="Your Comments"
                onChange={this.getComment}
                value={commentInput}
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comment-image"
            />
          </div>
          <div className="comments-container">
            <div className="comments-count-container">
              <p className="count-para">{count}</p>
              <p className="count-text">Comments</p>
            </div>
            <ul className="comments-list">
              {commentsList.map(eachItem => (
                <CommentItem
                  details={eachItem}
                  key={eachItem.id}
                  deleteComment={this.deleteComment}
                  likedComment={this.likedComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
