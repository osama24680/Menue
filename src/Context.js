import { createContext, useState } from "react"
import { data } from "./data"
export let AuthContext = createContext(0)

export function AuthContextProvider(props) {

    const [dataList, setDataList] = useState(data);

    function handleCategory(comingCategory) {
        if (comingCategory === "All") {
            setDataList(data)
        } else {
            let newData = data.filter((item) => (item.type === comingCategory))
            console.log(data)
            console.log(newData)
            setDataList(newData)
        }
    }


    function handleSearchChange(comingSearch) {
        let newSearchedData = []
        console.log(comingSearch)
        console.log(newSearchedData)
        for (let i = 0; i < data.length; i++) {
            if (data[i].title.toLowerCase().includes(comingSearch.toLowerCase())) {
                newSearchedData.push(data[i])
            }
        }
        setDataList(newSearchedData)
    }

    let values = {
        handleCategory,
        dataList,
        handleSearchChange
    }

    return (

        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    )
}


