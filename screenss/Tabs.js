import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from './Home';
import Cart from './Cart';

const TabStack = createBottomTabNavigator();

export default function Tabs() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),
            }} />
            <TabStack.Screen name="Cart" component={Cart} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart" color={color} size={size} />),
            }} />
        </TabStack.Navigator>
    );
}