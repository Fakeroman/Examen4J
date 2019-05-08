class punto{
    constructor(){
        this.x=[];
        this.y=[];
        this.distTotal=0
    }
    agregarPunto(xx,yy)
    {
        this.x.push(xx);
        this.y.push(yy);
    }
    /*set x(newX){
        this.x = newX;
    }
    set y(newY){
        this.y = newY;
    }
    get x(){
        return this.x;
    }
    get y(){
        return this.y;
    }*/
    calcularD(){
        if (this.x.length>1) 
        {
            var long=this.x.length;
            var x1=this.x[long-2]
            var x2=this.x[long-1]
            var y1=this.y[long-2]
            var y2=this.y[long-1]

            var calculo=this.cualcularDistancia(x1,x2,y1,y2)
            return calculo
            
        }    
    }
    cualcularDistancia(x1,x2,y1,y2){
        return Math.sqrt((x2-x1)+(y2-y1))
    }
    mostrar(dist){
        if (this.x.length>1) {
            this.distTotal+=dist
        return this.distTotal;
        }
    }
}

class distancia{
    constructor(){

    }
    cualcular()
    {

    }


}
