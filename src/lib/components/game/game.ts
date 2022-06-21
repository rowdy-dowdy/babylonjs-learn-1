import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder } from 'babylonjs';
// import * as BABYLON{ Vector3 } from 'babylonjs';

// class Playground {
//   public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
//       // This creates a basic Babylon Scene object (non-mesh)
//       var scene = new BABYLON.Scene(engine);

//       // This creates and positions a free camera (non-mesh)
//       var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

//       // This targets the camera to scene origin
//       camera.setTarget(BABYLON.Vector3.Zero());

//       // This attaches the camera to the canvas
//       camera.attachControl(canvas, true);

//       // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
//       var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

//       // Default intensity is 1. Let's dim the light a small amount
//       light.intensity = 0.7;

//       // Our built-in 'sphere' shape. Params: name, options, scene
//       var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

//       // Move the sphere upward 1/2 its height
//       sphere.position.y = 1;

//       // Our built-in 'ground' shape. Params: name, options, scene
//       var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

//       return scene;
//   }
// }

export class Playground {
  scene: Scene
  engine: Engine


  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, false)
    this.scene = this.createScene()

    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  createScene(): Scene {
    const scene = new Scene(this.engine)
    const camera = new FreeCamera("camera", new Vector3(0,1,-5), this.scene)
    camera.attachControl()

    const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), this.scene)
    hemiLight.intensity = 0.5

    const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, this.scene)

    const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, this.scene)
    ball.position = new Vector3(0,1,0)

    return scene
  }
}