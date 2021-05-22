function foreignLanguages(country) {

    let language = "";

    switch (country) {
        case "USA":
        case "England": language = "English"; break;
        case "Spain":
        case "Argentina":
        case "Mexico": language = "Spanish"; break;
        default: language = "unknown"; break;
    }

    console.log (language)

}

foreignLanguages("USA");
foreignLanguages("Germany")