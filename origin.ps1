# Fetch the latest updates from the remote repository
git fetch origin

# Reset to the origin/main branch
git reset --hard origin/main

# Clean up any untracked files
git clean -fd
