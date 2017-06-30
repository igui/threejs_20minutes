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
			2000 // far
		);

		camera.position.z = 500;
		camera.position.x = 0;
		camera.position.x = 0;


		// Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
		scene = new THREE.Scene();
		// Groups simply agrupate objects inside an scene
		var group = new THREE.Group();
		scene.add(group);

		// earth
		var loader = new THREE.TextureLoader();
		loader.load( 'earth.jpg', function ( texture ) {
			var geometry = new THREE.SphereGeometry(200, 20, 20);
			var material = new THREE.MeshBasicMaterial(
				{ map: texture, /*color: 'red', /*wireframe: true*/ }
			);
			var mesh = new THREE.Mesh(geometry, material);
			group.add( mesh );
		});

		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor( 0xffffff );
		//renderer.setPixelRatio( window.devicePixelRatio );
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
