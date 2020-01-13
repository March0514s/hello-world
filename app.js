let dom = require('dominant');

let HelloWorld = () => {
    let model = {
        color: 'blue',
        whom: 'world',
    };

    return dom.el('div', {
        model, 
        style: () => ({ color: model.color }),
        onAttach: () => {
            setTimeout(() => {
                model.color = 'red';
                model.whom = 'human';

                dom.update();
            }, 1000);
        },
    }, [
        dom.text(() => `Hello, ${whom}!`),
    ])
}

document.body.append(HelloWorld());

window.dom = dom