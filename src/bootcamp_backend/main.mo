import Text "mo:base/Text";
import Float "mo:base/Float";
import Array "mo:base/Array"; 
import Debug "mo:base/Debug"; 

actor {

  type Medidas = (Float, Float, Float);

  type Product = {
    id : Nat;
    precio : Nat;
    imagen : Text;
    titulo : Text;
    descripcion : Text;
    medidas : Medidas;
    cantidad : Nat;
    muestra : {
      scale : Float;
      position : Medidas;
      url : Text;
    };
    tipo : Text;
    url : Text;
    scale : Float;
    position : Medidas;
    color : Text;
  };

  // Almacena los productos en la memoria
  stable var products : [Product] = [];

  // Agregar
  public func agregarProducto(producto : Product) : async () {
    products := Array.append<Product>(products, [producto]);
  };

  // Listar todos los productos
  public query func listarProductos() : async [Product] {
    return products;
  };

  // Elimina 
  public func eliminarProductoPorId(id : Nat) : async Bool {
    let nuevoArray = Array.filter<Product>(products, func (p : Product) : Bool {
        p.id != id  
    });

    if (Array.size(nuevoArray) < Array.size(products)) {
        products := nuevoArray; 
        return true;  
    } else {
        return false; 
    };
  };


  // ---- system methods ----

  // Metodo para preparar la actualización del canister
  system func preupgrade() {
    Debug.print("Preupgrade: Guardando datos para la migración.");

  };

  // Mtodo que se ejecuta después de la actualización del canister
  system func postupgrade() {
    Debug.print("Postupgrade: Restaurando datos de la migración.");

  };

  // Función de saludo de prueba
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
