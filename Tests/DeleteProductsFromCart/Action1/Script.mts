RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)
RunAction "Login [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)
Dim welcomeMessage
RunAction "CheckWelcomeMessage [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), welcomeMessage
If welcomeMessage = true Then
	Reporter.ReportEvent micPass, "Welcome user", "Welcome user message is present on the page and is correct"
Else
	Reporter.ReportEvent micFail, "Welcome user", "Welcome user message is incorrect or doesn't exist", takeScreenshot
	ExitTest
End If

Set globalSheet = dataTable.GetSheet("Global")

rowCount = globalSheet.GetRowCount

For i = 1 To rowCount
	dataTable.SetCurrentRow i
	
	productName = dataTable.Value("ProductsName")
	productCategory = dataTable.Value("ProductsCategory")
	
	RunAction "SelectProductCategory [MainKeywords]", oneIteration, productCategory
	RunAction "SelectProduct [MainKeywords]", oneIteration, productName
	RunAction "AddProductToCart [MainKeywords]", oneIteration
	Wait(1)
	set sk = CreateObject("WScript.shell")
	sk.SendKeys("{ENTER}")
	RunAction "GoToHome [MainKeywords]", oneIteration
Next

'RunAction "GoToCart [MainKeywords]", oneIteration

