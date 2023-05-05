If Browser("Chrome").Page("Store").Link("LogIn").Exist Then
	Browser("Chrome").Page("Store").Link("LogIn").Click
Else
	Reporter.ReportEvent micFail, "Log In", "Log In link doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("Username").Exist Then
	Browser("Chrome").Page("Store").WebEdit("Username").Set "Buburuza"
Else
	Reporter.ReportEvent micFail, "Log In", "Username edit box doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("Password").Exist Then
	Browser("Chrome").Page("Store").WebEdit("Password").SetSecure "6447b50a06897b286945d7bf82f3cef5b486eecadc24d47c77f5b58e"
Else
	Reporter.ReportEvent micFail, "Log In", "Password edit box doesn't exist", takeScreenshot
	ExitTest
End  If

Wait(2)
If Browser("Chrome").Page("Store").WebButton("LogIn").Exist Then
	Browser("Chrome").Page("Store").WebButton("LogIn").Click
Else
	Reporter.ReportEvent micFail, "Log In", "Log In button doesn't exist", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").Link("WelcomeMessage").GetROProperty("innertext") = "Welcome Buburuza" Then
	Reporter.ReportEvent micPass, "Welcome Message", "Welcome Message is present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome Message", "Welcome Message is not present on the page"
	ExitTest
End If

If Browser("Chrome").Page("Store").Link("Monitors").Exist Then @@ script infofile_;_ZIP::ssf4.xml_;_
	Browser("Chrome").Page("Store").Link("Monitors").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Else
	Reporter.ReportEvent micFail, "Go To Monitors", "Monitors link doesn't exist on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Store").Link("ASUS Full HD").Exist Then @@ script infofile_;_ZIP::ssf6.xml_;_
	Browser("Chrome").Page("Store").Link("ASUS Full HD").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Else
	Reporter.ReportEvent micFail, "Search for monitor", "ASUS Full HD monitor doesn't exist in the products list"
	ExitTest
End If

If Browser("Chrome").Page("ProductInfo").WebButton("AddToCart").Exist Then @@ script infofile_;_ZIP::ssf7.xml_;_
	Browser("Chrome").Page("ProductInfo").WebButton("AddToCart").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Else
	Reporter.ReportEvent micFail, "Add To Cart", "Add to Cart button doesn't exist on the page"
	ExitTest
End  If

Wait(1)
Dim mySendKeys
set mySendKeys = CreateObject("WScript.shell")
mySendKeys.SendKeys("{ENTER}")

If Browser("Chrome").Page("Store").Link("Cart").Exist Then
	Browser("Chrome").Page("Store").Link("Cart").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Else
	Reporter.ReportEvent micFail, "Go to Cart", "Cart link is missing from the page"
	ExitTest
End If

'Check if product was added into Cart
If Browser("Chrome").Page("Cart").WebElement("ASUS Full HD").Exist Then
	Reporter.ReportEvent micPass, "Product existence", "ASUS Full HD exists in the Cart"
Else
	Reporter.ReportEvent micFail, "Product Existence", "ASUS Full HD doesn't exist in the Cart"
	ExitTest
End  If

If Browser("Chrome").Page("Cart").WebButton("PlaceOrder").Exist Then
	Browser("Chrome").Page("Cart").WebButton("PlaceOrder").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Else
	Reporter.ReportEvent "Place Order", "Place Order button doesn't exist on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Cart").WebEdit("Name").Exist Then @@ script infofile_;_ZIP::ssf11.xml_;_
	Browser("Chrome").Page("Cart").WebEdit("Name").Set "Madalina" @@ script infofile_;_ZIP::ssf11.xml_;_
Else
	Reporter.ReportEvent micPass, "Fill the Order Name", "Name edit box is not present on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Cart").WebEdit("Country").Exist Then @@ script infofile_;_ZIP::ssf12.xml_;_
	Browser("Chrome").Page("Cart").WebEdit("Country").Set "Romania" @@ script infofile_;_ZIP::ssf12.xml_;_
Else
	Reporter.ReportEvent micFail, "Fill the Order Country", "Country edit box doesn't exists on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Cart").WebEdit("City").Exist Then @@ script infofile_;_ZIP::ssf13.xml_;_
	Browser("Chrome").Page("Cart").WebEdit("City").Set "Timisoara" @@ script infofile_;_ZIP::ssf13.xml_;_
Else
	Reporter.ReportEvent micPass, "Fill the City Country", "City edit box doesn't exist on the page"
	ExitTest
End If

If Browser("Chrome").Page("Cart").WebEdit("CreditCard").Exist Then
	Browser("Chrome").Page("Cart").WebEdit("CreditCard").Set "1234567812348765" @@ script infofile_;_ZIP::ssf14.xml_;_
Else
	Reporter.ReportEvent micPass, "Fill the Credit Card", "Credit Card edit box doesn't exist on the page"
	ExitTest
End If

If Browser("Chrome").Page("Cart").WebEdit("Month").Exist Then @@ script infofile_;_ZIP::ssf15.xml_;_
	Browser("Chrome").Page("Cart").WebEdit("Month").Set "August" @@ script infofile_;_ZIP::ssf15.xml_;_
Else
	Reporter.ReportEvent micPass, "Fill the Month", "Month edit box doesn't exist on the page"
	ExitTest
End If

If Browser("Chrome").Page("Cart").WebEdit("Year").Exist Then @@ script infofile_;_ZIP::ssf17.xml_;_
	Browser("Chrome").Page("Cart").WebEdit("Year").Set "2027" @@ script infofile_;_ZIP::ssf17.xml_;_
Else
	Reporter.ReportEvent micPass, "Fill the Year", "Year edit box doesn't exist on the page"
	ExitTest
End If

Wait(1)
If Browser("Chrome").Page("Cart").WebButton("Purchase").Exist Then @@ script infofile_;_ZIP::ssf18.xml_;_
	Browser("Chrome").Page("Cart").WebButton("Purchase").Click @@ script infofile_;_ZIP::ssf18.xml_;_
Else
	Reporter.ReportEvent micPass, "Purchase", "Purchase button doesn't exist on the page"
	ExitTest
End If

'Check Order Information
If Browser("Chrome").Page("Cart").WebElement("OrderInformation").Exist Then
	If InStr(Browser("Chrome").Page("Cart").WebElement("OrderInformation").GetROProperty("innertext"), "Amount: 230 USDCard Number: 1234567812348765Name: MadalinaDate:") > 0  Then
		Reporter.ReportEvent micPass, "Purchase Information", "The purchase informetion is correct"
	Else
		Reporter.ReportEvent micFail, "Purchase Information", "The purchase informetion is incorrect", takeScreenshot
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Purchase Information", "The purchase informetion doesn't exist on the page", takeScreenshot
	ExitTest
End  If

Wait(1)
If Browser("Chrome").Page("Cart").WebButton("OK").Exist Then @@ script infofile_;_ZIP::ssf19.xml_;_
	Browser("Chrome").Page("Cart").WebButton("OK").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Else
	Reporter.ReportEvent micFail, "Press OK", "OK button doesn't exist on the page"
	ExitTest
End  If
