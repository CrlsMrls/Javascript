#!/bin/bash
# Simple setup.sh for configuring Node.js
# This works in Linux Debian, Ubuntu and Mint

# Install nvm: node-version manager
# https://github.com/creationix/nvm
sudo apt-get install -y git
sudo apt-get install -y wget
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh

# Load nvm and install latest production node
. $HOME/.nvm/nvm.sh
nvm install v0.10
nvm use 0.10

# Detect profile file, .bash_profile has precedence over .profile
if [ -f "$HOME/.bashrc" ]; then
	PROFILE="$HOME/.bashrc"
elif [ -f "$HOME/.bash_profile" ]; then
	PROFILE="$HOME/.bash_profile"
elif [ -f "$HOME/.profile" ]; then
	PROFILE="$HOME/.profile"
fi

SOURCE_STR="[[ -s "$NVM_DIR/nvm.sh" ]] && . "$NVM_DIR/nvm.sh"  # This loads NVM"
NVMUSE_STR="nvm use 0.10"

if ! grep -qc 'nvm use' $PROFILE; then
  echo "=> Appending nvm use to $PROFILE"
  echo "" >> "$PROFILE"
  echo $SOURCE_STR >> "$PROFILE"
  echo $NVMUSE_STR >> "$PROFILE"
else
  echo "=> nvm use already in $PROFILE"
fi
