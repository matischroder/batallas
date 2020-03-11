import React, { Component } from "react";
import "./timer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import laPalabra from "./Palabras.json";
import "./ReactWatch";
var contador = 10;

class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    palabra: 1
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      contador = contador - 1;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
        if (contador <= 0) {
          let random = Math.floor(Math.random() * 9822 + 1);
          this.setState(({}) => ({
            palabra: random
          }));
          contador = 10;
        }
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }
  /*
  componentePalabra() {
    const { seconds } = this.state;
    let random = Math.floor(Math.random() * 9822 + 1);
    if (seconds === 50)
      this.setState(({}) => ({
        palabra: random
      }));
  }
  S
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  
  comenzarDeCero() {
    this.myInterval = () => {
      this.setState(({ minutes }) => ({
        minutes: 1
      }));
      this.setState(({ seconds }) => ({
        seconds: 0
      }));
    };
  }
*/
  render() {
    return (
      <div class="container">
        <button
          onClick={
            this.state.minutes > 0 || this.state.seconds > 0
              ? null
              : (this.myInterval = () => {
                  this.setState(({}) => ({
                    minutes: 0
                  }));
                  this.setState(({}) => ({
                    seconds: 59
                  }));
                })
          }
          type="button"
          class="btn btn-dark"
        >
          Start
        </button>
        {this.state.minutes === 0 && this.state.seconds === 0 ? (
          <h1>Tiempo finalizado!</h1>
        ) : (
          <h1>
            Tiempo {this.state.minutes}:
            {this.state.seconds < 10
              ? `0${this.state.seconds}`
              : this.state.seconds}
          </h1>
        )}
        <h1>{laPalabra[this.state.palabra].Palabras}</h1>
      </div>
    );
  }
}

export default Timer;
