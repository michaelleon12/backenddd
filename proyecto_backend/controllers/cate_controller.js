let modalidades = []
let lista_cat =[]



module.exports = class CategoriaController {

    crear(name, mod){
         lista_cat.push({cat_name: name, mod: mod})
         return {message: 'Datos guardados'}
    };

    mostrar(){
        return lista_cat  
    };

    mostrar_mod(){
        return modalidades  
    };

    editar(id,new_name,new_mod){
        let e = lista_cat[id]
        e.cat_name = new_name
        e.mod = new_mod
        return {message: 'Datos editados'}
    };

    eliminar(id){
        lista_cat.splice(id, 1)
        return {message: 'Datos eliminados'}
    };

    crear_mod(name){
        modalidades.push(name)
        return {message: 'Datos guardados', data: modalidades}
    }

}
