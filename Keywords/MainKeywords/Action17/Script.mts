'Verify the Contact content, if it contains all the needed information to be filled

RunAction "GoToContact", oneIteration
If Browser("Chrome").Page("Store").WebEdit("ContactEmail").Exist Then
	Reporter.ReportEvent micPass, "Contact Email", "Contact Email edit box exists in the page"
Else
	Reporter.ReportEvent micFail, "Contact Email", "Contact Email edit box doesn't exist in the page", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("ContactName").Exist Then
	Reporter.ReportEvent micPass, "Contact Name", "Contact Name edit box exists in the page"
Else
	Reporter.ReportEvent micFail, "Contact  Name", "Contact Name edit box doesn't exist in the page", takeScreenshot
	ExitTest
End  If	

If Browser("Chrome").Page("Store").WebEdit("Message").Exist Then
	Reporter.ReportEvent micPass, "Message", "Message edit box exists in the page"
Else
	Reporter.ReportEvent micFail, "Message", "Message edit box doesn't exist in the page", takeScreenshot
	ExitTest
End  If	

If Browser("Chrome").Page("Store").WebButton("SendMessage").Exist Then
	Reporter.ReportEvent micPass, "Send Message", "Send Message button exists in the page"
Else
	Reporter.ReportEvent micFail, "Send Message", "Send Message button doesn't exist in the page", takeScreenshot
	ExitTest
End  If	

If Browser("Chrome").Page("Store").WebButton("Close").Exist Then
	Reporter.ReportEvent micPass, "Close", "Close button exists in the page"
Else
	Reporter.ReportEvent micFail, "Close", "Close button doesn't exist in the page", takeScreenshot
	ExitTest
End  If	

