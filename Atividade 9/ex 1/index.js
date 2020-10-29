function retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.area = function(){
        const area = this.x + this.y;
        return area;
    }
}

var ret = new retangulo(1,2);

alert(ret.area());