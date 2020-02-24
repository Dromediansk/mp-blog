const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')       // Replace spaces with -
        .replace(/[^\w-]+/g, '')    // Remove all non-word chars
        .replace(/--+/g, '-')       // Replace multiple - with single -
        .replace(/^-+/, '')         // Trim - from start of text
        .replace(/-+$/, '')         // Trim - from end of text
}

const determineTagColor = (tag) => {
    let color;
    switch (tag.toLowerCase()) {
        case 'react':
            color = 'skyblue';
            break;
        case 'javascript':
            color = '#CCCC00';
            break;
        case 'gatsby':
            color = 'darkviolet';
            break;
        case 'seo':
            color = 'brown';
            break;
        case 'guide':
            color = 'green';
            break;
        case 'performance':
            color = 'pink';
            break;
        case 'accessibility':
            color = 'slateblue';
            break;
        case 'css':
            color = 'blue';
            break;
        default:
            color = 'black'
    }
    return color;
}

module.exports = { slugify, determineTagColor }