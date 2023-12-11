import { v3 } from "cc";
import { Entity } from "../Game/Entity";

export class StateBase  {
    protected _entity:Entity = null!;
    constructor(entity){
        this._entity = entity;
    }

    onEnter(){

    }

    onUpdate(dt:number){

    }

    onKeyDown(event:any){

    }

    onKeyUp(event:any){

    }

    onExit(){

    }

    onAniEnd(){

    }

    resetPos(type = -1){
        let x = this._entity.node.position.x;
        let y = this._entity.node.position.y;
        if(x>this._entity.maxPos.x){
            x = this._entity.maxPos.x
        }
        if(x<this._entity.minPos.x){
            x = this._entity.minPos.x
        }
        if(type == -1){
            if(y>this._entity.maxPos.y){
                y = this._entity.maxPos.y
            }
            if(y<this._entity.minPos.y){
                y = this._entity.minPos.y
            }
        }
        this._entity.node.position = v3(x,y);
    }
}