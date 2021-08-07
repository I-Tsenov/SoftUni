function extractFile(path) {

    let tokens = path.split('\\');
    let file = tokens.pop();

    let index = file.lastIndexOf('.')
    let fileName = file.substring(0, index);
    let fileExtension = file.substring(index + 1)

    console.log(`File name: ${fileName}\nFile extension: ${fileExtension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')