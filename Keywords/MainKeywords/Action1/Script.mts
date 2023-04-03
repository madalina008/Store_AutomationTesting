If Browser("Chrome").Page("Store").Link("SignUp").Exist Then
	Browser("Chrome").Page("Store").Link("SignUp").Click
Else
	Reporter.ReportEvent micFail, "Sing Up", "Sing Up button doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("SignInUsername").Exist Then
	Browser("Chrome").Page("Store").WebEdit("SignInUsername").Set Parameter("Username")
Else
	Reporter.ReportEvent micFail, "Sing Up", "Username edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("SignInPassword").Exist Then
	Browser("Chrome").Page("Store").WebEdit("SignInPassword").Set Parameter("Password")
Else
	Reporter.ReportEvent micFail, "Sing Up", "Password edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebButton("SignUp").Exist Then
	Browser("Chrome").Page("Store").WebButton("SignUp").Click
Else
	Reporter.ReportEvent micFail, "Sing Up", "Sing Up button doesn't exist", takeScreenshot
	ExitTest
End  If
