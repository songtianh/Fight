import { KeyCode } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Idle_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.idle,true);
        this._entity.canDmg = false;
    }

    onExit(): void {
        this._entity.startPosY = this._entity.node.position.y;
    }

    onUpdate(dt): void {
        let a = (this._entity.moveDict[0]-this._entity.moveDict[1]);
        let b = (this._entity.moveDict[2]-this._entity.moveDict[3]);
        if(a!=0|| b!=0){
            this._entity._animator.switchState(AniName.move);
        }
    }
    onKeyDown(event: any): void {

        switch (event.keyCode) {
            case KeyCode.KEY_K:
            case KeyCode.SPACE:
                this._entity._animator.switchState(AniName.jump)
                break;
            case KeyCode.KEY_J:
                this._entity._animator.switchState(AniName.attack0)
                break;
            default:
                break;
        }
    }
    onKeyUp(event: any): void {
    }
}