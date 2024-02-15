
import Header from "../Header/Header"

export default function Layout({children}) {
	return (
		<div className="appWrapper">
			<div className="contentBox">
				<Header />
				<div className="contentBox-children">
					{children}
				</div>
			</div>
		</div>
	)
}