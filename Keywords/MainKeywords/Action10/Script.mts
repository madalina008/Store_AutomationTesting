If Browser("Chrome").Page("Store").WebElement("TotalPrice").Exist Then
	Parameter("TotalPrice") = CInt(Browser("Chrome").Page("Store").WebElement("TotalPrice").GetROProperty("innertext"))
Else
	Parameter("TotalPrice") = 0
	Reporter.ReportEvent micFail, "Total Price value", "Total Price value is missing from the page"
End  If
