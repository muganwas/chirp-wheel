(async function (doc) {
    const slides = doc.getElementsByClassName('slide-item');
    Array.from(slides).forEach(s => {
        s.addEventListener('click', function (e) {
            e.preventDefault();
            /** Implement slide action here */
            console.log('link ', e.target)
        });
    });
})(document);