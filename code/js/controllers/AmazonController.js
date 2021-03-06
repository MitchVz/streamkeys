;(function() {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    siteName: "Amazon Music",
    playPause: ".playbackControlsView .playButton",
    playNext: ".playbackControlsView .nextButton",
    playPrev: ".playbackControlsView .previousButton",
    like: ".playbackControlsView .thumbsUpButton",
    dislike: ".playbackControlsView .thumbsDownButton",

    playState: ".playbackControlsView .playerIconPause",
    song: ".playbackControlsView .trackTitle",
    artist: ".playbackControlsView .trackArtist",

    hidePlayer: true
  });
})();
