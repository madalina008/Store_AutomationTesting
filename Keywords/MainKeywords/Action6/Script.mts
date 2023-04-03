If Browser("Chrome").Page("Home").WebButton("AddToCart").Exist Then
	Browser("Chrome").Page("Home").WebButton("AddToCart").Click
Else
	Reporter.ReportEvent micFail, "Add product to cart", "Product doesn't exist", takeScreenshot
	ExitTest
End  If

