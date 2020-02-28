' Sur la page d'accueil, on clique sur le lien sign in
Browser("JPetStore Demo").Page("JPetStore Demo").Link("Sign In").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Login").WebButton("Login")_;_script infofile_;_ZIP::ssf2.xml_;_

' Sur la page login on se connecte avec un identifiant et un mdp
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebEdit("username").Set "j2ee" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").WebElement("Username:  Password:")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebEdit("password").SetSecure "5e59164a02a39458ffa93ebab526" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").WebEdit("password")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebButton("Login").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Login").WebButton("Login")_;_script infofile_;_ZIP::ssf7.xml_;_

' On teste la connexion de l'utilisateur
' ?

