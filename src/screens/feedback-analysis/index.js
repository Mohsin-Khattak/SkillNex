import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Profile } from "../../assets/images";
import { BackCircle } from "../../components/atoms/headers/back-circle";
import PrimaryButton from "../../components/carts/button";
import Bold from "../../typography/bold-text";
import Regular from "../../typography/regular-text";
import SemiBold from "../../typography/semi-bold-text";
import { styles } from "./styles";
import { colors } from "../../config/colors";

const FeedbackAnalysis = () => {

    const FeedbackDetails = () => {
        return (
            <View style={styles.container}>
                <View style={styles.scoreRow}>
                    <View style={styles.score}>
                        <SemiBold label={'Interview Score'} style={styles.scoreLabel} />
                        <SemiBold style={styles.scoreValue}>
                            8 <Regular label={'/10'} style={styles.totalScore} />
                        </SemiBold>
                    </View>
                    <View style={styles.score}>
                        <SemiBold label={'Confidence Level'} style={styles.scoreLabel} />
                        <SemiBold style={styles.scoreValue}>
                            6 <Regular label={'/10'} style={styles.totalScore} />
                        </SemiBold>
                    </View>
                </View>

                <View style={styles.communication}>
                    <Bold label={'Communication Skills'} style={styles.sectionLabel} />
                    <Regular label={'Excellent'} style={styles.communicationValue} />
                </View>

                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View style={styles.column}>
                            <Bold label={'The Strengths'} style={styles.cardTitle} />

                            <Regular label={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`} style={styles.cardText} />
                            <View style={styles.list}>
                                <Regular label={'• Work with the team to design and iOS mobile applications on Azure using Swift and Objective-C.'} style={styles.listItem} />
                                <Regular label={'• Understanding, assessing, analyzing user requirements and function specification.'} style={styles.listItem} />
                                <Regular label={'• Prepare detailed technical specification.'} style={styles.listItem} />
                            </View>
                        </View>
                        <View style={styles.column}>
                            <Bold label={'The Weakness'} style={styles.cardTitle} />
                            <Regular label={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} style={styles.cardText} />
                            <View style={styles.list}>
                                <Regular label={'• Work with the team to design and iOS mobile applications on Azure using Swift and Objective-C.'} style={styles.listItem} />
                                <Regular label={'• Understanding, assessing, analyzing user requirements and function specification.'} style={styles.listItem} />
                                <Regular label={'• Prepare detailed technical specification.'} style={styles.listItem} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackCircle />
                <Bold style={{ transform: [{ translateY: 10 }] }} label={'Feedback Report'} fontSize={20} color={colors.primary} />
            </View>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>

                <View style={styles.rowContainer}>
                    <View style={styles.profileSection}>
                        <Image
                            source={Profile}
                            style={styles.profileImage}
                        />
                        <Bold label={'Sadruddin'} style={styles.profileName} />
                    </View>
                    <View style={{ flex: 1, gap: 25 }}>

                        <Regular label={`“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”`} style={styles.quote} />
                        <Regular label={'- Name, Title at Company'} style={styles.quoteAuthor} />
                    </View>
                </View>

                <FeedbackDetails />

                <View style={styles.statisticsSection}>
                    <View style={styles.stat}>
                        <Bold label={'25%'} style={styles.statPercentage} />
                        <Regular label={'Lorem ipsum dolor sit consectetuer adipiscing elit'} style={styles.statDescription} />
                    </View>
                    <View style={styles.stat}>
                        <Bold label={'10%'} style={styles.statPercentage} />
                        <Regular label={'Lorem ipsum dolor sit consectetuer adipiscing elit'} style={styles.statDescription} />
                    </View>
                    <View style={styles.stat}>
                        <Bold label={'15%'} style={styles.statPercentage} />
                        <Regular label={'Lorem ipsum dolor sit consectetuer adipiscing elit'} style={styles.statDescription} />
                    </View>
                </View>

                <View style={styles.buttonSection}>
                    <PrimaryButton label={'Further Evaluation'} textStyle={{ fontSize: 14 }} />
                </View>
            </ScrollView>
        </View>
    );
};


export default FeedbackAnalysis;
