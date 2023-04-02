If Browser("Chrome").Page("Home").Link("SignUp").Exist Then
	Browser("Chrome").Page("Home").Link("SignUp").Click
Else
	Reporter.ReportEvent micFail, "Sing Up", "Sing Up button doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Home").WebEdit("SignInUsername").Exist Then
	Browser("Chrome").Page("Home").WebEdit("SignInUsername").Set Parameter("Username")
Else
	Reporter.ReportEvent micFail, "Sing Up", "Username edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Home").WebEdit("SignInPassword").Exist Then
	Browser("Chrome").Page("Home").WebEdit("SignInPassword").Set Parameter("Password")
Else
	Reporter.ReportEvent micFail, "Sing Up", "Password edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Home").WebButton("SignUp").Exist Then
	Browser("Chrome").Page("Home").WebButton("SignUp").Click
Else
	Reporter.ReportEvent micFail, "Sing Up", "Sing Up button doesn't exist", takeScreenshot
	ExitTest
End  If
