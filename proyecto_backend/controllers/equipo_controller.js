let equipos = []


module.exports = class EquipoController {

    crear(name, lider_name, cat_id){
        equipos.push({equi_name: name, lider_name: lider_name, cat_id: cat_id})
        return {message: 'Datos guardados'}
    };

    mostrar(){
        return equipos
    };

    editar(id,new_name, new_lider_name, new_cat_id){
        let e = equipos[id]
        e.equi_name = new_name
        e.lider_name = new_lider_name
        e.cat_id = new_cat_id
        return {message: 'Datos editados'}
    };

    eliminar(id){
        equipos.splice(id, 1)
        return {message: 'Datos eliminados'}
    };

    eliminar_inscrip(id){
        let e = equipos[id]
        e.cat_id = "" 
        return {message: 'inscripcion eliminados'}
    };
}
