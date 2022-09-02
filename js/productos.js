class Producto {
    constructor(nombre, codigo, precio, cantidad) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
        this.cantidad = cantidad;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
    info(){
        return "<p> Nombre: "+ this.nombre + " Codigo: "+ this.codigo + "</p>"
    }
}

class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    agregar(nuevo) {
        if (this.raiz == null)
            this.raiz = nuevo;
        else
            this._agregate(nuevo, this.raiz);
    }
    // Funcion que se llama cuando la raiz esta ocupado (es recursiva).
    _agregate(nuevo, nodox) {
        if (nuevo.codigo < nodox.codigo)
            if (nodox.hijoIzquierdo == null)
                nodox.hijoIzquierdo = nuevo;
            else
                this._agregate(nuevo, nodox.hijoIzquierdo);
        else
            if (nodox.hijoDerecho == null)
                nodox.hijoDerecho = nuevo;
            else
                this._agregate(nuevo, nodox.hijoDerecho);
    }
    inOrder() {
        if (this.raiz == null)
            return "";
        else
            return this._inOrderRec(this.raiz);
    }
    _inOrderRec(nodox) {
        let info = "";
        if (nodox.hijoIzquierdo != null)
            info += this._inOrderRec(nodox.hijoIzquierdo);
        info += nodox.info();
        if (nodox.hijoDerecho != null)
            info += this._inOrderRec(nodox.hijoDerecho);
        return info;

    }
    preOrder() {
        if (this.raiz == null)
            return "";
        else
            return this._preOrderRec(this.raiz);
    }
    _preOrderRec(nodox) {
        let info = "";
        info += nodox.info();
        if (nodox.hijoIzquierdo != null)
            info += this._preOrderRec(nodox.hijoIzquierdo);
        if (nodox.hijoDerecho != null)
            info += this._preOrderRec(nodox.hijoDerecho);
        return info;
    }
    postOrder(){
        if (this.raiz == null)
            return "";
        else
            return this._postOrderRec(this.raiz);
    }
    _postOrderRec(nodox){
        let info ="";
        if(nodox.hijoIzquierdo !=null)
            info +=this._postOrderRec(nodox.hijoIzquierdo);
        if(nodox.hijoDerecho !=null)
            info += this._postOrderRec(nodox.hijoDerecho);
        info += nodox.info();
        return info;
    }
    buscar(codigo){
        if(this.raiz==null){
            return "";
        }
        else
            return this._buscar(codigo,this.raiz);
    }
    _buscar(codigo,nodox){
        if(codigo== nodox.codigo){
            return nodox.info();
        }
        else if(nodox.hijoDerecho!=null || nodox.hijoIzquierdo!=null){
            if(codigo<nodox.hijoIzquierdo){
                return this._buscar(codigo,nodox.hijoIzquierdo);
            }
            else{
                return this._buscar(codigo,nodox.hijoDerecho);
            }
        }
        else
        return "";
    }

    
}