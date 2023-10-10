const searchContainer = document.createElement('div');
searchContainer.classList = 'search_bar';
const searchInput = document.createElement('input');
searchInput.classList = 'search_bar__input';
searchInput.type = 'text';
searchInput.placeholder = 'Поиск...';
const searchIcon = document.createElement('div');
searchIcon.classList = 'search_bar__icon';
const searchClose = document.createElement('button');
searchClose.classList = 'search_bar__close';

searchIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
        <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 22L18 17" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

searchClose.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2719_6178)">
        <path d="M21 1L1 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 1L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2719_6178">
        <rect width="22" height="22" fill="white"/>
        </clipPath>
        </defs>
    </svg>
`;

searchContainer.appendChild(searchIcon);
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchClose);

export { searchContainer };
