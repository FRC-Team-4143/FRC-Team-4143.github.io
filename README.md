# MARS/WARS Software Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local Development (Windows)
- Ensure `Node.js` version is greater than 18.0 (check by running `node -v`)
    - Install the latest version [here](https://nodejs.org/en/download/).

- Add the `nodejs` directory to your PATH environment variable.
    - A restart may be required after updating.
    ```bash
    set PATH=%PATH%;C:\Path\to\nodejs
    ```

- Install dependencies
    Navigate your terminal to the root directory of the project and run:
    ```bash
    npm install
    ```
- Start the development server
    - The site can now be viewed with changes made live at `http://localhost:3000/`
    ```bash
    npx docusaurus start
    ```

## Build
This command generates static content into the `build` directory and can be served using any static contents hosting service.

```bash 
npm run build
```

## Remote Deployment
The site will auto deploy new content when there is a push/merge on `main`. Ensure your content builds before merging to main.
