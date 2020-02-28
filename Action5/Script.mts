' On change le type d ecarte, le numéro et la date de validité @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").WebButton("Submit")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo").WebList("cardType").Select "MasterCard" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebList("cardType")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("creditCard").SetSecure "5e5916f823270d115c664c0ba8a62d63353d332accc3f9b1c64f6e98e23c" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("creditCard")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("expiryDate").Set "05/2024" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebEdit("expiryDate")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo").WebButton("Continue").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo").WebButton("Continue")_;_script infofile_;_ZIP::ssf9.xml_;_

' On valide les informations
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebButton("Submit").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").WebButton("Submit")_;_script infofile_;_ZIP::ssf10.xml_;_

' On se déconnecte
Browser("JPetStore Demo").Page("JPetStore Demo_3").Link("Sign Out").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 3").Link("Sign Out")_;_script infofile_;_ZIP::ssf11.xml_;_
