class Comment {
  constructor(commentText){
    this.commentText = commentText
  }

  renderComment(commentText) {
    return `<li data-text="${this.commentText}" id="comment">${this.commentText}</li>`
  }

}
