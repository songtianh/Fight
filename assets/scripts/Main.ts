
import { _decorator, Component, Node, PhysicsSystem2D, director, EPhysics2DDrawFlags } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Main
 * DateTime = Sun Apr 10 2022 22:17:00 GMT+0800 (中国标准时间)
 * Author = 轰天传说
 * FileBasename = Main.ts
 * FileBasenameNoExtension = Main
 * URL = db://assets/scripts/Main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    onLoad(){
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        EPhysics2DDrawFlags.Pair |
        EPhysics2DDrawFlags.CenterOfMass |
        EPhysics2DDrawFlags.Joint |
        EPhysics2DDrawFlags.Shape;
    }
    start () {
        // [3]
    }

}
