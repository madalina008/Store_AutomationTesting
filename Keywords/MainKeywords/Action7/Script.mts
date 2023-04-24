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
	Parameter("ProductExistence") = true
Else
	Parameter("ProductExistence") = false
End If
