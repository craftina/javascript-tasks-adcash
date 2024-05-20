function manipulations() {
    // Selecting and removing image, iframe and video elements
    const imgElements = document.querySelectorAll('img');
    const iframesElements = document.querySelectorAll('iframe');
    const videoElements = document.querySelectorAll('video');

    imgElements.forEach(el => el.remove());
    iframesElements.forEach(el => el.remove());
    videoElements.forEach(el => el.remove());

    // Removing all style tags and links with stylesheets
    document.querySelectorAll('style').forEach(s => s.remove());
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(l => l.remove());

    // Selecting the body and all elements within
    const body = document.querySelector('body');
    const allElements = body.querySelectorAll('*');
    const screenWidth = window.innerWidth;

    // removing the styles from the body
    body.removeAttribute('id');
    body.removeAttribute('class');
    body.removeAttribute('style');

    // Iterating all elements, creating new divs and inserting the text in them
    // Appending the new divs and a banner after every div as children to the body
    // Deleting all old elements
    allElements.forEach(el => {
        const divElement = document.createElement('div');

        if (el.childNodes[0]) {
            const text = el.childNodes[0].textContent.trim();

            if (text.length > 0
                && el.childNodes[0].nodeType === Node.TEXT_NODE
                && el.tagName !== "SCRIPT") {

                divElement.innerText = el.childNodes[0].nodeValue;
                divElement.setAttribute('width', screenWidth);

                const bannerElement = document.createElement('div');
                bannerElement.innerText = "----------------------------------------------";
                bannerElement.setAttribute('style', "width: 728; height: 90");

                body.appendChild(divElement);
                body.appendChild(bannerElement);
            }
        }
        el.remove();
    })
    // removing the last banner
    const newBody = document.querySelector('body').children;
    newBody[newBody.length - 1].remove();
}
