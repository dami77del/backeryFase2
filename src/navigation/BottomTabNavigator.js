import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import Ionicons from "@expo/vector-icons/Ionicons"


const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="home" size={20} color="black" />
                            <Text>Tienda</Text>
                        </View>
                    )
                }} />
            <BottomTabs.Screen name="CarTab" component={CartNavigator} options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="cart" size={20} color="black" />
              <Text>Cart</Text>
            </View>
          ),
        }}/>
        <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="list" size={20} color="black" />
                            <Text>ordenes</Text>
                        </View>
                    )
                }} />
        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 100,
    },
    icon: {
        flex: 1,
        paddingTop:25,
        justifyContent: "center",
        alignItems: "center",
      },

})