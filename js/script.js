var Counter = React.createClass({
    getDefaultProps() {
        console.log('[getDefaultProps]: Okreslenie poczatkowego stanu komponentu wraz z domyslnym ustawianiem wartosci propsow.');
    },

    getInitialState() {
        console.log('[getInitialState]: Okreslenie poczatkowego stanu komponentu.');

        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('[componentWillMount]: Aktulaizacja stanu na tym etapie nie spowoduje re-renderowania.');
    },

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render() {
        console.log('[render]: Tworzenie elementu.');

        return React.createElement('div', {
                className: 'container'
            },
            React.createElement('span', {
                className: 'timer'
            }, 'Licznik: ' + this.state.counter),
            React.createElement('div', {
                    className: 'container-buttons'
                },
                React.createElement('button', {
                    className: 'increment-button',
                    onClick: this.increment
                }, '+'),
                React.createElement('button', {
                    className: 'decrement-button',
                    onClick: this.decrement
                }, '-')
            )
        );
    },

    componentDidMount() {
        console.log('[componentDidMount]: Aktualizacja stanu komponentu.');
    },

    componentReceiveProps() {
        console.log('[componentReceiveProps]: Przekazywanie obiektu jako parametr zawierajacy nowe propsy.');
    },

    sholudComponentUpdate() {
        console.log('[sholudComponentUpdate]: Anulowanie (sterowanie) re-renderowania.');
    },

    componentWillUpdate() {
        console.log('[componentWillUpdate]: Przygotowanie na nadchodzace zmiany.');
    },

    componentDidUpdate() {
        console.log('[componentDidUpdate]: Umozliwi manipulacje DOM.');
    },

    componentWillUnmount() {
        console.log('[componentWillUnmount]: Czyszczenie komponentu.');
    }
});

var newCounter = React.createElement(Counter);
var element = React.createElement('div', {},
    newCounter,
    newCounter,
    newCounter
);
ReactDOM.render(element, document.getElementById('app'));