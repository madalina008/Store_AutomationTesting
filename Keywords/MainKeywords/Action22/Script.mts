If Browser("Chrome").Page("Store").Link("Home").Exist Then
	Browser("Chrome").Page("Store").Link("Home").Click
Else
	Reporter.ReportEvent micFail, "Home", "Home link is not present on the page"
	ExitTest
End  If

