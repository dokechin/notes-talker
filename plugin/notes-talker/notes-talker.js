/**
 * Handles opening of and synchronization with the reveal.js
 * notes talker.
 *
 */
var RevealNotesTalker = (function() {

  Reveal.addEventListener( 'ready', talkNotes );
  Reveal.addEventListener( 'slidechanged', talkNotes );

  function talkNotes( event ) {
   // event.previousSlide, event.currentSlide, event.indexh, event.indexv
   var notes = event.currentSlide.querySelector(".notes");
   if(notes) {
       speak(notes.innerHTML);
   }
  }


})();
