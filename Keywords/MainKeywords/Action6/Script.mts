If Browser("Chrome").Page("Store").WebButton("AddToCart").Exist Then
	Browser("Chrome").Page("Store").WebButton("AddToCart").Click
Else
	Reporter.ReportEvent micFail, "Add product to cart", "Product doesn't exist", takeScreenshot
	ExitTest
End  If

