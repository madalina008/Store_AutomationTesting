Dim totalPrice
totalPrice = 0

Dim objTable, priceElement
Set objTable = Browser("Chrome").Page("Store").WebTable("Products")
For i = 2 to objTable.RowCount
        priceString = objTable.GetCellData(i, 3)
        totalPrice = totalPrice + CInt(priceString)
Next

'MsgBox "Total price: $" & totalPrice
Parameter("TotalPrice") = totalPrice
