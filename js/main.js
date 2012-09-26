// main.js
// The main/general stuff

$(document).ready(function() {
  $("#add-video-form").bind("submit", function (e) {
    

    e.preventDefault();
    return false;
  });
});

var image = {
  error: function(image) {
    image.onerror = "";
    image.src = "img/no-poster-placeholder.png";

    return true;
  }
};

var nav_tab = {
  click: function(nav) {
    nav_tab.clear_selected();
    $(nav).addClass("active");
    
    if ($(nav).attr("id") == "home-nav-tab") {
      $("#currently-watching").addClass("hidden");
      $("#poster-list").removeClass("hidden");
    } else if ($(nav).attr("id") == "watching-nav-tab") {
      $("#poster-list").addClass("hidden");
      $("#currently-watching").removeClass("hidden");
    }
  },
  to_current_watching: function() {
    nav_tab.clear_selected();
    $("#watching-nav-tab").addClass("active");
    
    $("#poster-list").addClass("hidden");
    $("#currently-watching").removeClass("hidden");
  },
  clear_selected: function() {
    $(".nav .active").removeClass("active");
  }
};

var video = {
  set_video: function(src, poster) {
    var tag = document.getElementsByTagName('video')[0];
    
    tag.src = src;
    tag.load();
    video.prepare_width(tag);
    tag.poster = poster;
    
    $("#movie-modal").modal("hide");
  },
  prepare_width: function(tag) {
    if ($("#currently-watching").width() > tag.videoWidth) {
      tag.width = $("#currently-watching").width();
    } else {
      tag.width = tag.videoWidth;
    }
  }
};

var button = {
  click: function(button) {
    if (button == "add-video") {
      $("#add-modal").modal("show");
    } else if (button == "cancel-add-modal") {
      $("#add-modal").modal("hide");
    } else if (button == "add-video-send") {
      $.ajax({
        type: "POST",
        url: "add_video.php",
        data: {
          "id": $("#id").val(),
          "title": $("#title").val(),
          "poster": $("#poster").val(),
          "file_remote": $("input[name=file_remote]:checked").val(),
          "file_location": $("#file_location").val(),
          "description_format": $("#description_format").val(),
          "description": $("#description").val()
        },
        success: function (result) {
          console.log("New video added.");
          try {
            console.log(JSON.parse(result));
          } catch(e) {
            alert("Error while trying to parse the server response. Please check the logs (web console) for more information.");
            
            console.log("Error while trying to parse the server response.");
            console.log(result);
            console.log(e);
          }
          
          $("#add-modal").modal("hide");
          location.reload();
        },
        error: function(data) {
          console.log("An error occurred while trying to add your video.");
          console.log(data);

          alert("An error occurred while trying to add your video. Please check the logs (in the Web Console) for more information.");
        }
      });
    }
  }
}