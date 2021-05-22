import React, { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

const ContextProvider = ProjectContext.Provider

const ContextConsumer = () => {
	return useContext(ProjectContext)
}

const AppContext = (props) => {

	const [user, setUser] = useState(null)
	const [basket, setBasket] = useState([])

	const value = {
		user: user,
		basket: basket,
		setUser: setUser,
		setBasket: setBasket,
	}

	return(
		<ContextProvider value={value}>
			{props.children}
		</ContextProvider>
	);
}

export { AppContext, ContextConsumer };
