import { KeyCode, v3 } from "cc";
import { AniName } from "../../Constant";
import { StateBase } from "../../Fsm/StateBase";

export class Move_State extends StateBase {
    onEnter(): void {
        this._entity._spineAni.setAnimation(0,AniName.move,true);
        this._entity.canDmg = false;
    }

    onExit(): void {
        this._entity.startPosY = this._entity.node.position.y;
    }

    onUpdate(dt): void {
        let a = (this._entity.moveDict[0]-this._entity.moveDict[1]);
        let b = (this._entity.moveDict[2]-this._entity.moveDict[3]);
        if(a==0 && b==0 ){
            this._entity._animator.switchState(AniName.idle);
            return;
        }
        this._entity.node.position = v3( 
            this._entity.node.position.x+this._entity.MoveSpeedX*this._entity.moveDict[2]-this._entity.MoveSpeedX*this._entity.moveDict[3],
            this._entity.node.position.y+this._entity.MoveSpeedY*this._entity.moveDict[0]-this._entity.MoveSpeedY*this._entity.moveDict[1],0)
        if(this._entity.moveDict[2]>0){
            this._entity._spineAni.node.scale = v3(1,1,1);
        }
        if(this._entity.moveDict[3]>0){
            this._entity._spineAni.node.scale = v3(-1,1,1);
        }
        this.resetPos();
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