import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './sections/conditionals'
import ConditionalSection from './sections/conditionals';

//function Hello(props) {
//  return <h2> {props.title}</h2>
//}

//const Hello = (props) => <h2> {props.title} </h2>

class Hello extends Component {
  render () {
    return <h2> {this.props.title} </h2>
  }
}

class Text extends Component {
  render() {
    const { 
      arrayOfNumbers, 
      multiply, 
      objectWithInfo,
      title,
      text 
    } =   this.props
    const mappedNumbers= arrayOfNumbers.map(multiply)
    return (
    <div>
      {title}
      <p> { mappedNumbers.join(', ') }</p>
      <p> { objectWithInfo.key} </p>
      <p> {text} </p>
    </div>
    )
  }
 
}

Text.defaultProps = {
  title: 'Titulo por defecto',
  text: 'Texto por defecto'
}

class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    //this.state={ contador: 1 }
    setInterval( () => this.setState({ contador: this.state.contador +1 }), 1000)
  }
  render(){
    return <ContadorNumero numero={this.state.contador}/>
  }
}

Contador.defaultProps= {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    return <span> {this.props.numero} </span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <ConditionalSection />
        <Text 
          arrayOfNumbers={[5, 7, 10 ]}
          boolean
          multiply={ (number)=>number* 5  }
          number={2} 
          objectWithInfo = { { key: 'value', key2: 'value2 '} }
          text='texto que sobreescribo'
          title={<h1> esto es un título </h1>}
        />
        <Contador contadorInicial={1000} />
      </header>
    </div>
  );
}

export default App;
