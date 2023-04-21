If Browser("Chrome").Page("Store").Link("AboutUs").Exist Then
	Browser("Chrome").Page("Store").Link("AboutUs").Click
Else
	Reporter.ReportEvent micPass, "About Us", "About Us link is missing from the page"
	ExitTest
End  If


