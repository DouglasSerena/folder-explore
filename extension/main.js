window.onload = async () => {
    if (window.location.hostname == 'localhost') {
        // render folder start
        const elements = await render();

        // start icons
        elements.reload.innerHTML = icons['reload']('currentColor');
        elements.path.innerHTML = icons['recycle']('currentColor');
        elements.controller.innerHTML = icons['folder']('currentColor');

        // toggle class folder controller
        elements.controller.addEventListener('click', (event) => {
            elements.controller.classList.toggle('open-dss-1524');
            elements.root.classList.toggle('open-dss-1524');
            elements.controller.className == 'open-dss-1524'
                ? (elements.controller.innerHTML = icons['folderOpen'](
                      'currentColor'
                  ))
                : (elements.controller.innerHTML = icons['folder'](
                      'currentColor'
                  ));
        });

        //  open / close body
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

        // reset routes
        elements.path.addEventListener('click', async () => {
            const path = prompt(
                'Informe o caminho do arquivo: Exemplo list_dir.php. (obj: Sem a url raiz)'
            );
            if (!!path) {
                localStorage.setItem('path', path);
                await reload();
            }
        });
    }
};
