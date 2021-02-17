const generateManager = data => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${data.getName()}</div>
                <h3 class="card-title>${data.getRole()}</div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${data.getId()}</li>

                </ul>
            </div>
        </div>
    `;
};

const generateIntern = data => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${data.getName()}</div>
                <h3 class="card-title>${data.getRole()}</div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${data.getId()}</li>

                </ul>
            </div>
        </div>
    `;
};

module.exports = {
    generateManager,
    generateIntern
};
