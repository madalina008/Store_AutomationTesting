If Browser("Chrome").Page("Store").Link("Welcome").Exist(5) Then
	If Browser("Chrome").Page("Store").Link("Welcome").GetROProperty("text") = "Welcome " + Parameter("Username") Then
'		Reporter.ReportEvent micPass, "Welcome user", "Welcome user message is present on the page and is correct"
		Parameter("WelcomeMessage") = true
	Else
		Parameter("WelcomeMessage") = false
'		Reporter.ReportEvent micFail, "Welcome user", "Welcome user message is incorrect", takeScreenshot
'		ExitTest
	End If
Else
	Parameter("WelcomeMessage") = false
'	Reporter.ReportEvent micFail, "Welcome user", "Welcome user message doesn't exist"
'	ExitTest
End  If
