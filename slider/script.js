const imagesCatalog = document.querySelectorAll('.catalog__item');
const controllsCatalog = document.querySelectorAll('.catalog-controlls');
let imageIndexCatalog = 0;

function showCatalog(indexCatalog) {
    imagesCatalog[imageIndexCatalog].classList.remove('active-catalog');
    imagesCatalog[indexCatalog].classList.add('active-catalog');
    imageIndexCatalog = indexCatalog;
}

controllsCatalog.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-catalog')) {
            let indexCatalog = imageIndexCatalog - 1;

            if (indexCatalog < 0) {
                indexCatalog = imagesCatalog.length - 1;
            }

            showCatalog(indexCatalog);
        } else if (event.target.classList.contains('next-catalog')) {
            let indexCatalog = imageIndexCatalog + 1;
            if (indexCatalog >= imagesCatalog.length) {
                indexCatalog = 0;
            }
            showCatalog(indexCatalog);
        }
    })
})

showCatalog(imageIndexCatalog);
