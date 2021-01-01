import {Header} from '../components/Header'

const MainLayout = (props)=>{
    console.log(props)
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
}
export default MainLayout;