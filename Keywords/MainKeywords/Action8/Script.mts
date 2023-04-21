'Delete the product given as a parameter - add a keyword to check if the product was deleted
Dim objTable, deleteButton
Set objTable = Browser("Chrome").Page("Cart").WebTable("Products")
For i = 1 to objTable.RowCount
    If objTable.GetCellData(i, 2) = Parameter("ProductName") Then
        Set deleteButton = objTable.ChildItem(i, 4, "Link", 0)
        deleteButton.Click
        Exit For
    End If
Next
