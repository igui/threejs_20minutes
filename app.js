/* globals THREE */
(function()
{
	'use strict';

	var scene, camera, renderer;

 	function init()
	{
		console.log('init');

		var container = document.querySelector('the-container');

		camera = new THREE.PerspectiveCamera(
			60, // Field of View (in deg)
			window.innerWidth / window.innerHeight, // aspect ratio
			1, // near 
			30 // far
		);

		// Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
		scene = new THREE.Scene();
		// Groups simply agrupate objects inside an scene
		//var group = new THREE.Group();
		//scene.add(group);

		// earth
		var loader = new THREE.TextureLoader();
		loader.load( 'earth.jpg', function ( texture ) {
			var geometry = new THREE.SphereGeometry(1, 200, 200);
			var material = new THREE.MeshBasicMaterial(
				{ map: texture, /*color: 'red', /*wireframe: true*/ }
			);
			var mesh = new THREE.Mesh(geometry, material);
			mesh.position.set(0,0,-2);
			scene.add(mesh);
		});

		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth-50, window.innerHeight-50);
		container.appendChild(renderer.domElement);

		// render loop
		render();
	}

	function render()
	{
		renderer.render(scene, camera);
		window.requestAnimationFrame(render);
	}

  	window.addEventListener('load', init);
})();
