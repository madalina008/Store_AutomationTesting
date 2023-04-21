Dim totalPrice
RunAction "CheckTotalPrice", oneIteration, totalPrice

If Browser("Chrome").Page("Cart").WebButton("PlaceOrder").Exist Then
	Browser("Chrome").Page("Cart").WebButton("PlaceOrder").Click
Else
	Reporter.ReportEvent micFail, "Place Order", "Place Order button is missing from the page"
	ExitTest
End If

Browser("Chrome").Page("Cart").WebEdit("Name").Set Parameter("Name")
Browser("Chrome").Page("Cart").WebEdit("Country").Set Parameter("Country")
Browser("Chrome").Page("Cart").WebEdit("City").Set Parameter("City")
Browser("Chrome").Page("Cart").WebEdit("CreditCard").Set Parameter("CreditCard")
Browser("Chrome").Page("Cart").WebEdit("Month").Set Parameter("Month")
Browser("Chrome").Page("Cart").WebEdit("Year").Set Parameter("Year")

If Browser("Chrome").Page("Cart").WebButton("Purchase").Exist Then
	Browser("Chrome").Page("Cart").WebButton("Purchase").Click
Else
	Reporter.ReportEvent micFail, "Purchase", "Purchase button is missing from the page"
	ExitTest
End  If

Dim purchaseInfo, purchase
purchase = Browser("Chrome").Page("Cart").WebElement("PurchaseInfo").GetROProperty("innertext")
purchaseInfo = "Amount: " + CStr(totalPrice) + " USD" + "Card Number: " + Parameter("CreditCard") + "Name: " + Parameter("Name")

If InStr(purchase, purchaseInfo) > 0 Then
	Reporter.ReportEvent micPass, "Purchase Information", "The purchase informetion is correct"
Else
	Reporter.ReportEvent micPass, "Purchase Information", "The purchase informetion is incorrect", takeScreenshot
	ExitTest
End If

Wait(2)
If Browser("Chrome").Page("Cart").WebButton("OK").Exist Then
	Browser("Chrome").Page("Cart").WebButton("OK").Click
Else
	Reporter.ReportEvent micFail, "Check purchase finalization", "Ok button is not present on the page"
	ExitTest
End  If
