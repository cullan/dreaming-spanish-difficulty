#!/usr/bin/env sh

# this script will make a zip file with the extension contents.
# the release zip will not include this script or the .git directory.

VERSION=$(git describe --tags --abbrev=0)

zip -r -FS ../dreaming-ui-enhancement-"$VERSION".zip \
    -x "*.git*" -x "scripts/*" -x "screenshots/*" -- *
