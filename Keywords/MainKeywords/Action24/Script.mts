'See previous picture
If Browser("Chrome").Page("Store").WebButton("PreviousPicture").Exist Then
	Browser("Chrome").Page("Store").WebButton("PreviousPicture").Click
Else
	Reporter.ReportEvent micFail, "See previous picture", "Previous picture button is missing from the page", takeScreenshot
	ExitTest
End  If

