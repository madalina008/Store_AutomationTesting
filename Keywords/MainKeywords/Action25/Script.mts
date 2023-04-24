If Browser("Chrome").Page("Store").WebElement("ProductName").Exist Then
	If Browser("Chrome").Page("Store").WebElement("ProductName").GetROProperty("innertext") = Parameter("ProductName") Then
		Reporter.ReportEvent micPass, "Product Name", "Product Name is correct"
	Else
		Reporter.ReportEvent micFail, "Product Name", "Product Name is incorrect", takeScreenshot
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Product Name", "Product Name is missing from the page", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebElement("ProductPrice").Exist Then
	If Browser("Chrome").Page("Store").WebElement("ProductPrice").GetROProperty("innertext") = ("$" + Parameter("ProductPrice") + " *includes tax") Then
		Reporter.ReportEvent micPass, "Product Price", "Product Price is correct"
	Else
		Reporter.ReportEvent micFail, "Product Price", "Product Price is incorrect", takeScreenshot
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Product Price", "Product Price is missing from the page", takeScreenshot
	ExitTest
End  If

If Browser("Chrome").Page("Store").WebElement("ProductDescription").Exist Then
	If Browser("Chrome").Page("Store").WebElement("ProductDescription").GetROProperty("innertext") = Parameter("ProductDescription") Then
		Reporter.ReportEvent micPass, "Product Description", "Product Description is correct"
	Else
		Reporter.ReportEvent micFail, "Product Description", "Product Description is incorrect", takeScreenshot
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Product Description", "Product Price is missing from the page", takeScreenshot
	ExitTest
End  If
