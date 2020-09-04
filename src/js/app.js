window.getFooterYear = (initialYear = null) => {
    const currentYear = new Date().getFullYear()

    if (initialYear !== null && initialYear < currentYear) {
        return `${initialYear} - ${currentYear}`;
    }

    return currentYear;
};

window.initEmbedVideos = () => {
    document.querySelectorAll('[data-embed-url]').forEach((embed) => {
        embed.addEventListener('click', () => {
            embed.parentElement.innerHTML = '<object class="embed-responsive-item" data="' + embed.getAttribute('data-embed-url') + '"></object>';
        });
    });
};
