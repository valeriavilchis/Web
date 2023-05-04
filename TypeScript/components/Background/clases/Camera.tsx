import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
    private container:HTMLElement;

    constructor() {
        super(80,window.innerWidth / window.innerHeight,0.1,1000);
        this.container = document.getElementById('container');
        this.container.onscroll = this.moveCamera.bind(this);
        this.moveCamera();
        this.position.y = 2;
    }

    private moveCamera() {
        const scrollTop = this.container.scrollTop;
        const scrollHeight = this.container.scrollHeight;
        const offsetHeight = this.container.offsetHeight;

        const t = scrollTop * 100 / (scrollHeight - offsetHeight);
        console.log(t)

        this.position.z = t * 0.35;
        this.position.x = t * 0.025;
        this.rotation.y = t * 0.025;

    }
}