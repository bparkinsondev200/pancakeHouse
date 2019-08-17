import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Dropdown, Segment, Header, Input } from 'semantic-ui-react';
import { flipPancakes, flipTheCakes } from './flipCakes';

class App extends React.Component {
  state = {
    pancakes: [],
    theCakes: [],
    numberOfRandomCases: 1,
    manualTestCases: []
  }

  render() {

    const setCakes = () => {
      this.setState({
        pancakes: flipTheCakes(this.state.numberOfRandomCases, this.state.manualTestCases)
      })
    }

    const setNumRandomCases = (e) => {
      let val = parseInt(e.target.innerText)
      this.setState({
        numberOfRandomCases: val
      })
    }

    const setManualTestCases = (e) => {
      let val = e.target.value
      this.setState({
        manualTestCases: [val]
      })
    }

    const options = () => {
      let optionsArr = []
      for (let i = 0; i <= 100; i++) {
        let newObj = {
          key: i,
          text: i,
          value: i
        }
        optionsArr.push(newObj)
      }
      return optionsArr
    }

    const styles = {
      segmentStyle: {
        width: '50vw',
        margin: 'auto',
        top: 250
      }
    }

    return (
      <div className="App">
        <Segment style={styles.segmentStyle}>
          <Header style={{textAlign: 'center'}}>
            Happy Pancake House
          </Header>
          <h5>
            Select how many pancake stacks to generate. Each stack will be randomly generated.
          </h5>
          <Dropdown
            selection
            placeholder='Select Random Stack Amount'
            options={options()}
            onChange={(e) => setNumRandomCases(e)}
          >
          </Dropdown>
          <h3>
            OR Enter your own
          </h3>
          <Input onBlur={(e) => setManualTestCases(e)}/>
          <br/>
          <Button size='large' style={{margin: 25}}onClick={() => setCakes()}>
            Click to flip the Cakes!
          </Button>

          <div>
            {this.state.pancakes.map((element) => {
              return (
                <div>
                  {element}
                </div>
              )
            })}
          </div>
        </Segment>
      </div>
    );
  }
}

export default App;
