import { KeyCode } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Idle_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.hit1back,true);
        this._entity.canDmg = false;
    }

    onExit(): void {
        // this._entity.startPosY = this._entity.node.position.y;
    }

    onUpdate(dt): void {
        // let a = (this._entity.moveDict[0]-this._entity.moveDict[1]);
        // let b = (this._entity.moveDict[2]-this._entity.moveDict[3]);
        // if(a!=0|| b!=0){
        //     this._entity._animator.switchState(AniName.move);
        // }
    }
    onKeyDown(event: any): void {

    }
    onKeyUp(event: any): void {
    }
    onAniEnd(): void {
        this._entity._animator.switchState(AniName.idle);
    }
}