$(document).ready(function(){
  addComment()
  filterComment()
})

function addComment() {
  $('#note-form').on("submit", function(event){
    event.preventDefault()
    let comment = $('#commentText').val()
    console.log(comment)
    $('#comments-list').append(`<li data-text="${comment}" id="comment">${comment}</li>`)
    $('#text').val('')
  })
}

function filterComment() {
  $('#search-form').on("submit", function(event){
    event.preventDefault()
    let searchTerm = $('#searchTerm').val()
    console.log(searchTerm)
    if ( ($('#comment').data().text).includes(searchTerm)) {
      $('#comments-list').append($('#comment').innerHTML)
    }
    // $('#comments-list').filter(function() {
    //   debugger
    //   let comments
    // })
  })
}
