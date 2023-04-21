RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)

RunAction "Login [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)

RunAction "SelectProductCategory [MainKeywords]", oneIteration, "Monitors"

RunAction "SelectProduct [MainKeywords]", oneIteration, "ASUS Full HD"

RunAction "AddProductToCart [MainKeywords]", oneIteration
set sk = CreateObject("WScript.shell")
sk.SendKeys("{ENTER}")

RunAction "GoToCart [MainKeywords]", oneIteration
Wait(2)
RunAction "CheckIfProductExistsInCart [MainKeywords]", oneIteration, "ASUS Full HD"

Dim totalPrice, productsPrice
RunAction "CheckProductsPrice [MainKeywords]", oneIteration, productsPrice
RunAction "CheckTotalPrice [MainKeywords]", oneIteration, totalPrice

If totalPrice = productsPrice Then
	Reporter.ReportEvent micPass, "Total Price", "Total Price is right"
Else
	Reporter.ReportEvent micFail, "Total Price", "Total Price is wrong"
	ExitTest
End  IF


RunAction "PlaceOrder [MainKeywords]", oneIteration
