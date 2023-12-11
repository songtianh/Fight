import { KeyCode, v3 } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Attack2_Back_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.attackback2,false);
        this._entity.canDmg = false;
    }

    onExit(): void {
    }

    onUpdate(dt): void {
    }
    onKeyDown(event: any): void {
    }
    onKeyUp(event: any): void {
    }
    onAniEnd(): void {
        this._entity._animator.switchState(AniName.idle);
    }
}