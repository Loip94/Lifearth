# ── Stage 1: build ─────────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Install Node.js 18 LTS (compatible with react-scripts 3 / webpack 4)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs --no-install-recommends

WORKDIR /src
COPY . .

RUN dotnet publish LifEarthWebRadio.csproj -c Release -o /app/publish

# ── Stage 2: runtime ───────────────────────────────────────────────────────────
FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080

# Use shell form so ${PORT} is expanded at runtime (Railway injects PORT).
CMD ["sh", "-c", "exec dotnet LifEarthWebRadio.dll --urls http://+:${PORT:-8080}"]
