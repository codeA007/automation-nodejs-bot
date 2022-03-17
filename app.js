const puppeteer = require("puppeteer");
const { v4: uuidv4 } = require('uuid');

let pageData;
let num = 0;
let capValueCode;
let capchaCode = '';
async function start() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    pageData = page;
    await page.goto('https://eresults.kletech.ac.in/');
}
start()
function store(value) {
    let capCode = value;
    return capCode;
}
async function automation(page) {
    const newId = uuidv4();
    // console.log(num + 1);
    let usns = [
        '01FE19BEC001',
        '01FE19BEC002',
        '01FE19BEC003',
        '01FE19BEC004',
        '01FE19BEC005',
        '01FE19BEC006',
        '01FE19BEC007',
        '01FE19BEC008',
        '01FE19BEC009',
        '01FE19BEC010',
        '01FE19BEC011',
        '01FE19BEC012',
        '01FE19BEC013',
        '01FE19BEC014',
        '01FE19BEC015',
        '01FE19BEC016',
        '01FE19BEC017',
        '01FE19BEC018',
        '01FE19BEC019',
        '01FE19BEC020',
        '01FE19BEC021',
        '01FE19BEC023',
        '01FE19BEC024',
        '01FE19BEC026',
        '01FE19BEC027',
        '01FE19BEC028',
        '01FE19BEC029',
        '01FE19BEC030',
        '01FE19BEC031',
        '01FE19BEC032',
        '01FE19BEC033',
        '01FE19BEC034',
        '01FE19BEC035',
        '01FE19BEC036',
        '01FE19BEC037',
        '01FE19BEC038',
        '01FE19BEC039',
        '01FE19BEC040',
        '01FE19BEC041',
        '01FE19BEC042',
        '01FE20BEC401',
        '01FE20BEC402',
        '01FE20BEC403',
        '01FE20BEC404',
        '01FE20BEC405',
        '01FE20BEC406',
        '01FE20BEC407',
        '01FE20BEC408',
        '01FE20BEC409',
        '01FE20BEC410',
        '01FE20BEC411',
        '01FE20BEC412',
        '01FE20BEC413',
        '01FE20BEC414',
        '01FE20BEC415',
        '01FE20BEC416',
        '01FE20BEC417',
        '01FE20BEC418',
        '01FE20BEC419',
        '01FE20BEC420',
        '01FE19BEC022',
        '01FE19BEC025',
        '01FE18BEC004',
        '01FE18BEC007',
        '01FE18BEC010',
        '01FE18BEC068',];
    let docNames = [
        '01',
        '01FE19BEC001',
        '01FE19BEC002',
        '01FE19BEC003',
        '01FE19BEC004',
        '01FE19BEC005',
        '01FE19BEC006',
        '01FE19BEC007',
        '01FE19BEC008',
        '01FE19BEC009',
        '01FE19BEC010',
        '01FE19BEC011',
        '01FE19BEC012',
        '01FE19BEC013',
        '01FE19BEC014',
        '01FE19BEC015',
        '01FE19BEC016',
        '01FE19BEC017',
        '01FE19BEC018',
        '01FE19BEC019',
        '01FE19BEC020',
        '01FE19BEC021',
        '01FE19BEC023',
        '01FE19BEC024',
        '01FE19BEC026',
        '01FE19BEC027',
        '01FE19BEC028',
        '01FE19BEC029',
        '01FE19BEC030',
        '01FE19BEC031',
        '01FE19BEC032',
        '01FE19BEC033',
        '01FE19BEC034',
        '01FE19BEC035',
        '01FE19BEC036',
        '01FE19BEC037',
        '01FE19BEC038',
        '01FE19BEC039',
        '01FE19BEC040',
        '01FE19BEC041',
        '01FE19BEC042',
        '01FE20BEC401',
        '01FE20BEC402',
        '01FE20BEC403',
        '01FE20BEC404',
        '01FE20BEC405',
        '01FE20BEC406',
        '01FE20BEC407',
        '01FE20BEC408',
        '01FE20BEC409',
        '01FE20BEC410',
        '01FE20BEC411',
        '01FE20BEC412',
        '01FE20BEC413',
        '01FE20BEC414',
        '01FE20BEC415',
        '01FE20BEC416',
        '01FE20BEC417',
        '01FE20BEC418',
        '01FE20BEC419',
        '01FE20BEC420',
        '01FE19BEC022',
        '01FE19BEC025',
        '01FE18BEC004',
        '01FE18BEC007',
        '01FE18BEC010',
        '01FE18BEC068',
    ];
    await page.type('#usn', usns[num],)
    const data = await page.evaluate(() => {
        if (localStorage.getItem('capcha')) {
            let val = localStorage.getItem('capcha');
            document.getElementById('osolCatchaTxt0').value = val;
            return val;
        }
        capInput = document.getElementById('osolCatchaTxt0');
        capValueCode = document.getElementById('osolCatchaTxt0').value;
        localStorage.setItem('capcha', capValueCode);
        capchaCode = capValueCode;
        console.log(capchaCode);
        return capchaCode;
    });
    await page.waitFor(1000)
    if (data != '') {
        await page.click('button[formaction="index.php?option=com_examresult&task=getResult"]');
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        // // let h3 = doument.querySelector('h3');
        // // console.log(h3);
        await page.screenshot({ path: docNames[num] + '_123_result.png', fullPage: true });
        await page.goBack([automation]);
    }

}
setInterval(() => {
    automation(pageData);
    if (num > 44) {
        return;
    }
    num++;
}, 12000)


// setInterval(start, 3000)
// let cap = '';
// let button;
// let num2 = 0;
// (async () => {
//     let usns = ['a', 'b']
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto('https://eresults.kletech.ac.in/');
//     // usnFun(page, ['01fe18bec004', '01fe18bec007'])
//     // while (num2 != 1) {
//     //     console.log(123);
//     //     automation(page)
//     //     break;
//     // }
//     setInterval(automation(page), 10000)
// })();
// // usnFun = (page, usns = []) => {
// //     usns.forEach((usn, index) => {
// //         automation(page, usns[index])
// //     })
// // }

// const automation = async (page) => {
//     let num = 0;
//     let usns = ['01fe18bec004', '01fe18bec007']
//     // console.log(usn);
//     const data = await page.evaluate(() => {
//         cap = document.getElementById('osolCatchaTxt0').value;
//         button = document.getElementsByClassName('myButton')[1];
//         console.log(button);
//     });
//     // usns.forEach(async (usn, index) => {
//     await page.waitFor(1000)
//     await page.type('#usn', usns[num],)
//     // })

//     let value = await page.waitForFunction(() => {
//         let capcha = document.getElementById('osolCatchaTxt0').value;
//         if (capcha.length == 5) {
//             console.log(capcha.length);
//             cap = capcha;
//             return true;
//         }
//     })
//     if (value) {
//         await page.click('button[formaction="index.php?option=com_examresult&task=getResult"]');
//         await page.waitForNavigation({ waitUntil: 'networkidle2' });
//         // let h3 = doument.querySelector('h3');
//         // console.log(h3);
//         await page.screenshot({ path: 'result.png', fullPage: true });
//         await page.goBack();
//         num++;
//         num2++;
//     }
// }