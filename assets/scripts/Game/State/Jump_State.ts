import { KeyCode, v3 } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Jump_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.jump,false);
        this._entity.Jump_Vel = 20;
        this._entity.canDmg = false;
    }

    onExit(): void {
    }

    onUpdate(dt): void {
        // this._entity.node.position = v3(this._entity.node.position.x,this._entity.node.position.y+this._entity.Jump_Vel,0);
        this._entity.node.position = v3( 
            this._entity.node.position.x+this._entity.MoveSpeedX*this._entity.moveDict[2]-this._entity.MoveSpeedX*this._entity.moveDict[3],
            this._entity.node.position.y+this._entity.Jump_Vel,0);
        this._entity.Jump_Vel-=9.8/15;
        if(this._entity.node.position.y<=this._entity.startPosY){
            this._entity._animator.switchState(AniName.idle);
        }
        this.resetPos(0);
    }
    onKeyDown(event: any): void {
        switch (event.keyCode) {
            case KeyCode.KEY_J:
                this._entity._animator.switchState(AniName.jumpattack)
                break;
            default:
                break;
        }
    }
    onKeyUp(event: any): void {
    }
}