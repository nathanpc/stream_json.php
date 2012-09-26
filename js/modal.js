// modal.js
// CONTROL *ALL* THE MODALS!!!1!1

var modal = {
  open: function(title, poster, description, id) {
    modal.populate(title, poster, description, id);
    
    $("#modal-poster").error(function(){
      $(this).attr("src", "img/no-poster-placeholder.png");
    });
    
    $("#movie-modal").modal("show");
  },
  populate: function(title, poster, description, id) {
    $("#modal-title-header").html(title);
    $("#modal-poster").attr("src", poster);
    $("#modal-movie-title").html(title);
    $("#movie-description").html(description);
    $("#watch-button").attr("onclick", "modal.watch_video('" + id + "')");
  },
  watch_video: function(id) {
    var req_url = "get_video_url.php?id=" + id;
    var poster_url = "http://localhost:4881/getPoster/" + id;
    
    $.ajax(req_url, {
      type: "GET",
      success: function(src) {
        video.set_video(src, poster_url);
        nav_tab.to_current_watching();
      },
      error: function(data) {
        alert("An error occured while fetching your video. Please look at the logs (dev tools) for more information.");
        
        console.log("An error occured while fetching your video");
        console.log(data);
      }
    });
  }
};