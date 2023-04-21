If Browser("Chrome").Page("Store").Link("Contact").Exist Then
	Browser("Chrome").Page("Store").Link("Contact").Click
Else
	Reporter.ReportEvent micFail, "Contact link", "Contact link doesn't exist"
	ExitTest
End If
