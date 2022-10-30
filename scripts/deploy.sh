# Gugustinette Server Deploy Script
# Version: 1.0.0

# Run Build Script
sh scripts/build.sh

# Run server
pm2 start server.js --name MainWebServer
