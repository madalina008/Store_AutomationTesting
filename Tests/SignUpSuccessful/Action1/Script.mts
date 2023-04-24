RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)
RunAction "SignUp [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)

Wait(2)
If Browser("Chrome").InsightObject("SignUpSuccessful").Exist Then
	Reporter.ReportEvent micPass, "Sign Up Successful", "Sign Up Successful message is present on the page"
Else
	Reporter.ReportEvent micFail, "Sign Up Successful", "Sign Up Successful message is NOT present on the page"
End  If

