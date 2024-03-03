import React from "react";
import Header from "./Components/Header/Header";
import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css';

const queryClient = new QueryClient;

export default function App() {
    return (
        <>
            <Header/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </>
    )
}