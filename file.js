const fs = require('fs');

const createFolder = (folderName) => {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(`${folderName} has been created!`);
    } else {
        console.log(`${folderName} already exists!`);
    }
}

const createFile = (fileName, folderName) => {
    if (!fs.existsSync(`./${folderName}/${fileName}.json`)) {
        fs.writeFile(`./${folderName}/${fileName}.json`, '', (err) => {
            if (err) throw err;
            console.log(`${fileName} has been created in ${folderName}!`);
        });
    } else {
        console.log(`${fileName} already exists in ${folderName}!`);
    }
}

const editFile = (fileName, folderName, data) => {
    fs.writeFile(`./${folderName}/${fileName}.json`, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log(`${fileName} has been edited in ${folderName}!`);
    });
}

module.exports = {
    createFolder,
    createFile,
    editFile
}