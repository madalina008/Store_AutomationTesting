'You can add to cart just one product. To add more products, you have to call this action multiple times.

'Select the desired products
Dim childObjects, oDesc
Set oDesc = Description.Create
oDesc("micclass").Value = "Link"
Set childObjects = Browser("Chrome").Page("Store").ChildObjects(oDesc)

For i = 0 To childObjects.Count - 1
   If childObjects(i).GetROProperty("innertext")  = Parameter("ProductName") Then
   	childObjects(i).Click()
   End If
Next

'Check if the product was opened
If Browser("Chrome").Page("Store").WebElement("ProductName").Exist Then
	If Browser("Chrome").Page("Store").WebElement("ProductName").GetROProperty("innertext") = Parameter("ProductName") Then
		Reporter.ReportEvent micPass, "Product name", "The produc name is correct"
	Else	
		Reporter.ReportEvent micPass, "Product name", "The produc name is incorrect"
		ExitTest
	End If
Else
	Reporter.ReportEvent micFail, "Product search", "The product was not found", takeScreenshot
	ExitTest
End If

