// modal.js
// CONTROL *ALL* THE MODALS!!!1!1

var modal = {
  open: function(title, poster, description) {
    modal.populate(title, poster, description);
    $("#movie-modal").modal("show");
  },
  populate: function(title, poster, description) {
    $("#modal-title-header").html(title);
    $("#modal-poster").attr("src", poster);
    $("#modal-movie-title").html(title);
    $("#movie-description").html(description);
  }
};