window.getFooterYear = (initialYear = null) => {
    const currentYear = new Date().getFullYear()

    if (initialYear !== null && initialYear < currentYear) {
        return `${initialYear} - ${currentYear}`;
    }

    return currentYear;
};