AFRAME.registerComponent("fireballs", {
    init: function () {
      for (var i = 1; i <= 5; i++) {
        var id = `obstacle${i}`;

        var posX = Math.random() +5;
        var posY = 15
        var posZ = 1;
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.flyingFires(id, position);
      }
    },
    flyingFires: (id, position) => {
      var sceneEl = document.querySelector("#scene");

      var fireEl = document.createElement("a-entity");

      fireEl.setAttribute("id", id);
  
      fireEl.setAttribute("position", position);
      fireEl.setAttribute("scale", { x: 0.003, y: 0.003, z: 0.03 });
  
      fireEl.setAttribute("gltf-model", "./assets/fireball/scene.gltf");
  
      fireEl.setAttribute("animation-mixer", {});
  
      fireEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 5,
      });
  
      fireEl.setAttribute("game-play", {
        elementId: `#${id}`
      })

      sceneEl.appendChild(fireEl);
    },
  });
  