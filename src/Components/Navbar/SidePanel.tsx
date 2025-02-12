export default function SidePanel()
{
    return (
        <div id="side-panel" className="navbar-side-panel">
            <div className="side-panel-header">
                <p className="side-panel-header-text big bigweight">Navigation</p>
                <button className="side-panel-close-button" onClick={ClosePanel}>×</button>
            </div>
            <div className="navbar-side-panel-container">
                {/*<div className="side-panel-item" className="side-panel-item" onClick={ClosePanel}>*/}
                {/*    <img className="side-panel-item-image" src="/Images/Skills.png" alt="error">*/}
                {/*        <p className="side-panel-item-link medium smallweight" href="#skills">Skills</p>*/}
                {/*</div>*/}
            </div>  
        </div>
    )   
}

export function OpenPanel()
{
}

export function ClosePanel()
{
}