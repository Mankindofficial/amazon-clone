import React, { createContext, useContext, useState } from 'react'

const ProjectContext = createContext()

const ContextProvider = ProjectContext.Provider

const ContextConsumer = () => {
	return useContext(ProjectContext)
}

const AppContext = (props) => {

	const [state, setState] = useState({
		basket: [],
		user: null
	})

	const value = {
		state: state,
		setState: setState,
	}

	return(
		<ContextProvider value={value}>
			{props.children}
		</ContextProvider>
	);
}

export { AppContext, ContextConsumer };
