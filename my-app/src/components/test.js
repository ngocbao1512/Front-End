import React,{Component} from 'react';

class Bosuutap extends Component {
    render() {
        return (
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 elementbst">
                <p className="tensanpham">{this.props.tensanpham}</p>
                <p className="soluong">{this.props.soluong}</p>
                <img src={this.props.image} className="img-responsive" alt="Image" />
            </div>

        );
    }

}

  /*  function tick() {
    ReactDOM.render(
      <Clock
          date={new Date()}
      />,
        document.getElementById('root')
    );
    }

    function Clock(props) {
    return (
        <div>
            <h1>hello world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
    }*/
export default Bosuutap;