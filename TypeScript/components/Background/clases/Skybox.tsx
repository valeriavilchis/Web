import { Mesh, SphereGeometry, TextureLoader, BackSide, MeshPhongMaterial} from "three"

export default class Skybox {
    constructor(scene) {
        const skyGeometry = new SphereGeometry(360, 25, 25);
        const loader = new TextureLoader();
        const textura = loader.load('/custom-sky.png');
        const materialSky = new MeshPhongMaterial({
        map:textura
        });
        const skybox = new Mesh(skyGeometry, materialSky);
        skybox.material.side = BackSide;
        scene.add(skybox);
    }
}