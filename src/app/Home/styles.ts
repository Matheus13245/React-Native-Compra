import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6e8ecff",
        flex: 1,
        paddingTop: 64,
        alignItems: "center",
    },
    logo: {
        width: 134,
        height: 34
    },

    form:{
        width: "100%",
        paddingHorizontal: 16,
        gap: 7,
        marginTop: 42,
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
        marginTop: 24,
    }
}
)