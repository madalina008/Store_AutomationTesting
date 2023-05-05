If Browser("Chrome").Page("Store").Link("LogIn").Exist Then
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
	Browser("Chrome").Page("Store").WebEdit("Password").SetSecure "6447c036292bb1f4c37bc5158f36" @@ script infofile_;_ZIP::ssf4.xml_;_
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

Wait(2)
Dim mySendKeys

If Browser("Chrome").Page("Store").WebButton("Close").Exist Then @@ script infofile_;_ZIP::ssf7.xml_;_

If Browser("Chrome").Page("Store").WebButton("Close").Exist Then @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Chrome").Page("Store").WebButton("Close").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Else
	Reporter.ReportEvent micFail, "Close Login", "Close button is not present on the page"
	ExitTest
End If

If Not Browser("Chrome").Page("Store").Link("WelcomeMessage").Exist Then
	Reporter.ReportEvent micPass, "Welcome Message", "Welcome Message is not present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome Message", "Welcome Message is present on the page"
	ExitTest
End If
 @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Chrome").Page("Store").Sync
Browser("Chrome").CloseAllTabs @@ hightlight id_;_263842_;_script infofile_;_ZIP::ssf8.xml_;_
 @@ hightlight id_;_263842_;_script infofile_;_ZIP::ssf15.xml_;_
