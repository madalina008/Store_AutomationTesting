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
RunAction "GoToHome [MainKeywords]", oneIteration
RunAction "SelectProductCategory [MainKeywords]", oneIteration, "Phones"
RunAction "SelectProductCategory [MainKeywords]", oneIteration, "Laptops"
RunAction "SelectProductCategory [MainKeywords]", oneIteration, "Monitors"
RunAction "VerifyContactContent [MainKeywords]", oneIteration
RunAction "VerifyAboutUsContent [MainKeywords]", oneIteration
RunAction "VerifyCartContent [MainKeywords]", oneIteration
RunAction "LogOut [MainKeywords]", oneIteration
RunAction "CheckWelcomeMessage [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), welcomeMessage
If welcomeMessage = false Then
	Reporter.ReportEvent micPass, "Welcome user", "Welcome user message is not present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome user", "Welcome user message is present on the page", takeScreenshot
	ExitTest
End If
RunAction "CloseBrowser [MainKeywords]", oneIteration
