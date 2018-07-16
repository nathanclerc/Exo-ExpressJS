
//affichage coté client du résultat de l'authentification
function affiche (){

	$.ajax({
//Requête de type GET pour récupérer de la donnée envoyer depuis le serveur
		type :'GET',
//url a laquelle la donnée a été envoyer
		url : '/res',
//déclenchement de la fonction si la requête réussi
		success : function(result){
			alert(result);
			if (result == 'succes') {
				location.href="myAccount.html";
			}
		}
	});
};



//declenchement de la fonction au clique
$('#valider').click(function(){

//récupération des valeurs des inputs
	var identifiant = $('#login').val();
	var password = $('#mdp').val();

	$.ajax({
//Requête de type POST quand on envois de la donnée depuis le client
		type:'POST',
//l'url a laquelle on envois la donnée
		url:'/auth',
//donnée envoyer sous forme d'objet
		data:{login:identifiant, mdp:password},
//éxécution de la fonction affiche et vidage des inputs si la requête ajax réussi
		success:function(){
			affiche();
			$('#login').val('');
			$('#mdp').val('');
		}
	});
});
