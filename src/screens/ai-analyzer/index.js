import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { styles } from "./styles";

const { width } = Dimensions.get('window');

const AIAnalyzer = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>AI Analyser</Text>
                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
            </View>

            {/* Insights Section */}
            <View style={styles.insightsContainer}>
                <Text style={styles.insightsTitle}>Insights</Text>
                <Text style={styles.subtitle}>Review Your Overall Performance</Text>
                <View style={styles.audioVisualizer} />
                <Text style={styles.insightsText}>
                    Design Thinking Is A Problem-Solving Methodology That Emphasizes Empathizing With Users,
                    Defining Problems, Ideating Solutions, Prototyping, And Testing.
                    <Text style={styles.highlightText}>
                        It's A Human-Centered Approach To Design That Encourages Creativity, Innovation, And Collaboration.
                    </Text>
                </Text>
            </View>

            {/* Facial Expression Section */}
            <View style={styles.graphContainer}>
                <Text style={styles.graphTitle}>Facial Expression</Text>
                {/* Placeholder for the graph */}
                <View style={styles.graphPlaceholder} />
            </View>

            {/* Buttons */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Recommended for Next Round</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                <Text style={styles.buttonText}>Apply For Another Evaluation</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    downloadButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 8,
    },
    downloadText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    insightsContainer: {
        backgroundColor: '#00274D',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    insightsTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 15,
    },
    audioVisualizer: {
        height: 40,
        backgroundColor: 'black',
        borderRadius: 8,
        marginBottom: 20,
    },
    insightsText: {
        color: '#fff',
        fontSize: 14,
    },
    highlightText: {
        color: '#ff6347',
        fontWeight: 'bold',
    },
    graphContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    graphTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    graphPlaceholder: {
        height: width * 0.8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AIAnalyzer;
