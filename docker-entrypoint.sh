#!/bin/sh
# Railway injects PORT; map it to the ASP.NET Core listener address.
export ASPNETCORE_URLS=http://+:${PORT:-8080}
exec dotnet LifEarthWebRadio.dll
