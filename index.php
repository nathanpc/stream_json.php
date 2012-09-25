<!DOCTYPE html>
<html>
  <head>
    <title>stream_json.php</title>
    
    <!-- Libraries -->
    <script src="libs/jquery-1.8.2.min.js" type="text/javascript" charset="utf-8"></script>
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css" type="text/css" media="screen" title="no title" charset="utf-8">
    <script src="libs/bootstrap/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
    
    <!-- Styling -->
    <link rel="stylesheet" href="css/main.css" type="text/css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="css/poster_tile.css" type="text/css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="css/modal.css" type="text/css" media="screen" title="no title" charset="utf-8">
    
    <!-- JavaScript -->
    <script src="js/modal.js" type="text/javascript" charset="utf-8"></script>
    
  </head>
  <body>
    <!-- NavBar -->
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#">stream_json.php</a>
          <ul class="nav">
            <li id="home-nav-tab" class="active"><a href="#">Home</a></li>
            <li id="watching-nav-tab"><a href="#">Currently Watching</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <div class="modal hide fade" id="movie-modal">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h3 id="modal-title-header">Movie Title</h3>
      </div>
      <div class="modal-body">
        <img src="Indie-Game.jpg" id="modal-poster" class="img-polaroid" />
        
        <h4 id="modal-movie-title">Indie Game: The Movie</h4>
        <div id="movie-description">
          <p>With the twenty-first century comes a new breed of struggling independent artist: the indie game designer. Refusing to toil for major developers, these innovators independently conceive, design, and program their distinctly personal games in the hope that they, too, may find success.</p>

          <p>After two years of painstaking work, designer Edmund McMillen and programmer Tommy Refenes await the release of their first major game for Xbox, Super Meat Boyâ€”the adventures of a skinless boy in search of his girlfriend, who is made of bandages. At PAX, a major video-game expo, developer Phil Fish unveils his highly anticipated, four-years-in-the-making FEZ. Jonathan Blow considers beginning a new game after creating Braid, one of the highest-rated games of all time.</p>

          <p>First-time filmmaking duo Lisanne Pajot and James Swirsky capture the emotional journey of these meticulously obsessive artists who devote their lives to their interactive art. Four developers, three games, and one ultimate goalâ€” to express oneself through a video game.</p>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn btn-primary">Watch</a>
      </div>
    </div>
    
    <div id="poster-list" class="container">
      <div class="row-fluid">
        <div class="span3 poster-tile" onclick="">
          <img src="Indie-Game.jpg" class="img-polaroid" />
          <b>Indie Game: The Movie, testing the overflow stuff. Hope this works</b>
        </div>
        <div class="span3 poster-tile">
          <img src="Indie-Game.jpg" class="img-polaroid" />
          <b>Indie Game: The Movie</b>
        </div>
        <div class="span3 poster-tile">
          <img src="Indie-Game.jpg" class="img-polaroid" />
          <b>Indie Game: The Movie</b>
        </div>
        <div class="span3 poster-tile">
          <img src="Indie-Game.jpg" class="img-polaroid" />
          <b>Indie Game: The Movie</b>
        </div>
      </div>
      
      <hr>
      <footer>
        <a href="http://nathanpc.github.com/stream.json/">stream.json</a> and <a href="http://nathanpc.github.com/stream_json.php/">stream_json.php</a> were written by <a href="http://about.me/nathanpc">Nathan Campos</a> and licensed under <a href="www.gnu.org/copyleft/gpl.html">GPLv3</a>.
      </footer>
    </div>
  </body>
</html>