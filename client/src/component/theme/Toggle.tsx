import { useTheme } from "../../context/ThemeContext"

function Toggle() {
    const { toggleTheme } = useTheme()
    return (
        <div className="checkbox-wrapper-54">
            <label className="switch" >
                <input type="checkbox" />
                <span  onClick={toggleTheme} className="slider"></span>
            </label>
        </div>
    )
}



export default Toggle