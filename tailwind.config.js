/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/templates/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#8e8e93",
                tertiary: "#636366",
                quaternary: "#48484a",
                "on-surface": "#ffffff",
                "on-surface-secondary": "rgba(235, 235, 245, 0.6)",
                "on-surface-variant": "#8e8e93",
                "on-surface-tertiary": "rgba(235, 235, 245, 0.3)",
                background: "#000000",
                surface: "#1c1c1e",
                "surface-elevated": "#2c2c2e",
                "surface-grouped": "#1c1c1e",
                separator: "#38383a",
                fill: "rgba(120, 120, 128, 0.36)",
                "fill-secondary": "rgba(120, 120, 128, 0.32)",
                "fill-tertiary": "rgba(118, 118, 128, 0.24)",
            },
            borderRadius: {
                DEFAULT: "12px",
                lg: "16px",
                xl: "20px",
                "2xl": "24px",
                "3xl": "32px",
                full: "9999px",
            },
            spacing: {
                "margin-desktop": "48px",
                "margin-mobile": "16px",
                gutter: "24px",
                "container-max": "1200px",
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "SF Pro Display",
                    "system-ui",
                    "sans-serif",
                ],
            },
            fontSize: {
                "display-lg": [
                    "56px",
                    { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" },
                ],
                "headline-lg": [
                    "40px",
                    { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" },
                ],
                "headline-md": [
                    "24px",
                    { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" },
                ],
                "body-lg": ["19px", { lineHeight: "1.5", fontWeight: "400" }],
                "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
                "label-md": [
                    "14px",
                    { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" },
                ],
                "label-sm": [
                    "12px",
                    { lineHeight: "1.3", letterSpacing: "0.04em", fontWeight: "500" },
                ],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/container-queries"),
    ],
};
