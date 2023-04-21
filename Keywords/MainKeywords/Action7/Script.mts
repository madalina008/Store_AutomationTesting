'Delete the product given as a parameter - add a keyword to check if the product was deleted
Dim objTable
Set objTable = Browser("Chrome").Page("Cart").WebTable("Products")

Dim productExists
productExists = False
For i = 1 to objTable.RowCount
	If objTable.GetCellData(i, 2) = Parameter("ProductName") Then
		productExists = True
		Exit For
	End  If
Next

If productExists = True Then
	Reporter.ReportEvent micPass,"The presence of the product in the cart", Parameter("ProductName") + " exists in the Cart"
Else
	Reporter.ReportEvent micFail, "The presence of the product in the cart", Parameter("ProductName") + " doesn't exist in the Cart", takeScreenshot
End If
