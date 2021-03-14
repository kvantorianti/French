let verbs = () => {
    let verb = document.getElementById("verb").value
    console.log(`Ключ = ${verb}: значение = ${arr[verb.trim()]}`);
    document.getElementById("answer").innerHTML=arr[verb.trim()]
}



const arr = {
    "кричать": "Je-crie; Tu-cries; Il/Elle-crie; Nous-crions; Vous-criez; Ils/Elles-crient.",
    "crier": "Je-crie; Tu-cries; Il/Elle-crie; Nous-crions; Vous-criez; Ils/Elles-crient.",
    "хотеть": "Je-veux; Tu-veux; Il/Elle-veut; Nous-voulons; Vous-voulez; Ils/Elles-voulent.",
    "vouloir": "Je-veux; Tu-veux; Il/Elle-veut; Nous-voulons; Vous-voulez; Ils/Elles-voulent.",
    "мочь": "Je-peux; Tu-peux; Il/Elle-peut; Nous-pouvons; Vous-pouvez; Ils/Elles-pouvent.",
    "pouvoir": "Je-peux; Tu-peux; Il/Elle-peut; Nous-pouvons; Vous-pouvez; Ils/Elles-pouvent.",
    "ненавидеть": "Je-deteste; Tu-detestes; Il/Elle-deteste; Nous-detestons; Vous-destestez; Ils/Elles-destentent.",
    "detester": "Je-deteste; Tu-detestes; Il/Elle-deteste; Nous-detestons; Vous-destestez; Ils/Elles-destentent.",
    "хныкать": "Je-pleurniche; Tu-pleurniches; Il/Elle-pleurniche; Nous-pleurnichons; Vous-pleurnichez; Ils/Elles-pleurnichent.",
    "pleurnicher": "Je-pleurniche; Tu-pleurniches; Il/Elle-pleurniche; Nous-pleurnichons; Vous-pleurnichez; Ils/Elles-pleurnichent.",
    "смеяться": "Je-souris; Tu-souris; Il/Elle-sourit; Nous-sourions; Vous-souriez; Ils/Elles-sourient.",
    "sourire": "Je-souris; Tu-souris; Il/Elle-sourit; Nous-sourions; Vous-souriez; Ils/Elles-sourient.",
    "критиковать": "Je-critique; Tu-critiques; Il/Elle-critique; Nous-critiquons; Vous-critiquez; Ils/Elles-critiquent.",
    "critiquer": "Je-critique; Tu-critiques; Il/Elle-critique; Nous-critiquons; Vous-critiquez; Ils/Elles-critiquent.",
    "прекращать": "Je-arre^te; Tu-arre^tes; Il/Elle-arre^te; Nous-arre^tons; Vous-arre^tez; Ils/Elles-arre^tent.",
    "arreter": "Je-arre^te; Tu-arre^tes; Il/Elle-arre^te; Nous-arre^tons; Vous-arre^tez; Ils/Elles-arre^tent."
}
