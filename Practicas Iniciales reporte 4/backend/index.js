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
app.get("/",(req, res)=>{
	res.send("Funcionó");
});

app.listen(3001,() =>{
	console.log("running in port 3001");
});