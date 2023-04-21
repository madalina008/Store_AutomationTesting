RunAction "GoToAboutUs", oneIteration

If Browser("Chrome").Page("Store").WebButton("PlayVideo").Exist Then
	Reporter.ReportEvent micPass, "Play Video", "Play Video button exists in the page"
Else
	Reporter.ReportEvent micFail, "Play Video", "Play Video button doesn't exist"
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebButton("Close_AboutUs").Exist Then
	Reporter.ReportEvent micPass, "Close", "Close button exists in the page"
Else
	Reporter.ReportEvent micFail, "Close", "Close button doesn't exist in the page"
	ExitTest
End  If



