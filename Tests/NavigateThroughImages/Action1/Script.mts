RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)

RunAction "Login [MainKeywords]", oneIteration, dataTable.Value("Username", dtGlobalSheet), dataTable.Value("Password", dtGlobalSheet)

If Browser("Chrome").Page("Store").Image("FirstImage").Exist Then
	Reporter.ReportEvent micPass, "First picture presence", "First picture is present on the page"
Else
	Reporter.ReportEvent micFail, "First picture presence", "First picture is not present on the page"
	ExitTest
End If

RunAction "SeeNextPicture [MainKeywords]", oneIteration
Wait(1)
If Browser("Chrome").Page("Store").Image("SecondImage").Exist Then
		Reporter.ReportEvent micPass, "Second picture presence", "Second picture is present on the page"
Else
		Reporter.ReportEvent micFail, "Second picture presence", "Second picture is not present on the page", takeScreenshot
		ExitTest
End If

RunAction "SeeNextPicture [MainKeywords]", oneIteration
Wait(1)
If Browser("Chrome").Page("Store").Image("FirstImage").Exist Then
	Reporter.ReportEvent micPass, "Third picture presence", "Third picture is present on the page"
Else
	Reporter.ReportEvent micFail, "Third picture presence", "Third picture is not present on the page"
	ExitTest
End If

RunAction "CloseBrowser [MainKeywords]", oneIteration
