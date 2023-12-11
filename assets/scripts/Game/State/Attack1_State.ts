import { KeyCode, v3 } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Attack1_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.attack1,false);
        this._entity.canDmg = true;
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
        this._entity._animator.switchState(AniName.attackback1);
    }
}