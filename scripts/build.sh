# Gugustinette Server Build Script
# Version: 1.0.0

# Run Install Script
sh scripts/install.sh

# Remove Old Build
rm -rf dist

# Build
npm run generate

# Move dist/gugustinette content to dist/
mv dist/gugustinette/* dist/
