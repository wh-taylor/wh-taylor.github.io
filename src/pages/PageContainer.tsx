import { Outlet } from "react-router";

export function PageContainer() {
    return (
        <div className="App-body">
            <Outlet />
        </div>
    );
}
