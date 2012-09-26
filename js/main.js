// main.js
// The main/general stuff

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
  set_video: function(src) {
    var tag = document.getElementsByTagName('video')[0];
    
    tag.src = src;
    tag.load();
    video.prepare_width(tag);
    
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
    }
  }
}