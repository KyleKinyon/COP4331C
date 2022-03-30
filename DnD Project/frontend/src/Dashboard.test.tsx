import * as ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Doing Dashboard things', () => {
    let container:HTMLDivElement
    container = document.createElement('div');
    ReactDOM.render(<Dashboard/>, container);

    test('Loads stuff correctly', ()=>{
        const fn = jest.fn();
        const images = container.querySelectorAll('img');
        const divs = container.querySelectorAll('div');
        const buttons = container.querySelectorAll('button');
        expect(images).toHaveLength(3);
        expect(divs).toHaveLength(12);
        expect(buttons).toHaveLength(5);
        expect(buttons[0].tabIndex).toBe(0);

    })
})