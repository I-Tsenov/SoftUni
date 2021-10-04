function editElement(reference, match, replacer) {
    let matcher = new RegExp(match, 'g')
    let result = reference.textContent.replace(matcher, replacer);
    reference.textContent = result;
}