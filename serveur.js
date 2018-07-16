//chargement des librairies js
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//création de la variable result
var result = '';

//charge les fichiers static qui sont dans le dossier .../public
//ces fichiers seront accessible a l'adresse .../static
app.use('/static', express.static(__dirname + '/public'));

//utilisation de body parser pour parsé les données envoyer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//charge le fichier index.html(ici inutile car mon fichier est dans le dossier public, qui est charger juste au dessus)
// app.get('/', function (req, res) {
// 	res.sendfile('index.html');
// });

//définis le port ou il faut se connecté
app.listen(3300, function () {
	console.log('Connection sur le port 3300!');
});

//objet user (correspond a ma base de donné)
var user ={
	login: 'id',
	mdp: 'mdp'
}

//fonction de comparaison
app.post('/auth', function(req,res) {
	var logs = [];
//rq.body correspond a la requête recus en json et parser dans la foulé (par body parser)
	compte=req.body;
	logs.push(compte);

	console.log(logs);
	console.log(user.login);
//comparaison des inputs avec la base de données
	if (logs[0].login === user.login && logs[0].mdp === user.mdp) {

		console.log('success');

//résultat renvoyer si l'authentification est réussi
		result = 'succes';
	}else{

		console.log('ça marche pas');

//résultat renvoyer si l'authentification échoue
		result = 'echec';
	}
	res.send();
});

//renvois au client le résultat de sa requête (en format json (res.json))
app.get('/res', function(req, res) {
 res.json(result);
});
