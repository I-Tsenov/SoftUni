function password(input) {

    index = 0;
    let name = input[index];
    index++;
    let password = input[index];
    index++;
    let tempPassword = input[index];
    index++

    while (tempPassword !== password) {
        tempPassword = input[index];
        index++
    }
    console.log(`Welcome ${name}!`);

}

password(["Nakov", "1234", "Pass", "1324", "1234"])
