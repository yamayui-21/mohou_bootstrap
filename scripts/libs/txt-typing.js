


class AddText {
    constructor(text, moveLeft) {
        this.textBorder = document.querySelector('.border-defoult');
        this.textContainer = document.querySelector('.text-container');

        this.text = text;
        this.textArray = this.text.split('');
        this.index = 0;
        this.moveLeft = moveLeft;
        
        
    }
    async start() {
        while (this.index < this.textArray.length) {
            const currentChar = this.textArray[this.index];
            const span = document.createElement("span");
            span.innerHTML = currentChar;
            this.textBorder.appendChild(span);
            if(this.index === 0 && this.moveLeft) {
                span.classList.add("moveLeft_redy");
            }
            this.index++;
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }
    async remove() {
        const notMoveLeftSpans = this.textBorder.querySelectorAll("span:not(.moveLeft_redy):not(.border-defoult)")
        for(let i = notMoveLeftSpans.length - 1; i >= 0; i--) {
            const span = notMoveLeftSpans[i];
            span.remove();
            await new Promise(resolve => setTimeout(resolve, 80));
            if(i == 1 && this.moveLeft){
                const moveLeftSpan = this.textBorder.querySelector("span.moveLeft_redy");
                moveLeftSpan.remove();
                this.textContainer.prepend(moveLeftSpan);
                moveLeftSpan.style.color = "transparent";
                console.log(moveLeftSpan.offsetWidth);
                this.textContainer.style.transform = `translateX(-${moveLeftSpan.offsetWidth}px)`;
            }    
        }
    }
}



async function createAddText(bool_addclass=false) {
    const addText1 = new AddText("Hello World!",bool_addclass);
    await addText1.start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addText1.remove();
    const addText2 = new AddText("こんにちは世界！");
    await addText2.start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addText2.remove();
    const addText3 = new AddText("Bonjour le monde!");
    await addText3.start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addText3.remove();
    const addText4 = new AddText("Hallo Welt!");
    await addText4.start();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addText4.remove();
    createAddText();
}
createAddText(true);