let patrocinadores = []


module.exports = class PatroController {

    crear(name, lider_name, cat_id){
        patrocinadores.push({name: name})
        console.log(patrocinadores)
        return {message: 'Datos guardados'}
    };

}