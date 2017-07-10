$(document).ready(function(){
  const commentList = new CommentList()
  addCommentToList(commentList)
  filterCommentList(commentList)
})

function addCommentToList(commentList) {
  $('#note-form').on("submit", function(event){
    event.preventDefault()
    let comment = $('#commentText').val()
    commentList.addComment(comment)
    $('#comments-list').html(commentList.renderList())
    $('#commentText').val('')
  })
}

function filterCommentList(commentList) {
  $('#search-form').on("submit", function(event){
    event.preventDefault()
    let searchTerm = $('#searchTerm').val()
    $('#comments-list').html(commentList.renderFilteredList(searchTerm))
  })
}
