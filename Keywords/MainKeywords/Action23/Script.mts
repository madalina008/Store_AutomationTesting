'If Browser("Chrome").Page("Store").Image("Image").Exist Then
'	If Browser("Chrome").Page("Store").Image("Image").GetROProperty("alt") = "First slide" Then
'		
'	End If
'See next picture
If Browser("Chrome").Page("Store").WebButton("NextPicture").Exist Then
	Browser("Chrome").Page("Store").WebButton("NextPicture").Click
Else
	Reporter.ReportEvent micFail, "See next picture", "Next picture button is missing from the page", takeScreenshot
	ExitTest
End  If

