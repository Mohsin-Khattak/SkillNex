import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white,
    },
    header: {
        flexDirection: 'row',
        gap:40,
        alignItems: 'baseline',
        marginTop: 30,
        marginBottom:5,
        paddingHorizontal: 20,
    },
    contentContainerStyle: { flexGrow: 1, paddingHorizontal: 20, paddingVertical: 25 },
    rowContainer: { flexDirection: 'row', gap: 25, paddingHorizontal: 11, },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    profileInitial: {
        color: colors.white,
    },
    profileSection: {
        alignItems: "center",
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 14,
        color: colors.primary,
    },
    contentSection: {
        marginBottom: 20,
    },
    quote: {
        marginTop: 15,
        fontStyle: "italic",
        marginBottom: 5,
        fontSize: 12,
        color: colors.C3A3A3A,
    },
    quoteAuthor: {
        marginBottom: 20,
        fontSize: 12,
        color: colors.C3A3A3A,
    },
    sectionTitle: {
        fontSize: 14,
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        marginBottom: 10,
    },
    list: {
    },
    listItem: {
        fontSize: 12,
        marginBottom: 5,
    },
    statisticsSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    stat: {
        alignItems: "center",
        width: "30%",
    },
    statPercentage: {
        fontSize: 30,
        color: colors.blue,
    },
    statDescription: {
        textAlign: "center",
        fontSize: 12,
    },
    buttonSection: {
        gap: 10,
    },
});