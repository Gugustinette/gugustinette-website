# Gugustinette Server Installation Script
# Version: 1.0.0

# List of static sites names
sites=( "gus-ui" "gus-univ" )

# Install dependencies for static sites
for site in "${sites[@]}"
do
    cd static/$site
    npm install
    cd ../..
done

# Install dependencies for project
npm install

# Build & Generate static sites
npm run generate
