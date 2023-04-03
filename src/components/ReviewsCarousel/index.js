// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onClickingLeftArrow = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(pervState => ({id: pervState.id - 1}))
    }
  }

  onClickingRightArrow = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    const lenOfReviewsList = reviewsList.length
    if (id < lenOfReviewsList - 1) {
      this.setState(pervState => ({id: pervState.id + 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="main-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="profile-container">
          <button
            type="button"
            testid=" leftArrow"
            onClick={this.onClickingLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} className="user-img" alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            onClick={this.onClickingRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

// eslint-disable-next-line prettier/prettier
export default ReviewsCarousel