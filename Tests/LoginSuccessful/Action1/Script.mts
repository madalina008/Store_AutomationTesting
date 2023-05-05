RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)
RunAction "Login [MainKeywords]", oneIterationBuburuza, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)

Dim welcomeMessageExistence 
welcomeMessageExistence = false
RunAction "CheckWelcomeMessage [MainKeywords]", oneIteration, welcomeMessageExistence

If welcomeMessageExistence = true Then
	Reporter.ReportEvent micPass, "Welcome Message", "Welcome Message is present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome Message", "Welcome Message is not present on the page"
	ExitTest
End If


