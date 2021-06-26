import AsyncStorage from '@react-native-community/async-storage';

export const isAuthenticated = () => getData("@token") === null;

export const logout = () => {
    removeData("@token");
    removeData("@user");
};

export const storeData = async (key, value) => {
    try {
        console.log('key:', key);
        if (key === 'user') {
            console.log('storeData key and value ', key, JSON.stringify(value));
            await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
        } else
            await AsyncStorage.setItem(`@${key}`, value);
    } catch (error) {
        console.log('storeData Erro:', error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`@${key}`);
        if (value !== null) {
            console.log("getData success:", value);
            if (key == 'user') {
                console.log('is user');
                return JSON.parse(value);
            } else {
                console.log("value", value);
                return value;
            }
        }
    } catch (error) {
        console.log("getData error:", error);
    }
};

export const removeData = async (key) => {
    try {
        const value = await AsyncStorage.removeItem(key);
        if (value !== null) {
            console.log("RemoveData success:", value);
        }
    } catch (error) {
        console.log("RemoveData error:", error);
    }
};