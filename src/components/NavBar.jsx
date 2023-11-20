import "./NavBtn"
import NavBtn from "./NavBtn"
import { data } from "../data/data"


export default function NavBar() {
    function onSelected() {

    }
    return (
        <nav>
            <ul>
                {data.map((item) => {
                    return (
                        <NavBtn onSelected={onSelected} key={item.title} >{item.title}</NavBtn>
                    )
                })}
            </ul>
        </nav>
    )
}