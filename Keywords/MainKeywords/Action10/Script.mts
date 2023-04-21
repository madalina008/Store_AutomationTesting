If Browser("Chrome").Page("Cart").WebElement("TotalPrice").Exist Then
	Parameter("TotalPrice") = CInt(Browser("Chrome").Page("Cart").WebElement("TotalPrice").GetROProperty("innertext"))
Else
	Parameter("TotalPrice") = 0
	Reporter.ReportEvent micFail, "Total Price value", "Total Price value is missing from the page", takeScreenshot
End  If
