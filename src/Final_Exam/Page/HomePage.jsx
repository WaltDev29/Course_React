import React from "react";

export default function HomePage() {
    return (
        <div>
            <img src="" alt=""/>
            <form>
                <div>
                    <label htmlFor="id">ID</label>
                    <input id="id" type="text"/>
                </div>
                <div>
                    <label htmlFor="pw">PW</label>
                    <input id="pw" type="text"/>
                </div>
                <div>
                    <button type="button">Sign Up</button>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}