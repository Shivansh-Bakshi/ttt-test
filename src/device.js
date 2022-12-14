const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const min = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
}

export const max = {
    mobileS: `(max-width: ${size.mobileM})`,
    mobileM: `(max-width: ${size.mobileL})`,
    mobileL: `(max-width: ${size.tablet})`,
    tablet: `(max-width: ${size.laptop})`,
    laptop: `(max-width: ${size.laptopL})`,
    laptopL: `(max-width: ${size.desktop})`,
}