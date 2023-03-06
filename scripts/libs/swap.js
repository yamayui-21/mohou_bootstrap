


class DisplaySwitching {
    constructor(
        itemClassName,//表示を切り替える要素
        appendClassName,//表示させる要素に対応したボタン要素
        initialActiveIndex = 0,//初期化させる
        zoomOutClassName,//非表示アニメーション名
        zoomInClassName,//表示アニメーション名
        itemChilds//表示アニメーションをさせる親要素に使用する
    ) {
        this.items = document.querySelectorAll(`.${itemClassName}`);
        this.btns = document.querySelectorAll(`.${appendClassName}`);
        this.appendCls = document.querySelectorAll(`[class*=${appendClassName}]`);
        this.prevActiveIndex = initialActiveIndex;
        this.zoomOutClass = zoomOutClassName;
        this.zoomInClass = zoomInClassName;
        this.itemChilds = "."+itemChilds;
        this.init();
    }
  
    init() {
        this.initailActive();
        this.setEventListeners();
    
    }
    //非表示
    hideAllItems() {
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].classList.add("hidden");
          let elements = this.items[i].querySelectorAll("*");
          for (let j = 0; j < elements.length; j++) {
            elements[j].classList.add("hidden");
          }
        }
    }
    //表示
    showActiveItem(active_num) {
        this.items[active_num].classList.remove("hidden");
        let elements = this.items[active_num].querySelectorAll("*");
        for (let j = 0; j < elements.length; j++) {
          elements[j].classList.remove("hidden");
        }
    }
    initailActive() {
      this.hideAllItems();
      this.showActiveItem(this.prevActiveIndex);
    }
    ClassAddorRemove(OutpatientClass){
        
        let prev_item_child = this.items[this.prevActiveIndex].querySelectorAll(this.itemChilds);
        for (let j = 0; j < prev_item_child.length; j++) {
            console.log("");
            console.log(OutpatientClass)
            prev_item_child[j].classList.add(OutpatientClass);
        }
        setTimeout(() => {
            // class 初期化
            for (let j = 0; j < prev_item_child.length; j++) {
              prev_item_child[j].classList.remove(OutpatientClass);
            }
        }, 800);
        
    }
    OutClass(ClassName) {
        this.ClassAddorRemove(ClassName);
    }
    InClass(ClassName) {
        setTimeout(() => {
            //非表示
            this.hideAllItems();
            //表示
            this.showActiveItem(this.prevActiveIndex);
            this.ClassAddorRemove(ClassName);
        }, 800);
    }
    
  
    setEventListeners() {
      const self = this;
      for (let k = 0; k < self.appendCls.length; k++) {
            self.appendCls[k].addEventListener("click", function () {
                self.OutClass(self.zoomOutClass);
                self.isInitial = false;
                console.log("initail");
                self.InClass(self.zoomInClass);
                self.prevActiveIndex = k;
                console.log(self.prevActiveIndex);
            });
        }
    }

}
const DSobj = new DisplaySwitching(
  "item",
  "append",
  0,
  "zoom_out",
  "zoom_in",
  "item-child"
);
