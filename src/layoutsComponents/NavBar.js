import {useFetch} from "../hooks/useFetch";
import {useEffect, useState, useCallback} from 'react'

export const NavBar = () => {
    const {request} = useFetch();
    const [data, setData] = useState([]);

    const getCategories = useCallback(async () => {
        try {
            const data = await request(
                'http://magazine.test/api/categories?limit=8'
            )
            setData(data.data);
        } catch (e) {
        }
    }, [request]);

    useEffect(() => {
        getCategories()
    }, [getCategories])

    return (
        <nav className={'menu d-f ju-c'}>
            <div className="container ju-c d-f w-100">
                <div className="menu__map ju-c d-f al-c">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                         data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                         viewBox="0 0 384 512">
                        <path fill="currentColor"
                              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                    </svg>
                    <small>Томск</small>
                </div>
                <div className="menu__categories d-f ju-c al-c">
                    {data.map(item => {
                        return <a href="#" key={item.id}>{item.title}</a>
                    })}
                </div>
                <div className="menu__sell d-f al-c">
                    <a href="#">Начать продавать</a>
                </div>
            </div>
        </nav>
    );
}