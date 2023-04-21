RunAction "GoToCart", oneIteration

If Browser("Chrome").Page("Cart").WebTable("Products").Exist Then
	Reporter.ReportEvent micPass, "Products table", "Products table exists in the page"
Else
	Reporter.ReportEvent micFail, "Products table", "Products table doesn't exist"
	ExitTest
End  If

If Browser("Chrome").Page("Cart").WebElement("TotalPrice").Exist Then
	Reporter.ReportEvent micPass, "Play Video", "Play Video button exists in the page"
Else
	Reporter.ReportEvent micFail, "Play Video", "Play Video button doesn't exist"
	ExitTest
End  If
