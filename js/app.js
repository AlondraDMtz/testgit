let miArbol = new BinaryTree();

const btnAgregar = document.getElementById("btnagregar");
btnAgregar.addEventListener("click", () => {
    let cod = document.getElementById("txtcod").value;
    let nom = document.getElementById("txtnom").value;
    let cost = document.getElementById("txtcost").vlue;
    let cant = document.getElementById("txtcant").value;

    let producto = new Producto(nom, cod, cost, cant);
    miArbol.agregar(producto);

    let detalles = document.getElementById("detalles");
    detalles.innerHTML += `<h2>nuevo producto ${producto.nombre}<h2>`
});

const btninorder=document.getElementById("btninorder");
btninorder.addEventListener("click",()=> {

    let inorder= miArbol.inOrder();
    let detalles=document.getElementById("detalles");
    if(inorder!= ""){
        detalles.innerHTML += "<h3>inorder</h3>" + inorder;
    }
    else
        detalles.innerHTML += "<h3>No hay productos</h3>";
});

const btnpreorder=document.getElementById("btnpreorder");
btnpreorder.addEventListener("click",()=> {

    let preorder= miArbol.preOrder();
    let detalles=document.getElementById("detalles");
    if(preorder!= ""){
        detalles.innerHTML += "<h3>preorder</h3>" + preorder;
    }
    else
        detalles.innerHTML += "<h3>No hay productos</h3>";
});
 
const btnpostorder=document.getElementById("btnpostorder");
btnpostorder.addEventListener("click",()=> {

    let postorder= miArbol.postOrder();
    let detalles=document.getElementById("detalles");
    if(postorder!= ""){
        detalles.innerHTML += "<h3>postorder</h3>" + postorder;
    }
    else
        detalles.innerHTML += "<h3>No hay productos</h3>";
});

const btnclear=document.getElementById("btnclear");
btnclear.addEventListener("click",()=>{
    document.getElementById("detalles").innerHTML="";
})

const btnbuscar=document.getElementById("btnbuscar");
btnbuscar.addEventListener("click",()=>{
    let cod=document.getElementById("txtcod").value;
    console.log(cod);
    let buscar= miArbol.buscar(cod);
    let detalles=document.getElementById("detalles");
    if(buscar!=null){
        detalles.innerHTML += "<h3> Se encontro</h3>" + buscar;
    }
    else 
        detalles.innerHTML +="<h3>No encotro</h3>";
   
})




