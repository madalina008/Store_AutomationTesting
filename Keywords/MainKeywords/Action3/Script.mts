If Browser("Chrome").Page("Store").Link("LogOut").Exist Then
	Browser("Chrome").Page("Store").Link("LogOut").Click
Else
	Reporter.ReportEvent micFail, "Log Out", "Log Out link doesn't exist", takeScreenshot
	ExitTest
End  If

'If Not Browser("Chrome").Page("Home").Link("LogOut").Exist Then
'	Reporter.ReportEvent micPass, "Log Out", "Log Out event was successful"
'Else
'	Reporter.ReportEvent micFail, "Log Out", "Log Out event was not successful", takeScreenshot
'	ExitTest
'End  If 
