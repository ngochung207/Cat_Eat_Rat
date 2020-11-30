class Cat {
    constructor(name,weight,speed) {
        this._name = name;
        this._weight = weight;
        this._speed = speed;
        // this._status = status;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }
    //
    // get status() {
    //     return this._status;
    // }
    //
    // set status(value) {
    //     this._status = value;
    // }

    voice(){
        return this.name + " meo meo"
    }

    catch(rat){
        if(this.speed > rat.speed){
            return true;
        } else return false;
    }

    eat(rat){
        if (this.catch(rat)){
            this.weight += rat.weight;
        } else return this.name + " meo khong bat duoc chuot " + rat.name;
    }
}