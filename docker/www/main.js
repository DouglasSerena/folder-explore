(async () => {
    if (window.location.hostname == 'localhost') {
        // render folder start
        const elements = await render();

        // start icons
        elements.reload.innerHTML = icons['reload']('currentColor');

        // open / close folder
        elements.root.addEventListener('click', (event) => {
            if (event.target.id === 'folder-dss-1524') {
                event.target.classList.toggle('open-dss-1524');
                event.target.className === 'open-dss-1524'
                    ? (event.target.querySelector(
                          '#folder-icon-dss-1524'
                      ).innerHTML = icons['folderOpen']('currentColor'))
                    : (event.target.querySelector(
                          '#folder-icon-dss-1524'
                      ).innerHTML = icons['folder']('currentColor'));
            }
        });

        // reload folder
        elements.reload.addEventListener('click', reload);
        async function reload() {
            elements.reload.classList.add('start-reload-dss-1524');
            elements.files.innerHTML = '';
            await reloadList(elements.files);
            elements.reload.classList.remove('start-reload-dss-1524');
        }
    }
})();
