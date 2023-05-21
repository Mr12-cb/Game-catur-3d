function OnStart()
{
app.SetOrientation( "landscape" )
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

     web = app.CreateWebView( 1,1);
     web.SetBackColor( "#00000000" );
     lay.AddChild( web );

     app.AddLayout( lay );

     web.LoadUrl( "index.html" );
}