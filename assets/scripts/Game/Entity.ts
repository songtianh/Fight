
import { _decorator, Component, Node, Input, input, SystemEventType, SystemEvent, sp, Vec3, v3, KeyCode } from 'cc';
import { AniName } from '../Constant';
import { Animator } from '../Fsm/Animator';
import { StateBase } from '../Fsm/StateBase';
import { Attack0_Back_State } from './State/Attack0_Back_State';
import { Attack0_State } from './State/Attack0_State';
import { Attack1_Back_State } from './State/Attack1_Back_State';
import { Attack1_State } from './State/Attack1_State';
import { Attack2_Back_State } from './State/Attack2_Back_State';
import { Attack2_State } from './State/Attack2_State';
import { Idle_State } from './State/Idle_State';
import { Jump_Attack_State } from './State/Jump_Attack_State';
import { Jump_State } from './State/Jump_State';
import { Move_State } from './State/Move_State';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Entity
 * DateTime = Sun Apr 10 2022 22:25:24 GMT+0800 (中国标准时间)
 * Author = 轰天传说
 * FileBasename = Entity.ts
 * FileBasenameNoExtension = Entity
 * URL = db://assets/scripts/Game/Entity.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('Entity')
export class Entity extends Component {
    canDmg = false;
    isPlayer:boolean =false;
    _animator:Animator = null;
    _spineAni:sp.Skeleton = null;
    startPosY:number = 0;
    Jump_Vel:number = 0;
    MoveSpeedX:number = 10;
    MoveSpeedY:number = 5;
    minPos:Vec3= v3(-1080,-540,0);
    maxPos:Vec3= v3(1080,100,0);
    onLoad(){
        this.isPlayer = this.node.name=="gedou"
        this._animator = new Animator();
        this._spineAni = this.node.getChildByName("ani").getComponent(sp.Skeleton);
        this._animator.regState(AniName.idle,new Idle_State(this));
        this._animator.regState(AniName.jump,new Jump_State(this));
        this._animator.regState(AniName.move,new Move_State(this));
        this._animator.regState(AniName.attack0,new Attack0_State(this));
        this._animator.regState(AniName.attack1,new Attack1_State(this));
        this._animator.regState(AniName.attack2,new Attack2_State(this));
        this._animator.regState(AniName.attackback0,new Attack0_Back_State(this));
        this._animator.regState(AniName.attackback1,new Attack1_Back_State(this));
        this._animator.regState(AniName.attackback2,new Attack2_Back_State(this));
        this._animator.regState(AniName.jumpattack,new Jump_Attack_State(this));
        this._animator.switchState(AniName.idle);
        input.on( Input.EventType.KEY_DOWN,this.onKeyDown,this);
        input.on( Input.EventType.KEY_UP,this.onKeyUp,this);
        this._spineAni.setCompleteListener(()=>{
            this.onAniEnd();
        })
    }
    moveDict:Array<number> = [0,0,0,0];
    onKeyDown(e){
        if(!this.isPlayer ){
            return;
        }
        switch (e.keyCode) {
            case KeyCode.KEY_W:
                this.moveDict[0] = 1;
                break;
            case KeyCode.KEY_S:
                this.moveDict[1] = 1;
                break;
            case KeyCode.KEY_D:
                this.moveDict[2] = 1;
                break;
            case KeyCode.KEY_A:
                this.moveDict[3] = 1;
                break;
            default:
                break;
        }
        this._animator.onKeyDown(e);
    }
    onKeyUp(e){
        if(!this.isPlayer ){
            return;
        }
        switch (e.keyCode) {
            case KeyCode.KEY_W:
                this.moveDict[0] = 0;
                break;
            case KeyCode.KEY_S:
                this.moveDict[1] = 0;
                break;
            case KeyCode.KEY_D:
                this.moveDict[2] = 0;
                break;
            case KeyCode.KEY_A:
                this.moveDict[3] = 0;
                break;
            default:
                break;
        }
        this._animator.onKeyUp(e);
    }
    onAniEnd(){
        this._animator.onAniEnd();
    }
    update(dt){
        this._animator.onUpdate(dt);
    }
}