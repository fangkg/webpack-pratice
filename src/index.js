import './index.less';


class Test {
    constructor() {
        document.write('hello world hhhh')
        this.renderDiv();
    }

    renderDiv() {
        const div = document.createElement('div');
        div.className = 'test';
        div.innerHTML = 'hello world';
        document.body.appendChild(div);
    }
}

new Test()