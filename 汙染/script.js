document.addEventListener('scroll', function () {
    const pipe = document.querySelector('.pipe');
    const water = document.querySelector('.water');
    const allpie = document.querySelector('.allpie');
    const dirtywater = document.querySelector('.dirtywater');
    const pipePosition = pipe.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    const distanceFromViewportBottom = pipePosition - screenPosition + pipe.offsetHeight;
    if (pipePosition > screenPosition / 6) {
        water.classList.add('flood');
        water.classList.remove('drain');
        allpie.classList.remove('pieup');
        allpie.classList.add('piedown');
        if (dirtywater.getBoundingClientRect().top / 2 < window.innerHeight / 3) {
            dirtywater.style.opacity = 1;
        } else {
            dirtywater.style.opacity = 0;
        }
    } else {

        allpie.classList.add('pieup');
        allpie.classList.remove('piedown');
        water.classList.remove('flood');
        water.classList.add('drain');
    }
});



function pieAnimation() {
    let pie_el = document.querySelectorAll(".pie");
    pie_el.forEach((item) => {
        let d = item.getBoundingClientRect().top - window.innerHeight;
        if (d < 0 && !item.classList.contains("ani")) {
            item.classList.add("ani");
            item.classList.remove("ani-reverse");
        } else if (d >= 0 && item.classList.contains("ani")) {
            item.classList.remove("ani");
            item.classList.add("ani-reverse");
        }
    });
    let pie_el2 = document.querySelectorAll(".pie2");
    pie_el2.forEach((items) => {
        let w = items.getBoundingClientRect().top - window.innerHeight;
        if (w < 0 && !items.classList.contains("ani")) {
            items.classList.add("ani");
            items.classList.remove("ani-reverse");
        } else if (w >= 0 && items.classList.contains("ani")) {
            items.classList.remove("ani");
            items.classList.add("ani-reverse");
        }
    });
}
window.addEventListener("scroll", () => {
    pieAnimation();
});


document.addEventListener('scroll', function () {
    const heavy_metal = document.querySelector('.heavy_metal');
    const pietext = document.querySelector('.pietext');
    const pietextPosition = pietext.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    const distanceFromViewportBottom2 = pietextPosition - screenPosition + pietext.offsetHeight;
    if (pietextPosition > screenPosition / 1000000) {
        heavy_metal.classList.remove('metalup');
        heavy_metal.classList.add('metaldown');
    } else {

        heavy_metal.classList.add('metalup');
        heavy_metal.classList.remove('metaldown');
    }
});

document.addEventListener('scroll', function () {
    const plasticbg = document.querySelector('.plasticbg');
    const metaltext = document.querySelector('.metaltext');
    const metaltextPosition = metaltext.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (metaltextPosition > screenPosition / 1000000) {
        plasticbg.classList.remove('plasticup');
        plasticbg.classList.add('plasticdown');

    } else {

        plasticbg.classList.add('plasticup');
        plasticbg.classList.remove('plasticdown');
    }
});

document.addEventListener('scroll', function () {
    const oilsome = document.querySelector('.oilsome');
    const oilship = document.querySelector('.oilship');
    const oil = document.querySelector('.oil');
    const oiltext = document.querySelector('.oiltext p');
    const oiltextPosition = oiltext.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if (oiltextPosition > screenPosition / 2) {
        oilsome.classList.remove('oilup');
        oilsome.classList.add('oildown');
        oilship.classList.add('shipmove');
        oilship.classList.remove('shipstop');
        oil.classList.remove('oilin');
        oil.classList.add('oilout');
        oilship.classList.remove('shipo');
        oilship.classList.add('shipx');

    } else {
        oilsome.classList.add('oilup');
        oilsome.classList.remove('oildown');
        oilship.classList.add('shipstop');
        oilship.classList.remove('shipmove');
        setTimeout(() => {
            oilship.classList.add('shipo');
            oilship.classList.remove('shipx');
        }, 3800);
        setTimeout(() => {
            oil.classList.remove('oilout');
            oil.classList.add('oilin');
        }, 3700);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const floatingContainer = document.querySelector('.floating-container');
    const paragraph = document.querySelector('.metaltext p');
    const heading = document.querySelector('.metaltext h1');
    const items = [
        { text: "短時間症狀有肌肉無力、協調性變差、手腳麻痹、皮膚起疹子、焦慮、出現記憶問題、看、聽跟說都變得困難等。但是期暴露於低劑量的汞之中，會有何影響尚不明朗。", image: "./image/汞.png", title: "汞 Hg" },
        { text: "症狀包括腹部疼痛、便秘、頭痛、煩躁不安、記憶力出問題、不孕和手腳麻痹，嚴重時會導致智力下降、貧血、癲癇發作、昏迷或死亡。", image: "./image/鉛.png", title: "鉛 Pb" },
        { text: "長期暴露於鎘對人體健康造成嚴重的危害，其症狀可能包含:腎臟功能受損甚至腎衰竭、骨質疏松和骨骼疾病、增加患癌症的風險(尤其是肺癌)、鎘心血管疾病有關，尤其是在暴露於高濃度的鎘的情況下。", image: "./image/鎘.png", title: "鎘 Cd" },
        { text: "短時間產生砷中毒現象，其症狀可能包含：頭痛、暈眩、嘔吐、腹痛、腦病變以及帶血液的水狀腹瀉。長期接觸會導致皮膚增厚、足部角化症、黑色素沉澱、腹痛、腹瀉、心血管疾病、周邊神經病變和癌症。", image: "./image/砷.png", title: "砷 As" }
    ];

    function createFloatingObject() {
        const item = items[Math.floor(Math.random() * items.length)];
        const floatingObject = document.createElement('div');
        floatingObject.classList.add('floating-object');
        floatingObject.style.top = Math.random() * 100 + '%';
        floatingObject.style.left = '-5%'; // 在 .metaltext 的左邊界之外
        floatingObject.style.backgroundImage = `url('${item.image}')`;
        floatingObject.style.backgroundSize = 'cover';
        floatingObject.setAttribute('data-text', item.text);
        floatingObject.setAttribute('data-title', item.title);
        floatingContainer.appendChild(floatingObject);

        floatingObject.addEventListener('click', function () {
            const newText = this.getAttribute('data-text');
            const newTitle = this.getAttribute('data-title');
            paragraph.textContent = newText;
            heading.textContent = newTitle;
        });

        floatingObject.addEventListener('animationiteration', function () {
            const rect = floatingObject.getBoundingClientRect();
            const containerRect = floatingContainer.getBoundingClientRect();
            if (rect.right > containerRect.right) {
                floatingObject.remove();
            }
        });
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(createFloatingObject, i * 4000);
    }
});

