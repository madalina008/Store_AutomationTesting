If Browser("Chrome").Page("Store").Link("Cart").Exist Then
	Browser("Chrome").Page("Store").Link("Cart").Click
Else
	Reporter.ReportEvent micFail, "Go to Cart", "Cart button doesn't exist"
	ExitTest
End If
