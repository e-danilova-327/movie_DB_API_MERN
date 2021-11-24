import React, { useState } from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Form from "./components/Form/Form.js";
import Navbar from "./components/Navbar/Navbar.js";
import Auth from "./components/Auth/Auth.js";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Home
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        }
                    />
                    <Route
                        path="/new"
                        element={
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        }
                    />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
