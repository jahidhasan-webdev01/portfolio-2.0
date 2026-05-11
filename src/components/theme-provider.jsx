import { ThemeProvider } from "next-themes";

export function ThemeProviderWrapper({ children, ...props }) {
    return (
        <ThemeProvider
            scriptProps={{ "data-cfasync": "false" }}
            {...props}
        >
            {children}
        </ThemeProvider>
    )
}