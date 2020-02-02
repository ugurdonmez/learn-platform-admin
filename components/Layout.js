import '../styles.scss'

export default function Layout(props) {
    return (
        <div>
            <div className="appHeader">
                <div className="headerWrapper">
                    <div className="headerModuleLayer">
                        Learn Project - Admin
                    </div>
                </div>
            </div>

            <div className="layout">
                {props.children}
            </div>

        </div>
    )
}