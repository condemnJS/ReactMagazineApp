import {useCallback, useState, useEffect} from 'react';
import {useFetch} from "../hooks/useFetch";

export const CategoryItem = (props: any) => {
    const [categories, setCategories] = useState([]);
    const locationHref = props.match.params.slug // Наш текущий slug в url, с помощью его будем делать запроос на серверc
    const {request} = useFetch();
    const getCategoriesAndSub = useCallback(async () => {
        try {
            const data = await request(
                `http://magazine.test/api/categories/${locationHref}`
            );
            setCategories(data);

        } catch (e) {
            console.log(e);
        }
    }, []);
    useEffect(() => {
        getCategoriesAndSub();
    }, [])
    console.log(categories);
    return (
        <div style={{zIndex: -1}}>
        </div>
    )
}
