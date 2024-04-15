
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthContext from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import HomePage from "./components/HomePage";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

  return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
			
							<div className="App">
								{/* <Navbar /> */}

								<Routes>
									<Route
										path="/"
										element={
											<HomePage
											 
											/>
										}
									/>
								
								</Routes>

								<Footer />
							</div>
					
		</AuthContext.Provider>
	);
  
}

export default App;
