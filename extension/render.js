const urlHost = window.location.origin;

async function fetchFiles(url) {
    let path = localStorage.getItem('path');
    if (!path) {
        const newPath = prompt(
            'Informe o caminho do arquivo: Exemplo list_dir.php. (obj: Sem a url raiz)'
        );
        localStorage.setItem('path', newPath);
        return await fetchFiles(url);
    } else {
        const res = await fetch(`${url}/${path}`).then((res) => res.json());
        return res;
    }
}

async function reloadList(selector) {
    try {
        const res = await fetchFiles(urlHost);
        renderList(res, '/', selector);
    } catch (err) {
        selector.innerHTML = `<p id="message-dss-1524">Erro ao atualizar os Arquivos.<br/>Verifique a rota: <a target="_blank" href="${urlHost}/${localStorage.getItem(
            'path'
        )}">${urlHost}/${localStorage.getItem('path')}</a></p>`;
    }
}

async function render() {
    const body = document.querySelector('body');
    const root = document.createElement('div');
    const files = document.createElement('div');
    const menu = document.createElement('div');
    const reload = document.createElement('span');
    const path = document.createElement('span');
    const controller = document.createElement('div');
    controller.setAttribute('id', 'controller-dss-1524');
    menu.setAttribute('id', 'menu-dss-1524');
    reload.setAttribute('id', 'reload-dss-1524');
    path.setAttribute('id', 'path-dss-1524');
    files.setAttribute('id', 'files-dss-1524');
    root.setAttribute('id', 'root-dss-1524');
    menu.append(reload);
    menu.append(path);
    root.append(files);
    root.append(controller);
    root.append(menu);
    body.append(root);
    try {
        const res = await fetchFiles(urlHost);
        renderList(res, '/', files);
    } catch (err) {
        files.innerHTML = `<p id="message-dss-1524">Erro ao buscar os Arquivos.<br/>Verifique a rota: <a target="_blank" href="${urlHost}/${localStorage.getItem(
            'path'
        )}">${urlHost}/${localStorage.getItem('path')}</a></p>`;
    }
    return {
        body,
        root,
        controller,
        files,
        menu,
        reload,
        path,
    };
}

function renderList(files, path, selector) {
    const filesFilter = [];
    files.forEach((file) => {
        if (typeof file === 'string') {
            filesFilter.push(
                `<a target="_blank" id="links-dss-1524" href="${urlHost}/${path}/${file}"><span id="links-icon-dss-1524">${icons[
                    file.split('.').pop()
                ]('currentColor')}</span>${file}</a>`
            );
        } else {
            const div = document.createElement('div');
            const files = document.createElement('div');
            const key = Object.keys(file);
            div.innerHTML = `<p id="folder-dss-1524"><span id="arrow-icon-dss-1524">${icons[
                'arrowRight'
            ]('currentColor')}</span><span id="folder-icon-dss-1524">${icons[
                'folder'
            ]('currentColor')}</span>${key}</p>`;
            div.append(files);
            renderList(file[key], `${path}/${key}`, files);
            selector.append(div);
        }
    });
    filesFilter.forEach((file) => (selector.innerHTML += file));
}
