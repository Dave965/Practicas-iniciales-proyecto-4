const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456789',
	database: 'pi_database'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/login",(req,res)=>{
	const us_correo = req.body.us_correo
	const us_password = req.body.us_password

	const sqlSelect = "SELECT * FROM usuarios WHERE (correo, contra) = (?,?)"
	db.query(sqlSelect,[us_correo,us_password],(err,result)=>{
		res.send(result)
	});
});

app.post("/api/register",(req,res)=>{
	const us_carnet = req.body.us_carnet
	const us_nombres = req.body.us_nombres
	const us_apellidos = req.body.us_apellidos
	const us_password = req.body.us_password
	const us_correo = req.body.us_correo

	const sqlInsert = "INSERT INTO usuarios (registro, nombres, apellidos, contra, correo) VALUES (?, ?, ?, ?, ?);"
	db.query(sqlInsert, [us_carnet, us_nombres, us_apellidos, us_password, us_correo], (err,result)=>{

	});
});


app.post("/api/publicar",(req,res)=>{
	const us_usuario = req.body.us_usuario
	const us_catedratico = req.body.us_catedratico
	const us_titulo = req.body.us_titulo
	const us_mensaje = req.body.us_mensaje
	const us_fecha = req.body.us_fecha
	const us_curso = req.body.us_curso

	const sqlInsert = "INSERT INTO publicaciones (curso, catedratico, usuario, fecha, mensaje, titulo) VALUES (?, ?, ?, ?, ?, ?);"
	db.query(sqlInsert, [us_curso, us_catedratico, us_usuario, us_fecha, us_mensaje, us_titulo], (err,result)=>{
	});
});

app.get("/api/todosCat",(req,res)=>{
	const sqlSelect = "SELECT * FROM catedraticos"
	db.query(sqlSelect,(err,result)=>{
		res.send(result)
	});
});

app.get("/api/todosCursos",(req,res)=>{
	const sqlSelect = "SELECT  * FROM cursos"
	db.query(sqlSelect,(err,result)=>{
		res.send(result)
	});
});

app.get("/api/todosPubli",(req,res)=>{
	const sqlSelect = 'SELECT  p.titulo,p.mensaje,p.fecha,u.nombres as "nUsuario",u.apellidos as "aUsuario",ca.nombres as "nCat",ca.apellidos as "aCat",cu.nombre as "nCurso" FROM publicaciones AS p INNER JOIN usuarios AS u ON p.usuario=u.id INNER JOIN catedraticos AS ca ON p.catedratico=ca.id INNER JOIN cursos AS cu ON p.curso=cu.id ORDER BY p.fecha ASC';
	db.query(sqlSelect,(err,result)=>{
		res.send(result)
	});
});

app.get("/",(req, res)=>{
	res.send("Funcionó");
});

app.listen(3001,() =>{
	console.log("running in port 3001");
});