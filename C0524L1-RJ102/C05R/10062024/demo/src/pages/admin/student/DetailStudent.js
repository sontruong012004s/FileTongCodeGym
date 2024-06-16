import { useLocation } from "react-router-dom"

export default function DetailStudent() {
    let data = useLocation();
    let st = data.state.obj;
    return (
        <>
            <h2>Detail</h2>
            <h3>{st.id}</h3>
            <h3>{st.name}</h3>
            <h3>{st.description}</h3>
            <h3>{st.score}</h3>
            <h3>{st.action}</h3>
        </>
    )
}