﻿Dim childObjects, oDesc
Set oDesc = Description.Create
oDesc("micclass").Value = "Link"
Set childObjects = Browser("Chrome").Page("Home").ChildObjects(oDesc)

For i = 0 To childObjects.Count - 1
   If childObjects(i).GetROProperty("innertext")  = "2017 Dell 15.6 Inch" Then
   	childObjects(i).Click()
   End If
Next