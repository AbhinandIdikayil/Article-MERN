import { useTheme } from "../../context/ThemeContext"

function Toggle({ mdhidden }: { mdhidden: boolean }) {
    const { toggleTheme, theme } = useTheme()
    return (
        <div className={`checkbox-wrapper-54 ${mdhidden ? 'max-md:hidden' : ''}`}>
            <label className="switch" >
                <input type="checkbox" checked={theme == "dark" ? true : false} />
                <span onClick={toggleTheme} className="slider"></span>
            </label>
        </div>
    )
}



export default Toggle