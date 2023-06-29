let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b86a5e;">Desarrollo sitios web y me gusta aprender sobre programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
