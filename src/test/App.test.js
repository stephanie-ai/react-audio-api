import App from '../App.js';

describe('App', () => {
    let component, form, nameInput;
    // You will usually find `component` name `wrapper` in documentation.
    beforeEach(() => {
        component = shallow(<App />);
        form = component.find('form');
        nameInput = component.find('#nameInput');
    })
})