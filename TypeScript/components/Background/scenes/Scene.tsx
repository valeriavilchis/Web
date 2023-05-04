import { Scene as SceneThree } from "three"
import Camera from "../clases/Camera";
import Lights from "../clases/Lights";
import Loader from "../clases/Loader";
import Logo from "../clases/modelos/Logo";
import Skybox from "../clases/Skybox";


export default class Scene extends SceneThree {
    private camera: Camera;

    constructor(renderer) {
        super();
        const loader = new Loader();
        this.camera = new Camera();
        new Lights(this);
        new Skybox(this);
        new Logo(this, loader);
        this.update(renderer);
    }

    private update(renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.update.bind(this, renderer));
    }

}