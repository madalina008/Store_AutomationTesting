RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)
RunAction "SignUp [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)

Wait(3)
If Browser("Chrome").InsightObject("UserAlreadyExists").Exist Then
	
	Reporter.ReportEvent micPass, "User exists", "User exists message is poped up"
Else
	Reporter.ReportEvent micFail, "User exists", "User exists message is not present on the page", takeScreenshot
End If

