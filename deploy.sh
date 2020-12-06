# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f https://github.com/fanbandan/e-portfolio.git master:gh-pages

cd ..