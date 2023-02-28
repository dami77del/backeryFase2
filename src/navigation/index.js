import React, { useState } from "react";

import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

export default () => {

    const [user, setUser] = useState(null)

    return <>{ user ? <BottomTabNavigator /> : <AuthNavigator />} </>

}