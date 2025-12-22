install:
	@echo "Installing Node.js dependencies using npm ci..."
	npm ci
	@echo "Dependencies installed successfully."

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

