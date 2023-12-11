
import { _decorator, Component, Node, BoxCollider2D, Contact2DType, Collider2D, CircleCollider2D } from 'cc';
import { Entity } from './Entity';
const { ccclass, property } = _decorator;
@ccclass('Player')
export class Player extends Entity {
    onLoad(){
        super.onLoad();
    }

    start(){
        let collider = this.getComponent(BoxCollider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onContact, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onContact, this);
        }
        console.log(this.isPlayer);
    }
    onContact(selfCollider: Collider2D, otherCollider: Collider2D, contact:any){
       let Atker:Player;
       let defer:Player;
       let isAtk:boolean = false;
        if(selfCollider instanceof CircleCollider2D && otherCollider instanceof BoxCollider2D){
            isAtk = true;
            Atker = selfCollider.node.parent.getComponent(Player);
            defer = otherCollider.getComponent(Player);
        }else if(otherCollider instanceof CircleCollider2D && selfCollider instanceof BoxCollider2D){
            isAtk = true;
            Atker = otherCollider.node.parent.getComponent(Player);
            defer = selfCollider.getComponent(Player);
        }
        if(isAtk){
            if(Atker.isPlayer&&Atker.canDmg){
                Atker.canDmg = false;
                console.log("攻击命中")
            }
        }
    }
}