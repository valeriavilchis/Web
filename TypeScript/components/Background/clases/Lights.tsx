import { AmbientLight } from "three"

export default class Lights {
    constructor(scene) {
        //Creamos iluminación para el sky
        scene.add(new AmbientLight(0xffffff, 0.8));
    }
}