import React, { Component } from "react";
import "./timer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import laPalabra from "./Palabras.json";

class Timer extends Component {
  props = {
    url: "./base.mp3"
  };
  state = {
    minutes: 0,
    seconds: 1,
    palabra: null,
    play: false
  };

  audio = new Audio(this.props.url);

  togglePlay = () => {
    this.setState({}, () => {
      this.audio.play();
    });
  };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds % 10 === 1 && seconds !== 1) {
        let random = Math.floor(Math.random() * 9822 + 1);
        this.setState(({}) => ({
          palabra: random
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          let random = Math.floor(Math.random() * 9822 + 1);
          this.setState(({}) => ({
            palabra: random
          }));
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <div class="container">
        <h1>
          {this.state.palabra === null
            ? null
            : laPalabra[this.state.palabra].Palabras}
        </h1>
        <button
          onClick={
            (this.togglePlay,
            this.state.minutes > 0 || this.state.seconds > 0
              ? null
              : (this.myInterval = () => {
                  this.setState(({}) => ({
                    minutes: 1
                  }));
                  this.setState(({}) => ({
                    seconds: 0
                  }));
                }))
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
      </div>
    );
  }
}

export default Timer;
