const {Router} = require('express'); 
const router = Router();
const data= require('./data.js');

//Funcion
let cr = 0;
let des= 0;
let exp = 0;
let dis = 0;

const contador = function(a){
	for (let i = 0; i < a.length; i++){
		if(a[i].creado){
			cr++;
		};
		if(a[i].porDestruir){
			des++;
		};
		if(a[i].porExpandir){
			exp++;
		};
		if(a[i].porDisminuir){
			dis++;
		};
		console.log('-Cantidad creadas: '+ cr);
		console.log('-Cantidad pendiente por desstruir: '+des);
		console.log('-Cantidad pendiente por agrandar: '+exp);
		console.log('-Cantidad pendiente por disminuir: '+dis);
	}};

//Apartado get
router.get('/city/house',(req, res) =>{
    console.log('Cantidad de casas existentes en la base de datos '+data.house.length)
    contador(data.house);
    res.json(data.house)
});

router.get('/city/buildig', (req, res) => {
    console.log('Cantidad de edificios existentes en la base de datos '+data.buildig.length)
	contador(data.buildig);
    res.json(data.buildig);
});

router.get('/city/apart', (req, res) => {
    console.log('Cantidad de apartamentos existentes en la base de datos '+data.apart.length)
	contador(data.apart);
    res.json(data.apart);
});

router.get('/city/ways', (req, res) => {
    console.log('Cantidad de carreteras existentes en la base de datos '+data.ways.length)
	contador(data.ways);
    res.json(data.ways);
});

router.get('/city/puentes', (req, res) => {
	console.log('Cantidad de puentes existentes en la base de datos '+data.puentes.length)
    contador(data.puentes);
    res.json(data.puentes);
});

router.get('/city/parques', (req, res) => {
	console.log('Cantidad de parques existentes en la base de datos '+data.parques.length )
    contador(data.parques);
    res.json(data.parques);
});

router.get('/city/zComer', (req, res) => {
	console.log('Cantidad de centros comerciales existentes en la base de datos '+data.zComer.length)
    contador(data.zComer);
    res.json(data.zComer);
});

//Apartado post
router.post('/city/house', (req, res) => {
	data.house.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de casa exitosamente');
});

router.post('/city/buildig', (req, res) => {
	data.buildig.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de edificios exitosamente');
});

router.post('/city/apart', (req, res) => {
	data.apart.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de apartamentos exitosamente');
});

router.post('/city/ways', (req, res) => {
	data.ways.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de carreteras exitosamente');
});

router.post('/city/puentes', (req, res) => {
	data.puentes.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de puentes exitosamente');
});

router.post('/city/parques', (req, res) => {
	data.parques.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de parques exitosamente');
});

router.post('/city/zComer', (req, res) => {
	data.zComer.push(req.body);
    console.log('Dato Agregado');
    console.log(req.body);
    res.status(200).send('Dato agregado en la base de centros comerciales exitosamente');
});

//Apartado put

router.put('/city/house/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.house.length; i++) {
        if (data.house[i].ID_h == req.params.dataID) {
            data.house[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.house[i].ID_h != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.house.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/buildig/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.buildig.length; i++) {
        if (data.buildig[i].ID_b == req.params.dataID) {
            data.buildig[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.buildig[i].ID_b != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.buildig.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/apart/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.apart.length; i++) {
        if (data.apart[i].ID_a == req.params.dataID) {
            data.apart[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.apart[i].ID_a != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.apart.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/ways/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.ways.length; i++) {
        if (data.ways[i].ID_w == req.params.dataID) {
            data.ways[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.ways[i].ID_w != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.ways.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/puentes/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.puentes.length; i++) {
        if (data.puentes[i].ID_pu == req.params.dataID) {
            data.puentes[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.puentes[i].ID_pu != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.puentes.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/parques/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.parques.length; i++) {
        if (data.parques[i].ID_pa == req.params.dataID) {
            data.parques[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.parques[i].ID_pa != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.parques.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.put ('/city/zComer/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.zComer.length; i++) {
        if (data.zComer[i].ID_z == req.params.dataID) {
            data.zComer[i] = req.body;
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y editado correctamente`);
        }
        if (data.zComer[i].ID_z != req.params.dataID) {
            error_log += 1;
        }
    };
    if (error_log == data.zComer.length) {
        res.status(404).send('El ID a editar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    };
});

//Apartado delete
router.delete('/city/house/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.house.length; i++) {
        if (data.house[i].ID_h == req.params.dataID) {
            data.house.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.house[i].ID_h != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.house.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/buildig/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.buildig.length; i++) {
        if (data.buildig[i].ID_b == req.params.dataID) {
            data.buildig.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.buildig[i].ID_b != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.buildig.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/apart/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.apart.length; i++) {
        if (data.apart[i].ID_a == req.params.dataID) {
            data.apart.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.apart[i].ID_a != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.apart.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/ways/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.ways.length; i++) {
        if (data.ways[i].ID_w == req.params.dataID) {
            data.ways.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.ways[i].ID_w != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.ways.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/puentes/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.puentes.length; i++) {
        if (data.puentes[i].ID_pu == req.params.dataID) {
            data.puentes.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.puentes[i].ID_pu != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.puentes.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/parques/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.parques.length; i++) {
        if (data.parques[i].ID_pa == req.params.dataID) {
            data.parques.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.parques[i].ID_pa != req.params.dataID) {
            error_log += 1;
        }
    }
    if (error_log == data.parques.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    }
});

router.delete ('/city/zComer/params/:dataID', (req, res) => {
    var error_log = 0;
	for (let i = 0; i < data.zComer.length; i++) {
        if (data.zComer[i].ID_z == req.params.dataID) {
            data.zComer.splice(i,1);
            res.status(200).send(`ID numero ${req.params.dataID} encontrado y eliminado correctamente`);
        }
        if (data.zComer[i].ID_z != req.params.dataID) {
            error_log += 1;
        }
    };
    if (error_log == data.zComer.length) {
        res.status(404).send('El ID a eliminar no ha sido encontrado, asegurese que el id ' + req.params.dataID + ' exista');
    };
});


module.exports= router;