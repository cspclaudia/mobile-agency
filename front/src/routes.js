import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import colors from "./styles/global/colors";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import Client from "./pages/Client/Client";
import NewClient from "./pages/Client/NewClient";
import ClientDetails from "./pages/Client/ClientDetails";
import Package from "./pages/Package/Package";
import NewPackage from "./pages/Package/NewPackage";
import PackageDetails from "./pages/Package/PackageDetails";
import Languages from "./pages/Profile/Languages";

const TabMobile = createMaterialTopTabNavigator(
  {
    Pacotes: {
      screen: Package,
      navigationOptions: {
        tabBarLabel: "Pacotes",
      },
    },
    Client: {
      screen: Client,
      navigationOptions: {
        tabBarLabel: "Clientes",
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Perfil",
      },
    },
  },
  {
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: colors.black,
      inactiveTintColor: colors.black,
      labelStyle: { fontSize: 20, fontWeight: 500 },
      style: { backgroundColor: colors.gray },
      indicatorStyle: {
        borderBottomColor: colors.green,
        borderBottomWidth: 7,
        borderRadius: 40,
      },
    },
  }
);

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createStackNavigator(
      {
        Auth: {
          screen: Auth,
          navigationOptions: () => ({
            headerShown: false,
          }),
        },
        Dashboard: {
          screen: TabMobile,
          path: "dashboard",
          navigationOptions: { headerShown: false },
        },
        NewPackage: {
          screen: NewPackage,
          navigationOptions: ({ navigation }) => ({
            title: "Cadastrar Pacote",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
        PackageDetails: {
          screen: PackageDetails,
          navigationOptions: ({ navigation }) => ({
            title: "Visualizar Pacote",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
        NewClient: {
          screen: NewClient,
          navigationOptions: ({ navigation }) => ({
            title: "Cadastrar Cliente",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
        ClientDetails: {
          screen: ClientDetails,
          navigationOptions: ({ navigation }) => ({
            title: "Visualizar Cliente",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
        EditProfile: {
          screen: EditProfile,
          navigationOptions: ({ navigation }) => ({
            title: "Editar Perfil",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
        Languages: {
          screen: Languages,
          navigationOptions: ({ navigation }) => ({
            title: "Alterar Idioma",
            headerTintColor: colors.black,
            headerStyle: {
              backgroundColor: colors.gray,
              height: 56,
            },
          }),
        },
      },
      {
        initialRouteName: isLoggedIn ? "Dashboard" : "Auth",
      }
    )
  );
}
