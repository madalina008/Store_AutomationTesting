If Browser("Chrome").Page("Store").Link("LogIn").Exist Then
	Browser("Chrome").Page("Store").Link("LogIn").Click
	Reporter.ReportEvent micPass, "Log In", "Log In button exists on the page"
Else
	Reporter.ReportEvent micFail, "Log In", "Log In button is missing from the page"
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

If Browser("Chrome").Page("Store").Link("Laptops").Exist Then
	Browser("Chrome").Page("Store").Link("Laptops").Click
Else
	Reporter.ReportEvent micFail, "Navigate to Laptops", "Laptop link is not present on the page"
	ExitTest
End If @@ script infofile_;_ZIP::ssf4.xml_;_

If Browser("Chrome").Page("Store").Link("Monitors").Exist Then
	Browser("Chrome").Page("Store").Link("Monitors").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Else
	Reporter.ReportEvent micFail, "Navigate to Monitors", "Monitors link is not present on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Store").Link("Phones").Exist Then @@ script infofile_;_ZIP::ssf8.xml_;_
	Browser("Chrome").Page("Store").Link("Phones").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Else
	Reporter.ReportEvent micFail, "Navigate to Phones", "Phones link is not present on the page"
	ExitTest
End If

If Browser("Chrome").Page("Store").Link("Home").Exist Then
	Browser("Chrome").Page("Store").Link("Home").Click
Else
	Reporter.ReportEvent micFail, "Navigate to Home", "Home link is not present on the page"
	ExitTest
End If

If Browser("Chrome").Page("Store").Link("Contact").Exist Then @@ script infofile_;_ZIP::ssf20.xml_;_
	Browser("Chrome").Page("Store").Link("Contact").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Else
	Reporter.ReportEvent micFail, "Go to Contact", "Contact link is not present on the page"
	ExitTest
End If
 @@ script infofile_;_ZIP::ssf24.xml_;_
If Browser("Chrome").Page("Store").WebEdit("ContactEmail").Exist Then
	Browser("Chrome").Page("Store").WebEdit("ContactEmail").Set "contactemail@gmail.com" @@ script infofile_;_ZIP::ssf25.xml_;_
Else
	Reporter.ReportEvent micFail, "Contact Email", "Contact Email edit box doesn't exist on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebEdit("ContactName").Exist Then
	Browser("Chrome").Page("Store").WebEdit("ContactName").Set "Contact Name" @@ script infofile_;_ZIP::ssf26.xml_;_
Else
	Reporter.ReportEvent micFail, "Contact Name", "Contact Name edit box doesn't exist on the page"
	ExitTest
End  If	

If Browser("Chrome").Page("Store").WebEdit("ContactMessage").Exist Then @@ script infofile_;_ZIP::ssf27.xml_;_
	Browser("Chrome").Page("Store").WebEdit("ContactMessage").Set "Message...." @@ script infofile_;_ZIP::ssf27.xml_;_
Else
	Reporter.ReportEvent micFail, "Contact Message", "Contact Message edit box doesn't exist on the page"
	ExitTest
End  If	

If Browser("Chrome").Page("Store").WebButton("SendMessage").Exist Then
	Browser("Chrome").Page("Store").WebButton("SendMessage").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Else
	Reporter.ReportEvent micFail, "Send Message", "Send Message button doesn't exist on the page"
	ExitTest
End  If	

Wait(1)
Dim mySendKeys
set mySendKeys = CreateObject("WScript.shell")
mySendKeys.SendKeys("{ENTER}")
 @@ hightlight id_;_198252_;_script infofile_;_ZIP::ssf29.xml_;_
If Browser("Chrome").Page("Store").Link("AboutUs").Exist Then
	Browser("Chrome").Page("Store").Link("AboutUs").Click
Else
	Reporter.ReportEvent micFail, "About Us", "About us link doesn't exist on the page"
	ExitTest
End If 

If Browser("Chrome").Page("Store").WebButton("PlayVideo").Exist Then
	Browser("Chrome").Page("Store").WebButton("PlayVideo").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Else
	Reporter.ReportEvent micFail, "Play Button", "Play button doesn't exist on the page"
	ExitTest
End If 

Wait(3)
If Browser("Chrome").Page("Store").WebButton("CloseAboutUs").Exist Then
	Browser("Chrome").Page("Store").WebButton("CloseAboutUs").Click
Else
	Reporter.ReportEvent micFail, "Close About Us", "Close About Us doesn't exist on the page"
	ExitTest
End If 
 @@ script infofile_;_ZIP::ssf17.xml_;_
If Browser("Chrome").Page("Store").Link("Cart").Exist Then @@ script infofile_;_ZIP::ssf18.xml_;_
	Browser("Chrome").Page("Store").Link("Cart").Click @@ script infofile_;_ZIP::ssf18.xml_;_
Else
	Reporter.ReportEvent micFail, "Go To Cart", "Cart link doesn't exist on the page"
	ExitTest
End If 

If Browser("Chrome").Page("Store").WebButton("PlaceOrder").Exist Then
	Reporter.ReportEvent micPass, "Place Order", "Place Order button exists on the page"
Else
	Reporter.ReportEvent micFail, "Place Order", "Place Order button doesn't exists on the page"
	ExitTest
End  If

If Browser("Chrome").Page("Store").Link("LogOut").Exist Then
	Browser("Chrome").Page("Store").Link("LogOut").Click
Else
	Reporter.ReportEvent micFail, "Log Out", "Log Out button doesn't exists on the page"
	ExitTest
End  If

If Not Browser("Chrome").Page("Store").Link("WelcomeMessage").Exist Then
	Reporter.ReportEvent micPass, "Welcome Message", "Welcome Message is not present on the page"
Else
	Reporter.ReportEvent micFail, "Welcome Message", "Welcome Message is present on the page"
	ExitTest
End If
