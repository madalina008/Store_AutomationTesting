'Select the products category
Dim childObjects, oDesc
Set oDesc = Description.Create
oDesc("micclass").Value = "Link"
Set childObjects = Browser("Chrome").Page("Store").ChildObjects(oDesc)

For i = 0 To childObjects.Count - 1
	If childObjects(i).GetROProperty("innertext")  = Parameter("ProductCategory") Then
		childObjects(i).Click()
   End If
Next
