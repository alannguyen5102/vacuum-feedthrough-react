import React from 'react';
interface IProps {
}

interface IState {
    value: string;
}

export default class WireGauge extends React.Component<IProps, IState> {
    constructor(props: IProps) {
    super(props);
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {    this.setState({value: event.target.value});  }

  render() {
    return (
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
    );
  }
}
