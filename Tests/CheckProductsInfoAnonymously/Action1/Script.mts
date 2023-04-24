RunAction "OpenBrowser [MainKeywords]", oneIteration, dataTable.Value("URL", dtGlobalSheet)

'Search for products and open them separately

Set globalSheet = dataTable.GetSheet("Global")

rowCount = globalSheet.GetRowCount

For i = 1 To rowCount
	dataTable.SetCurrentRow i
	
	productName = dataTable.Value("ProductName")
	productCategory = dataTable.Value("ProductCategory")
	productPrice = dataTable.Value("ProductPrice")
	productDescription = dataTable.Value("ProductDescription")
	
	RunAction "SelectProductCategory [MainKeywords]", oneIteration, productCategory
	RunAction "SelectProduct [MainKeywords]", oneIteration, productName
	RunAction "CheckProductInformation [MainKeywords]", oneIteration, productName, productPrice, productDescription
	RunAction "GoToHome [MainKeywords]", oneIteration
Next
