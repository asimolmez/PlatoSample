import React from "react";
import {View} from "react-native";
import  PropTypes from "prop-types";

export const Row = (props) => {

    const {
        size
    } = props;

    let sizeStyle;

    switch (size) {
        case 4:
            sizeStyle = styles.size4;
            break;
        default:
            sizeStyle = styles.size12;
            break;
    }

    const combinedStyle = {...styles.container, ...sizeStyle};

    return (
        <View style={combinedStyle}>
            {props.children}
        </View>  
    );
}

Row.defaultPropTypes = {
    size: 12
};

Row.propTypes = {
    size: PropTypes.number
}

const styles = {
    container: {
        flexDirection: "row",
        backgroundColor: "#0000FF",
        borderWidth: 1,
        borderColor: "#000000"
    },
    size4: {
        flex: 4
    },
    size12: {
        flex: 12
    }
}

