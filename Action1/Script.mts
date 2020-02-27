Set jpetstore = Browser("JPetStore Demo")

title = jpetstore.Page("JPetStore Index").WebElement("html tag:=title").GetROProperty("innerText")
'msgbox title
AssertTrue

jpetstore.Page("JPetStore Index").Link("Enter the Store").Click

jpetstore.Page("JPetStore Accueil").Link("Sign In").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 2").Link("Sign In")_;_script infofile_;_ZIP::ssf11.xml_;_
jpetstore.Page("JPetStore Login").WebEdit("username").Set "j2ee" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 3").WebEdit("username")_;_script infofile_;_ZIP::ssf12.xml_;_
jpetstore.Page("JPetStore Login").WebEdit("password").SetSecure "5e579757c787ad98a2bac8d0f06a" @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo 3").WebEdit("password")_;_script infofile_;_ZIP::ssf13.xml_;_
jpetstore.Page("JPetStore Login").WebButton("Login").Click @@ hightlight id_;_Browser("JPetStore Demo").Page("JPetStore Demo_2")_;_script infofile_;_ZIP::ssf17.xml_;_


jpetstore.InsightObject("Sign Out").Click
'Browser("JPetStore Demo").CloseAllTabs @@ hightlight id_;_66956_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("JPetStore Demo").Quit
