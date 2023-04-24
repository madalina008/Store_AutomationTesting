'SystemUtil.CloseProcessByName("chrome.exe")

SystemUtil.Run "chrome.exe", , , , mode_Maximized

Wait(3)
If Browser("Chrome").Exist Then
	Browser("Chrome").Maximize
	Browser("Chrome").Navigate Parameter("StartPage")
	If Browser("Chrome").Page("Store").Exist Then
		Reporter.ReportEvent micPass, "Open Browser", "Browser is opened on Store Page"
	Else
		Reporter.ReportEvent micFail, "Open Browser", "Browser is opened but not on StorePage"
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "OpenBrowser", "Browser can not be opened.", takeScreenshot
	ExitTest
End If
