import {
	Route,
	Routes
} from "react-router-dom"
import Home from "./pages/Home"
import What from "./pages/What"
import Where from "./pages/Where"
import Who from "./pages/Who"
import { APP_ROUTE } from "./utils/constants"


export const RoutesLink = () => {
	return (
		<Routes>
			<Route
				path={APP_ROUTE.DEFAULT}
				element={<Home />}
			/>
			<Route
				path={APP_ROUTE.ENTRY}
				element={<Home />}
			/>
			<Route
				path={APP_ROUTE.WHO}
				element={<Who />}
			/>
			<Route
				path={APP_ROUTE.WHERE}
				element={<Where />}
			/>
			<Route
				path={APP_ROUTE.WHAT}
				element={<What />}
			/>
		</Routes >
	)
}
