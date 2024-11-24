import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white,
    },
    header:{
        flexDirection:'row',
        gap:40,
        alignItems:'baseline',
        marginTop:30,
        marginBottom: 5,
        paddingHorizontal:20,
    },
    contentContainerStyle: { flexGrow: 1, paddingHorizontal: 20, paddingVertical: 25 },
    rowContainer: { flexDirection: 'row', gap: 25, paddingHorizontal: 20, },
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
        fontSize: 16,
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 10,
    },
    list: {
    },
    listItem: {
        fontSize: 14,
        marginBottom: 5,
    },
    statisticsSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical:20,
    },
    stat: {
        alignItems: "center",
        width: "30%",
    },
    statPercentage: {
        fontSize: 30,
        color: colors.primary,
    },
    statDescription: {
        textAlign: "center",
        fontSize: 12,
    },
    buttonSection: {
        gap: 10,
    },


    scoreRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    score: {
        alignItems: "center",
    },
    scoreLabel: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 5,
    },
    scoreValue: {
        fontSize: 24,
        color: colors.black,
    },
    totalScore: {
        fontSize: 12,
        color: "#B8B8D2",
    },
    communication: {
        marginBottom: 20,
    },
    sectionLabel: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: "bold",
        marginBottom: 5,
    },
    communicationValue: {
        fontSize: 16,
        color: colors.black,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        padding: 20,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    cardTitle: {
        fontSize: 14,
        color: colors.black,
       textAlign:'center',
       marginBottom:15
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap:20
    },
    column: {
        flex: 1,
        marginHorizontal: 5,
    },
    cardText: {
        fontSize: 12,
        color: colors.C3A3A3A,
        marginBottom: 10,
    },
    list: {
        marginLeft: 10,
    },
    listItem: {
        fontSize: 12,
        marginBottom: 5,
    },
});