import { StateBase } from "./StateBase";

export class Animator  {
    _mapState:Map<string,StateBase> = new Map;
    _state:StateBase = null;

    regState(key:string,state:StateBase){
        if(""==key){
            return;
        }
        if(null == key){
            return;
        }
        if(this._mapState.has(key)){
            return;
        }
        this._mapState.set(key,state);
    }
    delState(key){
        this._mapState.delete(key);
    }
    switchState(key:string){
        if(!key){
            return;
        }
        if(!this._mapState.get(key)){
            console.error("状态不存在");
            return;
        }
        if(this._state){
            if(this._state == this._mapState.get(key)){
                return;
            }
            this._state.onExit();
        }
        this._state = this._mapState.get(key);
        this._state.onEnter();
    }
    getCurState():StateBase{
        return this._state;
    }
    onUpdate(dt){
        if(this._state){
            this._state.onUpdate(dt);
        }
    }
    
    onKeyDown(e){
        if(this._state){
            this._state.onKeyDown(e);
        }
    }
    onKeyUp(e){
        if(this._state){
            this._state.onKeyUp(e);
        }
    }
    onAniEnd(){
        if(this._state){
            this._state.onAniEnd();
        }
    }
}