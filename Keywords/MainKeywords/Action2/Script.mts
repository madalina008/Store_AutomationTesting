If Browser("Chrome").Page("Store").Link("LogIn").Exist Then
	Browser("Chrome").Page("Store").Link("LogIn").Click
Else
	Reporter.ReportEvent micFail, "Log In", "Log In link doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("LogInUsername").Exist Then
	Browser("Chrome").Page("Store").WebEdit("LogInUsername").Set Parameter("Username")
Else
	Reporter.ReportEvent micFail, "Log In", "Username edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("LogInPassword").Exist Then
	Browser("Chrome").Page("Store").WebEdit("LogInPassword").Set Parameter("Password")
Else
	Reporter.ReportEvent micFail, "Log In", "Password edit box doesn't exist", takeScreenshot
	ExitTest
End  If

Wait(2)
If Browser("Chrome").Page("Store").WebButton("LogIn").Exist Then
	Browser("Chrome").Page("Store").WebButton("LogIn").Click
Else
	Reporter.ReportEvent micFail, "Log In", "Log In button doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").Link("Welcome").Exist Then
	If Browser("Chrome").Page("Store").Link("Welcome").GetROProperty("text") = "Welcome " + Parameter("Username") Then
		Reporter.ReportEvent micPass, "Welcome user", "Welcome user message is good"
	Else
		Reporter.ReportEvent micFail, "Welcome user", "Welcome user message is wrong", takeScreenshot
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Welcome user", "Welcome user message doesn't exist"
	ExitTest
End  If

