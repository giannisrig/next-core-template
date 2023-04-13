import localFont from "@next/font/local";

//load the local fonts
const grava400  = localFont({ src: '../public/fonts/Grava Display Normal.woff'})
const grava500  = localFont({ src: '../public/fonts/Grava Display Medium.woff'})
const grava700  = localFont({ src: '../public/fonts/Grava Display Bold.woff'})

//define the fonts object
const fonts = {
    grava400: grava400,
    grava500: grava500,
    grava700: grava700,
};

export default fonts;
