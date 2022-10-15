export const injectScript = (path, isAsync = false) => {
    const script = document.createElement("script");
    script.src = path;
    script.async = isAsync;
    document.body.appendChild(script);
    console.log("ERHAN, 1");
};
