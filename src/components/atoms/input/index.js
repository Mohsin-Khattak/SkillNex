import { StyleSheet, TouchableOpacity } from "react-native";
import DropdownModal from "./dropdown-modal";
import { mvs } from "../../../config/metrices";
import { colors } from "../../../config/colors";
import React from "react";
import Medium from "../../../typography/medium-text";
import Feather from 'react-native-vector-icons/Feather';
import Regular from "../../../typography/regular-text";

export const DropdownInput = (props) => {
    const [visible, setVisible] = React.useState(false);
    const {
        items = [],
        onChangeText,
        onBlur = () => { },
        value,
        placeholder,
        style,
        containerStyle,
        id,
        editable,
        error,
        label,
        isRequired = false,
    } = props;
    return (
        <>
            {label && (
                <Regular label={label} style={styles.labelStyle}>
                    {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
                </Regular>
            )}
            <TouchableOpacity
                disabled={editable}
                onPress={() => {
                    setVisible(true);
                    onBlur();
                }}
                style={[styles.dropDownContainer, containerStyle]}>
                <Medium label={value || placeholder} style={{ color:value?colors.black:colors.grey}}/>
                <Feather size={20} name={'chevron-down'} color={colors.black} />
            </TouchableOpacity>
            {error&& <Regular label={error ? `${error}` : ''} style={styles.errorLabel} />}
            <DropdownModal
                onClose={() => setVisible(false)}
                onChangeText={onChangeText}
                value={id}
                visible={visible}
                items={items}
            />
        </>
    );
};

const styles = StyleSheet.create({
    dropDownContainer: {
        borderWidth: mvs(0.7),
        height: mvs(50),
        alignItems: 'center',
        marginBottom: mvs(10),
        borderRadius: mvs(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: mvs(10),
    },
    labelStyle:{
       color: colors.black,
        fontSize: mvs(16),
        marginBottom: mvs(4),
    },
    errorLabel: {
        color: colors.red,
        fontSize: mvs(10),
        marginBottom: mvs(5),
        marginHorizontal: mvs(5),
    },
})