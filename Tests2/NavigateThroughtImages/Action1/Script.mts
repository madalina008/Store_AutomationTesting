'Check first image presence on the page
If Browser("Chrome").Page("Store").Image("FirstSlide").Exist Then @@ script infofile_;_ZIP::ssf16.xml_;_
	Reporter.ReportEvent micPass, "Navigate Through Images", "First image is present on the page"
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "First image is not present on the page"
	ExitTest
End  If

'Go to the next image
If Browser("Chrome").Page("Store").WebButton("Next").Exist Then @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("Chrome").Page("Store").WebButton("Next").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Next button is not present on the page"
	ExitTest
End  If

'Check second image presence on the page
If Browser("Chrome").Page("Store").Image("SecondSlide").Exist Then @@ script infofile_;_ZIP::ssf20.xml_;_
	Reporter.ReportEvent micPass, "Navigate Through Images", "Second image is present on the page"
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Second image is not present on the page"
	ExitTest
End  If

'Go to the next image
If Browser("Chrome").Page("Store").WebButton("Next").Exist Then @@ script infofile_;_ZIP::ssf1.xml_;_
	Browser("Chrome").Page("Store").WebButton("Next").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Next button is not present on the page"
	ExitTest
End  If @@ script infofile_;_ZIP::ssf21.xml_;_

'Check second image presence on the page
If Browser("Chrome").Page("Store").Image("ThirdSlide").Exist Then @@ script infofile_;_ZIP::ssf20.xml_;_
	Reporter.ReportEvent micPass, "Navigate Through Images", "Third image is present on the page"
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Third image is not present on the page"
	ExitTest
End  If
 @@ script infofile_;_ZIP::ssf24.xml_;_
 'Go to previous picture
If Browser("Chrome").Page("Store").WebButton("Previous").Exist Then
	Browser("Chrome").Page("Store").WebButton("Previous").Click
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Previous button is not present on the page"
	ExitTest
End If 

'Check second image presence on the page
If Browser("Chrome").Page("Store").Image("SecondSlide").Exist Then @@ script infofile_;_ZIP::ssf20.xml_;_
	Reporter.ReportEvent micPass, "Navigate Through Images", "Second image is present on the page"
Else
	Reporter.ReportEvent micFail, "Navigate Through Images", "Second image is not present on the page"
	ExitTest
End  If
