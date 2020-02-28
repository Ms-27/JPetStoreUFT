' On cherche les produit contenant le mote "tiger"
Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("keywords").Set "tiger" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("keywords")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo").WebButton("Search").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebButton("Search")_;_script infofile_;_ZIP::ssf2.xml_;_

' On regarde la page du produit "FI-SW-02"
Browser("JPetStore Demo").Page("JPetStore Demo_2").Link("FI-SW-02").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").Link("FI-SW-02")_;_script infofile_;_ZIP::ssf3.xml_;_

' On l'ajoute au panier
Browser("JPetStore Demo").Page("JPetStore Demo_3").Link("Add to Cart").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 3").Link("Add to Cart")_;_script infofile_;_ZIP::ssf4.xml_;_

' On change la quantité à 2 unités
Browser("JPetStore Demo").Page("JPetStore Demo_4").WebEdit("lines[0].quantity").Set "2" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 4").WebEdit("lines[0].quantity")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_4").WebButton("Update Cart").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 4").WebButton("Update Cart")_;_script infofile_;_ZIP::ssf6.xml_;_

' On valide le panier
Browser("JPetStore Demo").Page("JPetStore Demo_5").Link("Proceed to Checkout").Click @@ hightlight id_;_2098360_;_script infofile_;_ZIP::ssf9.xml_;_
