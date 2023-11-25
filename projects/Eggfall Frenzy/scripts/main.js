
window.addEventListener("load", function () {
   // let bodyObject = document.querySelector("body");
   // let basket = new Basket();
   // let spawnController = new SpawnController();
   //
   // // Spawn Eggs
   // spawnController.Spawning(() => {
   //    const egg = new Egg();
   //    bodyObject.appendChild(egg.getObject());
   //    // Check collision with the newly spawned object
   //    basket.checkCollision(egg);
   // });
   // // Keyboard Controls
   // document.addEventListener("keydown", function (event) {
   //    if (event.key === "ArrowLeft") basket.moveLeft();
   //    else if (event.key === "ArrowRight") basket.moveRight();
   // });
   // Collision Detection
   new GameManager();

});