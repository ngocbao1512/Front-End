import logo from './logo.svg';
import './App.css';
import {isLabelWithInternallyDisabledControl} from "@testing-library/user-event/dist/utils";
import Bosuutap from './components/test'
import Clock from './components/Clock'

function App() {
    const name  = 'ngoc bao';
    const element = <h1>hello , {formatname(user)}</h1>
    const element_1 = <img src={user.avatar_link}></img>;
    const element_2 = (
        <div>
            <h1> Hello  </h1>
            <h2>{element_1}</h2>
        </div>
    );

    let Bosuutaps =
        <div>
            <Bosuutap
                tensanpham = "ao coc tay"
                soluong = '211'
                image = 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
            >
            </Bosuutap>
            <Clock/>
        </div>
        ;


    const response = "ssss";
    const title = response.potentiallyMalicxiousInput;
    const element_3 = <h1>{title}</h1>;


    const element_4 = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    setInterval(element_4, 1000);

    return Bosuutaps;
}


const props = {
    name : "ngocbao1512x    ",
};

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;


}
function formatname (user)
{
    return user.first_name + ' ' + user.last_name;
}

function Comment(props) {
    return (
        <div className="comment">
            <div className="userInfo">
                <img
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>

        </div>
    );
}


 function Avatar (props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
 }


const user = {
    first_name : "tran ",
    last_name : "ngoc bao",
    avatar_link : 'https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/240898438_2951717118478617_198259101986485226_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=taM5ex6HEHAAX-XGpoi&_nc_ht=scontent.fvii1-1.fna&oh=00_AT9eKV9-PJUVguaaueFz4hxdlSS_6SkU_Hc6UARr6xXgsw&oe=62056084',
 };

function sum(a,b) {
    return a + b;
}


export default App;
