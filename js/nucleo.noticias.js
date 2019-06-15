const getNoticias = async() =>{
    let exPath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: exPath
    });
    const page = await browser.newPage();
    await page.goto(`https://brasil.elpais.com`);

    await document.getElementById("bntEnviar").click();
    await browser.close();
};

const enviaNoticias = async() => {
    let li = document.getElementsByTagName('li');
    var val = 'Manchetes:\n';
    for (let i in li) {
        let _li = li[i].textContent;
        if (_li != 'undefined' && _li != undefined)
            val += _li + '\n';
    }
    console.log(val);
    let exPath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: exPath
    });
    const page = await browser.newPage();
    await page.goto('https://webmail.backsite.com.br/');
    await page.type('#RainLoopEmail', 'lucassantos@backsite.com.br');
    await page.type('#RainLoopPassword', 'BacksiTe@026');
    await page.click('button.btn');
    await page.waitForNavigation({
        waitUntil: 'load'
    });
    try {
        await page.waitForSelector('.buttonCompose');
        await page.click('.buttonCompose');
        await page.type('.ui-autocomplete-input', 'emersonrios@gmail.com');
        const data = new Date();
        await page.type('[data-bind="textInput: subject, hasFocus: subject.focused"]', 'Noticias do El País '+ ("0" + data.getDate()).substr(-2) + "/" + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear());
        // await page.waitFor(4000);
        await page.waitForSelector('#cke_1_contents');
        await page.click('#cke_1_contents');
        // await page.waitFor(4000);
        await page.type('#cke_1_contents', val);
        await page.waitFor(400);
        await page.waitForSelector('.button-send');
        await page.click('.button-send');
        // await page.waitFor(4000);
        await page.waitForSelector('div.modal.hide.b-compose.fade',{hidden:true});
        await browser.close();
        await document.getElementById("closeManchetes").click();
    } catch (e) {
        console.log(e);
    }
};