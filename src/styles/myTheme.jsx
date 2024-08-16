const myTheme = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                favColor: {
                    main: "rgb(247, 247, 247)",
                },
            }
            : {
                // palette values for dark mode
                favColor: {
                    main:  null,
                },
            }),
    },
});

export default myTheme;