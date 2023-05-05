If Browser("Chrome").Page("Store").Link("LogIn").Exist Then @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("Chrome").Page("Store").Link("LogIn").Click
	Reporter.ReportEvent micPass, "Log In", "Log In button exists on the page"
Else
	Reporter.ReportEvent micFail, "Log In", "Log In button is missing from the page"
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("Username").Exist Then
	Browser("Chrome").Page("Store").WebEdit("Username").Set "Buburuza"
Else
	Reporter.ReportEvent micFail, "Log In", "Username edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("Password").Exist Then
	Browser("Chrome").Page("Store").WebEdit("Password").SetSecure "6447b50a06897b286945d7bf82f3cef5b486eecadc24d47c77f5b58e"
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

If Browser("Chrome").Page("Store").Link("WelcomeMessage").GetROProperty("innertext") = "Welcome Buburuza" Then
	Reporter.ReportEvent micPass, "Welcome Message", "Welcome Message is present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome Message", "Welcome Message is not present on the page"
	ExitTest
End If

