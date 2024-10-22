let currentPage = 1;
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    currentPage = pageNumber;
    const activePage = document.getElementById(`page${currentPage}`);
    activePage.classList.add('active');
}
// Inicializa a primeira página como ativa
document.addEventListener('DOMContentLoaded', () => {
    nextPage(1);
});