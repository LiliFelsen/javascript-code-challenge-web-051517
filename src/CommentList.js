class CommentList {
  constructor(data) {
    this.comments = []
    this.comments.forEach(comment => new Comment(comment))
  }

  addComment(text) {
    let comment = new Comment(text)
    this.comments.push(comment)
  }

  renderList() {
    let listHTML = '<ul>'
    this.comments.forEach(comment => comment.renderComments()).join('')

    listHTML += '</ul>'
  }

  renderFilteredList(searchTerm) {
    this.comments = this.comments.filter(comment => {return comment.includes(searchTerm)})
  }

}
